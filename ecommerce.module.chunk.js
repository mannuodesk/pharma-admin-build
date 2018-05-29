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

module.exports = "<div  class=\"overlay-loader\" style=\"display: block;\" *ngIf=\"!gotData\">\r\n  <div _ngcontent-c11=\"\" class=\"preloader3 custom-preloader loader-block\">\r\n    <div _ngcontent-c11=\"\" class=\"circ1 loader-primary loader-lg\"></div>\r\n    <div _ngcontent-c11=\"\" class=\"circ2 loader-primary loader-lg\"></div>\r\n    <div _ngcontent-c11=\"\" class=\"circ3 loader-primary loader-lg\"></div>\r\n    <div _ngcontent-c11=\"\" class=\"circ4 loader-primary loader-lg\"></div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"page-body\" *ngIf=\"gotData\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-12 col-xl-3\">\r\n      <div class=\"card widget-statstic-card borderless-card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Orders This Week</h5>\r\n          <!--   <p class=\"p-t-10 m-b-0 text-muted\">Compared to last week</p> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-calendar st-icon bg-primary\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">{{DashboadData.TotalOrdersPlacedThisWeek}}</h3>\r\n            <i class=\"fa fa-long-arrow-up f-24 text-success m-l-15\"></i>\r\n         <!--    <span class=\"f-right bg-success\">23%</span> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card widget-statstic-card borderless-card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Total Customers</h5>\r\n           <!--  <p class=\"p-t-10 m-b-0 text-muted\">Compare to yesterday</p> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-users st-icon bg-warning txt-lite-color\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">{{DashboadData.TotalNumberOfCustomers}}</h3>\r\n            <i class=\"fa fa-long-arrow-down text-danger f-24 m-l-15\"></i>\r\n           <!--  <span class=\"f-right bg-danger\">-5%</span> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card widget-statstic-card borderless-card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Pharmacies Registered</h5>\r\n       <!--      <p class=\"p-t-10 m-b-0 text-muted\">This year revenue</p> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-line-chart st-icon bg-success\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">{{DashboadData.TotalRegisteredPharmacies}}</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card widget-statstic-card borderless-card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Logitics Registered</h5>\r\n       <!--      <p class=\"p-t-10 m-b-0 text-muted\">This year revenue</p> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"fa \tfa fa-motorcycle st-icon bg-success\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">{{DashboadData.TotalRegisteredLogistics}}</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!---->\r\n    <div class=\"col-xl-7 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Analytics</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n           <!--  <div>\r\n                <div style=\"display: block\">\r\n                  <canvas  baseChart\r\n                  attr.data=\"{{barChartData}}\"\r\n                  attr.labels={{barChartLabels}}\r\n                  attr.options=\"{{barChartOptions}}\"\r\n                          attr.legend=\"{{barChartLegend}}\"\r\n                          attr.chartType=\"{{barChartType}}\"\r\n                          (chartHover)=\"chartHovered($event)\"\r\n                          (chartClick)=\"chartClicked($event)\"></canvas>\r\n                </div>\r\n                <button (click)=\"randomize()\">Update</button> \r\n                \r\n              </div> --> \r\n              <div #statisticsChart><div id=\"statistics_chart\" style=\"height: 350px\"></div></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-5 col-md-12\">\r\n      <app-card [title]=\"'Top 5 chemist for this week'\" [cardClass]=\"'review-task'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n            <tbody>\r\n            <tr *ngFor=\"let chemist of DashboadData.Top5Chemists\">\r\n            <td><a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/widget/user-3.png\" alt=\"chat-user\"></a></td>\r\n            <td>\r\n                <h6>{{chemist.Chemist.PharmacyName}}</h6>\r\n                <p class=\"text-muted\">{{chemist.Chemist.ContactPersonName}}</p>\r\n            </td>\r\n            <td>\r\n                <h6 class='text-muted'>{{chemist.Chemist.Area.City.Name}}, {{chemist.Chemist.Area.Name}}</h6>\r\n             \r\n              </td>\r\n\r\n              <td>\r\n                  <h6 class='text-muted'>Rs {{chemist.OrderTotal}}/-</h6>\r\n               \r\n                </td>\r\n            </tr>\r\n           \r\n          \r\n           \r\n            <!-- <tr>\r\n              <td><a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/widget/user-3.png\" alt=\"chat-user\"></a>\r\n              </td>\r\n              <td>\r\n                <h6>Viral Dhimmar</h6>\r\n                <p class=\"text-muted\">Lorem ipsum do</p>\r\n              </td>\r\n              <td>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star  f-18 text-c-blue\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n              </td>\r\n            </tr> -->\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n  \r\n    <!-- Recent Orders start -->\r\n    <div class=\"col-xl-8 col-md-12\">\r\n      <app-card [title]=\"'Recent Orders'\" [blockClass]=\"'p-0'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <tr>\r\n              <th>Image</th>\r\n              <th>Product Code</th>\r\n              <th>Customer</th>\r\n              <th>Purchased On</th>\r\n              <th>Status</th>\r\n              <th>Transaction</th>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let order of DashboadData.LatestOrdersList\">\r\n                <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                <td>\r\n                  <p style=\"margin-bottom:0\" *ngFor=\"let product of order.OrderItem\">{{product.Product.Name}}</p>\r\n                </td>\r\n                <td>{{order.UserId}}</td>\r\n                <td>{{order.ReceivedTime}}</td>\r\n                <td><span class=\"label label-primary\">{{order.OrderStatus}}</span></td>\r\n                <td>#{{order.Id}}</td>\r\n            </tr>\r\n    \r\n            \r\n           \r\n            \r\n            <!-- <tr>\r\n              <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n              <td>PNG002344</td>\r\n              <td>John Deo</td>\r\n              <td>05-01-2017</td>\r\n              <td><span class=\"label label-primary\">Shipping</span></td>\r\n              <td>#7234489</td>\r\n            </tr> -->\r\n          </table>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 col-md-6\">\r\n          <div class=\"card statustic-card\">\r\n            <div class=\"card-header\">\r\n              <h5>Orders Completed</h5>\r\n            </div>\r\n            <div class=\"card-block text-center\">\r\n              <span class=\"d-block text-c-green f-36\">{{DashboadData.completedOrdersCount}}</span>\r\n              <p class=\"m-b-0\">Total</p>\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar bg-c-green\" style=\"width:14%\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer bg-c-green\">\r\n              <h6 class=\"text-white m-b-0\">this week Orders: {{DashboadData.weeklyOrderCount}}</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-12 col-md-6\">\r\n          <div class=\"card statustic-card\">\r\n            <div class=\"card-header\">\r\n              <h5>Orders Pending</h5>\r\n            </div>\r\n            <div class=\"card-block text-center\">\r\n              <span class=\"d-block text-c-pink f-36\">{{DashboadData.pendingOrdersCount}}</span>\r\n              <p class=\"m-b-0\">Total</p>\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar bg-c-pink\" style=\"width:85%\"></div>\r\n              </div>\r\n            </div>\r\n           <!--  <div class=\"card-footer bg-c-pink\">\r\n              <h6 class=\"text-white m-b-0\">this month cancel order: 85</h6>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Recent Orders end -->\r\n\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_dashboardService__ = __webpack_require__("../../../../../src/app/theme/services/dashboardService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_dashboard_Model_js__ = __webpack_require__("../../../../../src/app/theme/models/dashboard.Model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
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
    function EcommerceComponent(_dashboardService, AmCharts) {
        this._dashboardService = _dashboardService;
        this.AmCharts = AmCharts;
        this.gotData = false;
        this.top5Chemists = [];
        this.OrderStatuses = {
            pending: 100,
            confirmed: 200,
            ontheway: 300,
            notshipped: 400,
            shipped: 500,
            tobedelivered: 600,
            canceled: 700,
            completed: 800,
            returned: 900,
            delivered: 1000
        };
        this.options = {
            position: ['bottom', 'right'],
        };
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        this.DashboadData = new __WEBPACK_IMPORTED_MODULE_10__models_dashboard_Model_js__["a" /* DashboadData */]();
    }
    EcommerceComponent.prototype.ngOnInit = function () {
        this.checkOut();
        setTimeout(function () {
        });
    };
    // events
    EcommerceComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    EcommerceComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    EcommerceComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    EcommerceComponent.prototype.checkOut = function () {
        var _this = this;
        this.DashboadData = new __WEBPACK_IMPORTED_MODULE_10__models_dashboard_Model_js__["a" /* DashboadData */]();
        this._dashboardService.getDashboardData().subscribe(function (response) {
            console.log(response.data);
            _this.DashboadData = response.data;
            _this.gotData = true;
            for (var i = 0; i < _this.DashboadData.LatestOrdersList.length; i++) {
                var myDate = new Date(parseFloat(_this.DashboadData.LatestOrdersList[i].ReceivedTime) * 1000);
                _this.DashboadData.LatestOrdersList[i].ReceivedTime = myDate.toLocaleString();
                for (var prop in _this.OrderStatuses) {
                    if (_this.DashboadData.LatestOrdersList[i].OrderStatus == _this.OrderStatuses[prop]) {
                        _this.DashboadData.LatestOrdersList[i].OrderStatus = prop;
                    }
                }
            }
        });
    };
    EcommerceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.options = {
                position: ['bottom', 'right'],
                maxStack: 8,
                timeOut: 5000,
                showProgressBar: true,
                pauseOnHover: true,
                lastOnBottom: true,
                clickToClose: true,
                preventDuplicates: false,
                preventLastDuplicates: false,
                theClass: 'bg-c-pink no-icon',
                rtl: false,
                animate: 'rotate'
            };
            AmCharts.makeChart('statistics_chart', {
                'type': 'serial',
                'theme': 'light',
                // 'hideCredits': true,
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
                        'fillAlphas': 0.2,
                        'lineColor': '#4099ff',
                        'type': 'line',
                        'title': 'Laptop',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market1',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g2',
                        'valueAxis': 'v2',
                        'fillAlphas': 0.6,
                        'lineThickness': 0,
                        'lineColor': '#4099ff',
                        'type': 'line',
                        'title': 'TV',
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
                        'market1': 130,
                        'market2': 110,
                        'sales1': 0
                    }, {
                        'date': '2013-03-01',
                        'market1': 80,
                        'market2': 60,
                        'sales1': 0
                    }, {
                        'date': '2013-04-01',
                        'market1': 70,
                        'market2': 200,
                        'sales1': 0
                    }, {
                        'date': '2013-05-01',
                        'market1': 180,
                        'market2': 150,
                        'sales1': 0
                    }, {
                        'date': '2013-06-01',
                        'market1': 105,
                        'market2': 90,
                        'sales1': 0
                    }, {
                        'date': '2013-07-01',
                        'market1': 250,
                        'market2': 150,
                        'sales1': 0
                    }]
            });
        }, 75);
    };
    EcommerceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ecommerce',
            template: __webpack_require__("../../../../../src/app/theme/dashboard/ecommerce/ecommerce.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/dashboard/ecommerce/ecommerce.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_dashboardService__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_11__amcharts_amcharts3_angular__["b" /* AmChartsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__services_dashboardService__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_11__amcharts_amcharts3_angular__["b" /* AmChartsService */]])
    ], EcommerceComponent);
    return EcommerceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/dashboard/ecommerce/ecommerce.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceModule", function() { return EcommerceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ecommerce_component__ = __webpack_require__("../../../../../src/app/theme/dashboard/ecommerce/ecommerce.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ecommerce_routing_module__ = __webpack_require__("../../../../../src/app/theme/dashboard/ecommerce/ecommerce-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__ecommerce_routing_module__["a" /* EcommerceRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* HttpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__ecommerce_component__["a" /* EcommerceComponent */]]
        })
    ], EcommerceModule);
    return EcommerceModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/models/dashboard.Model.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboadData; });
var DashboadData = (function () {
    function DashboadData() {
        this.dailyOrderCount = 0;
        this.weeklyOrderCount = 0;
        this.pendingOrdersCount = 0;
        this.completedOrdersCount = 0;
        this.Top5Chemists = [];
        this.TotalNumberOfCustomers = 0;
        this.TotalRegisteredPharmacies = 0;
        this.TotalRegisteredLogistics = 0;
        this.TotalOrdersPlacedThisWeek = 0;
        this.LatestOrdersList = [];
        this.DateOrderTotalList = [];
    }
    return DashboadData;
}());

//# sourceMappingURL=dashboard.Model.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/dashboardService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
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




var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
        this.urlService = new __WEBPACK_IMPORTED_MODULE_3__ServiceUrl__["a" /* ServiceUrl */]();
        this.session_obj = JSON.parse(localStorage.getItem('session_obj'));
    }
    DashboardService.prototype.getDashboardData = function () {
        if (this.session_obj.UserRole == 1) {
            return this.http.get(this.urlService.baseUrl + "Admin/getDashboardData")
                .map(function (res) { return res.json(); });
        }
        else if (this.session_obj.UserRole == 2) {
            return this.http.get(this.urlService.baseUrl + "Admin/getDashboardData")
                .map(function (res) { return res.json(); });
        }
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ })

});
//# sourceMappingURL=ecommerce.module.chunk.js.map