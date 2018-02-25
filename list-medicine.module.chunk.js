webpackJsonp(["list-medicine.module"],{

/***/ "../../../../../src/app/theme/medicine/list-medicine/list-medicine-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMedicineRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_medicine_component__ = __webpack_require__("../../../../../src/app/theme/medicine/list-medicine/list-medicine.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__list_medicine_component__["a" /* ListMedicineComponent */],
        data: {
            title: 'Ecommerce',
            status: false
        }
    }
];
var ListMedicineRoutingModule = (function () {
    function ListMedicineRoutingModule() {
    }
    ListMedicineRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], ListMedicineRoutingModule);
    return ListMedicineRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/medicine/list-medicine/list-medicine.component.html":
/***/ (function(module, exports) {

module.exports = "<div  *ngIf = \"showAttr == true\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n\n    </div>\n    <div class=\"col-sm-6\">\n      <!-- Basic Inputs Validation start -->\n      <app-card [title]=\"'Select Pharmacy'\" [cardOptionBlock]=\"true\">\n\n        <form #f=\"ngForm\">\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\">Pharmacist ID</label>\n            <div class=\"col-sm-8\">\n              <select name=\"select\" [(ngModel)]=\"PharmacistId\" (change)=\"getProductsOfChemists()\" class=\"form-control form-control-default\">\n                <option *ngFor=\"let chemist of chemists_array\" value=\"{{chemist.Id}}\">{{chemist.PharmacyName}} {{chemist.Address}}</option>\n              </select>\n              <div class=\"messages text-danger\" id=\"pharmacist_id_error\">Pharmacist ID can't be blank</div>\n            </div>\n          </div>\n          <div id=\"medicines-fetcher\" class=\"form-group row fetcher\">\n            <div class=\"messages text-success\" id=\"fetching_categories_message\">Fetching Medicines of selected Pharmacy ...</div>\n          </div>\n        </form>\n      </app-card>\n    </div>\n  </div>\n</div>\n<div id=\"list\" class=\"page-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <app-card [title]=\"'Medicines'\" [classHeader]=\"true\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <label class=\"dt-cust-search f-right\">\n              <div class=\"form-group\">\n                <label>Search: </label>\n                <input type='text' class=\"form-control input-sm m-l-10\" placeholder='Search Name' (keyup)='updateFilter($event)' />\n              </div>\n            </label>\n          </div>\n        </div>\n        <ngx-datatable #table class='data-table' [scrollbarH]=\"true\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\n          [footerHeight]=\"50\" [rowHeight]=\"50\" [limit]=\"10\" [rows]='rowsFilter' (activate)=\"onActivate($event)\"\n          (select)='onSelect($event)'>\n          <ngx-datatable-column name=\"Name\" sortable=\"false\" prop=\"Name\">\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              {{value}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Update\" sortable=\"false\" prop=\"Id\">\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              <button type=\"button\" class=\"btn btn-out-dashed btn-warning btn-square\">Edit</button>\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Delete\" sortable=\"false\" prop=\"Id\">\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              <button class=\"btn btn-out-dashed btn-danger btn-square\">Delete</button>\n            </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>\n\n      </app-card>\n    </div>\n  </div>\n</div>\n<div id=\"detail\" class=\"page-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <!-- Basic Inputs Validation start -->\n      <app-card [title]=\"'View and Edit Pharmacist'\" [cardOptionBlock]=\"true\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Full Name</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"FullName\" id=\"name\" placeholder=\"\">\n            <div class=\"messages text-danger\" id=\"full_name_id_error\">Name can't be blank</div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Address</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Address\" id=\"address\" placeholder=\"\">\n            <div class=\"messages text-danger\" id=\"address_id_error\">Address can't be blank</div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Pharma Commission</label>\n          <div class=\"col-sm-8\">\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"PharmaCommission\" id=\"pharmaCommission\" placeholder=\"\">\n            <div class=\"messages text-danger\" id=\"pharma_commission_id_error\">Commission can't be blank</div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">City</label>\n          <div class=\"col-sm-8\">\n            <select name=\"select\" [(ngModel)]=\"City\" (change)=\"getCityAreas()\" class=\"form-control form-control-default\">\n              <option *ngFor=\"let city of cities_array\" value=\"{{city.Id}}\">{{city.Name}}</option>\n            </select>\n            <div class=\"messages text-danger\" id=\"city_id_error\">City can't be blank</div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Area</label>\n          <div class=\"col-sm-8\">\n            <select name=\"select\" [(ngModel)]=\"Area\" class=\"form-control form-control-default\">\n              <option *ngFor=\"let area of areas_array\" value=\"{{area.Id}}\">{{area.Name}}</option>\n            </select>\n            <div class=\"messages text-danger\" id=\"area_id_error\">Area can't be blank</div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Latitude</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" [(ngModel)]=\"Latitude\" class=\"form-control\" id=\"latitude\" placeholder=\"\">\n            <div class=\"messages text-danger\" id=\"latitude_id_error\">Latitude can't be blank</div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Longitude</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" [(ngModel)]=\"Longitude\" class=\"form-control\" id=\"longitude\" placeholder=\"\">\n            <div class=\"messages text-danger\" id=\"longitude_id_error\">Longitude can't be blank</div>\n          </div>\n        </div>\n        <div class=\"preloader3 loader-block\" id=\"loader\">\n          <div class=\"circ1\"></div>\n          <div class=\"circ2\"></div>\n          <div class=\"circ3\"></div>\n          <div class=\"circ4\"></div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4\"></label>\n          <div class=\"col-sm-8\">\n            <button type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"addChemist()\">Submit</button>\n          </div>\n        </div>\n  \n      </app-card>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"col-xs-12 col-md-12 col-lg-12\">\n        <div class=\"valuesAddress\">\n          <input class=\"form-control\" id=\"us7-radius\" name=\"Radius\" type=\"number\" placeholder=\"Enter Radius\">\n          <input class=\"form-control\" id=\"us7-address\" name=\"Address\" type=\"text\" placeholder=\"Enter Address\">\n        </div>\n        <div id=\"somecomponent\" style=\"margin-top:15px;width: 100%; height: 400px;\">\n  \n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/medicine/list-medicine/list-medicine.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".datatable-scroll {\n  width: 100% !important; }\n\n.view-btn {\n  border-radius: 50px;\n  cursor: pointer;\n  border: none; }\n\n.delete-btn {\n  border-radius: 50px;\n  cursor: pointer;\n  border: none; }\n\n#detail {\n  display: none; }\n\n.text-danger {\n  display: none; }\n\n.preloader3 {\n  height: 50px !important;\n  display: none; }\n\n.fetcher {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/medicine/list-medicine/list-medicine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMedicineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_GetPopularChemistService__ = __webpack_require__("../../../../../src/app/theme/services/GetPopularChemistService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_GetChemistDataService__ = __webpack_require__("../../../../../src/app/theme/services/GetChemistDataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AddAreaService__ = __webpack_require__("../../../../../src/app/theme/services/AddAreaService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ProductService__ = __webpack_require__("../../../../../src/app/theme/services/ProductService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListMedicineComponent = (function () {
    function ListMedicineComponent(_getPopularChemistService, _getChemistDataService, _AddAreaNameService, _productService) {
        this._getPopularChemistService = _getPopularChemistService;
        this._getChemistDataService = _getChemistDataService;
        this._AddAreaNameService = _AddAreaNameService;
        this._productService = _productService;
        this.rowsBasic = [];
        this.fullScreenRow = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [
            { prop: 'PharmacyName' },
            { prop: 'Address' },
            { prop: 'City.Name', name: 'City' },
            { prop: 'PharmaCommission', name: 'Commission' },
            { prop: 'RatingCount', name: 'Rating' },
            { name: "Actions", sortable: "false", prop: "id" }
        ];
        this.rows = [];
        this.expanded = {};
        this.rowsFilter = [];
        this.tempFilter = [];
        /**
         * Pharma Variables
         */
        this.chemists_array = [];
        this.medicines_array = [];
        this.PharmacistId = 0;
        this.showAttr = false;
        var session_obj = JSON.parse(localStorage.getItem('session_obj'));
        if (session_obj.UserRole == 1) {
            this.getChemists();
            this.showAttr = true;
        }
        else if (session_obj.UserRole == 2) {
            this.PharmacistId = session_obj.ChemistId;
            this.showAttr = false;
            this.getProductsOfChemists();
        }
    }
    ListMedicineComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log(selected);
    };
    ListMedicineComponent.prototype.onActivate = function (event) { };
    ListMedicineComponent.prototype.getChemists = function () {
        var _this = this;
        console.error("Fetching Chemists");
        this._getChemistDataService.getRegisteredChemistService().subscribe(function (response) {
            _this.chemists_array = response.data;
        });
    }; // End of Get Chemists
    ListMedicineComponent.prototype.getProductsOfChemists = function () {
        var _this = this;
        $('#medicines-fetcher').show();
        this._productService.getProductsFromChemistId(this.PharmacistId).subscribe(function (response) {
            console.log(response);
            $('#medicines-fetcher').hide();
            _this.medicines_array = response.data;
            _this.tempFilter = _this.medicines_array;
            _this.rowsFilter = _this.medicines_array;
        });
    };
    ListMedicineComponent.prototype.view = function (Id) {
    };
    ListMedicineComponent.prototype.delete = function (Id) {
        console.log(Id);
    };
    ListMedicineComponent.prototype.ngOnInit = function () {
    };
    ListMedicineComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        console.log(val);
        // filter our data
        var temp = this.tempFilter.filter(function (d) {
            return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rowsFilter = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    ListMedicineComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    ListMedicineComponent.prototype.getRowHeight = function (row) {
        return row.height;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"])
    ], ListMedicineComponent.prototype, "table", void 0);
    ListMedicineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'list-medicine',
            template: __webpack_require__("../../../../../src/app/theme/medicine/list-medicine/list-medicine.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/medicine/list-medicine/list-medicine.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_GetPopularChemistService__["a" /* GetPopularChemistService */], __WEBPACK_IMPORTED_MODULE_3__services_GetChemistDataService__["a" /* GetChemistDataService */], __WEBPACK_IMPORTED_MODULE_4__services_AddAreaService__["a" /* AddAreaService */], __WEBPACK_IMPORTED_MODULE_5__services_ProductService__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_GetPopularChemistService__["a" /* GetPopularChemistService */],
            __WEBPACK_IMPORTED_MODULE_3__services_GetChemistDataService__["a" /* GetChemistDataService */],
            __WEBPACK_IMPORTED_MODULE_4__services_AddAreaService__["a" /* AddAreaService */],
            __WEBPACK_IMPORTED_MODULE_5__services_ProductService__["a" /* ProductService */]])
    ], ListMedicineComponent);
    return ListMedicineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/medicine/list-medicine/list-medicine.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMedicineModule", function() { return ListMedicineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_medicine_component__ = __webpack_require__("../../../../../src/app/theme/medicine/list-medicine/list-medicine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_medicine_routing_module__ = __webpack_require__("../../../../../src/app/theme/medicine/list-medicine/list-medicine-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ListMedicineModule = (function () {
    function ListMedicineModule() {
    }
    ListMedicineModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__list_medicine_routing_module__["a" /* ListMedicineRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__list_medicine_component__["a" /* ListMedicineComponent */]]
        })
    ], ListMedicineModule);
    return ListMedicineModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/services/ProductService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
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




var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.urlService = new __WEBPACK_IMPORTED_MODULE_3__ServiceUrl__["a" /* ServiceUrl */]();
    }
    ProductService.prototype.getProductsFromChemistId = function (Id) {
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllProductsByChemistId?chemistId=" + Id + "&productType=100")
            .map(function (res) { return res.json(); });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ })

});
//# sourceMappingURL=list-medicine.module.chunk.js.map