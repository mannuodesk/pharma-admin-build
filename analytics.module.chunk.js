webpackJsonp(["analytics.module"],{

/***/ "../../../../../src/app/theme/dashboard/analytics/analytics-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analytics_component__ = __webpack_require__("../../../../../src/app/theme/dashboard/analytics/analytics.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__analytics_component__["a" /* AnalyticsComponent */],
        data: {
            title: 'Analytics',
            status: false
        }
    }
];
var AnalyticsRoutingModule = (function () {
    function AnalyticsRoutingModule() {
    }
    AnalyticsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AnalyticsRoutingModule);
    return AnalyticsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/dashboard/analytics/analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\n\n  <div class=\"row\">\n    <!-- unique visitor start -->\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5>Statistics</h5>\n        </div>\n        <div class=\"card-block\">\n            <div id=\"visitor-list-graph\" style=\"height: 400px\"></div>\n        </div>\n      </div>\n    </div>\n    <!-- unique visitor start -->\n\n    <!-- Power card Start -->\n    <div class=\"col-md-6 col-xl-4\">\n      <div class=\"card\">\n        <div class=\"card-header p-t-20\">\n          <div class=\"card-header-left\">\n            <h5>Power</h5>\n          </div>\n          <div class=\"card-header-right\">\n            <i class=\"icofont icofont-spinner-alt-5 \"></i>\n          </div>\n        </div>\n        <div class=\"card-block-big card-power\">\n          <h2>2789</h2><span class=\"text-muted\">kw</span>\n          <chart id=\"power-card-chart\" [type]=\"'line'\" [data]=\"powerCardData\" [options]=\"powerCardOption\"></chart>\n          <div class=\"row\">\n            <div class=\"col-4\">\n              <div class=\"map-area\">\n                <h6 class=\"m-0\">2876</h6>\n                <span>kw</span>\n                <p class=\"text-muted m-0\">month</p>\n              </div>\n            </div>\n            <div class=\"col-4\">\n              <div class=\"map-area\">\n                <h6 class=\"m-0\">234</h6>\n                <span>kw</span>\n                <p class=\"text-muted m-0\">Today</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-xl-4\">\n      <div class=\"card\">\n        <div class=\"card-header p-t-20\">\n          <div class=\"card-header-left\">\n            <h5>Water</h5>\n          </div>\n          <div class=\"card-header-right\">\n            <i class=\"icofont icofont-spinner-alt-5 \"></i>\n          </div>\n        </div>\n        <div class=\"card-block-big card-power\">\n          <h2>7.3</h2><span class=\"text-muted\">m3</span>\n          <chart id=\"water-card-chart\" [type]=\"'line'\" [data]=\"waterCardData\" [options]=\"waterCardOption\"></chart>\n          <div class=\"row\">\n            <div class=\"col-4\">\n              <div class=\"map-area\">\n                <h6 class=\"m-0\">4.5</h6>\n                <span>m3</span>\n                <p class=\"text-muted m-0\">month</p>\n              </div>\n            </div>\n            <div class=\"col-4\">\n              <div class=\"map-area\">\n                <h6 class=\"m-0\">0.5</h6>\n                <span>m3</span>\n                <p class=\"text-muted m-0\">Today</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-xl-4\">\n      <div class=\"card\">\n        <div class=\"card-header p-t-20\">\n          <div class=\"card-header-left\">\n            <h5>Energy</h5>\n          </div>\n          <div class=\"card-header-right\">\n            <i class=\"icofont icofont-spinner-alt-5 \"></i>\n          </div>\n        </div>\n        <div class=\"card-block-big card-power\">\n          <h2>834</h2><span class=\"text-muted\">mpg</span>\n          <chart id=\"energy-card-chart\" [type]=\"'line'\" [data]=\"energyCardData\" [options]=\"energyCardOption\"></chart>\n          <div class=\"row\">\n            <div class=\"col-4\">\n              <div class=\"map-area\">\n                <h6 class=\"m-0\">15.6</h6>\n                <span>mpg</span>\n                <p class=\"text-muted m-0\">month</p>\n              </div>\n            </div>\n            <div class=\"col-4\">\n              <div class=\"map-area\">\n                <h6 class=\"m-0\">234</h6>\n                <span>kw</span>\n                <p class=\"text-muted m-0\">Today</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Power card End -->\n\n    <!-- Project overview Start -->\n    <div class=\"col-md-12 col-xl-5\">\n      <app-card [title]=\"'Latest Comments'\">\n        <div class=\"card-comment \">\n          <div class=\"card-block-small\">\n            <img class=\"img-radius\" src=\"assets/images/avatar-4.jpg\" alt=\"user-1\">\n            <div class=\"comment-desc\">\n              <h6>Luciano Durk</h6>\n              <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n              <div class=\"comment-btn\">\n                <button class=\"btn bg-c-blue btn-round btn-comment \">Action</button>\n              </div>\n              <div class=\"date\">\n                <i>04 October 2015</i>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-comment \">\n          <div class=\"card-block-small\">\n            <img class=\"img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"user-4\">\n            <div class=\"comment-desc\">\n              <h6>John Doe</h6>\n              <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n              <div class=\"comment-btn\">\n                <button class=\"btn bg-c-pink btn-round btn-comment \">Approved</button>\n              </div>\n              <div class=\"date\">\n                <i>16 December 2015</i>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-comment \">\n          <div class=\"card-block-small\">\n            <img class=\"img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"user-2\">\n            <div class=\"comment-desc\">\n              <h6>Planner Board</h6>\n              <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n              <div class=\"comment-btn\">\n                <button class=\"btn bg-c-green btn-round btn-comment \">Rejected</button>\n              </div>\n              <div class=\"date\">\n                <i>12 Saptember 2015</i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </app-card>\n    </div>\n    <div class=\"col-md-12 col-xl-7\">\n      <app-card [title]=\"'Project report'\" [cardClass]=\"'review-project'\" [blockClass]=\"'p-t-0 p-b-0 w-100'\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover\">\n            <thead>\n            <tr>\n              <th>Project</th>\n              <th></th>\n              <th>Status</th>\n              <th>Date</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <td>\n                <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-4.jpg\" alt=\"chat-user\"></a>\n                <div class=\"project-contain\">\n                  <h6>Appestia Perfect</h6>\n                  <p class=\"text-muted\"><i class=\"fa fa-clock-o f-12 m-r-10\"></i>Created 12 . 3 . 2015</p>\n                </div>\n              </td>\n              <td>\n                <span class=\"pie_1\" style=\"display: none;\">1/5</span>\n              </td>\n\n              <td>\n                25 %\n              </td>\n              <td>\n                15 Octobar 2015\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-2.jpg\" alt=\"chat-user\"></a>\n                <div class=\"project-contain\">\n                  <h6>Web consultancy</h6>\n                  <p class=\"text-muted\"><i class=\"fa fa-clock-o f-12 m-r-10\"></i>Created 22 . 8 . 2015</p>\n                </div>\n              </td>\n              <td>\n                <span class=\"pie_2\" style=\"display: none;\">226/360</span>\n              </td>\n\n              <td>\n                60 %\n              </td>\n              <td>\n                25 Octobar 2015\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-3.jpg\" alt=\"chat-user\"></a>\n                <div class=\"project-contain\">\n                  <h6>Graphic desginer</h6>\n                  <p class=\"text-muted\"><i class=\"fa fa-clock-o f-12 m-r-10\"></i>Created 05 . 8 . 2015</p>\n                </div>\n              </td>\n              <td>\n                <span class=\"pie_3\" style=\"display: none;\">0.52/1.561</span>\n              </td>\n\n              <td>\n                40 %\n              </td>\n              <td>\n                12 Octobar 2015\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-1.jpg\" alt=\"chat-user\"></a>\n                <div class=\"project-contain\">\n                  <h6>Photoshop and logo</h6>\n                  <p class=\"text-muted\"><i class=\"fa fa-clock-o f-12 m-r-10\"></i>Created 14 . 8 . 2015</p>\n                </div>\n              </td>\n              <td>\n                <span class=\"pie_4\" style=\"display: none;\">1,4</span>\n              </td>\n\n              <td>\n                20 %\n              </td>\n              <td>\n                04 Octobar 2015\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-4.jpg\" alt=\"chat-user\"></a>\n                <div class=\"project-contain\">\n                  <h6>Appestia Perfect</h6>\n                  <p class=\"text-muted\"><i class=\"fa fa-clock-o f-12 m-r-10\"></i>Created 14 . 8 . 2015</p>\n                </div>\n              </td>\n              <td>\n                <span class=\"pie_5\" style=\"display: none;\">226,134</span>\n              </td>\n\n              <td>\n                60 %\n              </td>\n              <td>\n                15 Octobar 2015\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-2.jpg\" alt=\"chat-user\"></a>\n                <div class=\"project-contain\">\n                  <h6>Appestia Perfect</h6>\n                  <p class=\"text-muted\"><i class=\"fa fa-clock-o f-12 m-r-10\"></i>Created 14 . 8 . 2015</p>\n                </div>\n              </td>\n              <td>\n                <span class=\"pie_6\" style=\"display: none;\">200,134</span>\n              </td>\n\n              <td>\n                60 %\n              </td>\n              <td>\n                15 Octobar 2015\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </app-card>\n    </div>\n    <!-- Project overview End -->\n\n    <!-- amount-card start -->\n    <div class=\"col-md-6 col-xl-3\">\n      <div class=\"card bg-c-blue amount-card o-hidden\">\n        <div class=\"card-block\">\n          <i class=\"icon-arrow-up\"></i>\n          <h4>$4600,00</h4>\n        </div>\n        <chart id=\"amount_card1\" [type]=\"'line'\" [data]=\"amountCardData\" [options]=\"amountCardOption\"></chart>\n        <p>Amount Founded</p>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-xl-3\">\n      <div class=\"card bg-c-green amount-card o-hidden\">\n        <div class=\"card-block\">\n          <i class=\"icon-arrow-down\"></i>\n          <h4>$387.00</h4>\n        </div>\n        <chart id=\"amount_card2\" [type]=\"'line'\" [data]=\"amountCardData\" [options]=\"amountCardOption\"></chart>\n        <p>Balance</p>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-xl-3\">\n      <div class=\"card bg-c-yellow amount-card o-hidden\">\n        <div class=\"card-block\">\n          <i class=\"icon-arrow-up\"></i>\n          <h4>$8350.00</h4>\n        </div>\n        <chart id=\"amount_card3\" [type]=\"'line'\" [data]=\"amountCardData\" [options]=\"amountCardOption\"></chart>\n        <p>Payback Amount</p>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-xl-3\">\n      <div class=\"card bg-c-pink amount-card o-hidden\">\n        <div class=\"card-block\">\n          <i class=\"icon-arrow-down\"></i>\n          <h4>$123.00</h4>\n        </div>\n        <chart id=\"amount_card4\" [type]=\"'line'\" [data]=\"amountCardData\" [options]=\"amountCardOption\"></chart>\n        <p>Planned Collection Income</p>\n      </div>\n    </div>\n    <!-- amount-card end -->\n\n    <!-- Project & Task Start -->\n    <div class=\"col-md-12 col-xl-7\">\n      <div class=\"card past-payment-card\">\n        <div class=\"card-header\">\n          <div class=\"card-header-left \">\n            <h5>Past payment</h5>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-hover\">\n              <thead>\n              <tr>\n                <th>Team Member</th>\n                <th>Paid Hours</th>\n                <th>paid Amount</th>\n                <th>Date</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr>\n                <td>\n                  <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-3.jpg\" alt=\"chat-user\"></a>\n                  <p class=\"d-inline-block m-l-10 f-w-600\">Erwin Brown</p>\n                </td>\n                <td>\n                  <p>6:23</p>\n                </td>\n                <td>\n                  <p>$20.00/hr</p>\n                </td>\n                <td>\n                  <p>23 oct, 2017</p>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-2.jpg\" alt=\"chat-user\"></a>\n                  <p class=\"d-inline-block m-l-10 f-w-600\">Joseph Villa</p>\n                </td>\n                <td>\n                  <p>10:56</p>\n                </td>\n                <td>\n                  <p>$25.00/hr</p>\n                </td>\n                <td>\n                  <p>25 oct, 2017</p>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-4.jpg\" alt=\"chat-user\"></a>\n                  <p class=\"d-inline-block m-l-10 f-w-600\">Jekson Durk</p>\n                </td>\n                <td>\n                  <p>5:56</p>\n                </td>\n                <td>\n                  <p>$23.00/hr</p>\n                </td>\n                <td>\n                  <p>01 nov, 2017</p>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-1.jpg\" alt=\"chat-user\"></a>\n                  <p class=\"d-inline-block m-l-10 f-w-600\">Erwin Brown</p>\n                </td>\n                <td>\n                  <p>6:23</p>\n                </td>\n                <td>\n                  <p>$16.00/hr</p>\n                </td>\n                <td>\n                  <p>05 nov, 2017</p>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-4.jpg\" alt=\"chat-user\"></a>\n                  <p class=\"d-inline-block m-l-10  f-w-600\">Gregory Durk</p>\n                </td>\n                <td>\n                  <p>15:23</p>\n                </td>\n                <td>\n                  <p>$40.00/hr</p>\n                </td>\n                <td>\n                  <p>15 nov, 2017</p>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-xl-5 \">\n      <div class=\"card project-task\">\n        <div class=\"card-header\">\n          <div class=\"card-header-left \">\n            <h5>Audience by country</h5>\n          </div>\n        </div>\n        <div class=\"card-block p-b-10\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-hover\">\n              <thead>\n              <tr>\n                <th>country</th>\n                <th>Statistic</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr>\n                <td>\n                  <div class=\"task-contain\">\n                    <h6 class=\"bg-c-blue d-inline-block text-center\">IN</h6>\n                    <p class=\"d-inline-block m-l-20\">India</p>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"d-inline-block m-r-20\">80%</p>\n                  <div class=\"progress d-inline-block\">\n                    <div class=\"progress-bar bg-c-blue\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:80%\">\n                    </div>\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"task-contain\">\n                    <h6 class=\"bg-c-pink d-inline-block text-center\">NY</h6>\n                    <p class=\"d-inline-block m-l-20\">New York</p>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"d-inline-block m-r-20\">60%</p>\n                  <div class=\"progress d-inline-block\">\n                    <div class=\"progress-bar bg-c-pink\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:60%\">\n                    </div>\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"task-contain\">\n                    <h6 class=\"bg-c-yellow d-inline-block text-center\">UK</h6>\n                    <p class=\"d-inline-block m-l-20\">England</p>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"d-inline-block m-r-20\">50%</p>\n                  <div class=\"progress d-inline-block\">\n                    <div class=\"progress-bar bg-c-yellow\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n                    </div>\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"task-contain\">\n                    <h6 class=\"bg-c-green d-inline-block text-center\">BZ</h6>\n                    <p class=\"d-inline-block m-l-20\">Brazil</p>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"d-inline-block m-r-20\">20%</p>\n                  <div class=\"progress d-inline-block\">\n                    <div class=\"progress-bar bg-c-green\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:20%\">\n                    </div>\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"task-contain\">\n                    <h6 class=\"bg-c-blue d-inline-block text-center\">SA</h6>\n                    <p class=\"d-inline-block m-l-20\">Africa</p>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"d-inline-block m-r-20\">50%</p>\n                  <div class=\"progress d-inline-block\">\n                    <div class=\"progress-bar bg-c-blue\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n                    </div>\n                  </div>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Project & Task End -->\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/theme/dashboard/analytics/analytics.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/dashboard/analytics/analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_charts_amchart_amcharts_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/amcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_charts_amchart_amcharts_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_charts_amchart_amcharts_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_charts_amchart_gauge_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/gauge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_charts_amchart_gauge_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_charts_amchart_gauge_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_charts_amchart_pie_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/pie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_charts_amchart_pie_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_charts_amchart_pie_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_charts_amchart_serial_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/serial.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_charts_amchart_serial_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_charts_amchart_serial_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_light_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/light.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_light_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_light_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_ammap_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/ammap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_ammap_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_ammap_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_worldLow_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/worldLow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_worldLow_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_worldLow_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_charts_amchart_continentsLow_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/continentsLow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_charts_amchart_continentsLow_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__assets_charts_amchart_continentsLow_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AnalyticsComponent = (function () {
    function AnalyticsComponent() {
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            AmCharts.makeChart('visitor-list-graph', {
                'type': 'serial',
                'hideCredits': true,
                'theme': 'light',
                'dataDateFormat': 'YYYY-MM-DD',
                'precision': 2,
                'valueAxes': [{
                        'id': 'v1',
                        'title': 'Visitors',
                        'position': 'left',
                        'autoGridCount': false,
                        'labelFunction': function (value) {
                            return '$' + Math.round(value) + 'M';
                        }
                    }, {
                        'id': 'v2',
                        'title': 'New Visitors',
                        'gridAlpha': 0,
                        'position': 'right',
                        'autoGridCount': false
                    }],
                'graphs': [{
                        'id': 'g3',
                        'valueAxis': 'v1',
                        'lineColor': '#a8d1ff',
                        'fillColors': '#a8d1ff',
                        'fillAlphas': 1,
                        'type': 'column',
                        'title': 'old Visitor',
                        'valueField': 'sales2',
                        'clustered': false,
                        'columnWidth': 0.5,
                        'legendValueText': '$[[value]]M',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                    }, {
                        'id': 'g4',
                        'valueAxis': 'v1',
                        'lineColor': '#4099ff',
                        'fillColors': '#4099ff',
                        'fillAlphas': 1,
                        'type': 'column',
                        'title': 'New visitor',
                        'valueField': 'sales1',
                        'clustered': false,
                        'columnWidth': 0.3,
                        'legendValueText': '$[[value]]M',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                    }, {
                        'id': 'g1',
                        'valueAxis': 'v2',
                        'bullet': 'round',
                        'bulletBorderAlpha': 1,
                        'bulletColor': '#FFFFFF',
                        'bulletSize': 5,
                        'hideBulletsCount': 50,
                        'lineThickness': 2,
                        'lineColor': '#2ed8b6',
                        'type': 'smoothedLine',
                        'title': 'Last Month Visitor',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market1',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g2',
                        'valueAxis': 'v2',
                        'bullet': 'round',
                        'bulletBorderAlpha': 1,
                        'bulletColor': '#FFFFFF',
                        'bulletSize': 5,
                        'hideBulletsCount': 50,
                        'lineThickness': 2,
                        'lineColor': '#FF5370',
                        // 'type': 'smoothedLine',
                        'dashLength': 5,
                        'title': 'Average Visitor',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market2',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }],
                'chartCursor': {
                    'pan': true,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'cursorAlpha': 0,
                    'valueLineAlpha': 0.2
                },
                'categoryField': 'date',
                'categoryAxis': {
                    'parseDates': true,
                    'dashLength': 1,
                    'minorGridEnabled': true
                },
                'legend': {
                    'useGraphSettings': true,
                    'position': 'top'
                },
                'balloon': {
                    'borderThickness': 1,
                    'cornerRadius': 5,
                    'shadowAlpha': 0
                },
                'dataProvider': [{
                        'date': '2013-01-16',
                        'market1': 71,
                        'market2': 75,
                        'sales1': 5,
                        'sales2': 8
                    }, {
                        'date': '2013-01-17',
                        'market1': 74,
                        'market2': 78,
                        'sales1': 4,
                        'sales2': 6
                    }, {
                        'date': '2013-01-18',
                        'market1': 78,
                        'market2': 88,
                        'sales1': 5,
                        'sales2': 2
                    }, {
                        'date': '2013-01-19',
                        'market1': 85,
                        'market2': 89,
                        'sales1': 8,
                        'sales2': 9
                    }, {
                        'date': '2013-01-20',
                        'market1': 82,
                        'market2': 89,
                        'sales1': 9,
                        'sales2': 6
                    }, {
                        'date': '2013-01-21',
                        'market1': 83,
                        'market2': 85,
                        'sales1': 3,
                        'sales2': 5
                    }, {
                        'date': '2013-01-22',
                        'market1': 88,
                        'market2': 92,
                        'sales1': 5,
                        'sales2': 7
                    }, {
                        'date': '2013-01-23',
                        'market1': 85,
                        'market2': 90,
                        'sales1': 7,
                        'sales2': 6
                    }, {
                        'date': '2013-01-24',
                        'market1': 85,
                        'market2': 91,
                        'sales1': 9,
                        'sales2': 5
                    }, {
                        'date': '2013-01-25',
                        'market1': 80,
                        'market2': 84,
                        'sales1': 5,
                        'sales2': 8
                    }, {
                        'date': '2013-01-26',
                        'market1': 87,
                        'market2': 92,
                        'sales1': 4,
                        'sales2': 8
                    }, {
                        'date': '2013-01-27',
                        'market1': 84,
                        'market2': 87,
                        'sales1': 3,
                        'sales2': 4
                    }, {
                        'date': '2013-01-28',
                        'market1': 83,
                        'market2': 88,
                        'sales1': 5,
                        'sales2': 7
                    }, {
                        'date': '2013-01-29',
                        'market1': 84,
                        'market2': 87,
                        'sales1': 5,
                        'sales2': 8
                    }, {
                        'date': '2013-01-30',
                        'market1': 81,
                        'market2': 85,
                        'sales1': 4,
                        'sales2': 7
                    }]
            });
            /* power card chart start */
            _this.powerCardData = gurubuildchartjs('#4099ff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], null);
            _this.powerCardOption = gurubuildchartoption();
            /* power card chart and */
            /* water card chart start */
            _this.waterCardData = gurubuildchartjs('#FFB64D', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], null);
            _this.waterCardOption = gurubuildchartoption();
            /* water card chart and */
            /* energy card chart start */
            _this.energyCardData = gurubuildchartjs('#2ed8b6', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10], null);
            _this.energyCardOption = gurubuildchartoption();
            /* energy card chart and */
            /* amount card 1 to 4 start */
            _this.amountCardData = j('#fff', [40, 30, 45, 30, 35], '#fff');
            _this.amountCardOption = g();
            /* amount card 1 to 4 end */
        }, 75);
    };
    AnalyticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__("../../../../../src/app/theme/dashboard/analytics/analytics.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/dashboard/analytics/analytics.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());

function gurubuildchartjs(a, b, f) {
    if (f == null) {
        f = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        datasets: [{
                label: '',
                borderColor: a,
                borderWidth: 2,
                hitRadius: 30,
                pointHoverRadius: 4,
                pointBorderWidth: 50,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: 'transparent',
                fill: true,
                backgroundColor: f,
                data: b,
            }]
    };
}
function gurubuildchartoption() {
    return {
        title: {
            display: !1
        },
        tooltips: {
            enabled: true,
            intersect: !1,
            mode: 'nearest',
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10
        },
        legend: {
            display: !1,
            labels: {
                usePointStyle: !1
            }
        },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Month'
                    }
                }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Value'
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                }]
        },
        elements: {
            point: {
                radius: 4,
                borderWidth: 12
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 5,
                bottom: 0
            }
        }
    };
}
function j(r, q, s) {
    if (s == null) {
        s = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
                label: '',
                borderColor: r,
                borderWidth: 2,
                hitRadius: 30,
                pointHoverRadius: 4,
                pointBorderWidth: 50,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: r,
                pointHoverBorderColor: 'transparent',
                fill: true,
                backgroundColor: s,
                data: q,
            }]
    };
}
function g() {
    return {
        title: { display: !1 },
        tooltips: { enabled: true, intersect: !1, mode: 'nearest', xPadding: 10, yPadding: 10, caretPadding: 10 },
        legend: { display: !1, labels: { usePointStyle: !1 } },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: { mode: 'index' },
        scales: {
            xAxes: [{ display: !1, gridLines: !1, scaleLabel: { display: !0, labelString: 'Month' } }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: { display: !0, labelString: 'Value' },
                    ticks: { beginAtZero: !0 }
                }]
        },
        elements: { point: { radius: 4, borderWidth: 12 } },
        layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } }
    };
}


/***/ }),

/***/ "../../../../../src/app/theme/dashboard/analytics/analytics.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModule", function() { return AnalyticsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analytics_component__ = __webpack_require__("../../../../../src/app/theme/dashboard/analytics/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__analytics_routing_module__ = __webpack_require__("../../../../../src/app/theme/dashboard/analytics/analytics-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AnalyticsModule = (function () {
    function AnalyticsModule() {
    }
    AnalyticsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__analytics_routing_module__["a" /* AnalyticsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__analytics_component__["a" /* AnalyticsComponent */]]
        })
    ], AnalyticsModule);
    return AnalyticsModule;
}());



/***/ })

});
//# sourceMappingURL=analytics.module.chunk.js.map