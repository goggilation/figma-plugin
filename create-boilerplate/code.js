var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__);
figma.ui.resize(400, 425);
// Setup pages for boilerplate
const pages = [
    {
        name: "🏷 COVER PAGE",
        purpose: "Showing a clear image in the project overview",
        what: "The cover image for this feature",
    },
    {
        name: "📏 FINAL",
        purpose: "Source of truth, handoff to developers, inspiration for new designs, sharing with stakeholders",
        what: "UI specification, hifi-sketches with correct components etc.",
    },
    {
        name: "🧙 IDEATE",
        purpose: "Try out ideas, document iterations, discussing with stakeholders",
        what: "Wireframes, prototypes, messy artboards",
    },
    {
        name: "💡 DEFINE",
        purpose: " A dedicated space for 'non-UI-deliveries'",
        what: "User flows, service blueprints, storyboards, effect mapping",
    },
    {
        name: "🔎 UNDERSTAND",
        purpose: "Goal statement, wanted effect, research insights, inspo",
        what: "Compile key starting points for the design work into one space",
    },
];
const resizeFrame = (frame, xValue, yValue, wValue = 0, hValue = 0) => {
    frame.resize(wValue, hValue);
    frame.y = yValue, frame.x = xValue;
    return frame;
};
const setText = (purpose, what) => {
    let textFrame = figma.createFrame();
    textFrame.name = "Description";
    textFrame = resizeFrame(textFrame, 0, 0, 390, 240);
    let whatHeader = figma.createText(), purposeHeader = figma.createText();
    let whatText = figma.createText(), purposeText = figma.createText();
    purposeText.name = "Purpose of page";
    whatText.name = "What is inside this page?";
    whatHeader.characters = "What", purposeHeader.characters = "Purpose";
    whatText.characters = what;
    purposeText.characters = purpose;
    purposeHeader.fontSize = 12, whatHeader.fontSize = 12,
        purposeHeader.fontName = { family: "Roboto", style: "Bold" }, whatHeader.fontName = { family: "Roboto", style: "Bold" };
    purposeText.fontSize = 16, whatText.fontSize = 16;
    whatHeader.textAutoResize = "WIDTH_AND_HEIGHT", purposeHeader.textAutoResize = "WIDTH_AND_HEIGHT";
    purposeText.textAutoResize = 'WIDTH_AND_HEIGHT', whatText.textAutoResize = 'WIDTH_AND_HEIGHT';
    whatHeader = resizeFrame(whatHeader, 6, 6, 337, 14);
    whatText = resizeFrame(whatText, 6, 24, 337, 21);
    purposeHeader = resizeFrame(purposeHeader, 6, 72, 337, 14);
    purposeText = resizeFrame(purposeText, 6, 90, 337, 21);
    let descriptors = [whatHeader, whatText, purposeHeader, purposeText];
    for (var i = 0; i < descriptors.length; i++) {
        textFrame.insertChild(i, descriptors[i]);
    }
    ;
    textFrame.locked = true;
    return textFrame;
};
const insertPages = (startIndex) => {
    pages.map((page, index) => {
        if (index >= startIndex) {
            const newPage = figma.createPage();
            newPage.name = page.name;
            newPage.insertChild(0, setText(page.purpose, page.what));
        }
    });
};
const removeCurrentPages = (currentPages) => {
    let startIndex = 0;
    currentPages.map((page, index) => {
        console.log(index);
        console.log(pages.length);
        if (index < pages.length) {
            page.name = pages[index].name;
            page.insertChild(0, setText(pages[index].purpose, pages[index].what));
        }
        else {
            page.remove();
        }
        startIndex = index;
    });
    insertPages(startIndex + 1);
    figma.closePlugin();
};
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
    yield figma.loadFontAsync({ family: "Roboto", style: "Bold" });
    // Find the current page node inside the document and store it's id
    const allPages = figma.root.findAll((node) => node.type === "PAGE");
    if (msg.type === "replace") {
        removeCurrentPages(allPages);
    }
    else {
        insertPages(0);
    }
    figma.closePlugin();
});
