"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./src/components/EditContent/index.js":
/*!*********************************************!*\
  !*** ./src/components/EditContent/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/auth */ \"./src/utils/auth.js\");\n/* harmony import */ var _components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/EditContent/EditContent.module.css */ \"./src/components/EditContent/EditContent.module.css\");\n/* harmony import */ var _components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst EditContent = (param)=>{\n    let { game, isOpen, onClose, onUpdate } = param;\n    _s();\n    const [formValues, setFormValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        title: \"\",\n        platform: \"\",\n        year: \"\",\n        price: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (game) {\n            setFormValues({\n                id: game._id,\n                title: game.title,\n                platform: game.platform,\n                year: game.year,\n                price: game.price\n            });\n        }\n    }, [\n        game\n    ]);\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormValues((prevValues)=>({\n                ...prevValues,\n                [name]: value\n            }));\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const { id, title, platform, year, price } = formValues;\n        const updatedGame = {\n            title,\n            platform,\n            year,\n            price\n        };\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"https://09-api-node.vercel.app/game/\".concat(id), updatedGame, _utils_auth__WEBPACK_IMPORTED_MODULE_2__.axiosConfig);\n            if (response.status === 200) {\n                alert(\"Game atualizado!\");\n                onUpdate(response.data); // Passa o jogo atualizado para o componente pai\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    if (!isOpen) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().editModal),\n        id: \"editModal\",\n        style: {\n            display: \"block\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().editContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().modalClose),\n                    onClick: onClose,\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"title\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Editar jogo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"editForm\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"hidden\",\n                            name: \"id\",\n                            value: formValues.id\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"title\",\n                            placeholder: \"Insira o novo t\\xedtulo\",\n                            className: \"inputPrimary\",\n                            value: formValues.title,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"platform\",\n                            placeholder: \"Insira a nova plataforma do jogo\",\n                            className: \"inputPrimary\",\n                            value: formValues.platform,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            name: \"year\",\n                            placeholder: \"Insira o novo ano\",\n                            className: \"inputPrimary\",\n                            value: formValues.year,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"price\",\n                            placeholder: \"Insira o novo pre\\xe7o\",\n                            className: \"inputPrimary\",\n                            value: formValues.price,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"submit\",\n                            value: \"Alterar\",\n                            className: \"btnPrimary\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditContent, \"5x0GEokZtrs1ySSu0n5K4pt1tIE=\");\n_c = EditContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditContent);\nvar _c;\n$RefreshReg$(_c, \"EditContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0IsTUFBSzs0QkFDTDRCLGFBQVk7NEJBQ1piLFdBQVU7NEJBQ1ZkLE9BQU9YLFdBQVdNLEtBQUs7NEJBQ3ZCaUMsVUFBVS9COzRCQUNWZ0MsUUFBUTs7Ozs7O3NDQUVWLDhEQUFDSjs0QkFDQ0MsTUFBSzs0QkFDTDFCLE9BQU07NEJBQ05jLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRCO0dBckhNOUI7S0FBQUE7QUF1SE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRWRpdENvbnRlbnQvaW5kZXguanM/MjYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBheGlvc0NvbmZpZyB9IGZyb20gJ0AvdXRpbHMvYXV0aCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvY29tcG9uZW50cy9FZGl0Q29udGVudC9FZGl0Q29udGVudC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBFZGl0Q29udGVudCA9ICh7IGdhbWUsIGlzT3Blbiwgb25DbG9zZSwgb25VcGRhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtVmFsdWVzLCBzZXRGb3JtVmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgIGlkOiAnJyxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIHBsYXRmb3JtOiAnJyxcclxuICAgIHllYXI6ICcnLFxyXG4gICAgcHJpY2U6ICcnXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZ2FtZSkge1xyXG4gICAgICBzZXRGb3JtVmFsdWVzKHtcclxuICAgICAgICBpZDogZ2FtZS5faWQsXHJcbiAgICAgICAgdGl0bGU6IGdhbWUudGl0bGUsXHJcbiAgICAgICAgcGxhdGZvcm06IGdhbWUucGxhdGZvcm0sXHJcbiAgICAgICAgeWVhcjogZ2FtZS55ZWFyLFxyXG4gICAgICAgIHByaWNlOiBnYW1lLnByaWNlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtnYW1lXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldEZvcm1WYWx1ZXMocHJldlZhbHVlcyA9PiAoe1xyXG4gICAgICAuLi5wcmV2VmFsdWVzLFxyXG4gICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHsgaWQsIHRpdGxlLCBwbGF0Zm9ybSwgeWVhciwgcHJpY2UgfSA9IGZvcm1WYWx1ZXM7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlZEdhbWUgPSB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBwbGF0Zm9ybSxcclxuICAgICAgeWVhcixcclxuICAgICAgcHJpY2VcclxuICAgIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoXHJcbiAgICAgICAgYGh0dHBzOi8vMDktYXBpLW5vZGUudmVyY2VsLmFwcC9nYW1lLyR7aWR9YCxcclxuICAgICAgICB1cGRhdGVkR2FtZSxcclxuICAgICAgICBheGlvc0NvbmZpZ1xyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBhbGVydChcIkdhbWUgYXR1YWxpemFkbyFcIik7XHJcbiAgICAgICAgb25VcGRhdGUocmVzcG9uc2UuZGF0YSk7IC8vIFBhc3NhIG8gam9nbyBhdHVhbGl6YWRvIHBhcmEgbyBjb21wb25lbnRlIHBhaVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoIWlzT3Blbikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0TW9kYWx9IGlkPVwiZWRpdE1vZGFsXCIgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJyB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0Q29udGVudH0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxDbG9zZX0gb25DbGljaz17b25DbG9zZX0+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICA8aDI+RWRpdGFyIGpvZ288L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtIGlkPVwiZWRpdEZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgbmFtZT1cImlkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMuaWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgbyBub3ZvIHTDrXR1bG9cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFByaW1hcnlcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy50aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGxhdGZvcm1cIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBhIG5vdmEgcGxhdGFmb3JtYSBkbyBqb2dvXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRQcmltYXJ5XCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMucGxhdGZvcm19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBuYW1lPVwieWVhclwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIG8gbm92byBhbm9cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFByaW1hcnlcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy55ZWFyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIG8gbm92byBwcmXDp29cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFByaW1hcnlcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy5wcmljZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPVwiQWx0ZXJhclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blByaW1hcnlcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRDb250ZW50OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiYXhpb3NDb25maWciLCJzdHlsZXMiLCJFZGl0Q29udGVudCIsImdhbWUiLCJpc09wZW4iLCJvbkNsb3NlIiwib25VcGRhdGUiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsImlkIiwidGl0bGUiLCJwbGF0Zm9ybSIsInllYXIiLCJwcmljZSIsIl9pZCIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2VmFsdWVzIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVkR2FtZSIsInJlc3BvbnNlIiwicHV0Iiwic3RhdHVzIiwiYWxlcnQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZWRpdE1vZGFsIiwic3R5bGUiLCJkaXNwbGF5IiwiZWRpdENvbnRlbnQiLCJzcGFuIiwibW9kYWxDbG9zZSIsIm9uQ2xpY2siLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/EditContent/index.js\n"));

/***/ })

});