import "./style/ui.css";
import "./style/reset.css";
import "./utils/resizer";
import configs from "./contentreel.config.js";

let PickitMediaArray = [];
let currentPage = 1;

const loadMoreButton = document.getElementById("load-more");
const randomButton = document.getElementById("random");
const itemListDiv = document.getElementById("item-list");

// On network request from the plugin, fetch information from Airtable and send data to PickitMediaArray.
// TODO: Add offset instead of iteratiing on requestmax
window.onmessage = async (event) => {
  console.log(event.data.pluginMessage.style)
  if (
    event.data.pluginMessage.type === "networkRequest" && event.data.pluginMessage.style === "first-call"
  ) {
    fetch(`https://files.pickit.com/api/v2/files?page_limit=25?page=0`, {
      headers: {
        "Pickit-Api-Key": `${configs.PICKIT_API_KEY}`, // Pickit API Key retrieved from the API Dashboard.
        "Pickit-Api-Secret": `${configs.PICKIT_SECRET}`, // Pickit API Secret retrieved from the API Dashboard.
        "Pickit-Api-Library": "media",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        // Clear array since I'm just looping through maxRecords
        PickitMediaArray = [];
        const responseArray = response.data;
        responseArray.map((entry) => {
          //Loop through entries and add the 'fields' of each entry to the array
          PickitMediaArray.push(entry);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if(event.data.pluginMessage.style === "random" && PickitMediaArray.length >= 1)
  {
    const randomImage = PickitMediaArray[Math.floor(Math.random()*PickitMediaArray.length)].file.previews[1];
    AddImageToUI(randomImage);
  }
};

// When clicking "List Items" it wil render all items in UI.
// This should fetch items from remote and render accordingly. Then send messages to code.ts with type and src (text, media)
// so code can configure UI accordingly

loadMoreButton.onclick = () => {
  currentPage += 1;
  window.parent.postMessage(
    { pluginMessage: { do: "load", style: "load-more" } },
    "*"
  );

  PopulateView();
};
randomButton.onclick = () => {
  window.parent.postMessage(
    { pluginMessage: { do: "load", style: "random" } },
    "*"
  );
};

const AddImageToUI = (image) => {
  console.log("ADD IMAGE TO UI")
  console.log(image)
  const img = new Image();
      img.onload = () => {
        const width = image.width;
        const height = image.height;
        fetch(image.url)
          .then((response) => response.blob())
          .then(
            (blob) =>
              new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () =>
                  resolve(new Uint8Array(reader.result as ArrayBuffer));
                reader.readAsArrayBuffer(blob);
              })
          )
          .then((imageBytes) => {
            parent.postMessage(
              {
                pluginMessage: {
                  type: "attachment",
                  width: width,
                  height: height,
                  imageBytes,
                },
              },
              "*"
            );
          });
      };
      img.src = image.url;
}

// Button that populates view
const PopulateView = () => {
  if (itemListDiv.innerHTML != null) {
    itemListDiv.innerHTML = "";
  }

  PickitMediaArray.map((media) => {
    const imgFile = media.file.previews[1];
    const listItem = document.createElement("li");
    listItem.className = "list-item";

    const descriptions = document.createElement("div");

    const header = document.createElement("p");
    header.className = "header";
    const name = document.createTextNode(media.file.name);
    header.appendChild(name);

    const groupName = document.createElement("p");
    groupName.className = "group-name";
    const group = document.createTextNode(media.file.uploaded_at);
    groupName.appendChild(group);

    descriptions.appendChild(header);
    descriptions.appendChild(groupName);

    const attachment = new Image();
    attachment.src = imgFile.url;
    attachment.className = "attachment";

    listItem.appendChild(descriptions);
    listItem.appendChild(attachment);

    itemListDiv.appendChild(listItem);

    attachment.onclick = () => {
      AddImageToUI(imgFile);
    };
    header.onclick = () => {
      parent.postMessage(
        { pluginMessage: { type: "text", data: media.file.name } },
        "*"
      );
    };
  });
};
