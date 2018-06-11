webpackJsonp(["add-chemist-manually.module"],{

/***/ "../../../../../src/app/theme/chemist/add-chemist-manually/add-chemist-manually-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddChemistManuallyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_chemist_manually_component__ = __webpack_require__("../../../../../src/app/theme/chemist/add-chemist-manually/add-chemist-manually.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__add_chemist_manually_component__["a" /* AddChemistManuallyComponent */],
        data: {
            title: 'Default',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        }
    }
];
var AddChemistManuallyRoutingModule = (function () {
    function AddChemistManuallyRoutingModule() {
    }
    AddChemistManuallyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AddChemistManuallyRoutingModule);
    return AddChemistManuallyRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/chemist/add-chemist-manually/add-chemist-manually.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <!-- Basic Inputs Validation start -->\r\n    <app-card [title]=\"'Add Chemist Manually'\" [cardOptionBlock]=\"true\">\r\n\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Pharmacy Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"PharmacyName\" id=\"pharmacy_name\" placeholder=\"\">\r\n            <div class=\"messages text-danger\" *ngIf=\"pharmacy_name_id_error\">Pharmacy Name can't be blank</div>\r\n          </div>\r\n      </div>\r\n\r\n        <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Add Logo</label>\r\n        <div class=\"col-sm-8\">\r\n          <form id=\"form1\" runat=\"server\" (click)=\"changeImage()\">\r\n            <input type='file' style=\"width:0,\" (change)=\"changeimage($event)\" id=\"imgInp\" style=\"visibility:hidden; height: 0;\" />\r\n             <img src=\"../../../../assets/images/pharma-avatar.png\"  class=\"pharma-logo\" id=\"blah\"  alt=\"your image\" /> \r\n             \r\n            \r\n          </form>\r\n          <div class=\"messages text-danger\" *ngIf=\"image_error\">Please select an image</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Contact Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"FullName\" id=\"name\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"full_name_id_error\">Name can't be blank</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Email</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Email\" id=\"name\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"email_id_error\">Email can't be blank</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Pharma Commission</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"PharmaCommission\" id=\"name\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"pharma_commission_id_error\">Pharma Commission can't be blank</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Address</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Address\" id=\"address\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"address_id_error\">Address can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Phone Number</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"PhoneNumber\" id=\"phonenumber\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"phonenumber_id_error\">Phone Number can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">City</label>\r\n          <div class=\"col-sm-8\">\r\n            <select name=\"select\" [(ngModel)]=\"City\" (change)=\"getCityAreas()\" class=\"form-control form-control-default\">\r\n              <option *ngFor=\"let city of cities_array\" value=\"{{city.Id}}\">{{city.Name}}</option>\r\n            </select>\r\n            <div class=\"messages text-danger\" *ngIf=\"city_id_error\">City can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Area</label>\r\n          <div class=\"col-sm-8\">\r\n            <select name=\"select\" [(ngModel)]=\"Area\" class=\"form-control form-control-default\">\r\n              <option *ngFor=\"let area of areas_array\" value=\"{{area.Id}}\">{{area.Name}}</option>\r\n            </select>\r\n            <div class=\"messages text-danger\" *ngIf=\"area_id_error\">Area can't be blank</div>\r\n          </div>\r\n        </div>\r\n    \r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Latitude</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" [(ngModel)]=\"Latitude\" class=\"form-control\" id=\"latitude\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"latitude_id_error\">Latitude can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Longitude</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" [(ngModel)]=\"Longitude\" class=\"form-control\" id=\"longitude\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"longitude_id_error\">Longitude can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"preloader3 loader-block\" *ngIf=\"addLoader\">\r\n        <div class=\"circ1\"></div>\r\n        <div class=\"circ2\"></div>\r\n        <div class=\"circ3\"></div>\r\n        <div class=\"circ4\"></div>\r\n      </div>\r\n      <div class=\"form-group row\" *ngIf=\"actionBtn\">\r\n        <label class=\"col-sm-4\"></label>\r\n        <div class=\"col-sm-8\">\r\n          <button type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"addChemistManually()\">Submit</button>\r\n        </div>\r\n      </div>\r\n\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"col-xs-12 col-md-12 col-lg-12\">\r\n      <div class=\"valuesAddress\">\r\n        <input class=\"form-control\" id=\"us7-radius\" name=\"Radius\" type=\"number\" placeholder=\"Enter Radius\" style=\"margin-bottom:20px;\">\r\n        <input class=\"form-control\" id=\"us7-address\" name=\"Address\" type=\"text\" placeholder=\"Enter Address\">\r\n      </div>\r\n      <div id=\"somecomponent\" style=\"margin-top:15px;width: 100%; height: 400px;\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/chemist/add-chemist-manually/add-chemist-manually.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#seo-card1 canvas,\n#seo-card2 canvas {\n  height: 150px !important;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px; }\n  @media only screen and (max-width: 768px) {\n    #seo-card1 canvas,\n    #seo-card2 canvas {\n      padding-bottom: 30px; } }\n\n.pharma-logo {\n  width: 100px; }\n\n#form1 {\n  width: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/chemist/add-chemist-manually/add-chemist-manually.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddChemistManuallyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_GetChemistDataService__ = __webpack_require__("../../../../../src/app/theme/services/GetChemistDataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AddAreaService__ = __webpack_require__("../../../../../src/app/theme/services/AddAreaService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_GetPopularChemistService__ = __webpack_require__("../../../../../src/app/theme/services/GetPopularChemistService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AddChemistService__ = __webpack_require__("../../../../../src/app/theme/services/AddChemistService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_validation_class__ = __webpack_require__("../../../../../src/app/theme/models/validation.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_userService__ = __webpack_require__("../../../../../src/app/theme/services/userService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddChemistManuallyComponent = (function () {
    function AddChemistManuallyComponent(_getChemistDataService, _getPopularChemistService, _AddAreaNameService, _userService, _addChemistServiceService) {
        this._getChemistDataService = _getChemistDataService;
        this._getPopularChemistService = _getPopularChemistService;
        this._AddAreaNameService = _AddAreaNameService;
        this._userService = _userService;
        this._addChemistServiceService = _addChemistServiceService;
        this.FullName = "";
        this.PharmacyName = "";
        this.PhoneNumber = "";
        this.Address = "";
        this.Email = "";
        this.PharmaCommission = 0;
        this.City = 0;
        this.Area = 0;
        this.PharmacistId = 0;
        this.Latitude = 0;
        this.Longitude = 0;
        this.cities_array = [];
        this.areas_array = [];
        this.chemists_array = [];
        this.runner = false;
        this.pharmacist_id_error = false;
        this.image_error = false;
        this.pharmacy_name_id_error = false;
        this.address_id_error = false;
        this.PharmacyName_error = false;
        this.email_id_error = false;
        this.email_invalid_id_error = false;
        this.pharma_commission_id_error = false;
        this.city_id_error = false;
        this.area_id_error = false;
        this.latitude_id_error = false;
        this.longitude_id_error = false;
        this.full_name_id_error = false;
        this.phonenumber_id_error = false;
        this.addLoader = false;
        this.actionBtn = true;
        this.getAllCities();
        this.getChemists();
    }
    AddChemistManuallyComponent.prototype.buildMap = function (lat, lng) {
        var self = this;
        jQuery('#somecomponent').locationpicker({
            location: {
                latitude: +lat || 25.0700,
                longitude: +lng || 67.2848
            },
            radius: 300,
            inputBinding: {
                latitudeInput: self.Latitude,
                longitudeInput: self.Longitude,
                radiusInput: jQuery('#us7-radius'),
                locationNameInput: jQuery('#us7-address'),
            },
            onchanged: function (currentLocation, radius, isMarkerDropped) {
                console.log(currentLocation); //latlon  
                self.Latitude = currentLocation.latitude;
                self.Longitude = currentLocation.longitude;
            },
            enableAutocomplete: true,
            resize: true,
            autosize: true
        });
        self.Latitude = lat;
        self.Longitude = lng;
    };
    AddChemistManuallyComponent.prototype.changeImage = function () {
        $("#imgInp").click();
    };
    AddChemistManuallyComponent.prototype.changeimage = function (elem) {
        this.readURL(elem);
    };
    AddChemistManuallyComponent.prototype.readURL = function (input) {
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
    AddChemistManuallyComponent.prototype.saveImageService = function () {
        var _this = this;
        this._userService.saveImageForPharmacy(this.ProfilePicture).subscribe(function (a) {
            _this.LogoUrl = a.data;
        });
    };
    AddChemistManuallyComponent.prototype.ngOnInit = function () {
        var self = this;
        jQuery('#somecomponent').html("Loading Map");
        navigator.geolocation.getCurrentPosition(showPosition);
        function showPosition(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            $('.map-lat').val(lat);
            $('.map-lon').val(lng);
            self.buildMap(lat, lng);
        }
    };
    AddChemistManuallyComponent.prototype.getAllCities = function () {
        var _this = this;
        this._getChemistDataService.getAllCitiesService().subscribe(function (response) {
            _this.cities_array = response.data;
        });
    }; // End of Get All Cities
    AddChemistManuallyComponent.prototype.getCityAreas = function () {
        var _this = this;
        this._AddAreaNameService.getAreaName(this.City).subscribe(function (response) {
            _this.areas_array = response.data;
        });
    }; // End of Get Areas of City
    AddChemistManuallyComponent.prototype.getChemists = function () {
        var _this = this;
        this._getChemistDataService.getChemistService().subscribe(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                _this.chemists_array.push(response.data[i].Chemist);
            }
        });
    }; // End of Get Chemists
    AddChemistManuallyComponent.prototype.resetAllErrors = function () {
        this.pharmacist_id_error = false;
        this.image_error = false;
        this.pharmacy_name_id_error = false;
        this.address_id_error = false;
        this.PharmacyName_error = false;
        this.email_id_error = false;
        this.email_invalid_id_error = false;
        this.pharma_commission_id_error = false;
        this.city_id_error = false;
        this.area_id_error = false;
        this.latitude_id_error = false;
        this.longitude_id_error = false;
        this.full_name_id_error = false;
        this.phonenumber_id_error = false;
    };
    AddChemistManuallyComponent.prototype.addChemistManually = function () {
        var _this = this;
        this.resetAllErrors();
        var error = false;
        if (this.PharmacyName == "") {
            this.pharmacy_name_id_error = true;
            error = true;
        }
        if (this.FullName == "") {
            this.full_name_id_error = true;
            error = true;
        }
        if (this.LogoUrl == undefined) {
            this.image_error = true;
        }
        if (this.Address == "") {
            this.address_id_error = true;
            error = true;
        }
        if (!__WEBPACK_IMPORTED_MODULE_5__models_validation_class__["a" /* ValidationModel */].validateEmail(this.Email)) {
            $('#email_invalid_id_error').show();
        }
        if (this.Email == "") {
            this.email_id_error = true;
            error = true;
        }
        if (this.PharmaCommission == 0) {
            this.pharma_commission_id_error = true;
            error = true;
        }
        if (this.City == 0) {
            this.city_id_error = true;
            error = true;
        }
        if (this.Area == 0) {
            this.area_id_error = true;
            error = true;
        }
        if (this.Latitude == 0) {
            this.latitude_id_error = true;
            error = true;
        }
        if (this.Longitude == 0) {
            this.longitude_id_error = true;
            error = true;
        }
        if (this.PhoneNumber == "") {
            this.phonenumber_id_error = true;
            error = true;
        }
        if (error) {
        }
        else {
            this.addLoader = true;
            this.actionBtn = false;
            this._addChemistServiceService.addChemistManually(this.PharmacyName, this.Area, this.Email, this.PharmaCommission, this.Address, this.City, this.FullName, this.Longitude, this.Latitude, this.PhoneNumber, this.LogoUrl).subscribe(function (response) {
                console.log(response);
                if (response.code == 200) {
                    __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()(response.message, "Logistic Created Successfully", "success");
                    _this.addLoader = false;
                    _this.actionBtn = true;
                    _this.PharmacyName = "";
                    _this.FullName = "";
                    _this.Address = "";
                    _this.Email = "";
                    _this.PhoneNumber = "";
                    _this.PharmaCommission = 0;
                    _this.City = 0;
                    _this.Area = 0;
                    _this.Latitude = 0;
                    _this.Longitude = 0;
                    _this.LogoUrl = undefined;
                    $("#blah").attr("src", "../../../../assets/images/pharma-avatar.png");
                }
            }, function (err) {
                console.log(err);
                var obj = JSON.parse(err._body);
                __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()(obj.message, "Logistic not created", "error");
            });
        }
    }; //End of Add Chemist
    AddChemistManuallyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-chemist-manually',
            template: __webpack_require__("../../../../../src/app/theme/chemist/add-chemist-manually/add-chemist-manually.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/chemist/add-chemist-manually/add-chemist-manually.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__services_GetChemistDataService__["a" /* GetChemistDataService */], __WEBPACK_IMPORTED_MODULE_2__services_AddAreaService__["a" /* AddAreaService */], __WEBPACK_IMPORTED_MODULE_3__services_GetPopularChemistService__["a" /* GetPopularChemistService */], __WEBPACK_IMPORTED_MODULE_4__services_AddChemistService__["a" /* AddchemistService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_GetChemistDataService__["a" /* GetChemistDataService */],
            __WEBPACK_IMPORTED_MODULE_3__services_GetPopularChemistService__["a" /* GetPopularChemistService */],
            __WEBPACK_IMPORTED_MODULE_2__services_AddAreaService__["a" /* AddAreaService */],
            __WEBPACK_IMPORTED_MODULE_6__services_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_AddChemistService__["a" /* AddchemistService */]])
    ], AddChemistManuallyComponent);
    return AddChemistManuallyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/chemist/add-chemist-manually/add-chemist-manually.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChemistManuallyModule", function() { return AddChemistManuallyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_chemist_manually_routing_module__ = __webpack_require__("../../../../../src/app/theme/chemist/add-chemist-manually/add-chemist-manually-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_chemist_manually_add_chemist_manually_component__ = __webpack_require__("../../../../../src/app/theme/chemist/add-chemist-manually/add-chemist-manually.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_jquery_locationpicker_plugin_master_src_locationpicker_jquery_js__ = __webpack_require__("../../../../../src/assets/jquery-locationpicker-plugin-master/src/locationpicker.jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_jquery_locationpicker_plugin_master_src_locationpicker_jquery_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__assets_jquery_locationpicker_plugin_master_src_locationpicker_jquery_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AddChemistManuallyModule = (function () {
    function AddChemistManuallyModule() {
    }
    AddChemistManuallyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__add_chemist_manually_routing_module__["a" /* AddChemistManuallyRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["b" /* SimpleNotificationsModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__add_chemist_manually_add_chemist_manually_component__["a" /* AddChemistManuallyComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__add_chemist_manually_add_chemist_manually_component__["a" /* AddChemistManuallyComponent */]]
        })
    ], AddChemistManuallyModule);
    return AddChemistManuallyModule;
}());



/***/ })

});
//# sourceMappingURL=add-chemist-manually.module.chunk.js.map