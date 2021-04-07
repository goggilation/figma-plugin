figma.showUI(__html__)

figma.ui.resize(400, 260);

// Find the current page node inside the document and store it's id
const firstPageID = figma.root.findOne(node => node.type === "PAGE").id;

// Setup pages for boilerplate
const pages = [
  {
    name: 'Goal',
  },
  {
    name: 'Explore'
  },
  {
    name: 'Hypothesis'
  },
  {
    name: 'Insights'
  },
];

//Set name of current first page to the first page in boilerplate
figma.root.findChild(n => n.id === firstPageID).name = pages[0].name;

//Add all other pages to the document
pages.map((page, index) => {
  if(index != 0){
  const newPage = figma.createPage();
  newPage.name = page.name;
  }
  return null;
})

figma.ui.onmessage = msg => {
  if (msg.type === 'close') {
    figma.closePlugin();
  }
}