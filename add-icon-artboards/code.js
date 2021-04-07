//Artboard size constant
const ARTBOARD_SIZE = 24;
const ARTBOARD_ARRAY = [];
//Set position of input artboard
const setPosition = (value) => {
    let pos = 0;
    pos = 0 + (value * 50);
    return pos;
};
//Clone function from figma.com
function clone(val) {
    return JSON.parse(JSON.stringify(val));
}
//Set color of input artboard background
const SetColor = (r, g, b, artboard) => {
    const color = clone(artboard.fills);
    color[0].color.r = r;
    color[0].color.g = g;
    color[0].color.b = b;
    return color;
};
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    if (msg.type === 'create-artboards') {
        const nodes = [];
        for (let i = 0; i < msg.count; i++) {
            let artboard = figma.createFrame();
            artboard.name = "IconTemplate " + (i + 1).toString();
            artboard.resize(ARTBOARD_SIZE, ARTBOARD_SIZE);
            artboard.x = setPosition(i);
            artboard.fills = SetColor(.224, .224, .224, artboard);
        }
        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(ARTBOARD_ARRAY);
    }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
};
