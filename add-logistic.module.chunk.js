webpackJsonp(["add-logistic.module"],{

/***/ "../../../../../src/app/theme/logistic/add-logistic/add-logistic-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLogisticRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_logistic_component__ = __webpack_require__("../../../../../src/app/theme/logistic/add-logistic/add-logistic.component.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_0__add_logistic_component__["a" /* LogisticComponent */],
        data: {
            title: 'Add Logistic',
            status: false
        }
    }
];
var AddLogisticRoutingModule = (function () {
    function AddLogisticRoutingModule() {
    }
    AddLogisticRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */]]
        })
    ], AddLogisticRoutingModule);
    return AddLogisticRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/logistic/add-logistic/add-logistic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <!-- Basic Inputs Validation start -->\r\n    <app-card [title]=\"'Add Logistic'\" [cardOptionBlock]=\"true\">\r\n\r\n\r\n       \r\n\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select ID</label>\r\n        <div class=\"col-sm-8\">\r\n          <select class=\"form-control\" id=\"logisticID\" (change)=\"getLogisticData($event.target.value)\">\r\n            <option selected disabled>Select your Logistic</option>\r\n            <option *ngFor=\"let logistic of pendingLogistics\" value=\"{{logistic.Logistics.Id}}\">{{logistic.Logistics.LogisticsName}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"preloader3 loader-block\" *ngIf=\"fetchDataLoader\">\r\n          <div class=\"circ1\"></div>\r\n          <div class=\"circ2\"></div>\r\n          <div class=\"circ3\"></div>\r\n          <div class=\"circ4\"></div>\r\n      </div>\r\n\r\n\r\n    <div class=\"fields-to-show-later\" *ngIf=\"singleLogisticForm\">\r\n\r\n   \r\n        <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">Add Logo</label>\r\n            <div class=\"col-sm-8\">\r\n              <form id=\"form1\" runat=\"server\" (click)=\"changeImage()\">\r\n                <input type='file' style=\"width:0,\" (change)=\"changeimage($event)\" id=\"imgInp\" style=\"visibility:hidden; height: 0;\" />\r\n                 <img *ngIf=\"SingleLogistic.ProfileURL == null\" src=\"../../../../assets/images/pharma-avatar.png\"  class=\"pharma-logo\" id=\"blah\"  alt=\"your image\" /> \r\n                 <img *ngIf=\"SingleLogistic.ProfileURL != null\" src=\"{{SingleLogistic.ProfileURL}}\"  class=\"pharma-logo\" id=\"blah\"  alt=\"your image\" /> \r\n              </form>\r\n              <div class=\"messages text-danger\" *ngIf=\"image_error\">Please select an image</div>\r\n            </div>\r\n          </div>\r\n          \r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Comapany Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"SingleLogistic.Logistics.LogisticsName\" id=\"SingleLogistic.Logistics.LogisticsName\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"companyname_id_error\">Name can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Contact Person Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"SingleLogistic.Logistics.ContactPersonName\" name=\"SingleLogistic.Logistics.ContactPersonName\" id=\"contactpersonname\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"contact_person_id_error\">Contact Person Name can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Mobile Number</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"SingleLogistic.MobileNumber\" name=\"SingleLogistic.MobileNumber\" id=\"mobilenumber\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"mobilenumber_id_error\">Mobile Number can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Address</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"SingleLogistic.Logistics.Address\" id=\"address\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"address_id_error\">Address can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Email</label>\r\n        <div class=\"col-sm-8\">\r\n          <input readonly type=\"text\" class=\"form-control\" [(ngModel)]=\"SingleLogistic.Email\" name=\"SingleLogistic.Email\" id=\"email\" placeholder=\"\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">City</label>\r\n        <div class=\"col-sm-8\">\r\n          <select  name=\"select\" (change)=\"getCityAreasByThisCity($event.target.value)\" class=\"editable form-control form-control-default\">\r\n            <option  *ngFor=\"let city of cities_array\" value=\"{{city.Id}}\" [selected]=\"city.Id == SingleLogistic.Logistics.CityId\">{{city.Name}}</option>\r\n          </select>\r\n<!--           <div class=\"messages text-danger\" =\"city_id_error\">City can't be blank</div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Area</label>\r\n        <div class=\"col-sm-8\">\r\n          <select  name=\"select\" (change)=\"getAreaSelected($event.target.value)\" name=\"editingLogistic.Area.Name\" class=\"editable form-control form-control-default\">\r\n            <option  *ngFor=\"let area of areas_array\" value=\"{{area.Id}}\" [selected]=\"area.Id == SingleLogistic.Logistics.AreaId\">{{area.Name}}</option>\r\n          </select>\r\n          <!-- <div class=\"messages text-danger\" id=\"area_id_error\">Area can't be blank</div> -->\r\n        </div>\r\n      </div>\r\n\r\n       <div class=\"preloader3 loader-block\" *ngIf=\"addLoader\">\r\n        <div class=\"circ1\"></div>\r\n        <div class=\"circ2\"></div>\r\n        <div class=\"circ3\"></div>\r\n        <div class=\"circ4\"></div>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4\"></label>\r\n        <div class=\"col-sm-8\">\r\n          <button type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"addLogistic()\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/logistic/add-logistic/add-logistic.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#seo-card1 canvas,\n#seo-card2 canvas {\n  height: 150px !important;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px; }\n  @media only screen and (max-width: 768px) {\n    #seo-card1 canvas,\n    #seo-card2 canvas {\n      padding-bottom: 30px; } }\n\n.pharma-logo {\n  width: 80px;\n  margin-top: -25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/logistic/add-logistic/add-logistic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogisticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_AddAreaService__ = __webpack_require__("../../../../../src/app/theme/services/AddAreaService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_MeasurementAndDosageSizesService__ = __webpack_require__("../../../../../src/app/theme/services/MeasurementAndDosageSizesService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_GetChemistDataService__ = __webpack_require__("../../../../../src/app/theme/services/GetChemistDataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validations__ = __webpack_require__("../../../../../src/app/validations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_logisticsService__ = __webpack_require__("../../../../../src/app/theme/services/logisticsService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_pendingLogistics__ = __webpack_require__("../../../../../src/app/theme/models/pendingLogistics.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_userService__ = __webpack_require__("../../../../../src/app/theme/services/userService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LogisticComponent = (function () {
    function LogisticComponent(_AddAreaNameService, _logisticsService, ref, _userService, _getChemistDataService, _measurementAndDosageSizesService) {
        this._AddAreaNameService = _AddAreaNameService;
        this._logisticsService = _logisticsService;
        this.ref = ref;
        this._userService = _userService;
        this._getChemistDataService = _getChemistDataService;
        this._measurementAndDosageSizesService = _measurementAndDosageSizesService;
        this.CompanyName = "";
        this.ContactPersonName = "";
        this.addLoader = false;
        this.pendingLogistics = [];
        this.Address = "";
        this.Email = "";
        this.MobileNumber = 0;
        this.City = 0;
        this.Area = 0;
        this.companyname_id_error = false;
        this.contact_person_id_error = false;
        this.mobilenumber_id_error = false;
        this.address_id_error = false;
        this.fetchDataLoader = false;
        this.image_error = false;
        this.cities_array = [];
        this.areas_array = [];
        this.chemists_array = [];
        this.rowsFilter = [];
        this.tempFilter = [];
        this.runner = false;
        this.singleLogisticForm = false;
        this.validations = new __WEBPACK_IMPORTED_MODULE_6__validations__["a" /* Validations */]();
    }
    LogisticComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.SingleLogistic = new __WEBPACK_IMPORTED_MODULE_8__models_pendingLogistics__["a" /* PendingLogistics */]();
        this._logisticsService.getListOfPendingLogistics().subscribe(function (a) {
            _this.pendingLogistics = a.data;
        });
    };
    LogisticComponent.prototype.getLogisticData = function (elem) {
        var _this = this;
        this.fetchDataLoader = true;
        this.singleLogisticForm = false;
        this._logisticsService.getDetailsForThisLogistic(elem).subscribe(function (a) {
            console.log(a);
            if (a.code == 200) {
                _this.SingleLogistic = a.data;
                _this.singleLogisticForm = true;
                _this.fetchDataLoader = false;
                _this.getAllCities();
                _this.getCityAreas();
            }
        });
    };
    LogisticComponent.prototype.changeImage = function () {
        $("#imgInp").click();
    };
    LogisticComponent.prototype.changeimage = function (elem) {
        this.readURL(elem);
    };
    LogisticComponent.prototype.readURL = function (input) {
        var reader, target;
        reader = new FileReader();
        input = document.getElementById('imgInp');
        if (input.files && input.files[0]) {
            // var reader = new FileReader();
            var self = this;
            reader.onload = function (e) {
                console.log(e);
                $('#blah').attr('src', e.target.result);
                self.ProfilePicture = input.files[0];
                $("#blah").css("width", "80px");
                self.saveImageService();
            };
            reader.readAsDataURL(input.files[0]);
        }
    };
    LogisticComponent.prototype.saveImageService = function () {
        var _this = this;
        this._userService.saveImageForPharmacy(this.ProfilePicture).subscribe(function (a) {
            console.log(a);
            _this.LogoUrl = a.data;
            _this.SingleLogistic.ProfileURL = a.data;
        });
    };
    LogisticComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log(selected);
    };
    LogisticComponent.prototype.onActivate = function (event) { };
    LogisticComponent.prototype.updateFilter = function (event) {
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
    LogisticComponent.prototype.getAllCities = function () {
        var _this = this;
        this._getChemistDataService.getAllCitiesService().subscribe(function (response) {
            _this.cities_array = response.data;
        });
    }; // End of Get All Cities
    LogisticComponent.prototype.getCityAreas = function () {
        var _this = this;
        this._AddAreaNameService.getAreaName(this.SingleLogistic.Logistics.CityId).subscribe(function (response) {
            _this.areas_array = response.data;
        });
    }; // End of Get Areas of City
    LogisticComponent.prototype.getCityAreasByThisCity = function (elem) {
        this.SingleLogistic.Logistics.CityId = elem;
        this.getCityAreas();
    };
    LogisticComponent.prototype.getAreaSelected = function (ele) {
        this.SingleLogistic.Logistics.AreaId = ele;
    };
    LogisticComponent.prototype.resetValues = function () {
        this.companyname_id_error = false;
        this.contact_person_id_error = false;
        this.mobilenumber_id_error = false;
        this.address_id_error = false;
        this.image_error = false;
    };
    LogisticComponent.prototype.addLogistic = function () {
        var _this = this;
        var error = false;
        this.resetValues();
        if (this.SingleLogistic.ProfileURL == undefined) {
            this.image_error = true;
            error = true;
        }
        if (!this.validations.verifyNameInputs(this.SingleLogistic.Logistics.LogisticsName)) {
            error = true;
            this.companyname_id_error = true;
        }
        if (!this.validations.verifyNameInputs(this.SingleLogistic.Logistics.ContactPersonName)) {
            error = true;
            this.contact_person_id_error = true;
        }
        if (!this.validations.verifyNameInputs(this.SingleLogistic.MobileNumber)) {
            error = true;
            this.mobilenumber_id_error = true;
        }
        if (!this.validations.verifyNameInputs(this.SingleLogistic.Logistics.Address)) {
            error = true;
            this.address_id_error = true;
        }
        if (error) {
        }
        else {
            this.addLoader = true;
            this._logisticsService.addLogisticAutomatically(this.SingleLogistic).subscribe(function (Response) {
                console.log(Response);
                if (Response.code = 200) {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()(Response.message, "Logistic Created Successfully", "success");
                    _this.addLoader = false;
                    _this.singleLogisticForm = false;
                    $('#logisticID').prop('selectedIndex', 0);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()(Response.message, "Logistic not created", "error");
                    _this.addLoader = false;
                }
            }, function (err) {
                console.log(err);
                var obj = JSON.parse(err._body);
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()(obj.message, "Logistic not created", "error");
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__["DatatableComponent"])
    ], LogisticComponent.prototype, "logisticList", void 0);
    LogisticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'logistic',
            template: __webpack_require__("../../../../../src/app/theme/logistic/add-logistic/add-logistic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/logistic/add-logistic/add-logistic.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__services_AddAreaService__["a" /* AddAreaService */], __WEBPACK_IMPORTED_MODULE_5__services_GetChemistDataService__["a" /* GetChemistDataService */], __WEBPACK_IMPORTED_MODULE_3__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */], __WEBPACK_IMPORTED_MODULE_7__services_logisticsService__["a" /* LogisticsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_AddAreaService__["a" /* AddAreaService */],
            __WEBPACK_IMPORTED_MODULE_7__services_logisticsService__["a" /* LogisticsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_9__services_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_GetChemistDataService__["a" /* GetChemistDataService */], __WEBPACK_IMPORTED_MODULE_3__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]])
    ], LogisticComponent);
    return LogisticComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/logistic/add-logistic/add-logistic.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLogisticModule", function() { return AddLogisticModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_logistic_routing_module__ = __webpack_require__("../../../../../src/app/theme/logistic/add-logistic/add-logistic-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_logistic_component__ = __webpack_require__("../../../../../src/app/theme/logistic/add-logistic/add-logistic.component.ts");
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








var AddLogisticModule = (function () {
    function AddLogisticModule() {
    }
    AddLogisticModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__add_logistic_routing_module__["a" /* AddLogisticRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__add_logistic_component__["a" /* LogisticComponent */]]
        })
    ], AddLogisticModule);
    return AddLogisticModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/models/pendingLogistics.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingLogistics; });
var PendingLogistics = (function () {
    function PendingLogistics() {
    }
    return PendingLogistics;
}());



/***/ }),

/***/ "../../../../../src/app/theme/services/logisticsService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogisticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ServiceUrl__ = __webpack_require__("../../../../../src/app/theme/services/ServiceUrl.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogisticsService = (function () {
    function LogisticsService(http) {
        this.http = http;
        this.urlService = new __WEBPACK_IMPORTED_MODULE_3__ServiceUrl__["a" /* ServiceUrl */]();
    }
    LogisticsService.prototype.getListOfPendingLogistics = function () {
        return this.http.get(this.urlService.baseUrl + "Logistics/getListOfPendingLogistics")
            .map(function (res) { return res.json(); });
    };
    LogisticsService.prototype.getDetailsForThisLogistic = function (logisticId) {
        return this.http.get(this.urlService.baseUrl + "Logistics/getLogisticsByLogisticId?logisticsId=" + logisticId)
            .map(function (res) { return res.json(); });
    };
    LogisticsService.prototype.addLogisticAutomatically = function (SingleLogistic) {
        console.log(SingleLogistic);
        var data;
        data = { LogisticsId: SingleLogistic.Logistics.Id, ContactPersonName: SingleLogistic.Logistics.ContactPersonName, CompanyName: SingleLogistic.Logistics.LogisticsName, Address: SingleLogistic.Logistics.Address, CityId: SingleLogistic.Logistics.CityId, AreaId: SingleLogistic.Logistics.AreaId, MobileNumber: SingleLogistic.MobileNumber, LogoUrl: SingleLogistic.ProfileURL };
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "Logistics/addLogisticUser", data, options)
            .map(function (res) { return res.json(); });
    };
    LogisticsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LogisticsService);
    return LogisticsService;
}());



/***/ })

});
//# sourceMappingURL=add-logistic.module.chunk.js.map