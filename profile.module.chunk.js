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

module.exports = "\r\n\r\n<div class=\"card change-password-form\">\r\n        <h5>Change Password</h5>\r\n        <hr class=\"ok-hr\">\r\n    <div class=\"form-inner\">\r\n\r\n    \r\n        <div class=\"form-group row\">\r\n            <label class=\"col-sm-2 col-form-label\">Old Password</label>\r\n            <div  class=\"col-sm-10\">\r\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"oldPassword\" name=\"oldPassword\" placeholder=\"Old password\"\r\n                    >\r\n                <p class=\"errors\" *ngIf=\"enterOldPassword\">You need to enter your old password</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label\">New Password</label>\r\n                <div  class=\"col-sm-10\">\r\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newPassword\" name=\"newPassword\" placeholder=\"New password\"\r\n                        >\r\n                    <p class=\"errors\" *ngIf=\"enterNewPassword\">You need to enter your new password</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-form-label\">Confirm Password</label>\r\n                    <div  class=\"col-sm-10\">\r\n                        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" placeholder=\"Confirm password\"\r\n                            >\r\n                        <p class=\"errors\" (keydown)=\"SavePasswordWithEnter($event)\" *ngIf=\"enterConfirmPassword\">Your passwords do not match</p>\r\n                    </div>\r\n            </div>\r\n\r\n            <div class=\"centered\" *ngIf=\"showLoader\">\r\n\r\n                    <div class=\"preloader3 loader-block\" id=\"loader\">\r\n                            <div class=\"circ1\"></div>\r\n                            <div class=\"circ2\"></div>\r\n                            <div class=\"circ3\"></div>\r\n                            <div class=\"circ4\"></div>\r\n                    </div>\r\n\r\n            </div>\r\n\r\n    <div class=\"row\" *ngIf=\"showAction\">\r\n            <label class=\"col-sm-2 col-form-label\"></label>\r\n            <div class=\"col-sm-10\">\r\n                  <button class=\"green-buttons btn-success\" (click)=\"savePassword()\">Save Password</button>\r\n            </div>\r\n    </div>\r\n     \r\n    </div>\r\n</div>\r\n\r\n<div id=\"snackbar\"></div>"

/***/ }),

/***/ "../../../../../src/app/theme/dashboard/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-heading {\n  font-size: 28px;\n  text-align: center;\n  color: black;\n  margin-bottom: 30px; }\n\n.ok-hr {\n  border-top: 1px solid #ccc;\n  margin: 0; }\n\n.profile-labels {\n  font-weight: 600;\n  color: black; }\n\n.change-password-form {\n  padding: 25px; }\n", ""]);

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
    function ProfileComponent(_userService) {
        this._userService = _userService;
        this.enterOldPassword = false;
        this.enterNewPassword = false;
        this.enterConfirmPassword = false;
        this.showLoader = false;
        this.showAction = true;
        this.validationClass = new __WEBPACK_IMPORTED_MODULE_1__validations__["a" /* Validations */]();
        this.ShowToast = new __WEBPACK_IMPORTED_MODULE_3__showtoast__["a" /* ShowToast */]();
    }
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
                if (a.code == 200) {
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
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile',
            template: __webpack_require__("../../../../../src/app/theme/dashboard/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/dashboard/profile/profile.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_userService__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_userService__["a" /* UserService */]])
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



/***/ }),

/***/ "../../../../../src/app/validations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validations; });
var Validations = (function () {
    function Validations() {
    }
    Validations.prototype.verifyNameInputs = function (name) {
        name = $.trim(name);
        if (name == undefined || name == "" || name.length == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    Validations.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return Validations;
}());



/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map