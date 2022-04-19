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
figma.ui.postMessage({ type: 'networkRequest', style: 'search' });
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    if (msg === "load") {
        figma.ui.postMessage({ type: 'networkRequest', style: 'search' });
    }
    console.log(msg);
    //RESIZER
    switch (msg.type) {
        case "resize":
            figma.ui.resize(msg.size.w, msg.size.h);
            figma.clientStorage.setAsync("size", msg.size).catch((err) => { }); // save size
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRCx1QkFBdUIseUNBQXlDO0FBQ2hFO0FBQ0E7QUFDQSwrQkFBK0IseUNBQXlDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxHQUFHO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVRW5ERDtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY29uc3QgY2xvbmUgPSAodmFsKSA9PiB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59O1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiA0NTAsIGhlaWdodDogNDUwIH0pO1xuZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiAnbmV0d29ya1JlcXVlc3QnLCBzdHlsZTogJ3NlYXJjaCcgfSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKG1zZyA9PT0gXCJsb2FkXCIpIHtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiAnbmV0d29ya1JlcXVlc3QnLCBzdHlsZTogJ3NlYXJjaCcgfSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgLy9SRVNJWkVSXG4gICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICBjYXNlIFwicmVzaXplXCI6XG4gICAgICAgICAgICBmaWdtYS51aS5yZXNpemUobXNnLnNpemUudywgbXNnLnNpemUuaCk7XG4gICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwic2l6ZVwiLCBtc2cuc2l6ZSkuY2F0Y2goKGVycikgPT4geyB9KTsgLy8gc2F2ZSBzaXplXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy9SZWFkIG1lc3NhZ2UgdHlwZS4gU2hvdWxkIGFkZCBjb3JyZXNwb25kaW5nIHN0dWZmIHRvIHRoZSBVSSBkZXBlbmRpbmcgb24gdHlwZVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJhdHRhY2htZW50XCIpIHtcbiAgICAgICAgY29uc3QgeyBpbWFnZUJ5dGVzIH0gPSBtc2c7XG4gICAgICAgIGNvbnN0IGZpbGxJbWcgPSBmaWdtYS5jcmVhdGVJbWFnZShpbWFnZUJ5dGVzKTtcbiAgICAgICAgY29uc29sZS5sb2coZmlsbEltZyk7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiRlJBTUVcIiB8fCBub2RlLnR5cGUgPT09IFwiUkVDVEFOR0xFXCIgfHwgbm9kZS50eXBlID09PSBcIkVMTElQU0VcIiB8fCBub2RlLnR5cGUgPT09IFwiUE9MWUdPTlwiIHx8IG5vZGUudHlwZSA9PT0gXCJTVEFSXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsbHMgPSBjbG9uZShub2RlLmZpbGxzKTtcbiAgICAgICAgICAgICAgICBmaWxsc1swXSA9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiSU1BR0VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlTW9kZTogXCJGSUxMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUhhc2g6IGZpbGxJbWcuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmlsbHMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUuZmlsbHMpO1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbHMgPSBmaWxscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihgQWRkZWQgaW1hZ2UgdG8gVUlgKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKGBBZGRlZCB0ZXh0IHRvIFVJYCk7XG4gICAgfVxufSk7XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2NvZGUudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==