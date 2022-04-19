import "./style/ui.css";
import "./style/reset.css"
import "./utils/resizer";
import configs from './contentreel.config.js'

let AirtableArray = [];
let newRequestNumber = 3;

const loadMoreButton = document.getElementById("load-more");
const populateButton = document.getElementById("list")
const itemListDiv = document.getElementById("item-list")

// On network request from the plugin, fetch information from Airtable and send data to AirtableArray.
// TODO: Add offset instead of iteratiing on requestmax
window.onmessage = async (event) => {
  if (event.data.pluginMessage.type === "networkRequest" && event.data.pluginMessage.style === 'search' ) {
    fetch(
      `https://api.airtable.com/v0/appLyOHUcdPl6D1mB/portfolioImgs?maxRecords=${newRequestNumber}&view=Grid%20view`,
      {
        headers: {
          Authorization: `Bearer ${configs.AIRTABLE_API_}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // Clear array since I'm just looping through maxRecords
        AirtableArray = [];
        const responseArray = data.records;
        responseArray.map((entry) => {
          //Loop through entries and add the 'fields' of each entry to the array 
          console.log(entry);
          AirtableArray.push(entry.fields);
          console.log(AirtableArray);
        });
      })
      .catch((error) => {
        console.log(error);
      });

      PopulateView()
    //window.parent.postMessage({pluginMessage: base}, '*')
  }
};

// When clicking "List Items" it wil render all items in UI.
// This should fetch items from remote and render accordingly. Then send messages to code.ts with type and src (text, media)
// so code can configure UI accordingly

loadMoreButton.onclick = () => {
  newRequestNumber += 3;
  window.parent.postMessage({ pluginMessage: "load" }, "*");
  
};

// Button that populates view
const PopulateView = () => {
  if (itemListDiv.innerHTML != null) {
    itemListDiv.innerHTML = "";
  }

  AirtableArray.map((m) => {
    const listItem = document.createElement("li");
    listItem.className = "list-item";

    const descriptions = document.createElement("div");

    const header = document.createElement("p");
    header.className = "header";
    const name = document.createTextNode(m.Name);
    header.appendChild(name);

    const groupName = document.createElement("p");
    groupName.className = "group-name";
    const group = document.createTextNode(m.Group);
    groupName.appendChild(group);

    descriptions.appendChild(header);
    descriptions.appendChild(groupName);

    const attachment = new Image();
    attachment.src = m.imgLink;
    attachment.className = "attachment";

    listItem.appendChild(descriptions);
    listItem.appendChild(attachment);

    itemListDiv.appendChild(listItem);

    attachment.onclick = () => {
      const img = new Image();
      img.onload = () => {
        const width = img.width;
        const height = img.height;
        fetch(m.imgLink)
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
                  imageBytes,
                },
              },
              "*"
            );
          });
      };
      img.src = m.imgLink;
      //console.log(`should add ${m.Name} to UI :)`);
    };
    header.onclick = () => {
      parent.postMessage(
        { pluginMessage: { type: "text", data: m.Name } },
        "*"
      );
    };
  });
};
