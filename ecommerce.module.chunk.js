webpackJsonp(["ecommerce.module"],{

/***/ "../../../../../src/app/theme/dashboard/ecommerce/ecommerce-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcommerceRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ecommerce_component__ = __webpack_require__("../../../../../src/app/theme/dashboard/ecommerce/ecommerce.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__ecommerce_component__["a" /* EcommerceComponent */],
        data: {
            title: 'Ecommerce',
            status: false
        }
    }
];
var EcommerceRoutingModule = (function () {
    function EcommerceRoutingModule() {
    }
    EcommerceRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], EcommerceRoutingModule);
    return EcommerceRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/dashboard/ecommerce/ecommerce.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\n  <div class=\"row\">\n\n    <div class=\"col-md-12 col-xl-4\">\n      <div class=\"card widget-statstic-card borderless-card\">\n        <div class=\"card-header\">\n          <div class=\"card-header-left\">\n            <h5>Statistics</h5>\n            <p class=\"p-t-10 m-b-0 text-muted\">Compared to last week</p>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <i class=\"fa fa-calendar st-icon bg-primary\"></i>\n          <div class=\"text-left\">\n            <h3 class=\"d-inline-block\">5,456</h3>\n            <i class=\"fa fa-long-arrow-up f-24 text-success m-l-15\"></i>\n            <span class=\"f-right bg-success\">23%</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-xl-4\">\n      <div class=\"card widget-statstic-card borderless-card\">\n        <div class=\"card-header\">\n          <div class=\"card-header-left\">\n            <h5>Daily order</h5>\n            <p class=\"p-t-10 m-b-0 text-muted\">Compare to yesterday</p>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <i class=\"fa fa-users st-icon bg-warning txt-lite-color\"></i>\n          <div class=\"text-left\">\n            <h3 class=\"d-inline-block\">600</h3>\n            <i class=\"fa fa-long-arrow-down text-danger f-24 m-l-15\"></i>\n            <span class=\"f-right bg-danger\">-5%</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-xl-4\">\n      <div class=\"card widget-statstic-card borderless-card\">\n        <div class=\"card-header\">\n          <div class=\"card-header-left\">\n            <h5>Revenue 2017</h5>\n            <p class=\"p-t-10 m-b-0 text-muted\">This year revenue</p>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <i class=\"fa fa-line-chart st-icon bg-success\"></i>\n          <div class=\"text-left\">\n            <h3 class=\"d-inline-block\">$2,65,500</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!---->\n    <div class=\"col-xl-8 col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5>Analytics</h5>\n        </div>\n        <div class=\"card-block\">\n          <div id=\"analythics-graph\" style=\"height:365px\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 col-md-12\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 col-md-6\">\n          <div class=\"card\">\n            <div class=\"card-block text-center\">\n              <i class=\"fa fa-envelope text-c-blue d-block f-40\"></i>\n              <h4 class=\"m-t-20\"><span class=\"text-c-blue\">8.62k</span> Subscribers</h4>\n              <p class=\"m-b-20\">Your main list is growing</p>\n              <button class=\"btn btn-primary btn-sm btn-round\">Manage List</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-12 col-md-6\">\n          <div class=\"card\">\n            <div class=\"card-block text-center\">\n              <i class=\"fa fa-twitter text-c-green d-block f-40\"></i>\n              <h4 class=\"m-t-20\"><span class=\"text-c-green\">+40</span> Followers</h4>\n              <p class=\"m-b-20\">Your main list is growing</p>\n              <button class=\"btn btn-success btn-sm btn-round\">Check them out</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- unique visitor start -->\n    <div class=\"col-xl-5 col-md-12\">\n      <app-card [title]=\"'Reviews'\" [cardClass]=\"'review-task'\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <td><a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/widget/user-3.png\" alt=\"chat-user\"></a>\n              </td>\n              <td>\n                <h6>Josephin John</h6>\n                <p class=\"text-muted\">Lorem ipsum dolor</p>\n              </td>\n              <td>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\n              </td>\n            </tr>\n            <tr>\n              <td><a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/widget/user-2.png\" alt=\"chat-user\"></a>\n              </td>\n              <td>\n                <h6>Josephin Doe</h6>\n                <p class=\"text-muted\">Lorem ipsum dolo</p>\n              </td>\n              <td>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\n              </td>\n            </tr>\n            <tr>\n              <td><a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/widget/user-3.png\" alt=\"chat-user\"></a>\n              </td>\n              <td>\n                <h6>Viral Dhimmar</h6>\n                <p class=\"text-muted\">Lorem ipsum do</p>\n              </td>\n              <td>\n                <a href=\"javascript:\"><i class=\"fa fa-star  f-18 text-c-blue\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\n              </td>\n            </tr>\n            <tr>\n              <td><a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/widget/user-4.png\" alt=\"chat-user\"></a>\n              </td>\n              <td>\n                <h6>Luciano Durk</h6>\n                <p class=\"text-muted\">Lorem ipsu</p>\n              </td>\n              <td>\n                <a href=\"javascript:\"><i class=\"fa fa-star  f-18 text-c-blue\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\n              </td>\n            </tr>\n            <tr>\n              <td><a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/widget/user-3.png\" alt=\"chat-user\"></a>\n              </td>\n              <td>\n                <h6>Viral Dhimmar</h6>\n                <p class=\"text-muted\">Lorem ipsum do</p>\n              </td>\n              <td>\n                <a href=\"javascript:\"><i class=\"fa fa-star  f-18 text-c-blue\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </app-card>\n    </div>\n    <div class=\"col-xl-7 col-md-12\">\n      <div class=\"card bg-c-blue map-visitor-card\">\n        <div class=\"card-header\">\n          <h5>Unique Visitor</h5>\n        </div>\n        <div class=\"card-block\">\n          <div id=\"unique-visitor-chart\" style=\"height:260px\"></div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"row justify-content-center text-center\">\n            <div class=\"col-auto b-r-default col-6 col-sm-4\">\n              <h6>Visits</h6>\n              <p class=\"text-muted\">29.703 Users (40%)</p>\n              <div class=\"progress\">\n                <div class=\"progress-bar bg-c-blue\" style=\"width:40%\"></div>\n              </div>\n            </div>\n            <div class=\"col-auto col-6 col-sm-4\">\n              <h6>Revenue</h6>\n              <p class=\"text-muted\">20703$ (60%)</p>\n              <div class=\"progress\">\n                <div class=\"progress-bar bg-c-green\" style=\"width:60%\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- unique visitor end -->\n    <!-- Recent Orders start -->\n    <div class=\"col-xl-8 col-md-12\">\n      <app-card [title]=\"'Recent Orders'\" [blockClass]=\"'p-0'\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <tr>\n              <th>Image</th>\n              <th>Product Code</th>\n              <th>Customer</th>\n              <th>Purchased On</th>\n              <th>Status</th>\n              <th>Transaction</th>\n            </tr>\n            <tr>\n              <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n              <td>PNG002413</td>\n              <td>Jane Elliott</td>\n              <td>06-01-2017</td>\n              <td><span class=\"label label-primary\">Shipping</span></td>\n              <td>#7234421</td>\n            </tr>\n            <tr>\n              <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n              <td>PNG002344</td>\n              <td>John Deo</td>\n              <td>05-01-2017</td>\n              <td><span class=\"label label-danger\">Failed</span></td>\n              <td>#7234486</td>\n            </tr>\n            <tr>\n              <td><img src=\"assets/images/product/prod3.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n              <td>PNG002653</td>\n              <td>Eugine Turner</td>\n              <td>04-01-2017</td>\n              <td><span class=\"label label-success\">Delivered</span></td>\n              <td>#7234417</td>\n            </tr>\n            <tr>\n              <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n              <td>PNG002156</td>\n              <td>Jacqueline Howell</td>\n              <td>03-01-2017</td>\n              <td><span class=\"label label-warning\">Pending</span></td>\n              <td>#7234454</td>\n            </tr>\n            <tr>\n              <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n              <td>PNG002344</td>\n              <td>John Deo</td>\n              <td>05-01-2017</td>\n              <td><span class=\"label label-primary\">Shipping</span></td>\n              <td>#7234489</td>\n            </tr>\n          </table>\n        </div>\n      </app-card>\n    </div>\n    <div class=\"col-xl-4 col-md-12\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 col-md-6\">\n          <div class=\"card statustic-card\">\n            <div class=\"card-header\">\n              <h5>Order Completed</h5>\n            </div>\n            <div class=\"card-block text-center\">\n              <span class=\"d-block text-c-green f-36\">14</span>\n              <p class=\"m-b-0\">Total</p>\n              <div class=\"progress\">\n                <div class=\"progress-bar bg-c-green\" style=\"width:14%\"></div>\n              </div>\n            </div>\n            <div class=\"card-footer bg-c-green\">\n              <h6 class=\"text-white m-b-0\">this month Order: 14</h6>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-12 col-md-6\">\n          <div class=\"card statustic-card\">\n            <div class=\"card-header\">\n              <h5>Order Cancelled</h5>\n            </div>\n            <div class=\"card-block text-center\">\n              <span class=\"d-block text-c-pink f-36\">85</span>\n              <p class=\"m-b-0\">Total</p>\n              <div class=\"progress\">\n                <div class=\"progress-bar bg-c-pink\" style=\"width:85%\"></div>\n              </div>\n            </div>\n            <div class=\"card-footer bg-c-pink\">\n              <h6 class=\"text-white m-b-0\">this month cancel order: 85</h6>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Recent Orders end -->\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/theme/dashboard/ecommerce/ecommerce.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/dashboard/ecommerce/ecommerce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcommerceComponent; });
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









var EcommerceComponent = (function () {
    function EcommerceComponent() {
    }
    EcommerceComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            AmCharts.makeChart('unique-visitor-chart', {
                type: 'map',
                theme: 'light',
                hideCredits: true,
                dragMap: false,
                projection: 'eckert3',
                areasSettings: {
                    autoZoom: false,
                    rollOverOutlineColor: '#fff',
                    selectedColor: '#fff',
                    outlineAlpha: 1,
                    outlineColor: 'transparent',
                    outlineThickness: 1,
                    color: '#000000'
                },
                dataProvider: {
                    map: 'continentsLow',
                    areas: [{
                            id: 'africa',
                            title: 'Africa',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'asia',
                            title: 'Asia',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'australia',
                            title: 'Australia',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'europe',
                            title: 'Europe',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'north_america',
                            title: 'North America',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'south_america',
                            title: 'South America',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }]
                },
                zoomControl: { panControlEnabled: false, zoomControlEnabled: false, homeButtonEnabled: false },
            });
            AmCharts.makeChart('analythics-graph', {
                'type': 'serial',
                'theme': 'light',
                'hideCredits': true,
                'dataDateFormat': 'YYYY-MM-DD',
                'precision': 2,
                'valueAxes': [{
                        'id': 'v1',
                        'title': 'Sales',
                        'position': 'left',
                        'autoGridCount': false,
                        'labelFunction': function (value) {
                            return '$' + Math.round(value) + 'M';
                        }
                    }, {
                        'id': 'v2',
                        'gridAlpha': 0.1,
                        'autoGridCount': false
                    }],
                'graphs': [{
                        'id': 'g1',
                        'valueAxis': 'v2',
                        'lineThickness': 0,
                        'fillAlphas': 0.9,
                        'lineColor': '#4099ff ',
                        'type': 'smoothedLine',
                        'title': 'Laptop',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market1',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g2',
                        'valueAxis': 'v2',
                        'fillAlphas': 0.9,
                        'bulletColor': '#FF5370 ',
                        'lineThickness': 0,
                        'lineColor': '#FF5370 ',
                        'type': 'smoothedLine',
                        'title': 'TV',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market2',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g3',
                        'valueAxis': 'v2',
                        'fillAlphas': 0.9,
                        'bulletColor': '#2ed8b6',
                        'lineThickness': 0,
                        'lineColor': '#2ed8b6',
                        'type': 'smoothedLine',
                        'title': 'Mobile',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'sales1',
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
                    'gridAlpha': 0,
                    'minorGridEnabled': true
                },
                'legend': {
                    'position': 'top',
                },
                'balloon': {
                    'borderThickness': 1,
                    'shadowAlpha': 0
                },
                'export': {
                    'enabled': true
                },
                'dataProvider': [{
                        'date': '2013-01-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-02-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 40
                    }, {
                        'date': '2013-03-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-04-01',
                        'market1': 30,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-05-01',
                        'market1': 0,
                        'market2': 20,
                        'sales1': 0
                    }, {
                        'date': '2013-06-01',
                        'market1': 25,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-07-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-08-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 30
                    }, {
                        'date': '2013-09-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-10-01',
                        'market1': 0,
                        'market2': 50,
                        'sales1': 0
                    }, {
                        'date': '2013-11-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 65
                    }, {
                        'date': '2013-12-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }]
            });
        });
    };
    EcommerceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ecommerce',
            template: __webpack_require__("../../../../../src/app/theme/dashboard/ecommerce/ecommerce.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/dashboard/ecommerce/ecommerce.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EcommerceComponent);
    return EcommerceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/dashboard/ecommerce/ecommerce.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceModule", function() { return EcommerceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ecommerce_component__ = __webpack_require__("../../../../../src/app/theme/dashboard/ecommerce/ecommerce.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ecommerce_routing_module__ = __webpack_require__("../../../../../src/app/theme/dashboard/ecommerce/ecommerce-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EcommerceModule = (function () {
    function EcommerceModule() {
    }
    EcommerceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__ecommerce_routing_module__["a" /* EcommerceRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__ecommerce_component__["a" /* EcommerceComponent */]]
        })
    ], EcommerceModule);
    return EcommerceModule;
}());



/***/ })

});
//# sourceMappingURL=ecommerce.module.chunk.js.map