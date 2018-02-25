webpackJsonp(["basic-color.module"],{

/***/ "../../../../../src/app/theme/ui-elements/basic/basic-color/basic-color-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicColorRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_color_component__ = __webpack_require__("../../../../../src/app/theme/ui-elements/basic/basic-color/basic-color.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__basic_color_component__["a" /* BasicColorComponent */],
        data: {
            title: 'Color',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - color',
            status: true
        }
    }
];
var BasicColorRoutingModule = (function () {
    function BasicColorRoutingModule() {
    }
    BasicColorRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], BasicColorRoutingModule);
    return BasicColorRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/ui-elements/basic/basic-color/basic-color.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\n  <!-- Default color card start -->\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h5>Default color</h5>\n    </div>\n    <div class=\"card-block\">\n      <div class=\"row text-uppercase text-center\">\n        <div class=\"col-md-2 waves-effect waves-light p-b-10\">\n          <div class=\"bg-default p-10\">#BDC3C7</div>\n        </div>\n        <div class=\"col-md-2 waves-effect waves-light p-b-10\">\n          <div class=\"bg-primary p-10 \">#1ABC9C</div>\n        </div>\n        <div class=\"col-md-2 waves-effect waves-light p-b-10\">\n          <div class=\"bg-success p-10\">#2ECC71</div>\n        </div>\n        <div class=\"col-md-2 waves-effect waves-light p-b-10\">\n          <div class=\"bg-info p-10\">#3498DB</div>\n        </div>\n        <div class=\"col-md-2 waves-effect waves-light p-b-10\">\n          <div class=\"bg-warning p-10\">#F1C40F</div>\n        </div>\n        <div class=\"col-md-2 waves-effect waves-light p-b-10\">\n          <div class=\"bg-danger p-10\">#E74C3C</div>\n        </div>\n        <div class=\"col-md-2 waves-effect waves-light p-b-10\">\n          <div class=\"bg-inverse p-10\">#34495E</div>\n        </div>\n      </div>\n      <!-- end of eow -->\n    </div>\n  </div>\n  <!-- Default color card end -->\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h5>Colors</h5>\n    </div>\n    <div class=\"card-block\">\n      <!-- Red color start -->\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">red</h6>\n          <div class=\"red-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">pink</h6>\n          <div class=\"pink-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\"> purple</h6>\n          <div class=\"purple-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">deep purple</h6>\n          <div class=\"deep-purple-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <!-- Red color end -->\n      <!-- Indigo color start -->\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">indigo</h6>\n          <div class=\"indigo-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <!-- end of col-lg-3 col-md-6 -->\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\"> blue</h6>\n          <div class=\"blue-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">light blue</h6>\n          <div class=\"light-blue-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">cyan</h6>\n          <div class=\"cyan-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <!-- Indigo color end -->\n      <!-- Teal color start -->\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">teal</h6>\n          <div class=\"teal-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <!-- end of col-lg-3 col-md-6 -->\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">green</h6>\n          <div class=\"green-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">light green</h6>\n          <div class=\"light-green-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">lime</h6>\n          <div class=\"lime-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <!-- Teal color start -->\n      <!-- Yellow color start -->\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">yellow</h6>\n          <div class=\"yellow-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <!-- end of col-lg-3 col-md-6 -->\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">amber</h6>\n          <div class=\"amber-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">orange</h6>\n          <div class=\"orange-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">deep orange</h6>\n          <div class=\"deep-orange-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <!-- Yellow color end -->\n      <!-- Brown color start -->\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">brown</h6>\n          <div class=\"brown-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <!-- end of col-lg-3 col-md-6 -->\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">grey</h6>\n          <div class=\"grey-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">blue grey</h6>\n          <div class=\"blue-grey-colors\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n          <!-- end of blue grey color   -->\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">Primary color</h6>\n          <div class=\"primary-colorr\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n          <!-- end of primary color color   -->\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">Success color</h6>\n          <div class=\"success-colorr\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n          <!-- end of success color color   -->\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">Info color</h6>\n          <div class=\"info-colorr\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n          <!-- end of info color   -->\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">Warning color</h6>\n          <div class=\"warning-colorr\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n          <!-- end of warning color color   -->\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <h6 class=\"sub-title text-uppercase\">Danger color</h6>\n          <div class=\"danger-colorr\">\n            <ul class=\"m-b-20\">\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n              <li>\n                <p></p>\n              </li>\n            </ul>\n          </div>\n          <!-- end of danger color   -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/theme/ui-elements/basic/basic-color/basic-color.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/ui-elements/basic/basic-color/basic-color.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicColorComponent; });
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

var BasicColorComponent = (function () {
    function BasicColorComponent() {
    }
    BasicColorComponent.prototype.ngOnInit = function () {
    };
    BasicColorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-basic-color',
            template: __webpack_require__("../../../../../src/app/theme/ui-elements/basic/basic-color/basic-color.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/ui-elements/basic/basic-color/basic-color.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicColorComponent);
    return BasicColorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/ui-elements/basic/basic-color/basic-color.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicColorModule", function() { return BasicColorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_color_component__ = __webpack_require__("../../../../../src/app/theme/ui-elements/basic/basic-color/basic-color.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_color_routing_module__ = __webpack_require__("../../../../../src/app/theme/ui-elements/basic/basic-color/basic-color-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BasicColorModule = (function () {
    function BasicColorModule() {
    }
    BasicColorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__basic_color_routing_module__["a" /* BasicColorRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__basic_color_component__["a" /* BasicColorComponent */]]
        })
    ], BasicColorModule);
    return BasicColorModule;
}());



/***/ })

});
//# sourceMappingURL=basic-color.module.chunk.js.map