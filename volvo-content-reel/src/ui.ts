import "./ui.css";
import Mock from "./mockData/portfolio";

//RESIZER FUNCTIONS
const corner = document.getElementById("corner");
function resizeWindow(e) {
  const size = {
    w: Math.max(50, Math.floor(e.clientX + 5)),
    h: Math.max(50, Math.floor(e.clientY + 5)),
  };
  parent.postMessage({ pluginMessage: { type: "resize", size: size } }, "*");
}
corner.onpointerdown = (e) => {
  corner.onpointermove = resizeWindow;
  corner.setPointerCapture(e.pointerId);
};
corner.onpointerup = (e) => {
  corner.onpointermove = null;
  corner.releasePointerCapture(e.pointerId);
};

// When clicking "List Items" it wil render all items in UI.
// This should fetch items from remote and render accordingly. Then send messages to code.ts with type and src (text, media)
// so code can configure UI accordingly

document.getElementById("list").onclick = () => {
  Mock.map((m) => {
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

    const element = document.getElementById("item-list");
    element.appendChild(listItem);

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
							reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
							reader.readAsArrayBuffer(blob);
						})
				)
				.then((imageBytes) => {
					parent.postMessage(
						{
							pluginMessage: {
                type: 'attachment',
								imageBytes,
							},
						},
						'*'
					);
				});
		};
		img.src = m.imgLink;
      //parent.postMessage({ pluginMessage: { type: 'attachment', data: m.imgLink } }, '*')
      console.log(`should add ${m.Name} to UI :)`);
    };
    header.onclick = () => {
      parent.postMessage(
        { pluginMessage: { type: "text", data: m.Name } },
        "*"
      );
      console.log(`should add ${m.Name} to UI :)`);
    };
  });
};
