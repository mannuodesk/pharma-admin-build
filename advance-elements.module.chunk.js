webpackJsonp(["advance-elements.module"],{

/***/ "../../../../../src/app/theme/forms/advance-elements/advance-elements-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvanceElementsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advance_elements_component__ = __webpack_require__("../../../../../src/app/theme/forms/advance-elements/advance-elements.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__advance_elements_component__["a" /* AdvanceElementsComponent */],
        data: {
            title: 'Advance Form Inputs',
            icon: 'icon-layers',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - advance components',
            status: true
        }
    }
];
var AdvanceElementsRoutingModule = (function () {
    function AdvanceElementsRoutingModule() {
    }
    AdvanceElementsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AdvanceElementsRoutingModule);
    return AdvanceElementsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/forms/advance-elements/advance-elements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Switches card start -->\n    <app-card [title]=\"'Switches'\" [classHeader]=\"true\" [cardOptionBlock]=\"true\">\n      <span class=\"code-header\">Add class of <code>color, switchColor, size</code> attribute with <code>ui-switch</code> tag</span>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Single Switche</h4>\n          <ui-switch class=\"js-single\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Multiple Switches</h4>\n          <ui-switch class=\"js-switch\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-switch\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-switch\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Enable Disable Switches</h4>\n          <div class=\"row\">\n            <div class=\"col-auto\">\n              <ui-switch class=\"js-dynamic-state m-r-10\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" [disabled]=\"switchDisable\" checked></ui-switch>\n            </div>\n            <div class=\"col\">\n              <button class=\"btn btn-inverse js-dynamic-disable\" (click)=\"disableSwitch()\">Disable</button>\n              <button class=\"btn btn-primary js-dynamic-enable\" (click)=\"enableSwitch()\">Enable</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-8 m-b-3\">\n          <h4 class=\"sub-title\">Color Switches</h4>\n          <ui-switch class=\"js-default\" color=\"#bdc3c7\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-primary\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-success\" color=\"#2ecc71\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-info\" color=\"#3498DB\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-warning\" color=\"#f1c40f\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-danger\" color=\"#e74c3c\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-inverse\" color=\"#34495e\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n        </div>\n        <div class=\"col-sm-4\">\n          <h4 class=\"sub-title\">Switch Sizes</h4>\n          <ui-switch class=\"js-large\" color=\"#4680ff\" switchColor=\"#fff\" size=\"large\" checked></ui-switch>\n          <ui-switch class=\"js-medium\" color=\"#2ecc71\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-small\" color=\"#3498DB\" switchColor=\"#fff\" size=\"small\" checked></ui-switch>\n        </div>\n      </div>\n    </app-card>\n    <!-- Switches card end -->\n    <!-- Radio card start -->\n    <app-card [title]=\"'Radio'\" [classHeader]=\"true\" [cardOptionBlock]=\"true\">\n      <span class=\"code-header\">Add class of <code>.form-control</code> with <code>input</code> tag</span>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-6 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Radio Fill Button</h4>\n          <div class=\"form-radio\">\n            <form>\n              <div class=\"radio radio-inline\">\n                <label>\n                  <input type=\"radio\" name=\"radio\" checked=\"checked\">\n                  <i class=\"helper\"></i>Radio 1\n                </label>\n              </div>\n              <div class=\"radio radio-inline\">\n                <label>\n                  <input type=\"radio\" name=\"radio\">\n                  <i class=\"helper\"></i>Radio 2\n                </label>\n              </div>\n              <div class=\"radio radio-inline radio-disable\">\n                <label>\n                  <input type=\"radio\" disabled=\"\" name=\"radio\">\n                  <i class=\"helper\"></i>Radio Disable\n                </label>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Radio outline Button</h4>\n          <div class=\"form-radio\">\n            <form>\n              <div class=\"radio radio-outline radio-inline\">\n                <label>\n                  <input type=\"radio\" name=\"radio\" checked=\"checked\">\n                  <i class=\"helper\"></i>Radio 1\n                </label>\n              </div>\n              <div class=\"radio radio-outline radio-inline\">\n                <label>\n                  <input type=\"radio\" name=\"radio\">\n                  <i class=\"helper\"></i>Radio 2\n                </label>\n              </div>\n              <div class=\"radio radio-inline radio-disable\">\n                <label>\n                  <input type=\"radio\" disabled=\"\" name=\"radio\">\n                  <i class=\"helper\"></i>Radio Disable\n                </label>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Radio Button</h4>\n          <div class=\"form-radio\">\n            <form>\n              <div class=\"radio radiofill radio-inline\">\n                <label>\n                  <input type=\"radio\" name=\"radio\" checked=\"checked\">\n                  <i class=\"helper\"></i>Radio-fill 1\n                </label>\n              </div>\n              <div class=\"radio radiofill radio-inline\">\n                <label>\n                  <input type=\"radio\" name=\"radio\">\n                  <i class=\"helper\"></i>Radio-fill 2\n                </label>\n              </div>\n              <div class=\"radio radiofill radio-inline radio-disable\">\n                <label>\n                  <input type=\"radio\" disabled=\"\" name=\"radio\">\n                  <i class=\"helper\"></i>Radio-fill Disable\n                </label>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <h4 class=\"sub-title\">Color Radio Button</h4>\n      <div class=\"form-radio m-b-30\">\n        <form>\n          <div class=\"radio radiofill radio-default radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Default Color\n            </label>\n          </div>\n          <div class=\"radio radiofill radio-primary radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Primary Color\n            </label>\n          </div>\n          <div class=\"radio radiofill radio-success radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Success Color\n            </label>\n          </div>\n          <div class=\"radio radiofill radio-info radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Info Color\n            </label>\n          </div>\n          <div class=\"radio radiofill radio-warning radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Warning Color\n            </label>\n          </div>\n          <div class=\"radio radiofill radio-danger radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Danger Color\n            </label>\n          </div>\n          <div class=\"radio radiofill radio-inverse radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Inverse Color\n            </label>\n          </div>\n        </form>\n      </div>\n      <h4 class=\"sub-title\">Color Radio material Button</h4>\n      <div class=\"form-radio m-b-30\">\n        <form>\n          <div class=\"radio radio-matrial radio-default radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Default Color\n            </label>\n          </div>\n          <div class=\"radio radio-matrial radio-primary radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Primary Color\n            </label>\n          </div>\n          <div class=\"radio radio-matrial radio-success radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Success Color\n            </label>\n          </div>\n          <div class=\"radio radio-matrial radio-info radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Info Color\n            </label>\n          </div>\n          <div class=\"radio radio-matrial radio-warning radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Warning Color\n            </label>\n          </div>\n          <div class=\"radio radio-matrial radio-danger radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Danger Color\n            </label>\n          </div>\n          <div class=\"radio radio-matrial radio-inverse radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Inverse Color\n            </label>\n          </div>\n        </form>\n      </div>\n    </app-card>\n    <!-- Radio card end -->\n    <!-- Checkbox card start -->\n    <app-card [title]=\"'Checkbox'\" [classHeader]=\"true\" [cardOptionBlock]=\"true\">\n      <span class=\"code-header\">Add class of <code>.form-control</code> with <code>input</code> tag</span>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-6 m-b-30\">\n          <h4 class=\"sub-title\">Border Checkbox</h4>\n          <div class=\"border-checkbox-section\">\n            <div class=\"border-checkbox-group border-checkbox-group-default\">\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox0\">\n              <label class=\"border-checkbox-label\" for=\"checkbox0\">Do you like it?</label>\n            </div>\n            <div class=\"border-checkbox-group border-checkbox-group-primary\">\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox1\">\n              <label class=\"border-checkbox-label\" for=\"checkbox1\">Primary</label>\n            </div>\n            <div class=\"border-checkbox-group border-checkbox-group-success\">\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox2\">\n              <label class=\"border-checkbox-label\" for=\"checkbox2\">Success</label>\n            </div>\n            <div class=\"border-checkbox-group border-checkbox-group-info\">\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox3\">\n              <label class=\"border-checkbox-label\" for=\"checkbox3\">Info</label>\n            </div>\n            <div class=\"border-checkbox-group border-checkbox-group-warning\">\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox4\">\n              <label class=\"border-checkbox-label\" for=\"checkbox4\">Warning</label>\n            </div>\n            <div class=\"border-checkbox-group border-checkbox-group-danger\">\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox5\">\n              <label class=\"border-checkbox-label\" for=\"checkbox5\">Danger</label>\n            </div>\n            <div class=\"border-checkbox-group\">\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox6\" disabled>\n              <label class=\"border-checkbox-label\" for=\"checkbox6\">Disabled</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-xl-6 m-b-30\">\n          <h4 class=\"sub-title\">Fade-in Checkbox</h4>\n          <div class=\"checkbox-fade fade-in-default\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\n                                                                        </span>\n              <span>Default</span>\n            </label>\n          </div>\n          <div class=\"checkbox-fade fade-in-primary\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i>\n                                                                        </span>\n              <span>Primary</span>\n            </label>\n          </div>\n          <div class=\"checkbox-fade fade-in-warning\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-warning\"></i>\n                                                                        </span>\n              <span> Warning</span>\n            </label>\n          </div>\n          <div class=\"checkbox-fade fade-in-success\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-success\"></i>\n                                                                        </span>\n              <span>Success</span>\n            </label>\n          </div>\n          <div class=\"checkbox-fade fade-in-info\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-info\"></i>\n                                                                        </span>\n              <span> Info</span>\n            </label>\n          </div>\n          <div class=\"checkbox-fade fade-in-danger\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-danger\"></i>\n                                                                        </span>\n              <span> Danger</span>\n            </label>\n          </div>\n          <div class=\"checkbox-fade fade-in-disable\">\n            <label>\n              <input type=\"checkbox\" value=\"\" disabled>\n              <span class=\"cr\">\n                                                                            <i class=\"cr-icon icofont icofont-ui-check text-default\"></i>\n                                                                        </span>\n              <span>Disabled</span>\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-6 m-b-30\">\n          <h4 class=\"sub-title\">Color Checkbox</h4>\n          <div class=\"checkbox-color checkbox-default\">\n            <input id=\"checkbox12\" type=\"checkbox\" checked=\"\">\n            <label for=\"checkbox12\">\n              Default\n            </label>\n          </div>\n          <div class=\"checkbox-color checkbox-primary\">\n            <input id=\"checkbox18\" type=\"checkbox\" checked=\"\">\n            <label for=\"checkbox18\">\n              Primary\n            </label>\n          </div>\n          <div class=\"checkbox-color checkbox-success\">\n            <input id=\"checkbox13\" type=\"checkbox\" checked=\"\">\n            <label for=\"checkbox13\">\n              Success\n            </label>\n          </div>\n          <div class=\"checkbox-color checkbox-info\">\n            <input id=\"checkbox14\" type=\"checkbox\" checked=\"\">\n            <label for=\"checkbox14\">\n              Info\n            </label>\n          </div>\n          <div class=\"checkbox-color checkbox-warning\">\n            <input id=\"checkbox15\" type=\"checkbox\" checked=\"\">\n            <label for=\"checkbox15\">\n              Warning\n            </label>\n          </div>\n          <div class=\"checkbox-color checkbox-danger\">\n            <input id=\"checkbox16\" type=\"checkbox\" checked=\"\">\n            <label for=\"checkbox16\">\n              Danger\n            </label>\n          </div>\n          <div class=\"checkbox-color checkbox-default\">\n            <input id=\"checkbox17\" type=\"checkbox\" disabled=\"\">\n            <label for=\"checkbox17\">\n              Disabled\n            </label>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-xl-6 m-b-30\">\n          <h4 class=\"sub-title\">zoom Checkbox</h4>\n          <div class=\"checkbox-zoom zoom-default\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\n                                                                        </span>\n              <span>Default</span>\n            </label>\n          </div>\n          <div class=\"checkbox-zoom zoom-primary\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i>\n                                                                        </span>\n              <span>Primary</span>\n            </label>\n          </div>\n          <div class=\"checkbox-zoom zoom-warning\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-warning\"></i>\n                                                                        </span>\n              <span> Warning</span>\n            </label>\n          </div>\n          <div class=\"checkbox-zoom zoom-success\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-success\"></i>\n                                                                        </span>\n              <span>Success</span>\n            </label>\n          </div>\n          <div class=\"checkbox-zoom zoom-info\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-info\"></i>\n                                                                        </span>\n              <span> Info</span>\n            </label>\n          </div>\n          <div class=\"checkbox-zoom zoom-danger\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                                                            <i class=\"cr-icon icofont icofont-ui-check txt-danger\"></i>\n                                                                        </span>\n              <span> Danger</span>\n            </label>\n          </div>\n          <div class=\"checkbox-zoom zoom-disable\">\n            <label>\n              <input type=\"checkbox\" value=\"\" disabled>\n              <span class=\"cr\">\n                                                                            <i class=\"cr-icon icofont icofont-ui-check text-default\"></i>\n                                                                        </span>\n              <span>Disabled</span>\n            </label>\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <!-- Checkbox card end -->\n    <app-card [title]=\"'Tags Input'\" [classHeader]=\"true\" [cardOptionBlock]=\"true\">\n      <span class=\"code-header\">Add class of <code>.tag-chips</code> with <code>tag-input</code> tag</span>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Basic Tag Input</h4>\n          <tag-input class=\"tag-chips\" [(ngModel)]=\"items\" [modelAsStrings]=\"true\"></tag-input>\n          <p>Just add <code>ngModel</code> to your <code>tag-input</code> field to automatically change it to a tags input field.</p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Read Only Tag Input</h4>\n          <tag-input class=\"tag-chips\" [(ngModel)]=\"itemsAsObjects\" [identifyBy]=\"'id'\" [displayBy]=\"'name'\"></tag-input>\n          <p>Just add <code>identifyBy, displayBy</code> attribute to your <code>tag-input</code> field.</p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Not Removable Tag Input</h4>\n          <tag-input class=\"tag-chips\" [ngModel]=\"items\" [removable]=\"false\"></tag-input>\n          <p>Just add <code>removable</code> attribute with <code>false</code> value, to your <code>tag-input</code> field.</p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Editable Tag Input</h4>\n          <tag-input class=\"tag-chips\" [(ngModel)]=\"items\" [editable]=\"true\"></tag-input>\n          <p>Just add <code>editable</code> attribute with <code>true</code> value, to your <code>tag-input</code> field. (doubble click on tag)</p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Tag Input Limit (3)</h4>\n          <tag-input class=\"tag-chips\" [ngModel]=\"['Amsterdam', 'Washington']\" [maxItems]=\"3\" [ripple]=\"false\" placeholder=\"Insert a new item\"></tag-input>\n          <p>Just add <code>maxItems, ripple</code> attribute to your <code>tag-input</code> field. (doubble click on tag)</p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Tag Input Validation</h4>\n          <tag-input class=\"tag-chips\" [ngModel]=\"['@Amsterdam$']\" [errorMessages]=\"errorMessages\" [validators]=\"validators\"></tag-input>\n          <p>Just add <code>errorMessages, validators</code> attribute to your <code>tag-input</code> field.</p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Tag Input with Space Key</h4>\n          <tag-input class=\"tag-chips\" [ngModel]=\"['Amsterdam']\" [separatorKeyCodes]=\"[32, 188]\"></tag-input>\n          <p>Just add <code>separatorKeyCodes</code> attribute with <code>ket code</code> method to your <code>tag-input</code> field.</p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Tag Input with Theme</h4>\n          <tag-input class=\"tag-chips\" [theme]=\"'dark'\" [ngModel]=\"['Amsterdam']\" name=\"items\"></tag-input>\n          <p>Just add <code>theme</code> attribute with <code>bootstrap(default), danger, success, warning, dark</code> value to your <code>tag-input</code> field.</p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Tag Input with Minimal Theme</h4>\n          <tag-input class=\"tag-chips\" [theme]=\"'minimal-danger'\" [ngModel]=\"['Amsterdam']\" name=\"items\"></tag-input>\n          <p>Just add <code>theme</code> attribute with <code>minimal, minimal-danger, minimal-success, minimal-warning, minimal-dark</code> value to your <code>tag-input</code> field.</p>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/theme/forms/advance-elements/advance-elements.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/forms/advance-elements/advance-elements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvanceElementsComponent; });
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

var AdvanceElementsComponent = (function () {
    function AdvanceElementsComponent() {
        this.switchDisable = true;
        this.items = ['Amsterdam', 'Washington', 'Sydney'];
        this.itemsAsObjects = [{ id: 0, name: 'Amsterdam', readonly: true }, { id: 1, name: 'Washington' }];
        this.errorMessages = {
            'startsWithAt@': 'Your items need to start with \'@\'',
            'endsWith$': 'Your items need to end with \'$\''
        };
        this.validators = [this.startsWithAt, this.endsWith$];
    }
    AdvanceElementsComponent.prototype.ngOnInit = function () {
    };
    AdvanceElementsComponent.prototype.disableSwitch = function () {
        this.switchDisable = true;
    };
    AdvanceElementsComponent.prototype.enableSwitch = function () {
        this.switchDisable = false;
    };
    AdvanceElementsComponent.prototype.startsWithAt = function (control) {
        if (control.value.charAt(0) !== '@') {
            return {
                'startsWithAt@': true
            };
        }
        return null;
    };
    AdvanceElementsComponent.prototype.endsWith$ = function (control) {
        if (control.value.charAt(control.value.length - 1) !== '$') {
            return {
                'endsWith$': true
            };
        }
        return null;
    };
    AdvanceElementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-advance-elements',
            template: __webpack_require__("../../../../../src/app/theme/forms/advance-elements/advance-elements.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/forms/advance-elements/advance-elements.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvanceElementsComponent);
    return AdvanceElementsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/forms/advance-elements/advance-elements.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceElementsModule", function() { return AdvanceElementsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advance_elements_component__ = __webpack_require__("../../../../../src/app/theme/forms/advance-elements/advance-elements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__advance_elements_routing_module__ = __webpack_require__("../../../../../src/app/theme/forms/advance-elements/advance-elements-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_ui_switch__ = __webpack_require__("../../../../ng2-ui-switch/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_chips__ = __webpack_require__("../../../../ngx-chips/dist/ngx-chips.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_chips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdvanceElementsModule = (function () {
    function AdvanceElementsModule() {
    }
    AdvanceElementsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__advance_elements_routing_module__["a" /* AdvanceElementsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_ui_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_chips__["TagInputModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__advance_elements_component__["a" /* AdvanceElementsComponent */]]
        })
    ], AdvanceElementsModule);
    return AdvanceElementsModule;
}());



/***/ })

});
//# sourceMappingURL=advance-elements.module.chunk.js.map