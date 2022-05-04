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
figma.showUI(__html__, { width: 650, height: 650 });
figma.ui.postMessage({ type: "networkRequest", style: "first-call" });
figma.ui.postMessage({ type: "multiples", value: figma.currentPage.selection.length > 1, size: figma.currentPage.selection.length });
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    if (msg.do === "load") {
        if (msg.searchString != "")
            figma.ui.postMessage({ type: "networkRequest", style: msg.style, searchString: msg.searchString });
        else
            figma.ui.postMessage({ type: "networkRequest", style: "first-call" });
    }
    if (msg.do === 'random') {
        figma.ui.postMessage({ type: "multiples", value: true, size: figma.currentPage.selection.length, style: "random" });
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
        figma.currentPage.selection.map((item) => {
            if (item.type === "FRAME" ||
                item.type === "RECTANGLE" ||
                item.type === "ELLIPSE" ||
                item.type === "POLYGON" ||
                item.type === "STAR") {
                console.log(fillImg);
                let fills = clone(item.fills);
                fills[0] = {
                    type: "IMAGE",
                    scaleMode: "FILL",
                    imageHash: fillImg.hash,
                    visible: true,
                };
                item.fills = fills;
            }
        });
        figma.closePlugin(`Added image to UI`);
    }
    else if (msg.type === "text") {
        figma.closePlugin(`Added text to UI`);
    }
});
figma.on('selectionchange', () => {
    figma.ui.postMessage({ type: "multiples", size: figma.currentPage.selection.length });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRCx1QkFBdUIsNkNBQTZDO0FBQ3BFLHVCQUF1Qiw0R0FBNEc7QUFDbkk7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBFQUEwRTtBQUM3RztBQUNBLG1DQUFtQyw2Q0FBNkM7QUFDaEY7QUFDQTtBQUNBLCtCQUErQiwyRkFBMkY7QUFDMUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxHQUFHO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMkJBQTJCLDZEQUE2RDtBQUN4RixDQUFDOzs7Ozs7OztVRWpGRDtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY29uc3QgY2xvbmUgPSAodmFsKSA9PiB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59O1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiA2NTAsIGhlaWdodDogNjUwIH0pO1xuZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIm5ldHdvcmtSZXF1ZXN0XCIsIHN0eWxlOiBcImZpcnN0LWNhbGxcIiB9KTtcbmZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJtdWx0aXBsZXNcIiwgdmFsdWU6IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPiAxLCBzaXplOiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoIH0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChtc2cuZG8gPT09IFwibG9hZFwiKSB7XG4gICAgICAgIGlmIChtc2cuc2VhcmNoU3RyaW5nICE9IFwiXCIpXG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwibmV0d29ya1JlcXVlc3RcIiwgc3R5bGU6IG1zZy5zdHlsZSwgc2VhcmNoU3RyaW5nOiBtc2cuc2VhcmNoU3RyaW5nIH0pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwibmV0d29ya1JlcXVlc3RcIiwgc3R5bGU6IFwiZmlyc3QtY2FsbFwiIH0pO1xuICAgIH1cbiAgICBpZiAobXNnLmRvID09PSAncmFuZG9tJykge1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwibXVsdGlwbGVzXCIsIHZhbHVlOiB0cnVlLCBzaXplOiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoLCBzdHlsZTogXCJyYW5kb21cIiB9KTtcbiAgICB9XG4gICAgLy9SRVNJWkVSXG4gICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICBjYXNlIFwicmVzaXplXCI6XG4gICAgICAgICAgICBmaWdtYS51aS5yZXNpemUobXNnLnNpemUudywgbXNnLnNpemUuaCk7XG4gICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwic2l6ZVwiLCBtc2cuc2l6ZSkuY2F0Y2goKGVycikgPT4geyB9KTsgLy8gc2F2ZSBzaXplXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy9SZWFkIG1lc3NhZ2UgdHlwZS4gU2hvdWxkIGFkZCBjb3JyZXNwb25kaW5nIHN0dWZmIHRvIHRoZSBVSSBkZXBlbmRpbmcgb24gdHlwZVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJhdHRhY2htZW50XCIpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCB7IGltYWdlQnl0ZXMgfSA9IG1zZztcbiAgICAgICAgY29uc3QgZmlsbEltZyA9IGZpZ21hLmNyZWF0ZUltYWdlKGltYWdlQnl0ZXMpO1xuICAgICAgICAvLyBJZiBubyBub2RlIGlzIHNlbGVjdGVkLCBjcmVhdGUgYSBuZXcgcmVjdCB3aXRoIHRoZSBpbWFnZVxuICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgICAgICAgICAgbGV0IG5ld1JlY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgICAgIG5ld1JlY3QucmVzaXplKG1zZy53aWR0aCwgbXNnLmhlaWdodCk7XG4gICAgICAgICAgICBuZXdSZWN0LmZpbGxzID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJJTUFHRVwiLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZU1vZGU6IFwiRklMTFwiLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZUhhc2g6IGZpbGxJbWcuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKG5ld1JlY3QpO1xuICAgICAgICAgICAgbm9kZXMucHVzaChuZXdSZWN0KTtcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGVzO1xuICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGVzKTtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiQWRkZWQgaW1hZ2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJGUkFNRVwiIHx8XG4gICAgICAgICAgICAgICAgaXRlbS50eXBlID09PSBcIlJFQ1RBTkdMRVwiIHx8XG4gICAgICAgICAgICAgICAgaXRlbS50eXBlID09PSBcIkVMTElQU0VcIiB8fFxuICAgICAgICAgICAgICAgIGl0ZW0udHlwZSA9PT0gXCJQT0xZR09OXCIgfHxcbiAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPT09IFwiU1RBUlwiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmlsbEltZyk7XG4gICAgICAgICAgICAgICAgbGV0IGZpbGxzID0gY2xvbmUoaXRlbS5maWxscyk7XG4gICAgICAgICAgICAgICAgZmlsbHNbMF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiSU1BR0VcIixcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVNb2RlOiBcIkZJTExcIixcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VIYXNoOiBmaWxsSW1nLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpdGVtLmZpbGxzID0gZmlsbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihgQWRkZWQgaW1hZ2UgdG8gVUlgKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKGBBZGRlZCB0ZXh0IHRvIFVJYCk7XG4gICAgfVxufSk7XG5maWdtYS5vbignc2VsZWN0aW9uY2hhbmdlJywgKCkgPT4ge1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJtdWx0aXBsZXNcIiwgc2l6ZTogZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCB9KTtcbn0pO1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9jb2RlLnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=