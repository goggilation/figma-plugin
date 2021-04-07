// This plugin creates 5 rectangles on the screen.
const numberOfRectangles = 1
const artboardSize = 24

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).

const nodes: SceneNode[] = [];

const setPosition = (value) => {
  let pos = 0;
  pos = 0 + (value * 50);
  return pos;
};

function clone(val) {
  return JSON.parse(JSON.stringify(val))
}

const SetColor = (r, g, b, artboard) => {
  const color = clone(artboard.fills);
  color[0].color.r = r;
  color[0].color.g = g;
  color[0].color.b = b;

  return color;
}

//Test
for(var i = 0; i < numberOfRectangles; i++){
  let artboard = figma.createFrame();
  artboard.name = "IconTemplate " + (i + 1).toString();
  artboard.resize(artboardSize, artboardSize);
  artboard.x = setPosition(i);

  
  
  artboard.fills = SetColor(.224, .224, .224, artboard);
}

figma.currentPage.selection = nodes;
figma.viewport.scrollAndZoomIntoView(nodes)
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.



figma.closePlugin();
