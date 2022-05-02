/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/***/ (function() {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const clone = (val) => {
    return JSON.parse(JSON.stringify(val));
};
figma.showUI(__html__, { width: 450, height: 450 });
figma.ui.postMessage({ type: "networkRequest", style: "first-call" });
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    if (msg.do === "load") {
        figma.ui.postMessage({ type: "networkRequest", style: msg.style, selectionLength: figma.currentPage.selection.length });
    }
    //RESIZER
    switch (msg.type) {
        case "resize":
            figma.ui.resize(msg.size.w, msg.size.h);
            figma.clientStorage.setAsync("size", msg.size).catch((err) => { }); // save size
            break;
    }
    //Read message type. Should add corresponding stuff to the UI depending on type
    if (msg.type === "attachment") {
        const selection = figma.currentPage.selection;
        const { imageBytes } = msg;
        const fillImg = figma.createImage(imageBytes);
        // If no node is selected, create a new rect with the image
        if (selection.length <= 0) {
            const nodes = [];
            let newRect = figma.createRectangle();
            newRect.resize(msg.width, msg.height);
            newRect.fills = [
                {
                    type: "IMAGE",
                    scaleMode: "FILL",
                    imageHash: fillImg.hash,
                    visible: true,
                },
            ];
            figma.currentPage.appendChild(newRect);
            nodes.push(newRect);
            figma.currentPage.selection = nodes;
            figma.viewport.scrollAndZoomIntoView(nodes);
            figma.closePlugin("Added image");
        }
        for (const node of figma.currentPage.selection) {
            if (node.type === "FRAME" ||
                node.type === "RECTANGLE" ||
                node.type === "ELLIPSE" ||
                node.type === "POLYGON" ||
                node.type === "STAR") {
                let fills = clone(node.fills);
                fills[0] = {
                    type: "IMAGE",
                    scaleMode: "FILL",
                    imageHash: fillImg.hash,
                    visible: true,
                };
                node.fills = fills;
            }
        }
        figma.closePlugin(`Added image to UI`);
    }
    else if (msg.type === "text") {
        figma.closePlugin(`Added text to UI`);
    }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/code.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRCx1QkFBdUIsNkNBQTZDO0FBQ3BFO0FBQ0E7QUFDQSwrQkFBK0IsK0ZBQStGO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsR0FBRztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7VUV0RUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC8uL3NyYy9jb2RlLnRzIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3ZvbHZvLWNvbnRlbnQtcmVlbC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNvbnN0IGNsb25lID0gKHZhbCkgPT4ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xufTtcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNDUwLCBoZWlnaHQ6IDQ1MCB9KTtcbmZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJuZXR3b3JrUmVxdWVzdFwiLCBzdHlsZTogXCJmaXJzdC1jYWxsXCIgfSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKG1zZy5kbyA9PT0gXCJsb2FkXCIpIHtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIm5ldHdvcmtSZXF1ZXN0XCIsIHN0eWxlOiBtc2cuc3R5bGUsIHNlbGVjdGlvbkxlbmd0aDogZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCB9KTtcbiAgICB9XG4gICAgLy9SRVNJWkVSXG4gICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICBjYXNlIFwicmVzaXplXCI6XG4gICAgICAgICAgICBmaWdtYS51aS5yZXNpemUobXNnLnNpemUudywgbXNnLnNpemUuaCk7XG4gICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwic2l6ZVwiLCBtc2cuc2l6ZSkuY2F0Y2goKGVycikgPT4geyB9KTsgLy8gc2F2ZSBzaXplXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy9SZWFkIG1lc3NhZ2UgdHlwZS4gU2hvdWxkIGFkZCBjb3JyZXNwb25kaW5nIHN0dWZmIHRvIHRoZSBVSSBkZXBlbmRpbmcgb24gdHlwZVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJhdHRhY2htZW50XCIpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCB7IGltYWdlQnl0ZXMgfSA9IG1zZztcbiAgICAgICAgY29uc3QgZmlsbEltZyA9IGZpZ21hLmNyZWF0ZUltYWdlKGltYWdlQnl0ZXMpO1xuICAgICAgICAvLyBJZiBubyBub2RlIGlzIHNlbGVjdGVkLCBjcmVhdGUgYSBuZXcgcmVjdCB3aXRoIHRoZSBpbWFnZVxuICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgICAgICAgICAgbGV0IG5ld1JlY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgICAgIG5ld1JlY3QucmVzaXplKG1zZy53aWR0aCwgbXNnLmhlaWdodCk7XG4gICAgICAgICAgICBuZXdSZWN0LmZpbGxzID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJJTUFHRVwiLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZU1vZGU6IFwiRklMTFwiLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZUhhc2g6IGZpbGxJbWcuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKG5ld1JlY3QpO1xuICAgICAgICAgICAgbm9kZXMucHVzaChuZXdSZWN0KTtcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGVzO1xuICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGVzKTtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiQWRkZWQgaW1hZ2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiIHx8XG4gICAgICAgICAgICAgICAgbm9kZS50eXBlID09PSBcIlJFQ1RBTkdMRVwiIHx8XG4gICAgICAgICAgICAgICAgbm9kZS50eXBlID09PSBcIkVMTElQU0VcIiB8fFxuICAgICAgICAgICAgICAgIG5vZGUudHlwZSA9PT0gXCJQT0xZR09OXCIgfHxcbiAgICAgICAgICAgICAgICBub2RlLnR5cGUgPT09IFwiU1RBUlwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbGxzID0gY2xvbmUobm9kZS5maWxscyk7XG4gICAgICAgICAgICAgICAgZmlsbHNbMF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiSU1BR0VcIixcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVNb2RlOiBcIkZJTExcIixcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VIYXNoOiBmaWxsSW1nLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxzID0gZmlsbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oYEFkZGVkIGltYWdlIHRvIFVJYCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcInRleHRcIikge1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihgQWRkZWQgdGV4dCB0byBVSWApO1xuICAgIH1cbn0pO1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9jb2RlLnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=