const clone = (val) => {
  return JSON.parse(JSON.stringify(val));
};

figma.showUI(__html__, { width: 450, height: 450 });
figma.ui.postMessage({ type: 'networkRequest', style: 'search' })

figma.ui.onmessage = async (msg) => {
  if(msg === "load"){
    figma.ui.postMessage({ type: 'networkRequest', style: 'search' })
  }
  console.log(msg)
  //RESIZER
  switch (msg.type) {
    case "resize":
      figma.ui.resize(msg.size.w, msg.size.h);
      figma.clientStorage.setAsync("size", msg.size).catch((err) => {}); // save size
      break;
  }

  //Read message type. Should add corresponding stuff to the UI depending on type
  if (msg.type === "attachment") {
    const { imageBytes } = msg;
    const fillImg = figma.createImage(imageBytes);
    console.log(fillImg);
    for (const node of figma.currentPage.selection) {
      if (node.type === "FRAME" || node.type === "RECTANGLE" || node.type === "ELLIPSE" || node.type === "POLYGON" || node.type === "STAR") {
        let fills = clone(node.fills);
        fills[0] =
          {
            type: "IMAGE",
            scaleMode: "FILL",
            imageHash: fillImg.hash,
            visible: true,
          };
        console.log(fills);
        console.log(node.fills);
        node.fills = fills;
      }
    }
    figma.closePlugin(`Added image to UI`);
  } else if (msg.type === "text") {
    figma.closePlugin(`Added text to UI`);
  }
};
