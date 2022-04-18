let selection = figma.currentPage.selection;
// @ts-ignore
let textLayers = figma.currentPage.selection[0].findAll((n) => n.type === "TEXT");


// Load font via async function
async function myFontLoadingFunction() {
  console.log("Awaiting the fonts.");
  textLayers.map(async (t) => {
    console.log("Loading custom font");
    console.log(t.fontName);
    await figma.loadFontAsync(t.fontName);
  });
  console.log("Loading standard font")
  await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
  console.log("Fonts loaded");
}

const LoopAndChangeText = (selection) => {
  selection.map((node) => {
    let styleID = node.textStyleId.toString();
    let styleName = figma.getStyleById(styleID).name;
    node.characters = styleName;
  });
};

myFontLoadingFunction()
  .then(() => {
    LoopAndChangeText(textLayers);
  })
  .then((n) => figma.closePlugin("done"));
