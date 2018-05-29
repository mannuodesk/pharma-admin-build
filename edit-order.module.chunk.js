webpackJsonp(["edit-order.module"],{

/***/ "../../../../../src/app/theme/models/address.Model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressModel; });
var AddressModel = (function () {
    function AddressModel() {
    }
    return AddressModel;
}());



/***/ }),

/***/ "../../../../../src/app/theme/orders/edit-order/edit-order-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOrderRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_order_component__ = __webpack_require__("../../../../../src/app/theme/orders/edit-order/edit-order.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__edit_order_component__["a" /* EditOrderComponent */],
        data: {
            title: 'Order Update',
            status: false
        }
    }
];
var EditOrderRoutingModule = (function () {
    function EditOrderRoutingModule() {
    }
    EditOrderRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], EditOrderRoutingModule);
    return EditOrderRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/orders/edit-order/edit-order.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n <div class=\"card\">\r\n\r\n<div class=\"order-status-wrap\">\r\n    <h3 class=\"os-head\">order status</h3>\r\n    <hr class=\"custm-hrr\">\r\n</div>\r\n\r\n<div class=\"os-content-wrap\">\r\n    <div class=\"part1-wrap\">\r\n        <div class=\"padding-wrap\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2 col-sm-3 col-xs-12\">\r\n                    <div>\r\n                        <p class=\"cols-ps\">Order Number</p>\r\n                        <h3 class=\"cols-hs\">{{editingOrder?.Id}}</h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-3 col-xs-12\">\r\n                    <div>\r\n                        <p class=\"cols-ps\">Logistics</p>\r\n                        <h3 class=\"cols-hs\">{{editingOrder?.Logistics}}</h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4 col-sm-3 col-xs-12\"></div>\r\n                <div class=\"col-md-3 col-sm-3 col-xs-12\">\r\n                    <div>\r\n                        <p class=\"cols-ps\">Order Created</p>\r\n                        <h4 class=\"cols-hss\">{{editingOrder?.CreatedOnUTC}}</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row row-gap\">\r\n                <div class=\"col-md-2 col-sm-3 col-xs-12\">\r\n                    <div style=\"position: relative\">\r\n                        <div *ngIf=\"showUpdateStatusBtn\" class=\"absolute-save\" (click)=\"updateStatusOfThisOrder()\">\r\n                            <i class=\"fa fa-check\"></i>\r\n                        </div>\r\n                        <div *ngIf=\"showUpdateStatusLoader\">\r\n                                <div class=\"preloader3 loader-block\" id=\"loaderUpdate\">\r\n                                        <div class=\"circ1\"></div>\r\n                                        <div class=\"circ2\"></div>\r\n                                        <div class=\"circ3\"></div>\r\n                                        <div class=\"circ4\"></div>\r\n                                </div>\r\n                        </div>\r\n                        <p class=\"cols-ps\">Status</p>\r\n                        <select class=\"statusDropdown\" id=\"statusOfOrder\" (change)=\"getNewStatus($event.target.value)\">\r\n \r\n                            <option value=\"pending\">pending</option>\r\n                            <option value=\"confirmed\">confirmed</option>\r\n                            <option value=\"ontheway\">ontheway</option>\r\n                            <option value=\"notshipped\">notshipped</option>\r\n                            <option value=\"shipped\">shipped</option>\r\n                            <option value=\"tobedelivered\">tobedelivered</option>\r\n                            <option value=\"canceled\">canceled</option>\r\n                            <option value=\"completed\">completed</option>\r\n                            <option value=\"returned\">returned</option>\r\n                            <option value=\"delivered\">delivered</option>\r\n\r\n                        </select>\r\n                      <!--   <h4 class=\"cols-hss\">{{editingOrder?.OrderStatus}}</h4> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-3 col-xs-12\">\r\n                    <div>\r\n                        <p class=\"cols-ps\">Delivery Address</p>\r\n                        <h4 class=\"cols-hss\" *ngIf=\"gotAddress\">{{AddressDetails?.City.Name}}, {{AddressDetails?.Area.Name}}, {{AddressDetails?.AddressDetail}}</h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4 col-sm-3 col-xs-12\"></div>\r\n                <div class=\"col-md-3 col-sm-3 col-xs-12\">\r\n                    <div>\r\n                        <p class=\"cols-ps\">Payment Information</p>\r\n                        <h4 class=\"cols-hss\">Visa Card\r\n                            <br>Card # 1234 5674 7578</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row row-gap\">\r\n                <div class=\"col-md-2 col-sm-3 col-xs-12\">\r\n                    <p class=\"cols-ps\">Order Comments</p>\r\n                    <h4 *ngIf=\"order?.OrderNote!=null\" class=\"cols-hss\">{{editingOrder?.OrderNote}}</h4>\r\n                    <h4 *ngIf=\"order?.OrderNote==null\" class=\"cols-hss\">Not provided</h4>\r\n                </div>\r\n                <div class=\"col-md-10 col-sm-9 col-xs-12\"></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"progress-wrap clearfix\">\r\n            <div class=\"green-circle\"></div>\r\n            <div class=\"progress\">\r\n                <div class=\"mid-circle-wrap\">\r\n                    <div class=\"mid-circle\"></div>\r\n                    <div class=\"ticker\"></div>\r\n                    <p class=\"ticker-txt\">{{editingOrder?.OrderStatus}}</p>\r\n                </div>\r\n                <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:70%\">\r\n                    <span class=\"sr-only\">70% Complete</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"gray-circle\"></div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"part2-wrap\">\r\n        <div class=\"item-details-wrap\">\r\n            <h4 class=\"item-details\">Item Details</h4>\r\n        </div>\r\n        <hr class=\"item-d-hr\">\r\n        <div class=\"padding-wrap2\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"item-row\" *ngIf=\"OrderItemsAvailable\">\r\n                    <div class=\"item-row row\" *ngFor=\"let item of editingOrder.ReturnOrderItemDTOList\">\r\n                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                            <h4 class=\"item-details-hs\">{{item?.ProductName}}</h4>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table table2 table-order-detail clearfix\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>30{{item.DosageSymbol}}</td>\r\n                                            <td>{{item.MeasurementName}}</td>\r\n                                            <td>x{{item.Quantity}}</td>\r\n                                            <td style=\"text-align:right\">\r\n                                                <span>Rs.</span>{{item.Price}}</td>\r\n                                        </tr>\r\n\r\n\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n\r\n                    <!--   <hr class=\"hr-tbl\">\r\n                        <div class=\"row\">\r\n    \r\n                            <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n                                <div>\r\n                                    <p class=\"tbls-p\">XYZ Discount</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-sm-6 col-xs-6 righted\">\r\n                                <div>\r\n                                    <p class=\"tbls-p\">\r\n                                        <span>Rs.</span>50</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n                                <div>\r\n                                    <p class=\"tbls-p\">Shipping</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-sm-6 col-xs-6 righted\">\r\n                                <div>\r\n                                    <p class=\"tbls-p\">\r\n                                        <span>Rs.</span>20</p>\r\n                                </div>\r\n                            </div>\r\n                        </div> -->\r\n                    <hr class=\"hr2-tbl\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n                            <div>\r\n                                <p class=\"tbls-p\">Total</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6 col-xs-6 righted\">\r\n                            <div>\r\n                                <p class=\"tbls-p\">\r\n                                    <span>Rs.</span>{{editingOrder?.OrderTotal}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/orders/edit-order/edit-order.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".os-head {\n  font-weight: 600;\n  text-align: center;\n  margin: 0px !important;\n  padding-top: 30px;\n  text-transform: uppercase; }\n\n.custm-hrr {\n  border-bottom: 1.5px solid #aeaeae !important;\n  border-top: none !important;\n  margin-bottom: 30px !important; }\n\n.padding-wrap {\n  padding: 20px 60px;\n  padding-right: 40px !important; }\n\n.cols-ps {\n  color: #c3c3c2;\n  margin-bottom: 0px !important;\n  padding-bottom: 5px; }\n\n.cols-hs {\n  font-weight: 600;\n  margin: 0px !important; }\n\n#loaderUpdate {\n  width: 30px;\n  margin: 0 auto;\n  position: absolute;\n  top: -14px;\n  right: -20px;\n  cursor: pointer; }\n\n.absolute-save {\n  position: absolute;\n  top: 26px;\n  color: white;\n  right: -15px;\n  background: #48DDAE;\n  padding: 3px 7px;\n  cursor: pointer; }\n\n.statusDropdown {\n  font-size: 17px !important;\n  text-transform: capitalize;\n  font-weight: bold; }\n\n.cols-hss {\n  margin: 0px !important;\n  font-size: 17px !important;\n  text-transform: capitalize; }\n\n.row {\n  margin-right: 0px !important;\n  margin-left: 0px !important; }\n\n.row-gap {\n  padding-top: 40px; }\n\n.centered {\n  text-align: center; }\n\n.progress-wrap {\n  padding: 20px 50px;\n  position: relative; }\n\n.progress {\n  height: 7px;\n  background-color: #b9b9b8; }\n\n.progress-bar {\n  background-color: #1ec26b;\n  width: 50% !important; }\n\n.green-circle {\n  width: 15px;\n  height: 15px;\n  border-radius: 50px;\n  background-color: white;\n  position: absolute;\n  border: 3px solid #1ec26b;\n  top: 16px;\n  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.35);\n  -webkit-box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.35);\n  -moz-box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.35); }\n\n.gray-circle {\n  width: 15px;\n  height: 15px;\n  border-radius: 50px;\n  background-color: white;\n  position: absolute;\n  border: 3px solid #b9b9b8;\n  top: 16px;\n  right: 44px;\n  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.35);\n  -webkit-box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.35);\n  -moz-box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.35); }\n\n.mid-circle {\n  width: 25px;\n  height: 25px;\n  border-radius: 50px;\n  background-color: white;\n  position: absolute;\n  border: 3px solid #1ec26b;\n  top: 11px;\n  left: 49%;\n  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.35);\n  -webkit-box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.35);\n  -moz-box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.35); }\n\n.ticker {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/ticker.png") + ");\n  width: 105px;\n  height: 30px;\n  background-repeat: no-repeat;\n  top: 14px;\n  left: 50.7%;\n  position: absolute; }\n\n.status {\n  height: 40px;\n  padding: 6px; }\n\n.ticker-txt {\n  position: absolute;\n  color: white;\n  left: 52%;\n  text-transform: capitalize;\n  top: 14px; }\n\n.item-row {\n  width: 100%; }\n\n.item-details-wrap {\n  padding: 15px 25px;\n  padding-bottom: 0px !important; }\n\n.item-details {\n  margin: 0px !important;\n  color: #656565; }\n\n.item-d-hr {\n  margin-top: 15px !important;\n  border-bottom: 1.1px solid #aeaeae;\n  border-top: none !important;\n  /*     margin-bottom: 10px !important; */ }\n\n.padding-wrap2 {\n  padding-left: 0px;\n  padding-top: 20px;\n  padding-right: 0; }\n\n.item-details-hs {\n  color: #656565;\n  font-size: 16px;\n  font-weight: 500; }\n\n.hr-tbl {\n  margin-top: 0px !important;\n  border-bottom: 1px solid #aeaeae;\n  border-top: none !important;\n  margin-bottom: 10px !important; }\n\n.hr2-tbl {\n  margin-top: -15px !important;\n  border-bottom: 1px solid #aeaeae;\n  border-top: none !important;\n  margin-bottom: 15px !important;\n  width: 97%;\n  margin: 0 auto; }\n\n.table2 {\n  border: none !important;\n  border-color: transparent !important; }\n\n.table2 > tbody > tr > td {\n  border-top: none !important;\n  font-size: 18px;\n  color: #656565; }\n\n.table-order-detail > tbody > tr > td, .table-order-detail > tbody > tr > th, .table-order-detail > tfoot > tr > td, .table-order-detail > tfoot > tr > th, .table-order-detail > thead > tr > td, .table-order-detail > thead > tr > th {\n  padding: 8px 15px 8px 15px; }\n\n.tbls-p {\n  font-size: 18px;\n  color: #656565; }\n\n.righted {\n  text-align: right; }\n\n@media only screen and (max-width: 640px) {\n  .padding-wrap2[_ngcontent-c3] {\n    padding-left: 0px;\n    padding-right: 0px; }\n  .os-content-wrap[_ngcontent-c3] {\n    width: 90%; }\n  .padding-wrap[_ngcontent-c3] {\n    padding: 20px 20px; }\n  .row-gap[_ngcontent-c3] {\n    padding-top: 0px; }\n  .cols-hs[_ngcontent-c3] {\n    padding-bottom: 10px; }\n  .cols-hss[_ngcontent-c3] {\n    padding-bottom: 10px; }\n  .progress-wrap[_ngcontent-c3] {\n    padding: 20px 20px; }\n  .gray-circle[_ngcontent-c3] {\n    right: 15px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/orders/edit-order/edit-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_GetPopularChemistService__ = __webpack_require__("../../../../../src/app/theme/services/GetPopularChemistService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AddCategoryService__ = __webpack_require__("../../../../../src/app/theme/services/AddCategoryService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AddAreaService__ = __webpack_require__("../../../../../src/app/theme/services/AddAreaService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_address_Model__ = __webpack_require__("../../../../../src/app/theme/models/address.Model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_GetOrderService__ = __webpack_require__("../../../../../src/app/theme/services/GetOrderService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditOrderComponent = (function () {
    function EditOrderComponent(_addCategoryService, route, activatedRoute, _orderService, _addAddressService) {
        this._addCategoryService = _addCategoryService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this._orderService = _orderService;
        this._addAddressService = _addAddressService;
        this.gotAddress = false;
        this.OrderItemsAvailable = false;
        this.showUpdateStatusBtn = false;
        this.showUpdateStatusLoader = false;
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
        this.AddressDetails = new __WEBPACK_IMPORTED_MODULE_6__models_address_Model__["a" /* AddressModel */]();
    }
    EditOrderComponent.prototype.getNewStatus = function (elem) {
        this.showUpdateStatusBtn = true;
        this.newStatus = elem;
        for (var key in this.OrderStatuses) {
            if (key == this.newStatus) {
                this.newStatus = this.OrderStatuses[key];
            }
        }
    };
    EditOrderComponent.prototype.updateStatusOfThisOrder = function () {
        var _this = this;
        this.showUpdateStatusBtn = false;
        this.showUpdateStatusLoader = true;
        this._orderService.UpdateOrder(this.OrderId, this.newStatus).subscribe(function (a) {
            console.log(a);
            if (a.code == 200) {
                _this.showUpdateStatusBtn = false;
                _this.showUpdateStatusLoader = false;
                _this.editingOrder = a.data;
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Updated!', 'Order status has been updated.', 'success');
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Not Updated!', a.message, 'error');
            }
        }, function (err) {
            var obj = JSON.parse(err._body);
            _this.showUpdateStatusBtn = false;
            _this.showUpdateStatusLoader = false;
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Updated!', obj.message, 'error');
        });
    };
    EditOrderComponent.prototype.getFullAddress = function (AddressId) {
        var _this = this;
        this._addAddressService.getUserAddressById(AddressId).subscribe(function (a) {
            console.log(a);
            if (a.code == 200) {
                _this.gotAddress = true;
                _this.AddressDetails = a.data;
            }
        });
    };
    EditOrderComponent.prototype.getOrderDetails = function (orderId) {
        var _this = this;
        this._orderService.getOrderByOrderId(orderId).subscribe(function (orderResponse) {
            _this.editingOrder = orderResponse.data;
            console.log(_this.editingOrder);
            _this.getFullAddress(_this.editingOrder.AddressId);
            var myDate = new Date(parseFloat(_this.editingOrder.CreatedOnUTC) * 1000);
            _this.editingOrder.CreatedOnUTC = myDate.toLocaleString();
            for (var prop in _this.OrderStatuses) {
                if (_this.editingOrder.OrderStatus == _this.OrderStatuses[prop]) {
                    _this.editingOrder.OrderStatus = prop;
                    $('#statusOfOrder option[value="' + _this.editingOrder.OrderStatus + '"]').prop('selected', true);
                }
            }
            _this.OrderItemsAvailable = true;
        });
    };
    EditOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.OrderId = params['id'];
            _this.getOrderDetails(_this.OrderId);
        });
    };
    EditOrderComponent.prototype.ngOnDestroy = function () {
        localStorage.removeItem('editOrder');
    };
    EditOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'edit-order',
            template: __webpack_require__("../../../../../src/app/theme/orders/edit-order/edit-order.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/orders/edit-order/edit-order.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_AddCategoryService__["a" /* AddCategoryService */], __WEBPACK_IMPORTED_MODULE_1__services_GetPopularChemistService__["a" /* GetPopularChemistService */], __WEBPACK_IMPORTED_MODULE_7__services_GetOrderService__["a" /* GetOrderService */], __WEBPACK_IMPORTED_MODULE_5__services_AddAreaService__["a" /* AddAreaService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_AddCategoryService__["a" /* AddCategoryService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7__services_GetOrderService__["a" /* GetOrderService */],
            __WEBPACK_IMPORTED_MODULE_5__services_AddAreaService__["a" /* AddAreaService */]])
    ], EditOrderComponent);
    return EditOrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/orders/edit-order/edit-order.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOrderModule", function() { return EditOrderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_order_component__ = __webpack_require__("../../../../../src/app/theme/orders/edit-order/edit-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_order_routing_module__ = __webpack_require__("../../../../../src/app/theme/orders/edit-order/edit-order-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditOrderModule = (function () {
    function EditOrderModule() {
    }
    EditOrderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_7__edit_order_routing_module__["a" /* EditOrderRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__edit_order_component__["a" /* EditOrderComponent */]]
        })
    ], EditOrderModule);
    return EditOrderModule;
}());



/***/ }),

/***/ "../../../../../src/assets/images/ticker.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAAaCAYAAAC0NHJVAAABvElEQVRoge2Zu0oDQRRAzyYaH/gFKfyP2PsHamOdKoiFlYW99hERbBS7iGBpY2Gh2IoIthElBtGARk32ZTF3dGOyCBKSQe6By+zO3VkGDnd2dtcDmD4txSjDpAjspCUzA5yIks4mUEhLqiQ3yAEHQL5XUiW5Qx6oYIR1oJLcYgYo/+xUSe5RlPhCJblJmcRGQiW5ScdGIgN4Q52OkkYeIyqnktymAJRVkvt4+kxym3OgpJXkKjG1uBXMA22tJDdpBw8vi7ez2zXQLbiThPXX1fuFvQtklVNJjhE+v1fu5nb3k30qySGiN/+yvnS4BkRALKGSXCEOosfG1tmyX200gQAIMbLIILaUIRLjN49vVl6PrqpAC/CB0P4x10pygNZ1bf1p4+QMeCMhyeY9jKgxYAKYkpiU81EgO+A5/3ciCR9oAx8YOU2+JbWnT0uRHeBJjALjGDFW0Bgqqd/EGEEh5rljJb1LdFURwIgMDCVpl79QbjCCLon9xEqylWSrqSVtlyAwEpBBQeLYl1wWldRPkpJsNfnSBtLfhffjOIMRY+WooP6TFGVl2feinvT6uOolIu0a5W/EPdpfX4E+Aa/ykii2JnGhAAAAAElFTkSuQmCC"

/***/ })

});
//# sourceMappingURL=edit-order.module.chunk.js.map