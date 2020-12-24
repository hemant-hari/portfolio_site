(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm_chip8.js":
/*!****************************!*\
  !*** ../pkg/wasm_chip8.js ***!
  \****************************/
/*! exports provided: Pixel, Cpu, Display, Keyboard, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_object_drop_ref, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_chip8_bg.wasm */ \"../pkg/wasm_chip8_bg.wasm\");\n/* harmony import */ var _wasm_chip8_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_chip8_bg.js */ \"../pkg/wasm_chip8_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Pixel\", function() { return _wasm_chip8_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Pixel\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cpu\", function() { return _wasm_chip8_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Cpu\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Display\", function() { return _wasm_chip8_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Display\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Keyboard\", function() { return _wasm_chip8_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_59cb74e423758ede\", function() { return _wasm_chip8_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_59cb74e423758ede\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_558ba5917b466edd\", function() { return _wasm_chip8_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_stack_558ba5917b466edd\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_4bb6c2a97407129a\", function() { return _wasm_chip8_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_error_4bb6c2a97407129a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _wasm_chip8_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _wasm_chip8_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_chip8.js?");

/***/ }),

/***/ "../pkg/wasm_chip8_bg.js":
/*!*******************************!*\
  !*** ../pkg/wasm_chip8_bg.js ***!
  \*******************************/
/*! exports provided: Pixel, Cpu, Display, Keyboard, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_object_drop_ref, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pixel\", function() { return Pixel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cpu\", function() { return Cpu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Display\", function() { return Display; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Keyboard\", function() { return Keyboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_59cb74e423758ede\", function() { return __wbg_new_59cb74e423758ede; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_558ba5917b466edd\", function() { return __wbg_stack_558ba5917b466edd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_4bb6c2a97407129a\", function() { return __wbg_error_4bb6c2a97407129a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_chip8_bg.wasm */ \"../pkg/wasm_chip8_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passArray8ToWasm0(arg, malloc) {\n    const ptr = malloc(arg.length * 1);\n    getUint8Memory0().set(arg, ptr / 1);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n*/\nconst Pixel = Object.freeze({ Off:0,\"0\":\"Off\",On:1,\"1\":\"On\", });\n/**\n*/\nclass Cpu {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Cpu.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_cpu_free\"](ptr);\n    }\n    /**\n    * @returns {Cpu}\n    */\n    static new() {\n        var ret = _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"cpu_new\"]();\n        return Cpu.__wrap(ret);\n    }\n    /**\n    */\n    reset() {\n        _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"cpu_reset\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get_memory() {\n        var ret = _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"cpu_get_memory\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    get_display() {\n        var ret = _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"cpu_get_display\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    get_keyboard() {\n        var ret = _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"cpu_get_keyboard\"](this.ptr);\n        return ret;\n    }\n    /**\n    */\n    decrement_timers() {\n        _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"cpu_decrement_timers\"](this.ptr);\n    }\n    /**\n    * @param {number} key\n    */\n    set_key(key) {\n        _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"cpu_set_key\"](this.ptr, key);\n    }\n    /**\n    * @param {number} random_num\n    */\n    execute_cycle(random_num) {\n        _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"cpu_execute_cycle\"](this.ptr, random_num);\n    }\n}\n/**\n*/\nclass Display {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Display.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_display_free\"](ptr);\n    }\n    /**\n    * @returns {Display}\n    */\n    static new_default() {\n        var ret = _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"display_new_default\"]();\n        return Display.__wrap(ret);\n    }\n    /**\n    * @returns {Display}\n    */\n    static new_empty() {\n        var ret = _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"display_new_empty\"]();\n        return Display.__wrap(ret);\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        try {\n            const retptr = _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_export_0\"].value - 16;\n            _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_export_0\"].value = retptr;\n            _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"display_render\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_export_0\"].value += 16;\n            _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        var ret = _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"display_width\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        var ret = _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"display_height\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    pixels() {\n        var ret = _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"display_pixels\"](this.ptr);\n        return ret;\n    }\n    /**\n    */\n    cls() {\n        _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"display_cls\"](this.ptr);\n    }\n    /**\n    * @param {number} i\n    */\n    toggle_pixel(i) {\n        _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"display_toggle_pixel\"](this.ptr, i);\n    }\n    /**\n    * @param {number} i\n    * @returns {number}\n    */\n    get_pixel(i) {\n        var ret = _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"display_get_pixel\"](this.ptr, i);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {Uint8Array} bytes\n    * @returns {boolean}\n    */\n    draw_bytes(x, y, bytes) {\n        var ptr0 = passArray8ToWasm0(bytes, _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        var ret = _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"display_draw_bytes\"](this.ptr, x, y, ptr0, len0);\n        return ret !== 0;\n    }\n    /**\n    */\n    tick() {\n        _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"display_tick\"](this.ptr);\n    }\n}\n/**\n*/\nclass Keyboard {\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_keyboard_free\"](ptr);\n    }\n}\n\nconst __wbg_new_59cb74e423758ede = function() {\n    var ret = new Error();\n    return addHeapObject(ret);\n};\n\nconst __wbg_stack_558ba5917b466edd = function(arg0, arg1) {\n    var ret = getObject(arg1).stack;\n    var ptr0 = passStringToWasm0(ret, _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {\n    try {\n        console.error(getStringFromWasm0(arg0, arg1));\n    } finally {\n        _wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](arg0, arg1);\n    }\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/wasm_chip8_bg.js?");

/***/ }),

/***/ "../pkg/wasm_chip8_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/wasm_chip8_bg.wasm ***!
  \*********************************/
/*! exports provided: memory, __wbg_cpu_free, cpu_new, cpu_reset, cpu_get_memory, cpu_get_display, cpu_get_keyboard, cpu_decrement_timers, cpu_set_key, cpu_execute_cycle, __wbg_display_free, display_new_default, display_new_empty, display_render, display_width, display_height, display_pixels, display_cls, display_toggle_pixel, display_get_pixel, display_draw_bytes, display_tick, __wbg_keyboard_free, __wbindgen_export_0, __wbindgen_free, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_chip8_bg.js */ \"../pkg/wasm_chip8_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_chip8_bg.wasm?");

/***/ }),

/***/ "./CanvasWrapper.ts":
/*!**************************!*\
  !*** ./CanvasWrapper.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_chip8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm_chip8 */ \"../pkg/wasm_chip8.js\");\n\r\nvar CELL_SIZE = 20; // px\r\nvar DEAD_COLOR = '#111111';\r\nvar ALIVE_COLOR = '#41FF00';\r\nvar CanvasWrapper = /** @class */ (function () {\r\n    function CanvasWrapper(canvas, memory, height, width) {\r\n        this.canvas = canvas;\r\n        this.canvas.height = (CELL_SIZE) * height;\r\n        this.canvas.width = (CELL_SIZE) * width;\r\n        this.memory = memory;\r\n        this.height = height;\r\n        this.width = width;\r\n        this.ctx = canvas.getContext('2d');\r\n    }\r\n    CanvasWrapper.prototype.drawCells = function (cellsPtr) {\r\n        var cells = new Uint8Array(this.memory.buffer, cellsPtr, this.width * this.height);\r\n        this.ctx.beginPath();\r\n        this.drawPixels(cells, ALIVE_COLOR, wasm_chip8__WEBPACK_IMPORTED_MODULE_0__[\"Pixel\"].On);\r\n        this.drawPixels(cells, DEAD_COLOR, wasm_chip8__WEBPACK_IMPORTED_MODULE_0__[\"Pixel\"].Off);\r\n        this.ctx.stroke();\r\n    };\r\n    CanvasWrapper.prototype.drawPixels = function (cells, colour, pixelType) {\r\n        this.ctx.fillStyle = colour;\r\n        for (var row = 0; row < this.height; row += 1) {\r\n            for (var col = 0; col < this.width; col += 1) {\r\n                var idx = this.getIndex(row, col);\r\n                if (cells[idx] === pixelType) {\r\n                    this.ctx.fillRect(col * (CELL_SIZE) + 1, row * (CELL_SIZE) + 1, CELL_SIZE, CELL_SIZE);\r\n                }\r\n            }\r\n        }\r\n    };\r\n    CanvasWrapper.prototype.getIndex = function (row, column) {\r\n        return row * this.width + column;\r\n    };\r\n    return CanvasWrapper;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (CanvasWrapper);\r\n\n\n//# sourceURL=webpack:///./CanvasWrapper.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_chip8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm_chip8 */ \"../pkg/wasm_chip8.js\");\n/* harmony import */ var wasm_chip8_wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wasm_chip8/wasm_chip8_bg.wasm */ \"../pkg/wasm_chip8_bg.wasm\");\n/* harmony import */ var _CanvasWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CanvasWrapper */ \"./CanvasWrapper.ts\");\n\r\n\r\n\r\n// Construct the display, and get its width and height.\r\nvar chip8 = wasm_chip8__WEBPACK_IMPORTED_MODULE_0__[\"Cpu\"][\"new\"]();\r\nvar width = 64;\r\nvar height = 32;\r\nvar programMemory = new Uint8Array(wasm_chip8_wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, chip8.get_memory(), 4096);\r\nvar keyboardMemory = new Uint8Array(wasm_chip8_wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, chip8.get_keyboard(), 16);\r\n// Give the canvas room for all of our cells and a 1px border\r\n// around each of them.\r\nvar canvas = document.getElementById('game-of-life-canvas');\r\nvar canvasWrapper = new _CanvasWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"](canvas, wasm_chip8_wasm_chip8_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"memory\"], height, width);\r\nvar renderLoop = function () {\r\n    for (var i = 0; i < 6; i += 1) {\r\n        chip8.execute_cycle(Math.floor(Math.random() * (0x100)));\r\n    }\r\n    chip8.decrement_timers();\r\n    // canvasWrapper.drawGrid();\r\n    canvasWrapper.drawCells(chip8.get_display());\r\n    requestAnimationFrame(renderLoop);\r\n};\r\nvar keyMappings = new Map(Object.entries({\r\n    1: 1,\r\n    2: 2,\r\n    3: 3,\r\n    4: 0xC,\r\n    q: 4,\r\n    w: 5,\r\n    e: 6,\r\n    r: 0xD,\r\n    a: 7,\r\n    s: 8,\r\n    d: 9,\r\n    f: 0xE,\r\n    z: 0xA,\r\n    x: 0,\r\n    c: 0xB,\r\n    v: 0xF,\r\n}));\r\nfunction keyDownHandler(e) {\r\n    keyboardMemory[keyMappings.get(e.key)] = 1;\r\n}\r\nfunction keyUpHandler(e) {\r\n    keyboardMemory[keyMappings.get(e.key)] = 0;\r\n}\r\ndocument.addEventListener('keydown', keyDownHandler, false);\r\ndocument.addEventListener('keyup', keyUpHandler, false);\r\nfunction readSingleFile(e) {\r\n    var file = e.target.files[0];\r\n    if (!file) {\r\n        return;\r\n    }\r\n    var reader = new FileReader();\r\n    reader.onload = function (ev) {\r\n        var buffer = ev.target.result;\r\n        var rom = new DataView(buffer, 0, buffer.byteLength);\r\n        chip8.reset();\r\n        for (var i = 0; i < rom.byteLength; i += 1) {\r\n            programMemory[0x200 + i] = rom.getUint8(i);\r\n        }\r\n        renderLoop();\r\n    };\r\n    reader.readAsArrayBuffer(file);\r\n}\r\ndocument.getElementById('file-input').addEventListener('change', readSingleFile, false);\r\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);