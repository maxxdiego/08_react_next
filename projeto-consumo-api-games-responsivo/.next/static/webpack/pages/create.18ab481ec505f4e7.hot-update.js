"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create",{

/***/ "./src/components/CreateContent/index.js":
/*!***********************************************!*\
  !*** ./src/components/CreateContent/index.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_CreateContent_CreateContent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CreateContent/CreateContent.module.css */ \"./src/components/CreateContent/CreateContent.module.css\");\n/* harmony import */ var _components_CreateContent_CreateContent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_CreateContent_CreateContent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst CreateContent = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [platform, setPlatform] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [year, setYear] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (title && platform && year && price !== \"\") {\n            const game = {\n                title,\n                platform,\n                year,\n                price\n            };\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:4000/game\", game, {\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                if (response.status === 201) {\n                    // Redirecionar para a página home\n                    window.location.href = \"/home\";\n                }\n            } catch (error) {\n                console.error(error);\n            }\n        } else {\n            alert(\"Por favor, preencha todos os campos.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_components_CreateContent_CreateContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().createContent),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Cadastrar novo jogo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\CreateContent\\\\index.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\CreateContent\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                id: \"createForm\",\n                className: \"formPrimary\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"title\",\n                        id: \"title\",\n                        placeholder: \"Insira o t\\xedtulo do jogo\",\n                        className: \"inputPrimary\",\n                        value: title,\n                        onChange: (e)=>setTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\CreateContent\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"platform\",\n                        id: \"platform\",\n                        placeholder: \"Insira a plataforma do jogo\",\n                        className: \"inputPrimary\",\n                        value: platform,\n                        onChange: (e)=>setPlatform(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\CreateContent\\\\index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        name: \"year\",\n                        id: \"year\",\n                        placeholder: \"Insira o ano do jogo\",\n                        className: \"inputPrimary\",\n                        value: year,\n                        onChange: (e)=>setYear(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\CreateContent\\\\index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"price\",\n                        id: \"price\",\n                        placeholder: \"Insira o pre\\xe7o do jogo\",\n                        className: \"inputPrimary\",\n                        value: price,\n                        onChange: (e)=>setPrice(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\CreateContent\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Cadastrar\",\n                        id: \"createBtn\",\n                        className: \"btnPrimary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\CreateContent\\\\index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\CreateContent\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\CreateContent\\\\index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreateContent, \"YjKNLorMo6PmbSdO3SAQQbxDAUI=\");\n_c = CreateContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateContent);\nvar _c;\n$RefreshReg$(_c, \"CreateContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DcmVhdGVDb250ZW50L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDZDtBQUMrQztBQUV6RSxNQUFNSSxnQkFBZ0I7O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNWSxlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQyxjQUFjO1FBRXBCLElBQUlWLFNBQVNFLFlBQVlFLFFBQVFFLFVBQVUsSUFBSTtZQUM3QyxNQUFNSyxPQUFPO2dCQUNYWDtnQkFDQUU7Z0JBQ0FFO2dCQUNBRTtZQUNGO1lBRUEsSUFBSTtnQkFDRixNQUFNTSxXQUFXLE1BQU1mLGtEQUFVLENBQy9CLDhCQUNBYyxNQUNBO29CQUNFRyxTQUFTO3dCQUNQLGdCQUFnQjtvQkFFbEI7Z0JBQ0Y7Z0JBRUYsSUFBSUYsU0FBU0csTUFBTSxLQUFLLEtBQUs7b0JBQzNCLGtDQUFrQztvQkFDbENDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO2dCQUN6QjtZQUNGLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDQTtZQUNoQjtRQUNGLE9BQU87WUFDTEUsTUFBTTtRQUNSO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV3pCLHlHQUFvQjs7MEJBQ2xDLDhEQUFDd0I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNFOzhCQUFHOzs7Ozs7Ozs7OzswQkFFTiw4REFBQ0M7Z0JBQUtDLElBQUc7Z0JBQWFKLFdBQVU7Z0JBQWNLLFVBQVVwQjs7a0NBQ3RELDhEQUFDcUI7d0JBQ0NDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xKLElBQUc7d0JBQ0hLLGFBQVk7d0JBQ1pULFdBQVU7d0JBQ1ZVLE9BQU9qQzt3QkFDUGtDLFVBQVUsQ0FBQ0MsSUFBTWxDLFNBQVNrQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FFMUMsOERBQUNKO3dCQUNDQyxNQUFLO3dCQUNMQyxNQUFLO3dCQUNMSixJQUFHO3dCQUNISyxhQUFZO3dCQUNaVCxXQUFVO3dCQUNWVSxPQUFPL0I7d0JBQ1BnQyxVQUFVLENBQUNDLElBQU1oQyxZQUFZZ0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRTdDLDhEQUFDSjt3QkFDQ0MsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTEosSUFBRzt3QkFDSEssYUFBWTt3QkFDWlQsV0FBVTt3QkFDVlUsT0FBTzdCO3dCQUNQOEIsVUFBVSxDQUFDQyxJQUFNOUIsUUFBUThCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUV6Qyw4REFBQ0o7d0JBQ0NDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xKLElBQUc7d0JBQ0hLLGFBQVk7d0JBQ1pULFdBQVU7d0JBQ1ZVLE9BQU8zQjt3QkFDUDRCLFVBQVUsQ0FBQ0MsSUFBTTVCLFNBQVM0QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FFMUMsOERBQUNKO3dCQUNDQyxNQUFLO3dCQUNMRyxPQUFNO3dCQUNOTixJQUFHO3dCQUNISixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0EzRk14QjtLQUFBQTtBQTZGTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DcmVhdGVDb250ZW50L2luZGV4LmpzPzM3MzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL2NvbXBvbmVudHMvQ3JlYXRlQ29udGVudC9DcmVhdGVDb250ZW50Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IENyZWF0ZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3BsYXRmb3JtLCBzZXRQbGF0Zm9ybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3llYXIsIHNldFllYXJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHRpdGxlICYmIHBsYXRmb3JtICYmIHllYXIgJiYgcHJpY2UgIT09IFwiXCIpIHtcclxuICAgICAgY29uc3QgZ2FtZSA9IHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBwbGF0Zm9ybSxcclxuICAgICAgICB5ZWFyLFxyXG4gICAgICAgIHByaWNlLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9nYW1lXCIsXHJcbiAgICAgICAgICBnYW1lLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAvLyBBZGljaW9uZSBhcXVpIG91dHJvcyBoZWFkZXJzIHF1ZSBlc3RpdmVyIHV0aWxpemFuZG9cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgLy8gUmVkaXJlY2lvbmFyIHBhcmEgYSBww6FnaW5hIGhvbWVcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvaG9tZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJQb3IgZmF2b3IsIHByZWVuY2hhIHRvZG9zIG9zIGNhbXBvcy5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlQ29udGVudH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICA8aDI+Q2FkYXN0cmFyIG5vdm8gam9nbzwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9ybSBpZD1cImNyZWF0ZUZvcm1cIiBjbGFzc05hbWU9XCJmb3JtUHJpbWFyeVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgbyB0w610dWxvIGRvIGpvZ29cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRQcmltYXJ5XCJcclxuICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwicGxhdGZvcm1cIlxyXG4gICAgICAgICAgaWQ9XCJwbGF0Zm9ybVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBhIHBsYXRhZm9ybWEgZG8gam9nb1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFByaW1hcnlcIlxyXG4gICAgICAgICAgdmFsdWU9e3BsYXRmb3JtfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQbGF0Zm9ybShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgbmFtZT1cInllYXJcIlxyXG4gICAgICAgICAgaWQ9XCJ5ZWFyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIG8gYW5vIGRvIGpvZ29cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRQcmltYXJ5XCJcclxuICAgICAgICAgIHZhbHVlPXt5ZWFyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRZZWFyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgIGlkPVwicHJpY2VcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgbyBwcmXDp28gZG8gam9nb1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFByaW1hcnlcIlxyXG4gICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgdmFsdWU9XCJDYWRhc3RyYXJcIlxyXG4gICAgICAgICAgaWQ9XCJjcmVhdGVCdG5cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuUHJpbWFyeVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUNvbnRlbnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInN0eWxlcyIsIkNyZWF0ZUNvbnRlbnQiLCJ0aXRsZSIsInNldFRpdGxlIiwicGxhdGZvcm0iLCJzZXRQbGF0Zm9ybSIsInllYXIiLCJzZXRZZWFyIiwicHJpY2UiLCJzZXRQcmljZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJnYW1lIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsInN0YXR1cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwiY29uc29sZSIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY3JlYXRlQ29udGVudCIsImgyIiwiZm9ybSIsImlkIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CreateContent/index.js\n"));

/***/ })

});