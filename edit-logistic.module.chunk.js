webpackJsonp(["edit-logistic.module"],{

/***/ "../../../../../src/app/theme/logistic/edit-logistic/edit-logistic-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditLogisticRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_logistic_component__ = __webpack_require__("../../../../../src/app/theme/logistic/edit-logistic/edit-logistic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__edit_logistic_component__["a" /* EditLogisticComponent */],
        data: {
            title: 'Edit Logistic',
            status: false
        }
    }
];
var EditLogisticRoutingModule = (function () {
    function EditLogisticRoutingModule() {
    }
    EditLogisticRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], EditLogisticRoutingModule);
    return EditLogisticRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/logistic/edit-logistic/edit-logistic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-6\" style=\"position: relative\">\r\n    <!-- Basic Inputs Validation start -->\r\n    <app-card [title]=\"'Edit Logistic'\" [cardOptionBlock]=\"true\">\r\n\r\n      <button class=\"absolute-button\" (click)=\"makeEditable()\">\r\n        <i class=\"fa fa-pencil\"></i>\r\n      </button>\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Comapany Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <input readonly type=\"text\" class=\"form-control editable\" [(ngModel)]=\"editingLogistic.LogisticsName\" name=\"editingLogistic.LogisticsName\" id=\"name\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" id=\"companyname_id_error\">Name can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Contact Person Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <input readonly type=\"text\" class=\"form-control editable\" [(ngModel)]=\"editingLogistic.ContactPersonName\" name=\"editingLogistic.ContactPersonName\" id=\"contactpersonname\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" id=\"contact_person_id_error\">Contact Person Name can't be blank</div>\r\n        </div>\r\n      </div>\r\n    <!--   <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Mobile Number</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editingLogistic.ContactPersonName\"  name=\"editingLogistic.ContactPersonName\" id=\"mobilenumber\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" id=\"mobilenumber_id_error\">Mobile Number can't be blank</div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Address</label>\r\n        <div class=\"col-sm-8\">\r\n          <input readonly type=\"text\" class=\"form-control editable\" [(ngModel)]=\"editingLogistic.Address\"  name=\"editingLogistic.Address\" id=\"address\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" id=\"address_id_error\">Address can't be blank</div>\r\n        </div>\r\n      </div>\r\n     <!--  <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Email</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editingLogistic.Address\"  name=\"editingLogistic.Address\" id=\"email\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" id=\"email_id_error\">Email can't be blank</div>\r\n          <div class=\"messages text-danger\" id=\"email_invalid_id_error\">Invalid Email</div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">City</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\"  (change)=\"getCityAreasByThisCity($event.target.value)\" class=\"editable form-control form-control-default\">\r\n            <option [selected]=\"city.Id == editingLogistic.CityId\" *ngFor=\"let city of cities_array\" value=\"{{city.Id}}\">{{city.Name}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"city_id_error\">City can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Area</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\"  (change)=\"getAreaSelected($event.target.value)\"  name=\"editingLogistic.Area.Name\"  class=\"editable form-control form-control-default\">\r\n            <option [selected]=\"area.Id == editingLogistic.AreaId\" *ngFor=\"let area of areas_array\" value=\"{{area.Id}}\">{{area.Name}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"area_id_error\">Area can't be blank</div>\r\n        </div>\r\n      </div>   \r\n    \r\n      <!-- <div class=\"preloader3 loader-block\" id=\"loader\">\r\n        <div class=\"circ1\"></div>\r\n        <div class=\"circ2\"></div>\r\n        <div class=\"circ3\"></div>\r\n        <div class=\"circ4\"></div>\r\n      </div> -->\r\n      <div class=\"form-group row\" *ngIf=\"editingSaveBtn\">\r\n        <label class=\"col-sm-4\"></label>\r\n        <div class=\"col-sm-8\">\r\n          <button type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"updateLogistic()\">Update</button>\r\n        </div>\r\n      </div>\r\n\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/logistic/edit-logistic/edit-logistic.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#seo-card1 canvas,\n#seo-card2 canvas {\n  height: 150px !important;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px; }\n  @media only screen and (max-width: 768px) {\n    #seo-card1 canvas,\n    #seo-card2 canvas {\n      padding-bottom: 30px; } }\n\n.text-danger {\n  display: none; }\n\n.preloader3 {\n  height: 50px !important;\n  display: none; }\n\n.absolute-button {\n  position: absolute;\n  right: 35px;\n  background: #48ddae;\n  color: white;\n  border: none;\n  top: 35px; }\n\n.absolute-button i {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/logistic/edit-logistic/edit-logistic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditLogisticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_AddAreaService__ = __webpack_require__("../../../../../src/app/theme/services/AddAreaService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_MeasurementAndDosageSizesService__ = __webpack_require__("../../../../../src/app/theme/services/MeasurementAndDosageSizesService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_GetChemistDataService__ = __webpack_require__("../../../../../src/app/theme/services/GetChemistDataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_logitic_Model__ = __webpack_require__("../../../../../src/app/theme/models/logitic.Model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditLogisticComponent = (function () {
    function EditLogisticComponent(activatedRoute, _AddAreaNameService, _getChemistDataService, _measurementAndDosageSizesService) {
        this.activatedRoute = activatedRoute;
        this._AddAreaNameService = _AddAreaNameService;
        this._getChemistDataService = _getChemistDataService;
        this._measurementAndDosageSizesService = _measurementAndDosageSizesService;
        this.CompanyName = "";
        this.ContactPersonName = "";
        this.Address = "";
        this.Email = "";
        this.MobileNumber = 0;
        this.City = 0;
        this.Area = 0;
        this.editingSaveBtn = false;
        this.cities_array = [];
        this.areas_array = [];
        this.chemists_array = [];
        this.rowsFilter = [];
        this.tempFilter = [];
        this.runner = false;
        this.editingLogistic = new __WEBPACK_IMPORTED_MODULE_6__models_logitic_Model__["a" /* LogisticsModel */]();
        this.getAllCities();
    }
    EditLogisticComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.LogisticObject = params['id'];
            console.log(JSON.parse(localStorage.getItem("editLogistic")));
            _this.editingLogistic = JSON.parse(localStorage.getItem("editLogistic"));
            _this.getCityAreas();
        });
    };
    EditLogisticComponent.prototype.makeEditable = function () {
        this.editingSaveBtn = true;
        jQuery(".editable").prop("readonly", false);
    };
    EditLogisticComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log(selected);
    };
    EditLogisticComponent.prototype.onActivate = function (event) { };
    EditLogisticComponent.prototype.updateFilter = function (event) {
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
    EditLogisticComponent.prototype.getAllCities = function () {
        var _this = this;
        this._getChemistDataService.getAllCitiesService().subscribe(function (response) {
            _this.cities_array = response.data;
        });
    }; // End of Get All Cities
    EditLogisticComponent.prototype.getCityAreasByThisCity = function (elem) {
        var _this = this;
        this.editingLogistic.CityId = elem;
        this._AddAreaNameService.getAreaName(this.editingLogistic.CityId).subscribe(function (response) {
            _this.areas_array = response.data;
        });
    };
    EditLogisticComponent.prototype.getAreaSelected = function (elem) {
        this.editingLogistic.AreaId = elem;
        console.log(this.editingLogistic.CityId, this.editingLogistic.AreaId);
    };
    EditLogisticComponent.prototype.getCityAreas = function () {
        var _this = this;
        this._AddAreaNameService.getAreaName(this.editingLogistic.CityId).subscribe(function (response) {
            _this.areas_array = response.data;
        });
    }; // End of Get Areas of City
    EditLogisticComponent.prototype.updateLogistic = function () {
        var body = {};
        body = {
            CompanyName: this.editingLogistic.LogisticsName,
            ContactPersonName: this.editingLogistic.ContactPersonName,
            /*       MobileNumber: this.editingLogistic.MobileNumber, */
            CityId: this.editingLogistic.CityId,
            AreaId: this.editingLogistic.AreaId,
            Address: this.editingLogistic.Address,
            UserRole: 5
        };
        console.log(body);
        this._measurementAndDosageSizesService.updateLogistic(body).subscribe(function (Response) {
            console.log(Response);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__["DatatableComponent"])
    ], EditLogisticComponent.prototype, "logisticList", void 0);
    EditLogisticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'logistic',
            template: __webpack_require__("../../../../../src/app/theme/logistic/edit-logistic/edit-logistic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/logistic/edit-logistic/edit-logistic.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_AddAreaService__["a" /* AddAreaService */], __WEBPACK_IMPORTED_MODULE_5__services_GetChemistDataService__["a" /* GetChemistDataService */], __WEBPACK_IMPORTED_MODULE_3__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__services_AddAreaService__["a" /* AddAreaService */],
            __WEBPACK_IMPORTED_MODULE_5__services_GetChemistDataService__["a" /* GetChemistDataService */], __WEBPACK_IMPORTED_MODULE_3__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]])
    ], EditLogisticComponent);
    return EditLogisticComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/logistic/edit-logistic/edit-logistic.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLogisticModule", function() { return EditLogisticModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_logistic_routing_module__ = __webpack_require__("../../../../../src/app/theme/logistic/edit-logistic/edit-logistic-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_logistic_component__ = __webpack_require__("../../../../../src/app/theme/logistic/edit-logistic/edit-logistic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditLogisticModule = (function () {
    function EditLogisticModule() {
    }
    EditLogisticModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__edit_logistic_routing_module__["a" /* EditLogisticRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__edit_logistic_component__["a" /* EditLogisticComponent */]]
        })
    ], EditLogisticModule);
    return EditLogisticModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/models/logitic.Model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogisticsModel; });
var LogisticsModel = (function () {
    function LogisticsModel() {
    }
    return LogisticsModel;
}());



/***/ })

});
//# sourceMappingURL=edit-logistic.module.chunk.js.map