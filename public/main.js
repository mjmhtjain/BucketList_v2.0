(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-list/add-list.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-list/add-list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-list/add-list.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-list/add-list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add BucketList</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group row\">\n            <div class=\"col-sm-2\">\n              <label for=\"title\" class=\"col-form-label\">Title</label>\n            </div>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"newList.title\" name=\"title\" required>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <div class=\"col-sm-2\">\n              <label for=\"category\" class=\"col-form-label\">Priority</label>\n            </div>\n            <div class=\"col-sm-10\">\n              <select class=\"form-control\" [(ngModel)]=\"newList.category\" name=\"category\">\n                <option value=\"High\">High </option>\n                <option value=\"Medium\">Medium </option>\n                <option value=\"Low\">Low </option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <div class=\"col-sm-2\">\n              <label for=\"description\" class=\"col-form-label\">description</label>\n            </div>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"newList.description\" name=\"description\" required>\n            </div>\n          </div>\n\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Add</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-list/add-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-list/add-list.component.ts ***!
  \************************************************/
/*! exports provided: AddListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListComponent", function() { return AddListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list.service */ "./src/app/list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddListComponent = /** @class */ (function () {
    function AddListComponent(listServ) {
        this.listServ = listServ;
        this.addList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddListComponent.prototype.ngOnInit = function () {
        this.newList = {
            title: '',
            category: '',
            description: '',
            _id: ''
        };
        this.newList.category = 'High';
    };
    ;
    AddListComponent.prototype.onSubmit = function () {
        var _this = this;
        this.listServ.addList(this.newList).subscribe(function (response) {
            // console.log(response);
            if (response['success'] == true) {
                _this.addList.emit(response['object']);
            }
            //If success, update the view-list component
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddListComponent.prototype, "addList", void 0);
    AddListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-list',
            template: __webpack_require__(/*! ./add-list.component.html */ "./src/app/add-list/add-list.component.html"),
            styles: [__webpack_require__(/*! ./add-list.component.css */ "./src/app/add-list/add-list.component.css")]
        }),
        __metadata("design:paramtypes", [_list_service__WEBPACK_IMPORTED_MODULE_1__["ListService"]])
    ], AddListComponent);
    return AddListComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light\">\n\n  <!-- Links -->\n  <ul class=\"nav nav-pills\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" href=\"#\">Link 1</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Link 2</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Link 3</a>\n    </li>\n  </ul>\n\n  <ul class=\"nav nav-pills ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">User Name</a>\n    </li>\n\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"far fa-user\"></i>\n      </a>\n    </li>\n  </ul>\n\n</nav>\n<div class=\"container-fluid\" style=\"margin-top: 10px\">\n  <div >\n    <app-view-list> </app-view-list>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_list_add_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-list/add-list.component */ "./src/app/add-list/add-list.component.ts");
/* harmony import */ var _view_list_view_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-list/view-list.component */ "./src/app/view-list/view-list.component.ts");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list.service */ "./src/app/list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _add_list_add_list_component__WEBPACK_IMPORTED_MODULE_5__["AddListComponent"],
                _view_list_view_list_component__WEBPACK_IMPORTED_MODULE_6__["ViewListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_list_service__WEBPACK_IMPORTED_MODULE_7__["ListService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/list.service.ts":
/*!*********************************!*\
  !*** ./src/app/list.service.ts ***!
  \*********************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListService = /** @class */ (function () {
    function ListService(http) {
        this.http = http;
        this.serverApi = 'http://localhost:3000';
    }
    ListService.prototype.getAllLists = function () {
        var URI = this.serverApi + "/bucketlist/";
        var obj = this.http.get(URI);
        return obj;
        // .map(res => res.json())
        // .map(res => <List[]>res.lists);
    };
    ListService.prototype.deleteList = function (listId) {
        var URI = this.serverApi + '/bucketlist/' + listId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"];
        headers.append('Content-Type', 'application/json');
        var obj = this.http.delete(URI, { headers: headers });
        return obj;
        // .map(res => res.json());
    };
    ListService.prototype.addList = function (list) {
        var URI = this.serverApi + "/bucketlist/";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"];
        // let body = JSON.stringify({ title: list.title, description: list.description, category: list.category });
        var body = list;
        // console.log(body);
        headers.append('Content-Type', 'application/json');
        var obj = this.http.post(URI, body, { headers: headers });
        return obj;
        // .map(res => res.json());
    };
    ListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListService);
    return ListService;
}());



/***/ }),

/***/ "./src/app/view-list/view-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-list/view-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-list/view-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-list/view-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"d-flex justify-content-center\">\n      <div class=\"d-inline-flex \">\n        <h2> Awesome Bucketlist App </h2>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\" style=\"margin-bottom: 15px\">\n  <div class=\"col-sm-12\">\n    <div class=\"d-flex\">\n      <div class=\"align-self-start\">\n        <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n          <i class=\"fas fa-plus\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Table starts here -->\n    <table id=\"table\" class=\"table\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Priority Level</th>\n          <th>Title</th>\n          <th>Description</th>\n          <th> Delete </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let list of lists; let i = index\">\n          <td>{{i+1}}</td>\n          <td>{{list.category}}</td>\n          <td>{{list.title}}</td>\n          <td>{{list.description}}</td>\n          <td>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteList(list); $event.stopPropagation();\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<app-add-list (addList)='onAddList($event)'> </app-add-list>"

/***/ }),

/***/ "./src/app/view-list/view-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-list/view-list.component.ts ***!
  \**************************************************/
/*! exports provided: ViewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewListComponent", function() { return ViewListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list.service */ "./src/app/list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewListComponent = /** @class */ (function () {
    function ViewListComponent(listServ) {
        this.listServ = listServ;
        this.lists = [];
    }
    ViewListComponent.prototype.ngOnInit = function () {
        this.loadLists();
    };
    ViewListComponent.prototype.loadLists = function () {
        var _this = this;
        //Get all lists from server and update the lists property
        this.listServ.getAllLists().subscribe(function (res) {
            _this.lists = res.lists;
        }, function (err) {
        });
    };
    ViewListComponent.prototype.deleteList = function (list) {
        var _this = this;
        this.listServ.deleteList(list._id).subscribe(function (response) {
            _this.lists = _this.lists.filter(function (lists) { return lists !== list; });
        }, function (err) {
        });
    };
    ViewListComponent.prototype.onAddList = function (newList) {
        this.lists = this.lists.concat(newList);
    };
    ViewListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-list',
            template: __webpack_require__(/*! ./view-list.component.html */ "./src/app/view-list/view-list.component.html"),
            styles: [__webpack_require__(/*! ./view-list.component.css */ "./src/app/view-list/view-list.component.css")]
        }),
        __metadata("design:paramtypes", [_list_service__WEBPACK_IMPORTED_MODULE_1__["ListService"]])
    ], ViewListComponent);
    return ViewListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\OJN5KOR\Desktop\Gantt-Project\bucketlist\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map