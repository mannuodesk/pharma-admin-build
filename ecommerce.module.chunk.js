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

module.exports = "<div  class=\"overlay-loader\" style=\"display: block;\" *ngIf=\"gotDataLoader\">\r\n  <div _ngcontent-c11=\"\" class=\"preloader3 custom-preloader loader-block\">\r\n    <div _ngcontent-c11=\"\" class=\"circ1 loader-primary loader-lg\"></div>\r\n    <div _ngcontent-c11=\"\" class=\"circ2 loader-primary loader-lg\"></div>\r\n    <div _ngcontent-c11=\"\" class=\"circ3 loader-primary loader-lg\"></div>\r\n    <div _ngcontent-c11=\"\" class=\"circ4 loader-primary loader-lg\"></div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"page-body\" *ngIf=\"gotData\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-12 col-xl-3\">\r\n      <div class=\"card widget-statstic-card borderless-card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Orders This Week</h5>\r\n          <!--   <p class=\"p-t-10 m-b-0 text-muted\">Compared to last week</p> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-calendar st-icon bg-primary\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">{{DashboadData.TotalOrdersPlacedThisWeek}}</h3>\r\n            <i class=\"fa fa-long-arrow-up f-24 text-success m-l-15\"></i>\r\n         <!--    <span class=\"f-right bg-success\">23%</span> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card widget-statstic-card borderless-card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Total Customers</h5>\r\n           <!--  <p class=\"p-t-10 m-b-0 text-muted\">Compare to yesterday</p> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-users st-icon bg-warning txt-lite-color\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">{{DashboadData.TotalNumberOfCustomers}}</h3>\r\n            <i class=\"fa fa-long-arrow-down text-danger f-24 m-l-15\"></i>\r\n           <!--  <span class=\"f-right bg-danger\">-5%</span> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card widget-statstic-card borderless-card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Pharmacies Registered</h5>\r\n       <!--      <p class=\"p-t-10 m-b-0 text-muted\">This year revenue</p> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-line-chart st-icon bg-success\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">{{DashboadData.TotalRegisteredPharmacies}}</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card widget-statstic-card borderless-card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Logitics Registered</h5>\r\n       <!--      <p class=\"p-t-10 m-b-0 text-muted\">This year revenue</p> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"fa \tfa fa-motorcycle st-icon bg-success\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">{{DashboadData.TotalRegisteredLogistics}}</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!---->\r\n    <div class=\"col-xl-7 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Analytics</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n           <!--  <div>\r\n                <div style=\"display: block\">\r\n                  <canvas  baseChart\r\n                  attr.data=\"{{barChartData}}\"\r\n                  attr.labels={{barChartLabels}}\r\n                  attr.options=\"{{barChartOptions}}\"\r\n                          attr.legend=\"{{barChartLegend}}\"\r\n                          attr.chartType=\"{{barChartType}}\"\r\n                          (chartHover)=\"chartHovered($event)\"\r\n                          (chartClick)=\"chartClicked($event)\"></canvas>\r\n                </div>\r\n                <button (click)=\"randomize()\">Update</button> \r\n                \r\n              </div> --> \r\n              <div #statisticsChart><div id=\"statistics_chart\" style=\"height: 350px\"></div></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-5 col-md-12\">\r\n      <app-card [title]=\"'Top 5 chemist for this week'\" [cardClass]=\"'review-task'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n            <tbody>\r\n            <tr *ngFor=\"let chemist of DashboadData.Top5Chemists\">\r\n            <td><a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/widget/user-3.png\" alt=\"chat-user\"></a></td>\r\n            <td>\r\n                <h6>{{chemist.Chemist.PharmacyName}}</h6>\r\n                <p class=\"text-muted\">{{chemist.Chemist.ContactPersonName}}</p>\r\n            </td>\r\n            <td>\r\n                <h6 class='text-muted'>{{chemist.Chemist.Area.City.Name}}, {{chemist.Chemist.Area.Name}}</h6>\r\n             \r\n              </td>\r\n\r\n              <td>\r\n                  <h6 class='text-muted'>Rs {{chemist.OrderTotal}}/-</h6>\r\n               \r\n                </td>\r\n            </tr>\r\n           \r\n          \r\n           \r\n            <!-- <tr>\r\n              <td><a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/widget/user-3.png\" alt=\"chat-user\"></a>\r\n              </td>\r\n              <td>\r\n                <h6>Viral Dhimmar</h6>\r\n                <p class=\"text-muted\">Lorem ipsum do</p>\r\n              </td>\r\n              <td>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star  f-18 text-c-blue\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-blue\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n                <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n              </td>\r\n            </tr> -->\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n  \r\n    <!-- Recent Orders start -->\r\n    <div class=\"col-xl-8 col-md-12\">\r\n      <app-card [title]=\"'Recent Orders'\" [blockClass]=\"'p-0'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <tr>\r\n              <th>Image</th>\r\n              <th>Product Code</th>\r\n              <th>Customer</th>\r\n              <th>Purchased On</th>\r\n              <th>Status</th>\r\n              <th>Transaction</th>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let order of DashboadData.LatestOrdersList\">\r\n                <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                <td>\r\n                  <p style=\"margin-bottom:0\" *ngFor=\"let product of order.OrderItem\">{{product.Product.Name}}</p>\r\n                </td>\r\n                <td>{{order.UserId}}</td>\r\n                <td>{{order.ReceivedTime}}</td>\r\n                <td><span class=\"label label-primary\">{{order.OrderStatus}}</span></td>\r\n                <td>#{{order.Id}}</td>\r\n            </tr>\r\n    \r\n            \r\n           \r\n            \r\n            <!-- <tr>\r\n              <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n              <td>PNG002344</td>\r\n              <td>John Deo</td>\r\n              <td>05-01-2017</td>\r\n              <td><span class=\"label label-primary\">Shipping</span></td>\r\n              <td>#7234489</td>\r\n            </tr> -->\r\n          </table>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 col-md-6\">\r\n          <div class=\"card statustic-card\">\r\n            <div class=\"card-header\">\r\n              <h5>Orders Completed</h5>\r\n            </div>\r\n            <div class=\"card-block text-center\">\r\n              <span class=\"d-block text-c-green f-36\">{{DashboadData.completedOrdersCount}}</span>\r\n              <p class=\"m-b-0\">Total</p>\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar bg-c-green\" style=\"width:14%\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer bg-c-green\">\r\n              <h6 class=\"text-white m-b-0\">this week Orders: {{DashboadData.weeklyOrderCount}}</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-12 col-md-6\">\r\n          <div class=\"card statustic-card\">\r\n            <div class=\"card-header\">\r\n              <h5>Orders Pending</h5>\r\n            </div>\r\n            <div class=\"card-block text-center\">\r\n              <span class=\"d-block text-c-pink f-36\">{{DashboadData.pendingOrdersCount}}</span>\r\n              <p class=\"m-b-0\">Total</p>\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar bg-c-pink\" style=\"width:85%\"></div>\r\n              </div>\r\n            </div>\r\n           <!--  <div class=\"card-footer bg-c-pink\">\r\n              <h6 class=\"text-white m-b-0\">this month cancel order: 85</h6>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Recent Orders end -->\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--  Logistic Data -->\r\n\r\n\r\n<div class=\"page-body\" *ngIf=\"GotLogisticData\">\r\n    <div class=\"row\">\r\n  \r\n      <div class=\"col-md-12 col-xl-3\">\r\n        <div class=\"card widget-statstic-card borderless-card\">\r\n          <div class=\"card-header\">\r\n            <div class=\"card-header-left\">\r\n              <h5>Orders Delivered</h5>\r\n            <!--   <p class=\"p-t-10 m-b-0 text-muted\">Compared to last week</p> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <i class=\"fa fa-calendar st-icon bg-primary\"></i>\r\n            <div class=\"text-left\">\r\n              <h3 class=\"d-inline-block\">{{LogisticsDashboardData.TotalNumberDeliveredOrders}}</h3>\r\n              <i class=\"fa fa-long-arrow-up f-24 text-success m-l-15\"></i>\r\n           <!--    <span class=\"f-right bg-success\">23%</span> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 col-xl-3\">\r\n        <div class=\"card widget-statstic-card borderless-card\">\r\n          <div class=\"card-header\">\r\n            <div class=\"card-header-left\">\r\n              <h5>Latest Orders</h5>\r\n             <!--  <p class=\"p-t-10 m-b-0 text-muted\">Compare to yesterday</p> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <i class=\"fa fa-users st-icon bg-warning txt-lite-color\"></i>\r\n            <div class=\"text-left\">\r\n              <h3 class=\"d-inline-block\">{{LogisticsDashboardData.TotalNumberOfLatestOrders}}</h3>\r\n              <i class=\"fa fa-long-arrow-down text-danger f-24 m-l-15\"></i>\r\n             <!--  <span class=\"f-right bg-danger\">-5%</span> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 col-xl-3\">\r\n        <div class=\"card widget-statstic-card borderless-card\">\r\n          <div class=\"card-header\">\r\n            <div class=\"card-header-left\">\r\n              <h5>Associated Pharmacies</h5>\r\n         <!--      <p class=\"p-t-10 m-b-0 text-muted\">This year revenue</p> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <i class=\"fa fa-line-chart st-icon bg-success\"></i>\r\n            <div class=\"text-left\">\r\n              <h3 class=\"d-inline-block\">{{LogisticsDashboardData.TotalNumberOfAssociatedPharmacies}}</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"col-md-6 col-xl-3\">\r\n        <div class=\"card widget-statstic-card borderless-card\">\r\n          <div class=\"card-header\">\r\n            <div class=\"card-header-left\">\r\n              <h5>Pending Orders </h5>\r\n         <!--      <p class=\"p-t-10 m-b-0 text-muted\">This year revenue</p> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <i class=\"fa \tfa fa-clock st-icon bg-success\"></i>\r\n            <div class=\"text-left\">\r\n              <h3 class=\"d-inline-block\">{{LogisticsDashboardData.TotalNumberPendingOrders}}</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!---->\r\n      <div class=\"col-xl-10 col-md-8 offset-md-2 offset-xl-1\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h5>Analytics</h5>\r\n          </div>\r\n          <div class=\"card-block\">\r\n             <!--  <div>\r\n                  <div style=\"display: block\">\r\n                    <canvas  baseChart\r\n                    attr.data=\"{{barChartData}}\"\r\n                    attr.labels={{barChartLabels}}\r\n                    attr.options=\"{{barChartOptions}}\"\r\n                            attr.legend=\"{{barChartLegend}}\"\r\n                            attr.chartType=\"{{barChartType}}\"\r\n                            (chartHover)=\"chartHovered($event)\"\r\n                            (chartClick)=\"chartClicked($event)\"></canvas>\r\n                  </div>\r\n                  <button (click)=\"randomize()\">Update</button> \r\n                  \r\n                </div> --> \r\n                <div #statisticsChart><div id=\"statistics_chart\" style=\"height: 350px\"></div></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n \r\n    \r\n      <!-- Recent Orders start -->\r\n      <div class=\"col-xl-8 col-md-12\">\r\n        <app-card [title]=\"'Recent Orders'\" [blockClass]=\"'p-0'\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <tr>\r\n                <th>Image</th>\r\n                <th>Product Code</th>\r\n                <th>Customer</th>\r\n                <th>Purchased On</th>\r\n                <th>Status</th>\r\n                <th>Transaction</th>\r\n              </tr>\r\n  \r\n              <tr *ngFor=\"let order of DashboadData.LatestOrdersList\">\r\n                  <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                  <td>\r\n                    <p style=\"margin-bottom:0\" *ngFor=\"let product of order.OrderItem\">{{product.Product.Name}}</p>\r\n                  </td>\r\n                  <td>{{order.UserId}}</td>\r\n                  <td>{{order.ReceivedTime}}</td>\r\n                  <td><span class=\"label label-primary\">{{order.OrderStatus}}</span></td>\r\n                  <td>#{{order.Id}}</td>\r\n              </tr>\r\n      \r\n              \r\n             \r\n              \r\n              <!-- <tr>\r\n                <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                <td>PNG002344</td>\r\n                <td>John Deo</td>\r\n                <td>05-01-2017</td>\r\n                <td><span class=\"label label-primary\">Shipping</span></td>\r\n                <td>#7234489</td>\r\n              </tr> -->\r\n            </table>\r\n          </div>\r\n        </app-card>\r\n      </div>\r\n      <div class=\"col-xl-4 col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xl-12 col-md-6\">\r\n            <div class=\"card statustic-card\">\r\n              <div class=\"card-header\">\r\n                <h5>Orders Completed</h5>\r\n              </div>\r\n              <div class=\"card-block text-center\">\r\n                <span class=\"d-block text-c-green f-36\">{{DashboadData.completedOrdersCount}}</span>\r\n                <p class=\"m-b-0\">Total</p>\r\n                <div class=\"progress\">\r\n                  <div class=\"progress-bar bg-c-green\" style=\"width:14%\"></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer bg-c-green\">\r\n                <h6 class=\"text-white m-b-0\">this week Orders: {{DashboadData.weeklyOrderCount}}</h6>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-12 col-md-6\">\r\n            <div class=\"card statustic-card\">\r\n              <div class=\"card-header\">\r\n                <h5>Orders Pending</h5>\r\n              </div>\r\n              <div class=\"card-block text-center\">\r\n                <span class=\"d-block text-c-pink f-36\">{{DashboadData.pendingOrdersCount}}</span>\r\n                <p class=\"m-b-0\">Total</p>\r\n                <div class=\"progress\">\r\n                  <div class=\"progress-bar bg-c-pink\" style=\"width:85%\"></div>\r\n                </div>\r\n              </div>\r\n             <!--  <div class=\"card-footer bg-c-pink\">\r\n                <h6 class=\"text-white m-b-0\">this month cancel order: 85</h6>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Recent Orders end -->\r\n  \r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!--  Logistic Data -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!--  Pharmacy Data -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"page-body\" *ngIf=\"GotPharmacyData\">\r\n      <div class=\"row\">\r\n    \r\n        <div class=\"col-md-12 col-xl-3\">\r\n          <div class=\"card widget-statstic-card borderless-card\">\r\n            <div class=\"card-header\">\r\n              <div class=\"card-header-left\">\r\n                <h5>Orders This Week</h5>\r\n              <!--   <p class=\"p-t-10 m-b-0 text-muted\">Compared to last week</p> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"card-block\">\r\n              <i class=\"fa fa-calendar st-icon bg-primary\"></i>\r\n              <div class=\"text-left\">\r\n                <h3 class=\"d-inline-block\">{{PharmacyDashboardData.TotalNumberOfOrdersPlaced}}</h3>\r\n                <i class=\"fa fa-long-arrow-up f-24 text-success m-l-15\"></i>\r\n             <!--    <span class=\"f-right bg-success\">23%</span> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-xl-3\">\r\n          <div class=\"card widget-statstic-card borderless-card\">\r\n            <div class=\"card-header\">\r\n              <div class=\"card-header-left\">\r\n                <h5>Total Customers</h5>\r\n               <!--  <p class=\"p-t-10 m-b-0 text-muted\">Compare to yesterday</p> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"card-block\">\r\n              <i class=\"fa fa-users st-icon bg-warning txt-lite-color\"></i>\r\n              <div class=\"text-left\">\r\n                <h3 class=\"d-inline-block\">{{PharmacyDashboardData.TotalNumberOfCustomers}}</h3>\r\n                <i class=\"fa fa-long-arrow-down text-danger f-24 m-l-15\"></i>\r\n               <!--  <span class=\"f-right bg-danger\">-5%</span> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-xl-3\">\r\n          <div class=\"card widget-statstic-card borderless-card\">\r\n            <div class=\"card-header\">\r\n              <div class=\"card-header-left\">\r\n                <h5>Total Medicines</h5>\r\n           <!--      <p class=\"p-t-10 m-b-0 text-muted\">This year revenue</p> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"card-block\">\r\n              <i class=\"fa fa-medkit st-icon bg-success\"></i>\r\n              <div class=\"text-left\">\r\n                <h3 class=\"d-inline-block\">{{PharmacyDashboardData.TotalNumberofMedicines}}</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    \r\n        <div class=\"col-md-6 col-xl-3\">\r\n          <div class=\"card widget-statstic-card borderless-card\">\r\n            <div class=\"card-header\">\r\n              <div class=\"card-header-left\">\r\n                <h5>Revenue Generated</h5>\r\n           <!--      <p class=\"p-t-10 m-b-0 text-muted\">This year revenue</p> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"card-block\">\r\n              <i class=\"fa \tfa fa-money st-icon bg-success\"></i>\r\n              <div class=\"text-left\">\r\n                <h3 class=\"d-inline-block\">{{PharmacyDashboardData.TotalRevenueGenerated}}</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!---->\r\n        <div class=\"col-xl-6 col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <h5>Analytics</h5>\r\n            </div>\r\n            <div class=\"card-block\">\r\n               <!--  <div>\r\n                    <div style=\"display: block\">\r\n                      <canvas  baseChart\r\n                      attr.data=\"{{barChartData}}\"\r\n                      attr.labels={{barChartLabels}}\r\n                      attr.options=\"{{barChartOptions}}\"\r\n                              attr.legend=\"{{barChartLegend}}\"\r\n                              attr.chartType=\"{{barChartType}}\"\r\n                              (chartHover)=\"chartHovered($event)\"\r\n                              (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                    <button (click)=\"randomize()\">Update</button> \r\n                    \r\n                  </div> --> \r\n                  <div #statisticsChart><div id=\"statistics_chart\" style=\"height: 350px\"></div></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-xl-6 col-md-6\">\r\n            <app-card [title]=\"'Recent Orders'\" [blockClass]=\"'p-0'\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <tr>\r\n                    <th>Image</th>\r\n                    <th>Product Code</th>\r\n                    <th>Customer</th>\r\n                    <th>Purchased On</th>\r\n                    <th>Status</th>\r\n                    <th>Transaction</th>\r\n                  </tr>\r\n      \r\n                  <tr *ngFor=\"let order of DashboadData.LatestOrdersList\">\r\n                      <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                      <td>\r\n                        <p style=\"margin-bottom:0\" *ngFor=\"let product of order.OrderItem\">{{product.Product.Name}}</p>\r\n                      </td>\r\n                      <td>{{order.UserId}}</td>\r\n                      <td>{{order.ReceivedTime}}</td>\r\n                      <td><span class=\"label label-primary\">{{order.OrderStatus}}</span></td>\r\n                      <td>#{{order.Id}}</td>\r\n                  </tr>\r\n          \r\n                  \r\n                 \r\n                  \r\n                  <!-- <tr>\r\n                    <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                    <td>PNG002344</td>\r\n                    <td>John Deo</td>\r\n                    <td>05-01-2017</td>\r\n                    <td><span class=\"label label-primary\">Shipping</span></td>\r\n                    <td>#7234489</td>\r\n                  </tr> -->\r\n                </table>\r\n              </div>\r\n            </app-card>\r\n          </div>\r\n       \r\n      \r\n        <!-- Recent Orders start -->\r\n       \r\n\r\n        <!-- Recent Orders end -->\r\n    \r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <!--  Pharmacy Data -->"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_logisticsDashboardModel__ = __webpack_require__("../../../../../src/app/theme/models/logisticsDashboardModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_pharmacyDashboardModel_js__ = __webpack_require__("../../../../../src/app/theme/models/pharmacyDashboardModel.js");
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
        this.GotLogisticData = false;
        this.GotPharmacyData = false;
        this.gotDataLoader = true;
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
        this.LogisticsDashboardData = new __WEBPACK_IMPORTED_MODULE_11__models_logisticsDashboardModel__["a" /* LogisticsDashboardModel */]();
        this.PharmacyDashboardData = new __WEBPACK_IMPORTED_MODULE_13__models_pharmacyDashboardModel_js__["a" /* PharmacyDashboardModel */]();
        this.session_obj = JSON.parse(localStorage.getItem('session_obj'));
    }
    EcommerceComponent.prototype.createStockChart = function () {
        this.chart = this.AmCharts.makeChart("statistics_chart", {
            "type": "serial",
            "theme": "light",
            "dataProvider": [{
                    "country": "USA",
                    "visits": 2025
                }, {
                    "country": "China",
                    "visits": 1882
                }, {
                    "country": "Japan",
                    "visits": 1809
                }, {
                    "country": "Germany",
                    "visits": 1322
                }, {
                    "country": "UK",
                    "visits": 1122
                }, {
                    "country": "France",
                    "visits": 1114
                }, {
                    "country": "India",
                    "visits": 984
                }, {
                    "country": "Spain",
                    "visits": 711
                }, {
                    "country": "Netherlands",
                    "visits": 665
                }, {
                    "country": "Russia",
                    "visits": 580
                }, {
                    "country": "South Korea",
                    "visits": 443
                }, {
                    "country": "Canada",
                    "visits": 441
                }, {
                    "country": "Brazil",
                    "visits": 395
                }],
            "valueAxes": [{
                    "gridColor": "#FFFFFF",
                    "gridAlpha": 0.2,
                    "dashLength": 0
                }],
            "gridAboveGraphs": true,
            "startDuration": 1,
            "graphs": [{
                    "balloonText": "[[category]]: <b>[[value]]</b>",
                    "fillAlphas": 0.8,
                    "lineAlpha": 0.2,
                    "type": "column",
                    "valueField": "visits"
                }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "country",
            "categoryAxis": {
                "gridPosition": "start",
                "gridAlpha": 0,
                "tickPosition": "start",
                "tickLength": 20
            }
        });
    };
    EcommerceComponent.prototype.ngOnInit = function () {
        this.checkOut();
        /* if (AmCharts.isReady) {
          this.createStockChart();
      
      } else {
          AmCharts.ready(function () {
              this.createStockChart();
          });
      } */
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
    EcommerceComponent.prototype.HidingAllDataFor = function () {
        this.GotLogisticData = false;
        this.gotData = false;
        this.GotPharmacyData = false;
    };
    EcommerceComponent.prototype.checkOut = function () {
        var _this = this;
        this.HidingAllDataFor();
        if (this.session_obj.UserRole == 1) {
            this._dashboardService.getDashboardDataForAdmin().subscribe(function (a) {
                if (a.code == 200) {
                    _this.gotDataLoader = false;
                    _this.DashboadData = new __WEBPACK_IMPORTED_MODULE_10__models_dashboard_Model_js__["a" /* DashboadData */]();
                    _this.DashboadData = a.data;
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
                }
            });
        }
        else if (this.session_obj.UserRole == 2) {
            this._dashboardService.getDashboardDataForPharmacy(this.session_obj.ChemistId).subscribe(function (a) {
                console.log(a);
                if (a.code == 200) {
                    _this.gotDataLoader = false;
                    _this.GotPharmacyData = true;
                    _this.PharmacyDashboardData = a.data;
                    for (var i = 0; i < _this.PharmacyDashboardData.ListOfLatestOrdersPlaced.length; i++) {
                        var myDate = new Date(parseFloat(_this.PharmacyDashboardData.ListOfLatestOrdersPlaced[i].ReceivedTime) * 1000);
                        _this.PharmacyDashboardData.ListOfLatestOrdersPlaced[i].ReceivedTime = myDate.toLocaleString();
                        for (var prop in _this.OrderStatuses) {
                            if (_this.PharmacyDashboardData.ListOfLatestOrdersPlaced[i].OrderStatus == _this.OrderStatuses[prop]) {
                                _this.PharmacyDashboardData.ListOfLatestOrdersPlaced[i].OrderStatus = prop;
                            }
                        }
                    }
                }
            });
        }
        else if (this.session_obj.UserRole == 5) {
            this._dashboardService.getDashboardDataForLogistics(this.session_obj.UserRole).subscribe(function (a) {
                console.log(a);
                if (a.code == 200) {
                    _this.gotDataLoader = false;
                    _this.LogisticsDashboardData = new __WEBPACK_IMPORTED_MODULE_11__models_logisticsDashboardModel__["a" /* LogisticsDashboardModel */]();
                    _this.LogisticsDashboardData = a.data;
                    _this.GotLogisticData = true;
                    for (var i = 0; i < _this.LogisticsDashboardData.ListOfLatestIncomingOrders.length; i++) {
                        var myDate = new Date(parseFloat(_this.LogisticsDashboardData.ListOfLatestIncomingOrders[i].ReceivedTime) * 1000);
                        _this.LogisticsDashboardData.ListOfLatestIncomingOrders[i].ReceivedTime = myDate.toLocaleString();
                        for (var prop in _this.OrderStatuses) {
                            if (_this.LogisticsDashboardData.ListOfLatestIncomingOrders[i].OrderStatus == _this.OrderStatuses[prop]) {
                                _this.LogisticsDashboardData.ListOfLatestIncomingOrders[i].OrderStatus = prop;
                            }
                        }
                    }
                }
            });
        }
    };
    EcommerceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ecommerce',
            template: __webpack_require__("../../../../../src/app/theme/dashboard/ecommerce/ecommerce.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/dashboard/ecommerce/ecommerce.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_dashboardService__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_12__amcharts_amcharts3_angular__["b" /* AmChartsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__services_dashboardService__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_12__amcharts_amcharts3_angular__["b" /* AmChartsService */]])
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

/***/ "../../../../../src/app/theme/models/logisticsDashboardModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogisticsDashboardModel; });
var LogisticsDashboardModel = (function () {
    function LogisticsDashboardModel() {
    }
    return LogisticsDashboardModel;
}());



/***/ }),

/***/ "../../../../../src/app/theme/models/pharmacyDashboardModel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmacyDashboardModel; });
var PharmacyDashboardModel = (function () {
    function PharmacyDashboardModel() {
    }
    return PharmacyDashboardModel;
}());

//# sourceMappingURL=pharmacyDashboardModel.js.map

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
    DashboardService.prototype.getDashboardDataForAdmin = function () {
        return this.http.get(this.urlService.baseUrl + "Admin/getDashboardData")
            .map(function (res) { return res.json(); });
    };
    DashboardService.prototype.getDashboardDataForLogistics = function (logisticsId) {
        return this.http.get(this.urlService.baseUrl + "Logistics/getDashboardData?logisticsId=" + logisticsId)
            .map(function (res) { return res.json(); });
    };
    DashboardService.prototype.getDashboardDataForPharmacy = function (chemistId) {
        return this.http.get(this.urlService.baseUrl + "Chemist/getDashboardData?chemistId=" + chemistId)
            .map(function (res) { return res.json(); });
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