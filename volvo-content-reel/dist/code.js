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
        figma.ui.postMessage({ type: "networkRequest", style: msg.style, searchString: msg.searchString });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRCx1QkFBdUIsNkNBQTZDO0FBQ3BFLHVCQUF1Qiw0R0FBNEc7QUFDbkk7QUFDQTtBQUNBLCtCQUErQiwwRUFBMEU7QUFDekc7QUFDQTtBQUNBLCtCQUErQiwyRkFBMkY7QUFDMUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxHQUFHO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMkJBQTJCLDZEQUE2RDtBQUN4RixDQUFDOzs7Ozs7OztVRTlFRDtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdm9sdm8tY29udGVudC1yZWVsL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly92b2x2by1jb250ZW50LXJlZWwvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY29uc3QgY2xvbmUgPSAodmFsKSA9PiB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59O1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiA2NTAsIGhlaWdodDogNjUwIH0pO1xuZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIm5ldHdvcmtSZXF1ZXN0XCIsIHN0eWxlOiBcImZpcnN0LWNhbGxcIiB9KTtcbmZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJtdWx0aXBsZXNcIiwgdmFsdWU6IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPiAxLCBzaXplOiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoIH0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChtc2cuZG8gPT09IFwibG9hZFwiKSB7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJuZXR3b3JrUmVxdWVzdFwiLCBzdHlsZTogbXNnLnN0eWxlLCBzZWFyY2hTdHJpbmc6IG1zZy5zZWFyY2hTdHJpbmcgfSk7XG4gICAgfVxuICAgIGlmIChtc2cuZG8gPT09ICdyYW5kb20nKSB7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJtdWx0aXBsZXNcIiwgdmFsdWU6IHRydWUsIHNpemU6IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGgsIHN0eWxlOiBcInJhbmRvbVwiIH0pO1xuICAgIH1cbiAgICAvL1JFU0laRVJcbiAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJyZXNpemVcIjpcbiAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZShtc2cuc2l6ZS53LCBtc2cuc2l6ZS5oKTtcbiAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoXCJzaXplXCIsIG1zZy5zaXplKS5jYXRjaCgoZXJyKSA9PiB7IH0pOyAvLyBzYXZlIHNpemVcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvL1JlYWQgbWVzc2FnZSB0eXBlLiBTaG91bGQgYWRkIGNvcnJlc3BvbmRpbmcgc3R1ZmYgdG8gdGhlIFVJIGRlcGVuZGluZyBvbiB0eXBlXG4gICAgaWYgKG1zZy50eXBlID09PSBcImF0dGFjaG1lbnRcIikge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgICAgIGNvbnN0IHsgaW1hZ2VCeXRlcyB9ID0gbXNnO1xuICAgICAgICBjb25zdCBmaWxsSW1nID0gZmlnbWEuY3JlYXRlSW1hZ2UoaW1hZ2VCeXRlcyk7XG4gICAgICAgIC8vIElmIG5vIG5vZGUgaXMgc2VsZWN0ZWQsIGNyZWF0ZSBhIG5ldyByZWN0IHdpdGggdGhlIGltYWdlXG4gICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgICAgICBsZXQgbmV3UmVjdCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICAgICAgbmV3UmVjdC5yZXNpemUobXNnLndpZHRoLCBtc2cuaGVpZ2h0KTtcbiAgICAgICAgICAgIG5ld1JlY3QuZmlsbHMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIklNQUdFXCIsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlTW9kZTogXCJGSUxMXCIsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlSGFzaDogZmlsbEltZy5oYXNoLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQobmV3UmVjdCk7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKG5ld1JlY3QpO1xuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbm9kZXM7XG4gICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZXMpO1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJBZGRlZCBpbWFnZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSBcIkZSQU1FXCIgfHxcbiAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPT09IFwiUkVDVEFOR0xFXCIgfHxcbiAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPT09IFwiRUxMSVBTRVwiIHx8XG4gICAgICAgICAgICAgICAgaXRlbS50eXBlID09PSBcIlBPTFlHT05cIiB8fFxuICAgICAgICAgICAgICAgIGl0ZW0udHlwZSA9PT0gXCJTVEFSXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaWxsSW1nKTtcbiAgICAgICAgICAgICAgICBsZXQgZmlsbHMgPSBjbG9uZShpdGVtLmZpbGxzKTtcbiAgICAgICAgICAgICAgICBmaWxsc1swXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJJTUFHRVwiLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZU1vZGU6IFwiRklMTFwiLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZUhhc2g6IGZpbGxJbWcuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGl0ZW0uZmlsbHMgPSBmaWxscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKGBBZGRlZCBpbWFnZSB0byBVSWApO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oYEFkZGVkIHRleHQgdG8gVUlgKTtcbiAgICB9XG59KTtcbmZpZ21hLm9uKCdzZWxlY3Rpb25jaGFuZ2UnLCAoKSA9PiB7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIm11bHRpcGxlc1wiLCBzaXplOiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoIH0pO1xufSk7XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2NvZGUudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==