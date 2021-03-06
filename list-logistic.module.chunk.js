webpackJsonp(["list-logistic.module"],{

/***/ "../../../../../src/app/theme/logistic/list-logistic/list-logistic-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListLogisticRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_logistic_component__ = __webpack_require__("../../../../../src/app/theme/logistic/list-logistic/list-logistic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__list_logistic_component__["a" /* ListLogisticComponent */],
        data: {
            title: 'List Logistic',
            status: false
        }
    }
];
var ListLogisticRoutingModule = (function () {
    function ListLogisticRoutingModule() {
    }
    ListLogisticRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */]]
        })
    ], ListLogisticRoutingModule);
    return ListLogisticRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/logistic/list-logistic/list-logistic.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div  class=\"overlay-loader\" style=\"display: block;\" *ngIf=\"gotData\">\r\n  <div class=\"preloader3 custom-preloader loader-block\">\r\n    <div class=\"circ1 loader-primary loader-lg\"></div>\r\n    <div  class=\"circ2 loader-primary loader-lg\"></div>\r\n    <div class=\"circ3 loader-primary loader-lg\"></div>\r\n    <div class=\"circ4 loader-primary loader-lg\"></div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Logistic Listing -->\r\n<div id=\"list\" class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <app-card [title]=\"'Logistics'\" [classHeader]=\"true\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <label class=\"dt-cust-search f-right\">\r\n              <div class=\"form-group\">\r\n                <label>Search: </label>\r\n                <input type='text' class=\"form-control input-sm m-l-10\" placeholder='Search Name' (keyup)='updateFilter($event)' />\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <ngx-datatable #logisticList class='data-table' [scrollbarH]=\"true\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\" [rowHeight]=\"50\" [limit]=\"10\" [rows]='rowsFilter' (activate)=\"onActivate($event)\" (select)='onSelect($event)'>\r\n          \r\n          <ngx-datatable-column name=\"Address\" sortable=\"false\" prop=\"Logistics.Address\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"City\" sortable=\"false\" prop=\"Logistics.City.Name\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Contact Person Name\" sortable=\"false\" prop=\"Logistics.ContactPersonName\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Logistic Name\" sortable=\"false\" prop=\"Logistics.LogisticsName\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n     \r\n          \r\n          <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"Id\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n\r\n              <button class=\"custom-action-btns\" (click)=\"editLogistic(value)\">\r\n                <i class=\"fa fa-pencil\"></i>\r\n              </button>\r\n\r\n        \r\n\r\n              <button *ngIf=\"row.IsBlocked == false \" class=\"custom-action-btns danger-bg\" (click)=\"inActivateThisUser(value)\">            \r\n                  <i class=\"fa fa-ban\"></i>\r\n              </button>\r\n\r\n              <button *ngIf=\"row.IsBlocked == true \" class=\"custom-action-btns green-bg\" (click)=\"inActivateThisUser(value)\">            \r\n                  <i class=\"fa fa-check\"></i>\r\n              </button>\r\n\r\n           \r\n\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/logistic/list-logistic/list-logistic.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#seo-card1 canvas,\n#seo-card2 canvas {\n  height: 150px !important;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px; }\n  @media only screen and (max-width: 768px) {\n    #seo-card1 canvas,\n    #seo-card2 canvas {\n      padding-bottom: 30px; } }\n\n.text-danger {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/logistic/list-logistic/list-logistic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListLogisticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_AddAreaService__ = __webpack_require__("../../../../../src/app/theme/services/AddAreaService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_MeasurementAndDosageSizesService__ = __webpack_require__("../../../../../src/app/theme/services/MeasurementAndDosageSizesService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_GetChemistDataService__ = __webpack_require__("../../../../../src/app/theme/services/GetChemistDataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_userService__ = __webpack_require__("../../../../../src/app/theme/services/userService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListLogisticComponent = (function () {
    function ListLogisticComponent(route, _AddAreaNameService, _userService, _getChemistDataService, _measurementAndDosageSizesService) {
        this.route = route;
        this._AddAreaNameService = _AddAreaNameService;
        this._userService = _userService;
        this._getChemistDataService = _getChemistDataService;
        this._measurementAndDosageSizesService = _measurementAndDosageSizesService;
        this.CompanyName = "";
        this.ContactPersonName = "";
        this.Address = "";
        this.Email = "";
        this.MobileNumber = 0;
        this.City = 0;
        this.Area = 0;
        this.gotData = false;
        this.cities_array = [];
        this.areas_array = [];
        this.chemists_array = [];
        this.rowsFilter = [];
        this.tempFilter = [];
        this.runner = false;
    }
    ListLogisticComponent.prototype.ngOnInit = function () {
        this.getAllLogistics();
    };
    ListLogisticComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log(selected);
    };
    ListLogisticComponent.prototype.onActivate = function (event) { };
    ListLogisticComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        console.log(val);
        // filter our data
        var temp = this.tempFilter.filter(function (d) {
            return d.LogisticsName.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rowsFilter = temp;
        // Whenever the filter changes, always go back to the first page
        this.logisticList.offset = 0;
    };
    ListLogisticComponent.prototype.editLogistic = function (value) {
        var obj = this.rowsFilter.find(function (x) { return x.Id == value; });
        localStorage.setItem('editLogistic', JSON.stringify(obj));
        this.route.navigateByUrl('/admin/logistic/edit-logistic?id=' + value);
    };
    ListLogisticComponent.prototype.updateChanges = function (editingId, value) {
        for (var i = 0; i < this.rowsFilter.length; i++) {
            if (this.rowsFilter[i].Id == editingId) {
                this.rowsFilter[i].IsBlocked = value;
            }
        }
    };
    ListLogisticComponent.prototype.inActivateThisUser = function (value) {
        var _this = this;
        var EditingId = value;
        this.gotData = true;
        this._userService.activateInActivateUser(value).subscribe(function (a) {
            console.log(a);
            if (a.code == 200) {
                _this.gotData = false;
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()(a.message, "", "success");
                _this.updateChanges(EditingId, a.data.IsBlocked);
            }
        }, function (err) {
            console.log(err);
            var obj = JSON.parse(err._body);
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()(obj.message, "", "error");
            _this.gotData = false;
        });
    };
    ListLogisticComponent.prototype.getAllLogistics = function () {
        var _this = this;
        this._measurementAndDosageSizesService.AllLogistics().subscribe(function (response) {
            console.log(response);
            _this.rowsFilter = response.data;
            _this.tempFilter = response.data;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__["DatatableComponent"])
    ], ListLogisticComponent.prototype, "logisticList", void 0);
    ListLogisticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'logistic',
            template: __webpack_require__("../../../../../src/app/theme/logistic/list-logistic/list-logistic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/logistic/list-logistic/list-logistic.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__services_AddAreaService__["a" /* AddAreaService */], __WEBPACK_IMPORTED_MODULE_5__services_GetChemistDataService__["a" /* GetChemistDataService */], __WEBPACK_IMPORTED_MODULE_3__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_0__services_AddAreaService__["a" /* AddAreaService */],
            __WEBPACK_IMPORTED_MODULE_7__services_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_GetChemistDataService__["a" /* GetChemistDataService */], __WEBPACK_IMPORTED_MODULE_3__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]])
    ], ListLogisticComponent);
    return ListLogisticComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/logistic/list-logistic/list-logistic.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLogisticModule", function() { return ListLogisticModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_logistic_component__ = __webpack_require__("../../../../../src/app/theme/logistic/list-logistic/list-logistic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_logistic_routing_module__ = __webpack_require__("../../../../../src/app/theme/logistic/list-logistic/list-logistic-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ListLogisticModule = (function () {
    function ListLogisticModule() {
    }
    ListLogisticModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_7__list_logistic_routing_module__["a" /* ListLogisticRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_0__list_logistic_component__["a" /* ListLogisticComponent */]]
        })
    ], ListLogisticModule);
    return ListLogisticModule;
}());



/***/ })

});
//# sourceMappingURL=list-logistic.module.chunk.js.map