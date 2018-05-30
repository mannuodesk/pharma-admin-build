webpackJsonp(["add-logistic-manually.module"],{

/***/ "../../../../../src/app/theme/logistic/add-logistic-manually/add-logistic-manually-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLogisticManuallyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_logistic_manually_component__ = __webpack_require__("../../../../../src/app/theme/logistic/add-logistic-manually/add-logistic-manually.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__add_logistic_manually_component__["a" /* AddLogisticManuallyComponent */],
        data: {
            title: 'Add Logistic manually',
            status: false
        }
    }
];
var AddLogisticManuallyRoutingModule = (function () {
    function AddLogisticManuallyRoutingModule() {
    }
    AddLogisticManuallyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AddLogisticManuallyRoutingModule);
    return AddLogisticManuallyRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/logistic/add-logistic-manually/add-logistic-manually.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <!-- Basic Inputs Validation start -->\r\n    <app-card [title]=\"'Add Logistic Manually'\" [cardOptionBlock]=\"true\">\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Add Logo</label>\r\n        <div class=\"col-sm-8\">\r\n          <form id=\"form1\" runat=\"server\" (click)=\"changeImage()\">\r\n            <input type='file' style=\"width:0,\" (change)=\"changeimage($event)\" id=\"imgInp\" style=\"visibility:hidden; height: 0;\" />\r\n             <img src=\"{{defaultImage}}\"  class=\"pharma-logo\" id=\"blah\"  alt=\"your image\" /> \r\n             \r\n            \r\n          </form>\r\n          <div class=\"messages text-danger\" *ngIf=\"image_error\">Please select an image</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Comapany Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"CompanyName\" id=\"name\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"CompanyNameError\">Name can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Contact Person Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ContactPersonName\" id=\"contactpersonname\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"ContactPersonNameError\">Contact Person Name can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Mobile Number</label>\r\n        <div class=\"col-sm-8\">\r\n          <input maxlength=\"11\" type=\"text\" class=\"form-control\" [(ngModel)]=\"MobileNumber\" id=\"mobilenumber\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"MobileNumberError\">Mobile Number can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Address</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Address\" id=\"address\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"AddressError\">Address can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Email</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Email\" id=\"email\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"EmailEmptyError\">Email can't be blank</div>\r\n          <div class=\"messages text-danger\" *ngIf=\"EmailValidError\">Invalid Email</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">City</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\"  (change)=\"getCityAreas($event.target.value)\" class=\"form-control form-control-default\">\r\n            <option selected disabled>Select City</option>\r\n            <option *ngFor=\"let city of cities_array\" value=\"{{city.Id}}\">{{city.Name}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" *ngIf=\"CityError\">City can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Area</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\"  (change)=\"getAreaSelected($event.target.value)\" class=\"form-control form-control-default\">\r\n            <option selected disabled>Select Area</option>\r\n            <option *ngFor=\"let area of areas_array\" value=\"{{area.Id}}\">{{area.Name}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" *ngIf=\"AreaError\">Area can't be blank</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"preloader3 loader-block\" *ngIf=\"loaderShow\">\r\n        <div class=\"circ1\"></div>\r\n        <div class=\"circ2\"></div>\r\n        <div class=\"circ3\"></div>\r\n        <div class=\"circ4\"></div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4\"></label>\r\n        <div class=\"col-sm-8\" *ngIf=\"actionBtn\">\r\n          <button type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"addLogistic()\">Submit</button>\r\n        </div>\r\n      </div>\r\n\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/logistic/add-logistic-manually/add-logistic-manually.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#seo-card1 canvas,\n#seo-card2 canvas {\n  height: 150px !important;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px; }\n  @media only screen and (max-width: 768px) {\n    #seo-card1 canvas,\n    #seo-card2 canvas {\n      padding-bottom: 30px; } }\n\n.pharma-logo {\n  width: 100px; }\n\n#loader {\n  display: none;\n  margin: 50px; }\n\n#form1 {\n  width: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/logistic/add-logistic-manually/add-logistic-manually.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLogisticManuallyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_AddAreaService__ = __webpack_require__("../../../../../src/app/theme/services/AddAreaService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_MeasurementAndDosageSizesService__ = __webpack_require__("../../../../../src/app/theme/services/MeasurementAndDosageSizesService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_GetChemistDataService__ = __webpack_require__("../../../../../src/app/theme/services/GetChemistDataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validations__ = __webpack_require__("../../../../../src/app/validations.ts");
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








var AddLogisticManuallyComponent = (function () {
    function AddLogisticManuallyComponent(_AddAreaNameService, _userService, _getChemistDataService, _measurementAndDosageSizesService) {
        this._AddAreaNameService = _AddAreaNameService;
        this._userService = _userService;
        this._getChemistDataService = _getChemistDataService;
        this._measurementAndDosageSizesService = _measurementAndDosageSizesService;
        this.CompanyName = "";
        this.ContactPersonName = "";
        this.Address = "";
        this.Email = "";
        this.cities_array = [];
        this.areas_array = [];
        this.chemists_array = [];
        this.rowsFilter = [];
        this.tempFilter = [];
        this.runner = false;
        this.CompanyNameError = false;
        this.ContactPersonNameError = false;
        this.MobileNumberError = false;
        this.AddressError = false;
        this.EmailEmptyError = false;
        this.EmailValidError = false;
        this.CityError = false;
        this.AreaError = false;
        this.loaderShow = false;
        this.image_error = false;
        this.actionBtn = true;
        this.ProfilePicture = File;
        this.defaultImage = "../../../../assets/images/pharma-avatar.png";
        this.getAllCities();
        this.Validations = new __WEBPACK_IMPORTED_MODULE_6__validations__["a" /* Validations */]();
    }
    AddLogisticManuallyComponent.prototype.ngOnInit = function () {
    };
    AddLogisticManuallyComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log(selected);
    };
    AddLogisticManuallyComponent.prototype.onActivate = function (event) { };
    AddLogisticManuallyComponent.prototype.updateFilter = function (event) {
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
    AddLogisticManuallyComponent.prototype.getAllCities = function () {
        var _this = this;
        this._getChemistDataService.getAllCitiesService().subscribe(function (response) {
            _this.cities_array = response.data;
        });
    }; // End of Get All Cities
    AddLogisticManuallyComponent.prototype.getCityAreas = function (elem) {
        var _this = this;
        this.City = elem;
        this._AddAreaNameService.getAreaName(this.City).subscribe(function (response) {
            _this.areas_array = response.data;
        });
    }; // End of Get Areas of City
    AddLogisticManuallyComponent.prototype.getAreaSelected = function (elem) {
        this.Area = elem;
    };
    AddLogisticManuallyComponent.prototype.resetErrorFields = function () {
        this.CompanyNameError = false;
        this.ContactPersonNameError = false;
        this.MobileNumberError = false;
        this.AddressError = false;
        this.EmailEmptyError = false;
        this.EmailValidError = false;
        this.CityError = false;
        this.AreaError = false;
        this.image_error = false;
    };
    AddLogisticManuallyComponent.prototype.changeImage = function () {
        $("#imgInp").click();
    };
    AddLogisticManuallyComponent.prototype.changeimage = function (elem) {
        this.readURL(elem);
    };
    AddLogisticManuallyComponent.prototype.readURL = function (input) {
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
                $("#blah").css("width", "50px");
                self.saveImageService();
            };
            reader.readAsDataURL(input.files[0]);
        }
    };
    AddLogisticManuallyComponent.prototype.saveImageService = function () {
        var _this = this;
        this._userService.saveImageForPharmacy(this.ProfilePicture).subscribe(function (a) {
            console.log(a);
            _this.LogoUrl = a.data;
        });
    };
    AddLogisticManuallyComponent.prototype.emptyForm = function () {
        this.CompanyName = undefined;
        this.ContactPersonName = undefined;
        this.MobileNumber = undefined;
        this.LogoUrl = undefined;
        this.defaultImage = "../../../../assets/images/pharma-avatar.png";
    };
    AddLogisticManuallyComponent.prototype.addLogistic = function () {
        /*  var body = {};
          body = {
           CompanyName: this.CompanyName,
           ContactPersonName: this.ContactPersonName,
           MobileNumber: this.MobileNumber,
           Email: this.Email,
           CityId: this.City,
           AreaId: this.Area,
           Address: this.Address,
           UserRole:5
         } */
        var _this = this;
        console.log(this.Area);
        this.resetErrorFields();
        var error = false;
        if (!this.Validations.verifyNameInputs(this.Email)) {
            error = true;
            this.EmailEmptyError = true;
        }
        else {
            if (!this.Validations.validateEmail(this.Email)) {
                error = true;
                this.EmailEmptyError = false;
                this.EmailValidError = true;
            }
        }
        if (!this.Validations.verifyNameInputs(this.CompanyName)) {
            error = true;
            this.CompanyNameError = true;
        }
        if (!this.Validations.verifyNameInputs(this.ContactPersonName)) {
            error = true;
            this.ContactPersonNameError = true;
        }
        if (this.LogoUrl == undefined) {
            error = true;
            this.image_error = true;
        }
        if (!this.Validations.verifyNameInputs(this.MobileNumber)) {
            error = true;
            this.MobileNumberError = true;
        }
        if (!this.Validations.verifyNameInputs(this.Address)) {
            error = true;
            this.AddressError = true;
        }
        if (this.City == undefined) {
            error = true;
            this.CityError = true;
        }
        if (this.Area == undefined) {
            error = true;
            this.AreaError = true;
        }
        if (error) {
        }
        else {
            this.loaderShow = true;
            this.actionBtn = false;
            this._measurementAndDosageSizesService.addLogistic(this.CompanyName, this.ContactPersonName, this.MobileNumber, this.Email, this.City, this.Area, this.Address, this.LogoUrl, 5).subscribe(function (Response) {
                console.log(Response);
                if (Response.code == 200) {
                    _this.loaderShow = false;
                    _this.actionBtn = true;
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()(Response.message, "Logistic Created Successfully", "success");
                }
                else {
                    _this.loaderShow = false;
                    _this.actionBtn = true;
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()(Response.message, "Logistic was not created", "error");
                    _this.emptyForm();
                }
            }, function (err) {
                var obj = JSON.parse(err._body);
                _this.loaderShow = false;
                _this.actionBtn = true;
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()(obj.message, "Logistic was not created", "success");
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__["DatatableComponent"])
    ], AddLogisticManuallyComponent.prototype, "logisticList", void 0);
    AddLogisticManuallyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'add-logistic-manually',
            template: __webpack_require__("../../../../../src/app/theme/logistic/add-logistic-manually/add-logistic-manually.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/logistic/add-logistic-manually/add-logistic-manually.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_AddAreaService__["a" /* AddAreaService */], __WEBPACK_IMPORTED_MODULE_5__services_GetChemistDataService__["a" /* GetChemistDataService */], __WEBPACK_IMPORTED_MODULE_3__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */], __WEBPACK_IMPORTED_MODULE_7__services_userService__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_AddAreaService__["a" /* AddAreaService */],
            __WEBPACK_IMPORTED_MODULE_7__services_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_GetChemistDataService__["a" /* GetChemistDataService */], __WEBPACK_IMPORTED_MODULE_3__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]])
    ], AddLogisticManuallyComponent);
    return AddLogisticManuallyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/logistic/add-logistic-manually/add-logistic-manually.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLogisticManuallyModule", function() { return AddLogisticManuallyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_logistic_manually_component__ = __webpack_require__("../../../../../src/app/theme/logistic/add-logistic-manually/add-logistic-manually.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_logistic_manually_routing_module__ = __webpack_require__("../../../../../src/app/theme/logistic/add-logistic-manually/add-logistic-manually-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AddLogisticManuallyModule = (function () {
    function AddLogisticManuallyModule() {
    }
    AddLogisticManuallyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_7__add_logistic_manually_routing_module__["a" /* AddLogisticManuallyRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__add_logistic_manually_component__["a" /* AddLogisticManuallyComponent */]]
        })
    ], AddLogisticManuallyModule);
    return AddLogisticManuallyModule;
}());



/***/ })

});
//# sourceMappingURL=add-logistic-manually.module.chunk.js.map