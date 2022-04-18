var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let selection = figma.currentPage.selection;
// @ts-ignore
let textLayers = figma.currentPage.selection[0].findAll((n) => n.type === "TEXT");
// Load font via async function
function myFontLoadingFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Awaiting the fonts.");
        textLayers.map((t) => __awaiter(this, void 0, void 0, function* () {
            console.log("Loading custom font");
            console.log(t.fontName);
            yield figma.loadFontAsync(t.fontName);
        }));
        console.log("Loading standard font");
        yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
        console.log("Fonts loaded");
    });
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
