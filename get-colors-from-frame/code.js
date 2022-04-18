// This plugin creates 5 rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).
const nodes = [];
let colorsArray = [];
//Clone function from figma.com
function clone(val) {
    return JSON.parse(JSON.stringify(val));
}
const setPosition = (base, value, vertical = false) => {
    let pos = 0;
    if (!vertical)
        pos = base - (24 * 2);
    else
        pos = base + (value * 50);
    return pos;
};
const SetColor = (r, g, b, artboard) => {
    const color = clone(artboard.fills);
    color[0].color.r = r;
    color[0].color.g = g;
    color[0].color.b = b;
    return color;
};
function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
const createRectanglesInScene = (colors, i) => {
    if (colors === undefined)
        return;
    let artboard = figma.createFrame();
    artboard.name = "Color usage: ";
    artboard.resize(24, 24);
    artboard.x = setPosition(figma.currentPage.selection[0].x, i);
    artboard.y = setPosition(figma.currentPage.selection[0].y, i, true);
    artboard.fills = SetColor(colors.r, colors.g, colors.b, artboard);
    figma.currentPage.appendChild(artboard);
};
const currentSelection = figma.currentPage.selection;
if (currentSelection.length == 1) {
    let allFills = [];
    if (currentSelection[0].type === "FRAME") {
        allFills = currentSelection[0].findAll(n => n.fills != undefined);
        allFills.map(i => {
            if (i.fills.length > 0) {
                colorsArray.push(i.fills[0].color);
            }
        });
    }
    const uniqueColors = [...new Map(colorsArray.map(item => [JSON.stringify(item), item])).values()];
    uniqueColors.map((c, index) => {
        createRectanglesInScene(c, index);
    });
}
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
/*
for (let i = 0; i < numberOfRectangles; i++) {
  const rect = figma.createRectangle();
  rect.x = i * 150;
  rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
  figma.currentPage.appendChild(rect);
  nodes.push(rect);
}
figma.currentPage.selection = nodes;
figma.viewport.scrollAndZoomIntoView(nodes);*/ 
