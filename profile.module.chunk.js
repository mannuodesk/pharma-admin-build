webpackJsonp(["profile.module"],{

/***/ "../../../../../src/app/theme/dashboard/profile/profile-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_component__ = __webpack_require__("../../../../../src/app/theme/dashboard/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



__WEBPACK_IMPORTED_MODULE_2__profile_component__["a" /* ProfileComponent */];
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__profile_component__["a" /* ProfileComponent */],
        data: {
            title: 'Default',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        }
    }
];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/dashboard/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"gotData\">\r\n    <div class=\"col-sm-6\" style=\"position: relative\">\r\n\r\n     <div class=\"empty\" *ngIf=\"session_obj.UserRole == 2\">\r\n        <app-card [title]=\"'Edit Information'\" [cardOptionBlock]=\"true\">\r\n\r\n            <button class=\"absolute-button\" (click)=\"makeEditable()\">\r\n                <i class=\"fa fa-pencil\"></i>\r\n            </button>\r\n\r\n            <div class=\"row\" style=\"    padding: 20px;\">\r\n               \r\n\r\n                    \r\n\r\n                       \r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-sm-4 col-form-label\">Pharma Logo</label>\r\n                            <div class=\"col-sm-8\">\r\n                                <form id=\"form1\" runat=\"server\" (click)=\"changeImage()\">\r\n                                    <input type='file' class=\"editable\" style=\"width:0,\" (change)=\"changeimage($event)\" id=\"imgInp\" style=\"visibility:hidden; height: 0;\" readonly/>\r\n                                    <img src=\"{{session_obj.ProfileURL}}\"  class=\"pharma-logo\" id=\"blah\" alt=\"your image\" />\r\n\r\n\r\n                                </form>\r\n                                <div class=\"messages text-danger\" *ngIf=\"emptyImage\">Please select an image</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-sm-4 col-form-label\">Pharmacy Name</label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input type=\"text\" class=\"editable form-control\" [(ngModel)]=\"session_obj.Chemist.PharmacyName\" id=\"name\" placeholder=\"\" readonly>\r\n                                <div class=\"messages text-danger\" *ngIf=\"emptyName\">Name can't be blank</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-sm-4 col-form-label\">Contact Person</label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input type=\"text\" class=\"editable form-control\" [(ngModel)]=\"session_obj.Chemist.ContactPersonName\" id=\"contactperson\" placeholder=\"\" readonly>\r\n                                <div class=\"messages text-danger\" *ngIf=\"emptyContactPerson\">Address can't be blank</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-sm-4 col-form-label\">Mobile Number</label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input type=\"number\" maxlength=\"11\" class=\"editable form-control\" [(ngModel)]=\"session_obj.MobileNumber\" id=\"mobileNumber\" placeholder=\"\" readonly>\r\n                                <div class=\"messages text-danger\" *ngIf=\"emptyContactPerson\">Address can't be blank</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-sm-4 col-form-label\">Pharmacy Commission</label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input type=\"number\" class=\"editable form-control\" [(ngModel)]=\"session_obj.Chemist.PharmaCommission\" id=\"commission\" placeholder=\"\" readonly>\r\n                                <div class=\"messages text-danger\" *ngIf=\"emptyCommission\">Commission can't be blank</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                       \r\n                        \r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-sm-4 col-form-label\">Pharmacy Address</label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input type=\"text\" class=\"editable form-control\" [(ngModel)]=\"session_obj.Chemist.Address\" id=\"address\" placeholder=\"\" readonly>\r\n                                <div class=\"messages text-danger\" *ngIf=\"emptyAddress\">Address can't be blank</div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-sm-4 col-form-label\">City</label>\r\n                            <div class=\"col-sm-8\">\r\n                              <select disabled name=\"select\" (change)=\"getCityAreasByThisCity($event.target.value)\" class=\"editable-select form-control form-control-default\">\r\n                                <option [selected]=\"city.Id == session_obj.Chemist.CityId\" *ngFor=\"let city of cities_array\" value=\"{{city.Id}}\">{{city.Name}}</option>\r\n                              </select>\r\n                            \r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group row\">\r\n                            <label class=\"col-sm-4 col-form-label\">Area</label>\r\n                            <div class=\"col-sm-8\">\r\n                              <select disabled name=\"select\" (change)=\"getAreaSelected($event.target.value)\" name=\"editingLogistic.Area.Name\" class=\"editable-select form-control form-control-default\">\r\n                                <option [selected]=\"area.Id == session_obj.Chemist.AreaId\" *ngFor=\"let area of areas_array\" value=\"{{area.Id}}\">{{area.Name}}</option>\r\n                              </select>\r\n                              \r\n                            </div>\r\n                          </div>\r\n\r\n\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-sm-4 col-form-label\">Latitude</label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input readonly type=\"number\" [(ngModel)]=\"session_obj.Chemist.Latitude\" name=\"session_obj.Chemist.Latitude\" class=\"form-control editable\" id=\"latitude\" placeholder=\"\">\r\n                                <div class=\"messages text-danger\" *ngIf=\"emptyLatitude\">Latitude can't be blank</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-sm-4 col-form-label\">Longitude</label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input readonly type=\"number\" [(ngModel)]=\"session_obj.Chemist.Longitude\" name=\"session_obj.Chemist.Longitude\" class=\"form-control editable\" id=\"longitude\" placeholder=\"\">\r\n                                <div class=\"messages text-danger\" *ngIf=\"emptyLongitude\">Longitude can't be blank</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"preloader3 loader-block\" *ngIf=\"loaderForEditingPharmacy\">\r\n                            <div class=\"circ1\"></div>\r\n                            <div class=\"circ2\"></div>\r\n                            <div class=\"circ3\"></div>\r\n                            <div class=\"circ4\"></div>\r\n                        </div>\r\n                        <div class=\"form-group row\" *ngIf=\"actionBtnEdit\">\r\n                            <label class=\"col-sm-4\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <button type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"EditPharmacyService()\">Edit Pharmacy</button>\r\n                            </div>\r\n                        </div>\r\n\r\n                  \r\n                </div>\r\n              \r\n          \r\n\r\n        </app-card>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"\">\r\n         \r\n            <app-card [title]=\"'Edit Information'\" [cardOptionBlock]=\"true\">\r\n           \r\n            <div class=\"form-inner\">\r\n        \r\n        \r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">Old Password</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"oldPassword\" name=\"oldPassword\" placeholder=\"Old password\">\r\n                        <p class=\"errors\" *ngIf=\"enterOldPassword\">You need to enter your old password</p>\r\n                    </div>\r\n                </div>\r\n        \r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">New Password</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newPassword\" name=\"newPassword\" placeholder=\"New password\">\r\n                        <p class=\"errors\" *ngIf=\"enterNewPassword\">You need to enter your new password</p>\r\n                    </div>\r\n                </div>\r\n        \r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">Confirm Password</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" placeholder=\"Confirm password\">\r\n                        <p class=\"errors\" (keydown)=\"SavePasswordWithEnter($event)\" *ngIf=\"enterConfirmPassword\">Your passwords do not match</p>\r\n                    </div>\r\n                </div>\r\n        \r\n                <div class=\"centered\" *ngIf=\"showLoader\">\r\n        \r\n                    <div class=\"preloader3 loader-block\" id=\"loader\">\r\n                        <div class=\"circ1\"></div>\r\n                        <div class=\"circ2\"></div>\r\n                        <div class=\"circ3\"></div>\r\n                        <div class=\"circ4\"></div>\r\n                    </div>\r\n        \r\n                </div>\r\n        \r\n                <div class=\"row\" *ngIf=\"showAction\">\r\n                    <label class=\"col-sm-4 col-form-label\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <button class=\"green-buttons btn-success\" (click)=\"savePassword()\">Save Password</button>\r\n                    </div>\r\n                </div>\r\n        \r\n            </div>\r\n        </app-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div id=\"snackbar\"></div>"

/***/ }),

/***/ "../../../../../src/app/theme/dashboard/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-heading {\n  font-size: 28px;\n  text-align: center;\n  color: black;\n  margin-bottom: 30px; }\n\n.ok-hr {\n  border-top: 1px solid #ccc;\n  margin: 0; }\n\n.profile-labels {\n  font-weight: 600;\n  color: black; }\n\n.change-password-form {\n  padding: 25px; }\n\n.pharma-logo {\n  width: 100px;\n  margin-top: -25px; }\n\n#loader {\n  display: none;\n  margin: 50px; }\n\n#form1 {\n  width: 100px; }\n\n.form-group {\n  width: 100%; }\n\n.absolute-button {\n  position: absolute;\n  right: 35px;\n  background: #48ddae;\n  color: white;\n  border: none;\n  top: 35px; }\n\n.absolute-button i {\n  color: white; }\n\n.form-control:disabled {\n  color: #495057 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/dashboard/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validations__ = __webpack_require__("../../../../../src/app/validations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_userService__ = __webpack_require__("../../../../../src/app/theme/services/userService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__showtoast__ = __webpack_require__("../../../../../src/app/showtoast.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_GetChemistDataService__ = __webpack_require__("../../../../../src/app/theme/services/GetChemistDataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AddAreaService__ = __webpack_require__("../../../../../src/app/theme/services/AddAreaService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(_userService, _getChemistDataService, _AddAreaNameService) {
        this._userService = _userService;
        this._getChemistDataService = _getChemistDataService;
        this._AddAreaNameService = _AddAreaNameService;
        this.enterOldPassword = false;
        this.enterNewPassword = false;
        this.enterConfirmPassword = false;
        this.loaderForEditingPharmacy = false;
        this.actionBtnEdit = false;
        this.showLoader = false;
        this.showAction = true;
        this.cities_array = [];
        this.areas_array = [];
        this.editingSaveBtn = false;
        this.gotData = false;
        this.emptyName = false;
        this.emptyContactPerson = false;
        this.emptyLatitude = false;
        this.emptyLongitude = false;
        this.emptyImage = false;
        this.emptyAddress = false;
        this.emptyCommission = false;
        this.validationClass = new __WEBPACK_IMPORTED_MODULE_1__validations__["a" /* Validations */]();
        this.ShowToast = new __WEBPACK_IMPORTED_MODULE_3__showtoast__["a" /* ShowToast */]();
        this.Validations = new __WEBPACK_IMPORTED_MODULE_1__validations__["a" /* Validations */]();
    }
    ProfileComponent.prototype.getCityAreasByThisCity = function (elem) {
        this.session_obj.Chemist.CityId = elem;
        this.getCityAreas();
    };
    ProfileComponent.prototype.changeImage = function () {
        $("#imgInp").click();
    };
    ProfileComponent.prototype.changeimage = function (elem) {
        this.readURL(elem);
    };
    ProfileComponent.prototype.readURL = function (input) {
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
    ProfileComponent.prototype.getAreaSelected = function (elem) {
        this.session_obj.Chemist.AreaId = elem;
    };
    ProfileComponent.prototype.saveImageService = function () {
        var _this = this;
        this._userService.saveImageForPharmacy(this.ProfilePicture).subscribe(function (a) {
            _this.LogoUrl = a.data;
            _this.session_obj.ProfileURL = a.data;
        });
    };
    ProfileComponent.prototype.getAllCities = function () {
        var _this = this;
        this._getChemistDataService.getAllCitiesService().subscribe(function (response) {
            _this.cities_array = response.data;
            console.log(_this.cities_array);
        });
    }; // End of Get All Cities
    ProfileComponent.prototype.getCityAreas = function () {
        var _this = this;
        if (this.session_obj.Chemist == null) {
        }
        else {
            this._AddAreaNameService.getAreaName(this.session_obj.Chemist.CityId).subscribe(function (response) {
                _this.areas_array = response.data;
                console.log(_this.areas_array);
            });
        }
    }; // End of Get Areas of City
    ProfileComponent.prototype.resetErrorFields = function () {
        this.enterOldPassword = false;
        this.enterNewPassword = false;
        this.enterConfirmPassword = false;
    };
    ProfileComponent.prototype.SavePasswordWithEnter = function (event) {
        if (event.keyCode == 13) {
            this.savePassword();
        }
    };
    ProfileComponent.prototype.unsetValues = function () {
        this.oldPassword = undefined;
        this.newPassword = undefined;
        this.confirmPassword = undefined;
    };
    ProfileComponent.prototype.resetEditErrors = function () {
        this.emptyName = false;
        this.emptyContactPerson = false;
        this.emptyLatitude = false;
        this.emptyLongitude = false;
        this.emptyImage = false;
        this.emptyAddress = false;
        this.emptyCommission = false;
    };
    ProfileComponent.prototype.EditPharmacyService = function () {
        var _this = this;
        var error = false;
        this.resetEditErrors();
        if (!this.Validations.verifyNameInputs(this.session_obj.Chemist.PharmacyName)) {
            error = true;
            this.emptyName = true;
        }
        if (!this.Validations.verifyNameInputs(this.session_obj.Chemist.ContactPersonName)) {
            error = true;
            this.emptyContactPerson = true;
        }
        if (!this.Validations.verifyNameInputs(this.session_obj.Chemist.Latitude) || this.session_obj.Chemist.Latitude == null) {
            error = true;
            this.emptyLatitude = true;
        }
        if (!this.Validations.verifyNameInputs(this.session_obj.Chemist.Longitude) || this.session_obj.Chemist.Longitude == null) {
            error = true;
            this.emptyLongitude = true;
        }
        if (this.session_obj.ProfileURL == undefined || this.session_obj.ProfileURL == null) {
            error = true;
            this.emptyImage = true;
        }
        if (this.session_obj.Chemist.Address == undefined || this.session_obj.Chemist.Address == null) {
            error = true;
            this.emptyAddress = true;
        }
        if (this.session_obj.Chemist.PharmaCommission == undefined || this.session_obj.Chemist.PharmaCommission == null) {
            error = true;
            this.emptyCommission = true;
        }
        if (error) {
        }
        else {
            this.loaderForEditingPharmacy = true;
            this.actionBtnEdit = false;
            this._getChemistDataService.EditPharmacy(this.session_obj).subscribe(function (a) {
                console.log(a);
                if (a.code == 200) {
                    _this.loaderForEditingPharmacy = false;
                    _this.actionBtnEdit = true;
                    _this.session_obj = a.data;
                    _this.makeUnEditable();
                }
                else {
                    _this.loaderForEditingPharmacy = false;
                    _this.actionBtnEdit = true;
                }
            }, function (err) {
                _this.loaderForEditingPharmacy = false;
                _this.actionBtnEdit = true;
                console.log(err);
            });
        }
    };
    ProfileComponent.prototype.savePassword = function () {
        var _this = this;
        this.resetErrorFields();
        var error = false;
        if (!this.validationClass.verifyNameInputs(this.oldPassword)) {
            error = true;
            this.enterOldPassword = true;
        }
        if (!this.validationClass.verifyNameInputs(this.newPassword)) {
            error = true;
            this.enterNewPassword = true;
        }
        if (!this.validationClass.verifyNameInputs(this.confirmPassword)) {
            error = true;
            this.enterConfirmPassword = true;
        }
        if (this.newPassword != this.confirmPassword) {
            error = true;
            this.enterConfirmPassword = true;
        }
        if (error) {
        }
        else {
            this.showLoader = true;
            this.showAction = false;
            this._userService.changePassword(this.oldPassword, this.newPassword).subscribe(function (a) {
                console.log(a);
                if (a.code == 200) {
                    _this.showLoader = false;
                    _this.showAction = true;
                    _this.unsetValues();
                    $("#snackbar").html(a.message);
                    _this.ShowToast.myFunction();
                }
                else {
                    _this.showLoader = false;
                    _this.showAction = true;
                    _this.unsetValues();
                    $("#snackbar").html(a.message);
                    _this.ShowToast.myFunction();
                }
            }, function (err) {
                console.log(err);
                var obj = JSON.parse(err._body);
                $("#snackbar").html(obj.message);
                _this.ShowToast.myFunction();
            });
        }
    };
    ProfileComponent.prototype.makeUnEditable = function () {
        this.actionBtnEdit = false;
        jQuery(".editable").prop("readonly", true);
        jQuery(".editable-select").prop("disabled", true);
    };
    ProfileComponent.prototype.makeEditable = function () {
        this.actionBtnEdit = true;
        jQuery(".editable").prop("readonly", false);
        jQuery(".editable-select").prop("disabled", false);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.session_obj = JSON.parse(localStorage.getItem('session_obj'));
        if (this.session_obj == undefined || this.session_obj == null) {
        }
        else {
            this.getAllCities();
            this.getCityAreas();
        }
        this.gotData = true;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile',
            template: __webpack_require__("../../../../../src/app/theme/dashboard/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/dashboard/profile/profile.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_GetChemistDataService__["a" /* GetChemistDataService */], __WEBPACK_IMPORTED_MODULE_5__services_AddAreaService__["a" /* AddAreaService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_GetChemistDataService__["a" /* GetChemistDataService */],
            __WEBPACK_IMPORTED_MODULE_5__services_AddAreaService__["a" /* AddAreaService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/dashboard/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_jquery_locationpicker_plugin_master_src_locationpicker_jquery_js__ = __webpack_require__("../../../../../src/assets/jquery-locationpicker-plugin-master/src/locationpicker.jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_jquery_locationpicker_plugin_master_src_locationpicker_jquery_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_jquery_locationpicker_plugin_master_src_locationpicker_jquery_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_component__ = __webpack_require__("../../../../../src/app/theme/dashboard/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_routing_module__ = __webpack_require__("../../../../../src/app/theme/dashboard/profile/profile-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//component/* import { AddChemistComponent } from './add-chemist.component';
// import routingmodule import { AddChemistRoutingModule } from './add-chemist-routing.module'; */








var ProfileModule = (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_9__profile_routing_module__["a" /* ProfileRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["b" /* SimpleNotificationsModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__profile_component__["a" /* ProfileComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__profile_component__["a" /* ProfileComponent */]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map