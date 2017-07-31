webpackJsonp([1,4],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nbody {\n  background-color: black;\n  background-image: url(" + __webpack_require__(164) + ");\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-size: 640px 686px;\n  color: white;\n  -webkit-animation: backgroundAnimation 1s ease-in forwards;\n          animation: backgroundAnimation 1s ease-in forwards;\n  -webkit-animation-delay: 5s;\n          animation-delay: 5s; }\n\n@-webkit-keyframes backgroundAnimation {\n  from {\n    background-position: center;\n    background-size: 640px 686px; }\n  to {\n    background-position: left top;\n    background-size: 128px 138px; } }\n\n@keyframes backgroundAnimation {\n  from {\n    background-position: center;\n    background-size: 640px 686px; }\n  to {\n    background-position: left top;\n    background-size: 128px 138px; } }\n\n#navigation {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-left: 140px;\n  -webkit-animation: appear 2s both;\n          animation: appear 2s both;\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s; }\n  #navigation .item {\n    box-shadow: 0px 0px 10px white;\n    border: 1px solid white;\n    border-radius: 2px;\n    margin: 15px;\n    padding: 3px;\n    -webkit-animation-name: shake 1s;\n            animation-name: shake 1s;\n    -webkit-animation-delay: 5s;\n            animation-delay: 5s;\n    font-family: Courier New, Courier, monospace;\n    font-size: 10px; }\n    #navigation .item.active {\n      color: black;\n      background-color: white; }\n  #navigation .item:hover {\n    color: black;\n    background-color: white;\n    -webkit-animation-name: foolAround;\n            animation-name: foolAround; }\n\n#content {\n  margin-left: auto;\n  margin-right: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  max-width: 80%;\n  min-width: 600px;\n  height: 800px;\n  -webkit-animation: appear 2s both;\n          animation: appear 2s both;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s; }\n  #content h1 {\n    margin-left: auto;\n    margin-right: auto; }\n  #content .item {\n    background-color: rgba(255, 255, 255, 0.9);\n    box-shadow: 0px 0px 10px white;\n    border: 4px solid white;\n    border-radius: 15px;\n    margin: 10px;\n    padding: 15px;\n    min-height: 200px;\n    -webkit-animation-name: enterAndGrow;\n            animation-name: enterAndGrow;\n    -webkit-animation-duration: .5s;\n            animation-duration: .5s;\n    color: black;\n    font-family: Courier New, Courier, monospace;\n    font-size: 14px; }\n\n@-webkit-keyframes appear {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes appear {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes enterAndGrow {\n  0% {\n    -webkit-transform-origin: left top;\n            transform-origin: left top;\n    -webkit-transform: translateX(-1000px) scaleY(0.01);\n            transform: translateX(-1000px) scaleY(0.01); }\n  50% {\n    -webkit-transform-origin: left top;\n            transform-origin: left top;\n    -webkit-transform: translateX(0px) scaleY(0.01);\n            transform: translateX(0px) scaleY(0.01); }\n  100% {\n    -webkit-transform-origin: left top;\n            transform-origin: left top;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); } }\n\n@keyframes enterAndGrow {\n  0% {\n    -webkit-transform-origin: left top;\n            transform-origin: left top;\n    -webkit-transform: translateX(-1000px) scaleY(0.01);\n            transform: translateX(-1000px) scaleY(0.01); }\n  50% {\n    -webkit-transform-origin: left top;\n            transform-origin: left top;\n    -webkit-transform: translateX(0px) scaleY(0.01);\n            transform: translateX(0px) scaleY(0.01); }\n  100% {\n    -webkit-transform-origin: left top;\n            transform-origin: left top;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); } }\n\n@-webkit-keyframes foolAround {\n  0% {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    box-shadow: 0; }\n  20% {\n    -webkit-transform: rotateZ(-8deg);\n            transform: rotateZ(-8deg); }\n  30% {\n    -webkit-transform: rotateX(-45deg);\n            transform: rotateX(-45deg); }\n  40% {\n    -webkit-transform: rotateZ(50deg);\n            transform: rotateZ(50deg); }\n  50% {\n    -webkit-transform: rotateX(45deg);\n            transform: rotateX(45deg); }\n  60% {\n    -webkit-transform: rotateZ(90deg);\n            transform: rotateZ(90deg); }\n  70% {\n    -webkit-transform: rotateZ(-8deg);\n            transform: rotateZ(-8deg); }\n  80% {\n    -webkit-transform: rotateX(-5deg);\n            transform: rotateX(-5deg); }\n  90% {\n    -webkit-transform: rotateZ(-5deg);\n            transform: rotateZ(-5deg); }\n  100% {\n    -webkit-transform: rotateX(0deg) rotateZ(0deg);\n            transform: rotateX(0deg) rotateZ(0deg);\n    box-shadow: unset; } }\n\n@keyframes foolAround {\n  0% {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    box-shadow: 0; }\n  20% {\n    -webkit-transform: rotateZ(-8deg);\n            transform: rotateZ(-8deg); }\n  30% {\n    -webkit-transform: rotateX(-45deg);\n            transform: rotateX(-45deg); }\n  40% {\n    -webkit-transform: rotateZ(50deg);\n            transform: rotateZ(50deg); }\n  50% {\n    -webkit-transform: rotateX(45deg);\n            transform: rotateX(45deg); }\n  60% {\n    -webkit-transform: rotateZ(90deg);\n            transform: rotateZ(90deg); }\n  70% {\n    -webkit-transform: rotateZ(-8deg);\n            transform: rotateZ(-8deg); }\n  80% {\n    -webkit-transform: rotateX(-5deg);\n            transform: rotateX(-5deg); }\n  90% {\n    -webkit-transform: rotateZ(-5deg);\n            transform: rotateZ(-5deg); }\n  100% {\n    -webkit-transform: rotateX(0deg) rotateZ(0deg);\n            transform: rotateX(0deg) rotateZ(0deg);\n    box-shadow: unset; } }\n\n@-webkit-keyframes shake {\n  0% {\n    -webkit-transform: rotateZ(2deg);\n            transform: rotateZ(2deg); }\n  20% {\n    -webkit-transform: rotateZ(-8deg);\n            transform: rotateZ(-8deg); }\n  30% {\n    -webkit-transform: rotateZ(3deg);\n            transform: rotateZ(3deg); }\n  40% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg); }\n  50% {\n    -webkit-transform: rotateZ(2deg);\n            transform: rotateZ(2deg); }\n  60% {\n    -webkit-transform: rotateZ(6deg);\n            transform: rotateZ(6deg); }\n  70% {\n    -webkit-transform: rotateZ(-2deg);\n            transform: rotateZ(-2deg); }\n  80% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg); }\n  90% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg); }\n  100% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg); } }\n\n@keyframes shake {\n  0% {\n    -webkit-transform: rotateZ(2deg);\n            transform: rotateZ(2deg); }\n  20% {\n    -webkit-transform: rotateZ(-8deg);\n            transform: rotateZ(-8deg); }\n  30% {\n    -webkit-transform: rotateZ(3deg);\n            transform: rotateZ(3deg); }\n  40% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg); }\n  50% {\n    -webkit-transform: rotateZ(2deg);\n            transform: rotateZ(2deg); }\n  60% {\n    -webkit-transform: rotateZ(6deg);\n            transform: rotateZ(6deg); }\n  70% {\n    -webkit-transform: rotateZ(-2deg);\n            transform: rotateZ(-2deg); }\n  80% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg); }\n  90% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg); }\n  100% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = "<div id=\"navigation\">\n  <div class=\"item\" *ngFor=\"let item of navigationItems; let i = index\" [ngClass]=\"{'active': selectedItem && item === selectedItem}\" [ngStyle]=\"{'animation-delay': (i * 500) +'ms'}\" (click)=\"selectNavigation(item)\">\n    {{ item.name }}\n  </div>\n</div>\n<div id=\"content\">\n  <div class=\"item\" *ngFor=\"let item of (selectedItem ? selectedItem.items : []); let i = index\" [ngStyle]=\"{'animation-delay': (i * 200) +'ms'}\" >\n    {{ item }}\n  </div>\n</div>\n<div id=\"players\">\n  <div class=\"item\" *ngFor=\"let item of (selectedItem ? selectedItem.items : []); let i = index\" [ngStyle]=\"{'animation-delay': (i * 200) +'ms'}\" >\n    {{ item }}\n  </div>\n</div>"

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logoNegated.4099b8cc4b2652afa469.jpg";

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismic_javascript__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismic_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismic_javascript__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrismicService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var API_ENDPOINT = "https://aarhusrottenrollers.prismic.io/api/v2";
var API_CONFIGURATION = {};
var unmarshall = function (response) { return response.results.map(function (it) { return it.data; }); };
var PrismicService = (function () {
    function PrismicService() {
    }
    PrismicService.prototype.withApi = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_prismic_javascript__["getApi"])(API_ENDPOINT, API_CONFIGURATION);
    };
    PrismicService.prototype.query = function (query, options) {
        return this.withApi()
            .then(function (api) { return api.query(query)
            .then(function (response) { return unmarshall(response); }); });
    };
    PrismicService.prototype.queryForType = function (type, options) {
        return this.query(__WEBPACK_IMPORTED_MODULE_1_prismic_javascript__["Predicates"].at('document.type', type), options);
    };
    return PrismicService;
}());
PrismicService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PrismicService);

//# sourceMappingURL=prismic.service.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prismic_service__ = __webpack_require__(29);
/* unused harmony export NavigationItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationItem = (function () {
    function NavigationItem() {
    }
    return NavigationItem;
}());

var ITEMS = [
    {
        name: "Home",
        items: ["The most rotten place on earth", "Come roll with us"]
    },
    {
        name: "Roster",
        items: ["Niels", "Thorbjørn", "Brian", "Jens", "Jonas", "Anders"]
    },
    {
        name: "Come roll with us",
        items: []
    },
    {
        name: "What is Roller Derby",
        items: []
    },
    {
        name: "The road to Barcelona 2018",
        items: []
    }
];
var NAVIGATION_ITEMS_TYPE_NAME = "navigationitem";
var itemsFlatten = function (it) { return { name: it.name, items: it.items.map(function (subIt) { return subIt.item; }) }; };
var NavigationService = (function () {
    function NavigationService(prismicService) {
        this.prismicService = prismicService;
    }
    NavigationService.prototype.getItems = function () {
        return this.prismicService
            .queryForType(NAVIGATION_ITEMS_TYPE_NAME)
            .then(function (results) { return results.map(itemsFlatten); });
    };
    return NavigationService;
}());
NavigationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__prismic_service__["a" /* PrismicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__prismic_service__["a" /* PrismicService */]) === "function" && _a || Object])
], NavigationService);

var _a;
//# sourceMappingURL=navigation.service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 72;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(83);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(navigationService) {
        var _this = this;
        this.navigationService = navigationService;
        this.navigationItems = [];
        navigationService.getItems().then(function (items) {
            console.log(items);
            _this.navigationItems = items;
            _this.selectedItem = _this.selectedItem ? _this.selectedItem : _this.navigationItems[0];
        });
    }
    AppComponent.prototype.selectNavigation = function (item) {
        this.selectedItem = item;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(140),
        styles: [__webpack_require__(137)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__navigation_service__["a" /* NavigationService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__prismic_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__navigation_service__["a" /* NavigationService */], __WEBPACK_IMPORTED_MODULE_6__player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_7__prismic_service__["a" /* PrismicService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prismic_service__ = __webpack_require__(29);
/* unused harmony export PlayerItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerItem = (function () {
    function PlayerItem() {
    }
    return PlayerItem;
}());

var PLAYER_ITEMS_TYPE_NAME = "navigationitem";
var PlayerService = (function () {
    function PlayerService(prismicService) {
        this.prismicService = prismicService;
    }
    PlayerService.prototype.getItems = function () {
        return this.prismicService
            .queryForType(PLAYER_ITEMS_TYPE_NAME);
    };
    return PlayerService;
}());
PlayerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__prismic_service__["a" /* PrismicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__prismic_service__["a" /* PrismicService */]) === "function" && _a || Object])
], PlayerService);

var _a;
//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[167]);
//# sourceMappingURL=main.bundle.js.map