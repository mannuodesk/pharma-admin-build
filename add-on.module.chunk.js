webpackJsonp(["add-on.module"],{

/***/ "../../../../../src/app/theme/forms/add-on/add-on-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOnRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_on_component__ = __webpack_require__("../../../../../src/app/theme/forms/add-on/add-on.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__add_on_component__["a" /* AddOnComponent */],
        data: {
            title: 'Group Add-ons',
            icon: 'icon-layers',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - add-ons',
            status: true
        }
    }
];
var AddOnRoutingModule = (function () {
    function AddOnRoutingModule() {
    }
    AddOnRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AddOnRoutingModule);
    return AddOnRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/forms/add-on/add-on.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Input group card start -->\n    <app-card [title]=\"'Addon\\'s Group'\" [cardOptionBlock]=\"true\">\n      <!-- Basic group add-ons start -->\n      <div class=\"m-b-20\">\n        <h4 class=\"sub-title\">Basic Group Add-ons</h4>\n        <p>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</p>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Simple Add-on</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"basic-addon1\">@</span>\n              <input type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Placeholder</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"basic-addon2\">%</span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Left addon\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Right Add-on</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Right addon\">\n              <span class=\"input-group-addon\" id=\"basic-addon3\">$</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Both-side Add-on</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">$</span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Both-side addon\">\n              <span class=\"input-group-addon\">.20</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Muliple Add-ons</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">$</span>\n              <span class=\"input-group-addon\">.20</span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Multiple addons\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Basic group add-ons end -->\n      <!-- Icon Group Addons start -->\n      <div>\n        <h4 class=\"sub-title\">Icon Group Addons</h4>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Left Icon</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"basic-addon4\"><i class=\"icofont icofont-ui-volume\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Left addon\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Right Icon</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Right addon\">\n              <span class=\"input-group-addon\" id=\"basic-addon5\"><i class=\"icofont icofont-ui-wifi\"></i></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Both-side Icons Addon</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-rounded-left\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Right add-on\">\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-rounded-right\"></i></span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Icon Group Addons end -->\n    </app-card>\n    <!-- Input group card end -->\n    <!-- Input Group Sizes & Colors card start -->\n    <app-card [title]=\"'Addon\\'s Group Sizes & Colors'\" [cardOptionBlock]=\"true\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <h4 class=\"sub-title\">Group Addons Sizes</h4>\n          <p>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</p>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"input-group input-group-lg\">\n                <span class=\"input-group-addon\" id=\"basic-addon6\">@</span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-lg\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-10\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\" id=\"basic-addon7\">@</span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-8\">\n              <div class=\"input-group input-group-sm\">\n                <span class=\"input-group-addon\" id=\"basic-addon8\">%</span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-sm\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <h4 class=\"sub-title\">Color Addons</h4>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"input-group input-group-primary\">\n                                            <span class=\"input-group-addon\">\n                                       <i class=\"icofont icofont-presentation\"></i>\n                                       </span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-primary\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"input-group input-group-warning\">\n                                            <span class=\"input-group-addon\">\n                                       <i class=\"icofont icofont-queen\"></i>\n                                       </span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-warning\">\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"input-group input-group-default\">\n                                            <span class=\"input-group-addon\">\n                                       <i class=\"icofont icofont-shield\"></i>\n                                       </span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-default\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"input-group input-group-danger\">\n                                            <span class=\"input-group-addon\">\n                                       <i class=\"icofont icofont-volume-down\"></i>\n                                       </span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-danger\">\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"input-group input-group-success\">\n                                            <span class=\"input-group-addon\">\n                                       <i class=\"icofont icofont-volume-off\"></i>\n                                       </span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-success\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"input-group input-group-inverse\">\n                                            <span class=\"input-group-addon\">\n                                       <i class=\"icofont icofont-wifi\"></i>\n                                       </span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-inverse\">\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"input-group input-group-info\">\n                                            <span class=\"input-group-addon\">\n                                       <i class=\"icofont icofont-signal\"></i>\n                                       </span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-info\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <!-- Input Group Sizes & Colors card end -->\n    <!-- Input Group With Components card start -->\n    <app-card [title]=\"'Addon\\'s With Components'\" [cardOptionBlock]=\"true\">\n      <div class=\"row m-b-20\">\n        <div class=\"col-sm-12 col-lg-6\">\n          <h4 class=\"sub-title\">Icon Group with Buttons</h4>\n          <p>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</p>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"input-group input-group-button\">\n                                            <span class=\"input-group-addon\" id=\"basic-addon9\">\n                                       <button class=\"btn btn-primary\">Left Button</button>\n                                       </span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Left Button\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"input-group input-group-button\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Right Button\">\n                <span class=\"input-group-addon\" id=\"basic-addon10\">\n                                       <button class=\"btn btn-primary\">Right Button</button>\n                                       </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"input-group input-group-button\">\n                                            <span class=\"input-group-addon\" id=\"basic-addon11\">\n                                       <button class=\"btn btn-primary\">Left Click</button>\n                                       </span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Both side addons\">\n                <span class=\"input-group-addon\" id=\"basic-addon12\">\n                                       <button class=\"btn btn-primary\">Right Click</button>\n                                       </span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-lg-6\">\n          <h4 class=\"sub-title\">Icon Group with Dropdowns</h4>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"input-group input-group-dropdown\">\n                <div ngbDropdown class=\"input-group-btn\">\n                  <button ngbDropdownToggle type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Left Action\n                  </button>\n                  <div ngbDropdownMenu class=\"dropdown-menu\">\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Action</a>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Another action</a>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Something else here</a>\n                    <div role=\"separator\" class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Separated link</a>\n                  </div>\n                </div>\n                <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"input-group input-group-dropdown\">\n                <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\n                <div ngbDropdown class=\"input-group-btn\">\n                  <button ngbDropdownToggle type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Right Action\n                  </button>\n                  <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Action</a>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Another action</a>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Something else here</a>\n                    <div role=\"separator\" class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Separated link</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"input-group input-group-dropdown\">\n                <div ngbDropdown class=\"input-group-btn\">\n                  <button ngbDropdownToggle type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    click\n                  </button>\n                  <div ngbDropdownMenu class=\"dropdown-menu\">\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Action</a>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Another action</a>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Something else here</a>\n                    <div role=\"separator\" class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Separated link</a>\n                  </div>\n                </div>\n                <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\n                <div ngbDropdown class=\"input-group-btn\">\n                  <button ngbDropdownToggle type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    click\n                  </button>\n                  <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Action</a>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Another action</a>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Something else here</a>\n                    <div role=\"separator\" class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Separated link</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <h4 class=\"sub-title\">Icon Group with Checkbox</h4>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                       <input type=\"checkbox\" aria-label=\"Checkbox for following text input\">\n                                       </span>\n                <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <h4 class=\"sub-title\">Icon Group with Radio</h4>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                       <input type=\"radio\" aria-label=\"Radio button for following text input\">\n                                       </span>\n                <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <!-- Input Group With Components card end -->\n    <app-card [title]=\"'Addon\\'s Group Alignment'\" [cardOptionBlock]=\"true\">\n      <h4>Addon's Group Alignment</h4>\n      <span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>\n      <form>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Normal Text</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-ui-volume\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Normal Text\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Bold Text</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-queen\"></i></span>\n              <input type=\"text\" class=\"form-control form-control-bold\" placeholder=\".form-control-bold\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Capitalize Text</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-presentation\"></i></span>\n              <input type=\"text\" class=\"form-control form-control-capitalize\" placeholder=\".form-control-capitalize\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Uppercase Text</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-wifi\"></i></span>\n              <input type=\"text\" class=\"form-control form-control-uppercase\" placeholder=\".form-control-uppercase\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Lowercase Text</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-shield\"></i></span>\n              <input type=\"text\" class=\"form-control form-control-lowercase\" placeholder=\".form-control-lowercase\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Varient Text</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-ui-volume\"></i></span>\n              <input type=\"text\" class=\"form-control form-control-variant\" placeholder=\".form-control-variant\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Left-Align Text</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-presentation\"></i></span>\n              <input type=\"text\" class=\"form-control form-control-left\" placeholder=\".form-control-left\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Center-Align Text</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-queen\"></i></span>\n              <input type=\"text\" class=\"form-control form-control-center\" placeholder=\".form-control-center\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Right-Align Text</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-shield\"></i></span>\n              <input type=\"text\" class=\"form-control form-control-right\" placeholder=\".form-control-right\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">RTL Text</label>\n          <div class=\"col-sm-8 col-lg-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-ui-volume\"></i></span>\n              <input type=\"text\" class=\"form-control form-control-rtl\" placeholder=\".form-control-rtl\">\n            </div>\n          </div>\n        </div>\n      </form>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/theme/forms/add-on/add-on.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/forms/add-on/add-on.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddOnComponent = (function () {
    function AddOnComponent() {
    }
    AddOnComponent.prototype.ngOnInit = function () {
    };
    AddOnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-on',
            template: __webpack_require__("../../../../../src/app/theme/forms/add-on/add-on.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/forms/add-on/add-on.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddOnComponent);
    return AddOnComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/forms/add-on/add-on.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOnModule", function() { return AddOnModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_on_component__ = __webpack_require__("../../../../../src/app/theme/forms/add-on/add-on.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_on_routing_module__ = __webpack_require__("../../../../../src/app/theme/forms/add-on/add-on-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AddOnModule = (function () {
    function AddOnModule() {
    }
    AddOnModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__add_on_routing_module__["a" /* AddOnRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__add_on_component__["a" /* AddOnComponent */]]
        })
    ], AddOnModule);
    return AddOnModule;
}());



/***/ })

});
//# sourceMappingURL=add-on.module.chunk.js.map