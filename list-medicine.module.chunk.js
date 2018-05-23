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

module.exports = "<div id=\"snackbar\"></div>\r\n<div  *ngIf = \"showAttr == true\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <!-- Basic Inputs Validation start -->\r\n      <app-card [title]=\"'Select Pharmacy'\" [cardOptionBlock]=\"true\">\r\n\r\n        <form #f=\"ngForm\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">Pharmacist ID</label>\r\n            <div class=\"col-sm-8\">\r\n              <select name=\"select\" [(ngModel)]=\"PharmacistId\" (change)=\"getProductsOfChemists()\" class=\"form-control form-control-default\">\r\n                <option *ngFor=\"let chemist of chemists_array\" value=\"{{chemist.Id}}\">{{chemist.PharmacyName}} {{chemist.Address}}</option>\r\n              </select>\r\n              <div class=\"messages text-danger\" id=\"pharmacist_id_error\">Pharmacist ID can't be blank</div>\r\n            </div>\r\n          </div>\r\n          <div id=\"medicines-fetcher\" class=\"form-group row fetcher\">\r\n            <div class=\"messages text-success\" id=\"fetching_categories_message\">Fetching Medicines of selected Pharmacy ...</div>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"list\" class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <app-card [title]=\"'Medicines'\" [classHeader]=\"true\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <label class=\"dt-cust-search f-right\">\r\n              <div class=\"form-group\">\r\n                <label>Search: </label>\r\n                <input type='text' class=\"form-control input-sm m-l-10\" placeholder='Search Name' (keyup)='updateFilter($event)' />\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <ngx-datatable #table class='data-table' [scrollbarH]=\"true\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\" [rowHeight]=\"50\" [limit]=\"10\" [rows]='rowsFilter' (activate)=\"onActivate($event)\"\r\n          (select)='onSelect($event)'>\r\n          <ngx-datatable-column name=\"Name\" sortable=\"false\" prop=\"Name\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Update\" sortable=\"false\" prop=\"Id\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <button type=\"button\" class=\"custom-action-btns edit-bg\" (click)=\"view(value)\"><i class=\"fa fa-pencil\"></i></button>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Inactive\" sortable=\"false\" prop=\"Id\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <button *ngIf=\"row.IsBlocked == false\" class=\"custom-action-btns danger-bg\" (click)=\"inactivateThisMedicine(value)\"><i class=\"fa fa-ban\"></i></button>\r\n              <button *ngIf=\"row.IsBlocked == true\" class=\"custom-action-btns green-bg\" (click)=\"inactivateThisMedicine(value)\"><i class=\"fa fa-check\"></i></button>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"detail\" class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <!-- Basic Inputs Validation start -->\r\n      <app-card [title]=\"'Add Medicine'\" [cardOptionBlock]=\"true\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Medicine Image</label>\r\n          <div class=\"col-sm-8\">\r\n            <input id=\"medicine-image\" type=\"file\" (change)=\"getImageUrl($event)\">\r\n            <div class=\"messages text-danger\" id=\"medicine_image_error\">Medicine Image can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\" id=\"image-div\" style=\"display: none\">\r\n          <div class=\"col-sm-12\">\r\n            <img src=\"{{ImageUrl}}\" class=\"medicine-image\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Medicine Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MedicineName\" id=\"name\" placeholder=\"\">\r\n            <div class=\"messages text-danger\" id=\"medicine_name_error\">Medicine Name can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Manufacturer Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ManufacturerName\" id=\"address\" placeholder=\"\">\r\n            <div class=\"messages text-danger\" id=\"manufacturer_name_error\">Address can't be blank</div>\r\n          </div>\r\n        </div> -->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Select Manufacturer</label>\r\n          <div class=\"col-sm-8\">\r\n            <select name=\"select\" [(ngModel)]=\"ManufacturerId\" class=\"form-control form-control-default\">\r\n              <option *ngFor=\"let manufacturer of manufacturers_array\" value=\"{{manufacturer.Id}}\">{{manufacturer.Name}}</option>\r\n            </select>\r\n            <div class=\"messages text-danger\" id=\"manufacturer_name_error\">Manufacturer ID can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Select Category</label>\r\n          <div class=\"col-sm-8\"> \r\n            <select name=\"select\" [(ngModel)]=\"CategoryId\"  class=\"form-control form-control-default\"> <!-- (change)=\"getCategories()\" -->\r\n              <option *ngFor=\"let category of chemists_categories\" value=\"{{category.Id}}\">{{category.CategoryName}}</option>\r\n            </select>\r\n            <div class=\"messages text-danger\" id=\"category_id_error\">Category ID can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Select Sub Category</label>\r\n          <div class=\"col-sm-8\">\r\n            <select name=\"select\" [(ngModel)]=\"SubCategoryId\" class=\"form-control form-control-default\">\r\n              <option *ngFor=\"let sub_category of chemists_sub_categories\" value=\"{{sub_category.Id}}\">{{sub_category.CategoryName}}</option>\r\n            </select>\r\n            <div class=\"messages text-danger\" id=\"sub_category_id_error\">Sub Category ID can't be blank</div>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <app-card [title]=\"'Measurement'\" [cardOptionBlock]=\"true\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Select Measurements</label>\r\n          <div class=\"col-sm-8\">\r\n            <select name=\"select\" [(ngModel)]=\"MeasurementListId\" class=\"form-control form-control-default\">\r\n              <option *ngFor=\"let measurement of measurements_array\" value=\"{{measurement.Id}}\">{{measurement.MeasurementName}} {{measurement.MeasurementSymbol}}</option>\r\n            </select>\r\n            <div class=\"messages text-danger\" id=\"measurement_list_id_error\">Measurement ID can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4\"></label>\r\n          <div class=\"col-sm-8\">\r\n            <button type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"addMeasurement()\">Add Measurement</button>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <!-- Basic Inputs Validation start -->\r\n      <app-card [title]=\"'Variations'\" [cardOptionBlock]=\"true\">\r\n  \r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Select Measurements</label>\r\n          <div class=\"col-sm-8\">\r\n            <select name=\"select\" [(ngModel)]=\"MeasurementId\" class=\"form-control form-control-default\">\r\n              <option *ngFor=\"let measurement of measurements_array\" value=\"{{measurement.Id}}\">{{measurement.MeasurementName}} {{measurement.MeasurementSymbol}}</option>\r\n            </select>\r\n            <div class=\"messages text-danger\" id=\"measurement_id_error\">Measurement ID can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Select Dosage</label>\r\n          <div class=\"col-sm-8\">\r\n            <select name=\"select\" [(ngModel)]=\"DosageId\" (change)=\"getDosageValues()\" class=\"form-control form-control-default\">\r\n              <option *ngFor=\"let dosage of dosages_array\" value=\"{{dosage.Id}}\">{{dosage.UnitName}}</option>\r\n            </select>\r\n            <div class=\"messages text-danger\" id=\"dosage_id_error\">Dosage ID can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Select Dosage Value</label>\r\n          <div class=\"col-sm-8\">\r\n            <select name=\"select\" [(ngModel)]=\"DosageValueId\" class=\"form-control form-control-default\">\r\n              <option *ngFor=\"let dosage_size of dosages_sizes_array\" value=\"{{dosage_size.Id}}\">{{dosage_size.Value}}</option>\r\n            </select>\r\n            <div class=\"messages text-danger\" id=\"dosage_value_id_error\">Dosage Value can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Product Quantity</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"ProductQuantity\" id=\"email\" placeholder=\"\">\r\n            <div class=\"messages text-danger\" id=\"product_quantity_error\">Product Quantity can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Product Price</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"ProductPrice\" id=\"pharmaCommission\" placeholder=\"\">\r\n            <div class=\"messages text-danger\" id=\"product_price_error\">Product Price can't be blank</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4\"></label>\r\n          <div class=\"col-sm-8\">\r\n            <button type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"addVariation()\">Add Variation</button>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <app-card [title]=\"'Measurement List'\" [cardOptionBlock]=\"true\">\r\n        <ngx-datatable #measurementtable class='data-table' [scrollbarH]=\"true\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\" [rowHeight]=\"50\" [limit]=\"3\" [rows]='rowsFilter2' (select)='onSelect($event)'>\r\n          <ngx-datatable-column name=\"Measurement\" sortable=\"false\" prop=\"MeasurementName\"> <!-- measurement_name -->\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"Id\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n  \r\n              <button class=\"delete-btn\" (click)=\"deleteMeasurement(value)\">\r\n                <i class=\"fa fa-trash-o\"></i>\r\n              </button>\r\n  \r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <app-card [title]=\"'Variations List'\" [cardOptionBlock]=\"true\">\r\n        <ngx-datatable #variationstable class='data-table' [scrollbarH]=\"true\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\" [rowHeight]=\"50\" [limit]=\"10\" [rows]='rowsFilter3' (select)='onSelect($event)'>\r\n          <ngx-datatable-column name=\"Measurement\" sortable=\"false\" prop=\"measurement_name\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Dosage Name\" sortable=\"false\" prop=\"dosage_name\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Dosage Value\" sortable=\"false\" prop=\"dosage_value_name\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Quantity\" sortable=\"false\" prop=\"quantity\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Price\" sortable=\"false\" prop=\"price\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"Id\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n  \r\n              <button class=\"delete-btn\" (click)=\"deleteVariation(value)\">\r\n                <i class=\"fa fa-trash-o\"></i>\r\n              </button>\r\n  \r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <app-card [title]=\"'Submission'\" [cardOptionBlock]=\"true\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"messages text-danger\" id=\"measurement_list_error\">Measurment List can't be empty</div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"messages text-danger\" id=\"variation_list_error\">Variation List can't be empty</div>\r\n        </div>\r\n        <div class=\"preloader3 loader-block\" id=\"loader\">\r\n          <div class=\"circ1\"></div>\r\n          <div class=\"circ2\"></div>\r\n          <div class=\"circ3\"></div>\r\n          <div class=\"circ4\"></div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <button type=\"submit\" class=\"btn btn-primary m-b-0 col-md-12\" (click)=\"addMedicine()\">Submit</button>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_MeasurementAndDosageSizesService__ = __webpack_require__("../../../../../src/app/theme/services/MeasurementAndDosageSizesService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_AddCategoryService__ = __webpack_require__("../../../../../src/app/theme/services/AddCategoryService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_AddMedicineService__ = __webpack_require__("../../../../../src/app/theme/services/AddMedicineService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__showtoast__ = __webpack_require__("../../../../../src/app/showtoast.ts");
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
    function ListMedicineComponent(cd, _getPopularChemistService, _getChemistDataService, _AddAreaNameService, _addMedicineService, _productService, _addCategoryService, _addMeasurementServices) {
        this.cd = cd;
        this._getPopularChemistService = _getPopularChemistService;
        this._getChemistDataService = _getChemistDataService;
        this._AddAreaNameService = _AddAreaNameService;
        this._addMedicineService = _addMedicineService;
        this._productService = _productService;
        this._addCategoryService = _addCategoryService;
        this._addMeasurementServices = _addMeasurementServices;
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
        this.rowsFilter2 = [];
        this.tempFilter2 = [];
        this.rowsFilter3 = [];
        this.tempFilter3 = [];
        /**
         * Pharma Variables
         */
        this.chemists_array = [];
        this.medicines_array = [];
        this.addMeasurementList = [];
        this.addMeasurementListids = [];
        this.EditProductDaosageAndSizeMappingdto = [];
        this.manufacturers_array = [];
        this.PharmacistId = 0;
        this.MedicineName = "";
        this.MedicineId = 0;
        this.Address = "";
        this.ManufacturerName = "";
        this.ManufacturerId = 0;
        this.PharmaCommission = 0;
        this.City = 0;
        this.Area = 0;
        this.SubCategoryId = 0;
        this.CategoryId = 0;
        this.ImageUrl = "";
        this.DosageId = 0;
        this.DosageSizeId = 0;
        this.MeasurementId = 0;
        this.DosageValueId = 0;
        this.ProductPrice = 0;
        this.ProductQuantity = 0;
        this.Username = "";
        this.Password = "";
        this.Latitude = 0;
        this.Longitude = 0;
        this.cities_array = [];
        this.areas_array = [];
        this.chemists_categories = [];
        this.chemists_sub_categories = [];
        this.measurements_array = [];
        this.dosages_array = [];
        this.dosages_sizes_array = [];
        this.MeasurementListId = 0;
        this.measurement_final_ids = [];
        this.variation_array = [];
        this.variation_model = {
            Id: 0,
            measurement_id: 0,
            measurement_name: "",
            dosage_id: 0,
            dosage_name: "",
            dosage_value_id: 0,
            dosage_value_name: "",
            quantity: 0,
            price: 0
        };
        this.measurement_model = {
            Id: 0,
            measurement_id: 0,
            measurement_name: "",
        };
        this.runner = false;
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
        this.ShowToast = new __WEBPACK_IMPORTED_MODULE_9__showtoast__["a" /* ShowToast */]();
    }
    ListMedicineComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log(selected);
    };
    ListMedicineComponent.prototype.getImageUrl = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this._getChemistDataService.addImage(file).subscribe(function (response) {
            _this.ImageUrl = response.data;
            $('#image-div').show();
        });
    }; //End of Get Image URL
    ListMedicineComponent.prototype.getCategories = function (Id) {
        var _this = this;
        this._addCategoryService.getCateogry(this.PharmacistId).subscribe(function (response) {
            _this.chemists_categories = response.data;
            _this.CategoryId = Id;
        });
    }; // End of Get Categories
    ListMedicineComponent.prototype.getSubCategoriesPOP = function (CategoryId, SubCategoryId) {
        var _this = this;
        this._addCategoryService.getAllSubCategoryValues(this.PharmacistId, CategoryId).subscribe(function (response) {
            _this.chemists_sub_categories = response.data;
            _this.SubCategoryId = SubCategoryId;
        });
    }; // End of Get Sub Categories
    ListMedicineComponent.prototype.getDosages = function () {
        var _this = this;
        this._addMeasurementServices.getDosage().subscribe(function (response) {
            if (response.code == 200) {
                _this.dosages_array = response.data;
            }
        });
    }; // Get Dosages End
    ListMedicineComponent.prototype.getDosageValues = function () {
        var _this = this;
        this._addMeasurementServices.getDosageSizes(this.DosageId).subscribe(function (response) {
            if (response.code == 200) {
                _this.dosages_sizes_array = response.data;
            }
        });
    }; // Get Dosages End
    ListMedicineComponent.prototype.getMeasurements = function (id) {
        var _this = this;
        this._addMeasurementServices.getMeasurements().subscribe(function (response) {
            if (response.code == 200) {
                _this.measurements_array = response.data;
                var measuremne_obj = _this.measurements_array.find(function (x) { return x.Id == id; });
                // console.log(measuremne_obj);  
                _this.MeasurementListId = measuremne_obj.Id;
            }
        });
    }; // Get Measurements End
    ListMedicineComponent.prototype.onActivate = function (event) { };
    ListMedicineComponent.prototype.getChemists = function () {
        var _this = this;
        console.error("Fetching Chemists");
        this._getChemistDataService.getRegisteredChemistService().subscribe(function (response) {
            // this.chemists_array = response.data;
            for (var i = 0; i < response.data.length; i++) {
                _this.chemists_array.push(response.data[i].Chemist);
            }
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
        console.log(Id);
        this.MedicineId = Id;
        var medicine_obj = this.medicines_array.find(function (x) { return x.Id == Id; });
        console.log(medicine_obj);
        this.getCategories(medicine_obj.ChemistCategory.Id);
        console.log(medicine_obj.ChemistCategory.Id);
        this.getSubCategoriesPOP(medicine_obj.ChemistCategory.ParentId, medicine_obj.ChemistCategory.Id);
        this.getMeasurements(Id);
        this.getManufacturers(Id);
        this.getDosages();
        for (var i = 0; i < medicine_obj.ProductDosageAndSizeMappings.length; i++) {
            this.variation_model = {
                Id: 0,
                measurement_id: 0,
                measurement_name: "",
                dosage_id: 0,
                dosage_name: "",
                dosage_value_id: 0,
                dosage_value_name: "",
                quantity: 0,
                price: 0
            };
            this.variation_model.Id = medicine_obj.ProductDosageAndSizeMappings[i].Id;
            this.variation_model.measurement_name = medicine_obj.ProductDosageAndSizeMappings[i].Measurements.MeasurementName;
            this.variation_model.dosage_name = medicine_obj.ProductDosageAndSizeMappings[i].DosageAndSizesValues.DosageAndSizes.UnitName;
            this.variation_model.dosage_value_name = medicine_obj.ProductDosageAndSizeMappings[i].DosageAndSizesValues.Value;
            this.variation_model.price = medicine_obj.ProductDosageAndSizeMappings[i].Price;
            this.variation_model.quantity = medicine_obj.ProductDosageAndSizeMappings[i].Quantity;
            this.variation_array.push(this.variation_model);
        }
        console.log("medicine obj", medicine_obj);
        this.MedicineName = medicine_obj.Name;
        this.ManufacturerId = medicine_obj.Manufacturer.Id;
        this.ManufacturerName = medicine_obj.Manufacturer.Name;
        this.rowsFilter3 = this.variation_array;
        jQuery('#detail').show();
        jQuery('#list').hide();
    };
    ListMedicineComponent.prototype.delete = function (Id) {
        console.log(Id);
    };
    ListMedicineComponent.prototype.updateChages = function (editingId, variable) {
        console.log(editingId);
        for (var i = 0; i < this.rowsFilter.length; i++) {
            if (this.rowsFilter[i].Id == editingId) {
                this.rowsFilter[i].IsBlocked = variable;
            }
        }
        console.log(this.rowsFilter);
    };
    ListMedicineComponent.prototype.inactivateThisMedicine = function (value) {
        var _this = this;
        var editingId = value;
        this._addMedicineService.inactivateThisMedicine(value).subscribe(function (a) {
            console.log(a);
            if (a.code == 200) {
                $("#snackbar").html(a.message);
                _this.ShowToast.myFunction();
                _this.updateChages(editingId, a.data.IsBlocked);
            }
        }, function (err) {
            console.log(err);
        });
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
    ListMedicineComponent.prototype.getManufacturers = function (id) {
        var _this = this;
        this._addMeasurementServices.getAllManufactures().subscribe(function (response) {
            if (response.code == 200) {
                console.log(response);
                _this.manufacturers_array = response.data;
                _this.ManufacturerId = id;
            }
        });
    }; // Get Dosages End
    // addVariation
    ListMedicineComponent.prototype.addVariation = function () {
        var measurement_id = this.MeasurementId;
        var measurement = this.measurements_array.find(function (x) { return x.Id == measurement_id; });
        // var measurement_name = measurement.MeasurementName;
        //measurementname
        var dosage_id = this.DosageId;
        var dosage = this.dosages_array.find(function (x) { return x.Id == dosage_id; });
        // var dosage_name = dosage.UnitName;
        //dosagename
        var dosage_value_id = this.DosageValueId;
        var dosageValue = this.dosages_sizes_array.find(function (x) { return x.Id == dosage_value_id; });
        var dosage_value_name = dosageValue;
        //dosagevaluename
        var quantity = this.ProductQuantity;
        var price = this.ProductPrice;
        // console.log(measurement, dosage, dosageValue, quantity, price);
        var body = {
            Id: this.MedicineId,
            measurement_id: this.MeasurementId,
            measurement_name: measurement.MeasurementName,
            dosage_id: this.DosageId,
            dosage_name: dosage.UnitName,
            dosage_value_id: this.DosageValueId,
            dosage_value_name: dosageValue.Value,
            quantity: this.ProductQuantity,
            price: this.ProductPrice
        };
        var data = {
            Quantity: this.ProductQuantity,
            Price: this.ProductPrice,
            DosageAndSizesValuesId: this.DosageValueId,
            MeasurementId: measurement_id
        };
        this.EditProductDaosageAndSizeMappingdto.push(data);
        this.variation_array.push(body);
        console.log(this.variation_array);
    }; //addVariation
    ListMedicineComponent.prototype.deleteVariation = function (id) {
        this.variation_array.splice(this.variation_array.indexOf({ Id: id }));
    }; //deleteVariation
    ListMedicineComponent.prototype.addMedicine = function () {
        // console.log(this.chemists_categories, this.CategoryId);
        // console.log(this.chemists_sub_categories, this.SubCategoryId);
        // console.log(this.measurements_array, this.MeasurementListId);
        var body = {
            Id: this.MedicineId,
            Name: this.MedicineName,
            ManufacturedBy: this.ManufacturerId,
            MeasurementIds: this.addMeasurementListids,
            SubCategoryId: this.SubCategoryId,
            PictureURL: this.ImageUrl,
            EditProductDaosageAndSizeMappingDTO: this.EditProductDaosageAndSizeMappingdto
        };
        console.log("Body is");
        console.log(body);
        this._getChemistDataService.editMedicine(body).subscribe(function (response) {
            console.log(response);
        });
    }; // addMedicine
    ListMedicineComponent.prototype.addMeasurement = function () {
        var measurementListID = this.MeasurementListId;
        var MeasurementList = this.measurements_array.find(function (x) { return x.Id == measurementListID; });
        var position = this.addMeasurementList.indexOf(MeasurementList);
        if (!~position) {
            this.addMeasurementList.push(MeasurementList);
        }
        for (var i = 0; i < this.addMeasurementList.length; i++) {
            var position = this.addMeasurementListids.indexOf(this.addMeasurementList[i].Id);
            if (!~position) {
                this.addMeasurementListids.push(this.addMeasurementList[i].Id);
            }
        }
        this.rowsFilter2 = this.addMeasurementList;
        console.log(this.addMeasurementListids);
    }; // addMeasurement
    ListMedicineComponent.prototype.deleteMeasurement = function (id) {
        this.addMeasurementList.splice(this.addMeasurementList.indexOf({ Id: id }));
    }; //deleteMeasurement 
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datatable'),
        __metadata("design:type", Object)
    ], ListMedicineComponent.prototype, "table", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"])
    ], ListMedicineComponent.prototype, "measurementtable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"])
    ], ListMedicineComponent.prototype, "variationstable", void 0);
    ListMedicineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'list-medicine',
            template: __webpack_require__("../../../../../src/app/theme/medicine/list-medicine/list-medicine.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/medicine/list-medicine/list-medicine.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_AddMedicineService__["a" /* AddMedicineService */], __WEBPACK_IMPORTED_MODULE_2__services_GetPopularChemistService__["a" /* GetPopularChemistService */], __WEBPACK_IMPORTED_MODULE_3__services_GetChemistDataService__["a" /* GetChemistDataService */], __WEBPACK_IMPORTED_MODULE_4__services_AddAreaService__["a" /* AddAreaService */], __WEBPACK_IMPORTED_MODULE_5__services_ProductService__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_7__services_AddCategoryService__["a" /* AddCategoryService */], __WEBPACK_IMPORTED_MODULE_6__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_2__services_GetPopularChemistService__["a" /* GetPopularChemistService */],
            __WEBPACK_IMPORTED_MODULE_3__services_GetChemistDataService__["a" /* GetChemistDataService */],
            __WEBPACK_IMPORTED_MODULE_4__services_AddAreaService__["a" /* AddAreaService */],
            __WEBPACK_IMPORTED_MODULE_8__services_AddMedicineService__["a" /* AddMedicineService */],
            __WEBPACK_IMPORTED_MODULE_5__services_ProductService__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_7__services_AddCategoryService__["a" /* AddCategoryService */],
            __WEBPACK_IMPORTED_MODULE_6__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]])
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
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllProductsByChemistId?chemistId=" + Id + "&productType=100&webCall=1")
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