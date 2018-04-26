webpackJsonp(["add-medicine.module"],{

/***/ "../../../../../src/app/theme/medicine/add-medicine/add-medicine-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMedicineRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_medicine_component__ = __webpack_require__("../../../../../src/app/theme/medicine/add-medicine/add-medicine.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__add_medicine_component__["a" /* AddMedicineComponent */],
        data: {
            title: 'Default',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        }
    }
];
var AddMedicineRoutingModule = (function () {
    function AddMedicineRoutingModule() {
    }
    AddMedicineRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AddMedicineRoutingModule);
    return AddMedicineRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/medicine/add-medicine/add-medicine.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <!-- Basic Inputs Validation start -->\r\n    <app-card [title]=\"'Add Medicine'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"form-group row\" *ngIf = \"showAttr == true\">\r\n        <label class=\"col-sm-4 col-form-label\">Pharmacist ID</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"PharmacistId\" (change)=\"getCategories()\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let chemist of chemists_array\" value=\"{{chemist.Id}}\">{{chemist.PharmacyName}} {{chemist.Address}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"pharmacist_id_error\">Pharmacist ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Medicine Image</label>\r\n        <div class=\"col-sm-8\">\r\n          <input id=\"medicine-image\" type=\"file\" (change)=\"getImageUrl($event)\">\r\n          <div class=\"messages text-danger\" id=\"medicine_image_error\">Medicine Image can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" id=\"image-div\" style=\"display: none\">\r\n        <div class=\"col-sm-12\">\r\n          <img src=\"{{ImageUrl}}\" class=\"medicine-image\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Medicine Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MedicineName\" id=\"name\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" id=\"medicine_name_error\">Medicine Name can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Manufacturer</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"ManufacturerId\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let manufacturer of manufacturers_array\" value=\"{{manufacturer.Id}}\">{{manufacturer.Name}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"manufacturer_name_error\">Manufacturer ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Category</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"CategoryId\" (change)=\"getSubCategories()\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let category of chemists_categories\" value=\"{{category.Id}}\">{{category.CategoryName}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"category_id_error\">Category ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Sub Category</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"SubCategoryId\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let sub_category of chemists_sub_categories\" value=\"{{sub_category.Id}}\">{{sub_category.CategoryName}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"sub_category_id_error\">Sub Category ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card [title]=\"'Measurement'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Measurements</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"MeasurementListId\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let measurement of measurements_array\" value=\"{{measurement.Id}}\">{{measurement.MeasurementName}} {{measurement.MeasurementSymbol}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"measurement_list_id_error\">Measurement ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4\"></label>\r\n        <div class=\"col-sm-8\">\r\n          <button type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"addMeasurement()\">Add Measurement</button>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <!-- Basic Inputs Validation start -->\r\n    <app-card [title]=\"'Variations'\" [cardOptionBlock]=\"true\">\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Measurements</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"MeasurementId\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let measurement of measurements_array\" value=\"{{measurement.Id}}\">{{measurement.MeasurementName}} {{measurement.MeasurementSymbol}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"measurement_id_error\">Measurement ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Dosage</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"DosageId\" (change)=\"getDosageValues()\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let dosage of dosages_array\" value=\"{{dosage.Id}}\">{{dosage.UnitName}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"dosage_id_error\">Dosage ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Dosage Value</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"DosageValueId\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let dosage_size of dosages_sizes_array\" value=\"{{dosage_size.Id}}\">{{dosage_size.Value}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"dosage_value_id_error\">Dosage Value can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Product Quantity</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"ProductQuantity\" id=\"email\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" id=\"product_quantity_error\">Product Quantity can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Product Price</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"ProductPrice\" id=\"pharmaCommission\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" id=\"product_price_error\">Product Price can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4\"></label>\r\n        <div class=\"col-sm-8\">\r\n          <button type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"addVariation()\">Add Variation</button>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card [title]=\"'Measurement List'\" [cardOptionBlock]=\"true\">\r\n      <ngx-datatable #table2 class='data-table' [scrollbarH]=\"true\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n        [footerHeight]=\"50\" [rowHeight]=\"50\" [limit]=\"3\" [rows]='rowsFilter2' (select)='onSelect($event)'>\r\n        <ngx-datatable-column name=\"Measurement\" sortable=\"false\" prop=\"measurement_name\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"Id\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n\r\n            <button class=\"delete-btn\" (click)=\"deleteMeasurement(value)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n      </ngx-datatable>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Variations List'\" [cardOptionBlock]=\"true\">\r\n      <ngx-datatable #table class='data-table' [scrollbarH]=\"true\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n        [footerHeight]=\"50\" [rowHeight]=\"50\" [limit]=\"10\" [rows]='rowsFilter' (select)='onSelect($event)'>\r\n        <ngx-datatable-column name=\"Measurement\" sortable=\"false\" prop=\"measurement_name\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Dosage Name\" sortable=\"false\" prop=\"dosage_name\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Dosage Value\" sortable=\"false\" prop=\"dosage_value_name\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Quantity\" sortable=\"false\" prop=\"quantity\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Price\" sortable=\"false\" prop=\"price\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"Id\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n\r\n            <button class=\"delete-btn\" (click)=\"deleteVariation(value)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n      </ngx-datatable>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Submission'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"form-group row\">\r\n        <div class=\"messages text-danger\" id=\"measurement_list_error\">Measurment List can't be empty</div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"messages text-danger\" id=\"variation_list_error\">Variation List can't be empty</div>\r\n      </div>\r\n      <div class=\"preloader3 loader-block\" id=\"loader\">\r\n        <div class=\"circ1\"></div>\r\n        <div class=\"circ2\"></div>\r\n        <div class=\"circ3\"></div>\r\n        <div class=\"circ4\"></div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <button type=\"submit\" class=\"btn btn-primary m-b-0 col-md-12\" (click)=\"addMedicine()\">Submit</button>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/medicine/add-medicine/add-medicine.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#seo-card1 canvas,\n#seo-card2 canvas {\n  height: 150px !important;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px; }\n  @media only screen and (max-width: 768px) {\n    #seo-card1 canvas,\n    #seo-card2 canvas {\n      padding-bottom: 30px; } }\n\n.text-danger {\n  display: none; }\n\n.preloader3 {\n  height: 50px !important;\n  display: none; }\n\n.medicine-image {\n  width: 180px;\n  height: 180px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/medicine/add-medicine/add-medicine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMedicineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_GetChemistDataService__ = __webpack_require__("../../../../../src/app/theme/services/GetChemistDataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AddAreaService__ = __webpack_require__("../../../../../src/app/theme/services/AddAreaService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_GetPopularChemistService__ = __webpack_require__("../../../../../src/app/theme/services/GetPopularChemistService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AddChemistService__ = __webpack_require__("../../../../../src/app/theme/services/AddChemistService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AddCategoryService__ = __webpack_require__("../../../../../src/app/theme/services/AddCategoryService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_MeasurementAndDosageSizesService__ = __webpack_require__("../../../../../src/app/theme/services/MeasurementAndDosageSizesService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_AddMedicineService__ = __webpack_require__("../../../../../src/app/theme/services/AddMedicineService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_validation_class__ = __webpack_require__("../../../../../src/app/theme/models/validation.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddMedicineComponent = (function () {
    function AddMedicineComponent(_getChemistDataService, _getPopularChemistService, _AddAreaNameService, _addChemistServiceService, _addCategoryService, _addMeasurementServices, _addMedicineService) {
        this._getChemistDataService = _getChemistDataService;
        this._getPopularChemistService = _getPopularChemistService;
        this._AddAreaNameService = _AddAreaNameService;
        this._addChemistServiceService = _addChemistServiceService;
        this._addCategoryService = _addCategoryService;
        this._addMeasurementServices = _addMeasurementServices;
        this._addMedicineService = _addMedicineService;
        /**
         * End
         */
        this.MedicineName = "";
        this.Address = "";
        this.ManufacturerName = "";
        this.PharmaCommission = 0;
        this.City = 0;
        this.Area = 0;
        this.PharmacistId = 0;
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
        this.ManufacturerId = 0;
        this.cities_array = [];
        this.areas_array = [];
        this.chemists_array = [];
        this.chemists_categories = [];
        this.chemists_sub_categories = [];
        this.measurements_array = [];
        this.dosages_array = [];
        this.manufacturers_array = [];
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
        this.rowsBasic = [];
        this.fullScreenRow = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.DosageSize = {};
        this.DosageSizeee = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];
        this.rows = [];
        this.rowsFilter = [];
        this.tempFilter = [];
        this.rowsFilter2 = [];
        this.tempFilter2 = [];
        this.showAttr = false;
        var session_obj = JSON.parse(localStorage.getItem('session_obj'));
        if (session_obj.UserRole == 1) {
            this.getChemists();
            this.showAttr = true;
        }
        else if (session_obj.UserRole == 2) {
            this.PharmacistId = session_obj.ChemistId;
            this.showAttr = false;
            this.getCategories();
        }
        this.getMeasurements();
        this.getDosages();
        this.getManufacturers();
    }
    AddMedicineComponent.prototype.ngOnInit = function () {
    };
    AddMedicineComponent.prototype.getDosages = function () {
        var _this = this;
        this._addMeasurementServices.getDosage().subscribe(function (response) {
            if (response.code == 200) {
                _this.dosages_array = response.data;
            }
        });
    }; // Get Dosages End
    AddMedicineComponent.prototype.getDosageValues = function () {
        var _this = this;
        this._addMeasurementServices.getDosageSizes(this.DosageId).subscribe(function (response) {
            if (response.code == 200) {
                _this.dosages_sizes_array = response.data;
            }
        });
    }; // Get Dosages End
    AddMedicineComponent.prototype.getManufacturers = function () {
        var _this = this;
        this._addMeasurementServices.getAllManufactures().subscribe(function (response) {
            if (response.code == 200) {
                console.log(response);
                _this.manufacturers_array = response.data;
            }
        });
    }; // Get Dosages End
    AddMedicineComponent.prototype.getMeasurements = function () {
        var _this = this;
        this._addMeasurementServices.getMeasurements().subscribe(function (response) {
            if (response.code == 200) {
                _this.measurements_array = response.data;
            }
        });
    }; // Get Measurements End
    AddMedicineComponent.prototype.getCategories = function () {
        var _this = this;
        this._addCategoryService.getCateogry(this.PharmacistId).subscribe(function (response) {
            _this.chemists_categories = response.data;
        });
    }; // End of Get Categories
    AddMedicineComponent.prototype.getSubCategories = function () {
        var _this = this;
        this._addCategoryService.getAllSubCategoryValues(this.PharmacistId, this.CategoryId).subscribe(function (response) {
            _this.chemists_sub_categories = response.data;
        });
    }; // End of Get Sub Categories
    AddMedicineComponent.prototype.getChemists = function () {
        var _this = this;
        this._getChemistDataService.getRegisteredChemistService().subscribe(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                _this.chemists_array.push(response.data[i].Chemist);
            }
            //this.chemists_array = response.data;
        });
    }; // End of Get Chemists
    AddMedicineComponent.prototype.addMedicine = function () {
        var _this = this;
        if (this.runner == false) {
            $('#loader').show();
            $('.text-danger').hide();
            this.runner = true;
            if (__WEBPACK_IMPORTED_MODULE_8__models_validation_class__["a" /* ValidationModel */].validateNumber(this.PharmacistId)) {
                this.runner = false;
                $('#loader').hide();
                $('#pharmacist_id_error').show();
                return;
            }
            if (__WEBPACK_IMPORTED_MODULE_8__models_validation_class__["a" /* ValidationModel */].validateString(this.MedicineName)) {
                this.runner = false;
                $('#loader').hide();
                $('#medicine_name_error').show();
                return;
            }
            if (__WEBPACK_IMPORTED_MODULE_8__models_validation_class__["a" /* ValidationModel */].validateString(this.ImageUrl)) {
                this.runner = false;
                $('#loader').hide();
                $('#medicine_image_error').show();
                return;
            }
            if (__WEBPACK_IMPORTED_MODULE_8__models_validation_class__["a" /* ValidationModel */].validateNumber(this.ManufacturerId)) {
                this.runner = false;
                $('#loader').hide();
                $('#manufacturer_name_error').show();
                return;
            }
            if (__WEBPACK_IMPORTED_MODULE_8__models_validation_class__["a" /* ValidationModel */].validateNumber(this.CategoryId)) {
                this.runner = false;
                $('#loader').hide();
                $('#category_id_error').show();
                return;
            }
            if (__WEBPACK_IMPORTED_MODULE_8__models_validation_class__["a" /* ValidationModel */].validateNumber(this.SubCategoryId)) {
                this.runner = false;
                $('#loader').hide();
                $('#sub_category_id_error').show();
                return;
            }
            if (this.variation_array.length == 0) {
                this.runner = false;
                $('#loader').hide();
                $('#variation_list_error').show();
                return;
            }
            if (this.measurement_final_ids.length == 0) {
                this.runner = false;
                $('#loader').hide();
                $('#measurement_list_error').show();
                return;
            }
            var measurement_ids = [];
            for (var i = 0; i < this.measurement_final_ids.length; i++) {
                measurement_ids.push(this.measurement_final_ids[i].measurement_id);
            }
            var variation_dto_array = [];
            for (var i = 0; i < this.variation_array.length; i++) {
                var obj = {
                    Quantity: this.variation_array[i].quantity,
                    Price: this.variation_array[i].price,
                    DosageAndSizesValuesId: this.variation_array[i].dosage_value_id,
                    MeasurementId: this.variation_array[i].measurement_id
                };
                variation_dto_array.push(obj);
            }
            this._addMedicineService.addMedicine(this.MedicineName, this.ManufacturerId, measurement_ids, variation_dto_array, this.SubCategoryId, this.PharmacistId, this.ImageUrl).subscribe(function (response) {
                $('#loader').hide();
                _this.runner = false;
                _this.MedicineName = "";
                _this.ManufacturerName = "";
                _this.PharmacistId = 0;
                _this.ImageUrl = "";
                _this.CategoryId = 0;
                _this.SubCategoryId = 0;
                _this.MeasurementListId = 0;
                _this.ManufacturerId = 0;
                _this.MeasurementId = 0;
                _this.DosageId = 0;
                _this.DosageValueId = 0;
                _this.ProductQuantity = 0;
                _this.ProductPrice = 0;
                _this.rowsFilter2 = [];
                _this.rowsFilter = [];
                _this.variation_array = [];
                _this.measurement_final_ids = [];
                $("#medicine-image").val('');
                $('#image-div').hide();
            });
        }
    }; //End of Add Medicine
    AddMedicineComponent.prototype.getImageUrl = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this._addMedicineService.addImage(file).subscribe(function (response) {
            _this.ImageUrl = response.data;
            $('#image-div').show();
        });
    }; //End of Get Image URL
    AddMedicineComponent.prototype.addVariation = function () {
        var _this = this;
        $('.text-danger').hide();
        this.variation_model = {
            Id: this.variation_array.length + 1,
            measurement_id: 0,
            measurement_name: "",
            dosage_id: 0,
            dosage_name: "",
            dosage_value_id: 0,
            dosage_value_name: "",
            quantity: 0,
            price: 0
        };
        if (this.MeasurementId <= 0) {
            $('#measurement_id_error').show();
            return;
        }
        if (this.DosageId <= 0) {
            $('#dosage_id_error').show();
            return;
        }
        if (this.DosageValueId <= 0) {
            $('#dosage_value_id_error').show();
            return;
        }
        if (this.ProductPrice <= 0) {
            $('#product_price_error').show();
            return;
        }
        if (this.ProductQuantity <= 0) {
            $('#product_quantity_error').show();
            return;
        }
        var measurementObj = this.measurements_array.find(function (x) { return x.Id == _this.MeasurementId; });
        this.variation_model.measurement_id = this.MeasurementId;
        this.variation_model.measurement_name = measurementObj.MeasurementName;
        var dosageObj = this.dosages_array.find(function (x) { return x.Id == _this.DosageId; });
        this.variation_model.dosage_id = this.DosageId;
        this.variation_model.dosage_name = dosageObj.UnitName;
        var dosageObj = this.dosages_sizes_array.find(function (x) { return x.Id == _this.DosageValueId; });
        this.variation_model.dosage_value_id = this.DosageValueId;
        this.variation_model.dosage_value_name = dosageObj.Value;
        this.variation_model.price = this.ProductPrice;
        this.variation_model.quantity = this.ProductQuantity;
        this.variation_array.push(this.variation_model);
        this.rowsFilter = this.variation_array;
        this.tempFilter = this.variation_array;
    }; // End of Add Variation
    AddMedicineComponent.prototype.addMeasurement = function () {
        var _this = this;
        $('.text-danger').hide();
        if (this.MeasurementListId <= 0) {
            $('#measurement_list_id_error').show();
            return;
        }
        var measurement_obj = this.measurements_array.find(function (x) { return x.Id == _this.MeasurementListId; });
        this.measurement_model = {
            Id: this.measurement_final_ids.length + 1,
            measurement_id: 0,
            measurement_name: "",
        };
        this.measurement_model.measurement_id = measurement_obj.Id;
        this.measurement_model.measurement_name = measurement_obj.MeasurementName;
        this.measurement_final_ids.push(this.measurement_model);
        this.rowsFilter2 = this.measurement_final_ids;
        this.tempFilter2 = this.measurement_final_ids;
    }; //End of Add Measurement
    AddMedicineComponent.prototype.deleteVariation = function (Id) {
        var index = this.variation_array.findIndex(function (x) { return x.Id == Id; });
        this.variation_array.splice(index, 1);
        this.rowsFilter = this.variation_array;
        this.tempFilter = this.variation_array;
    };
    AddMedicineComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.tempFilter.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rowsFilter = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    AddMedicineComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__["DatatableComponent"])
    ], AddMedicineComponent.prototype, "table", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__["DatatableComponent"])
    ], AddMedicineComponent.prototype, "table2", void 0);
    AddMedicineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-medicine',
            template: __webpack_require__("../../../../../src/app/theme/medicine/add-medicine/add-medicine.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/medicine/add-medicine/add-medicine.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_AddMedicineService__["a" /* AddMedicineService */], __WEBPACK_IMPORTED_MODULE_1__services_GetChemistDataService__["a" /* GetChemistDataService */], __WEBPACK_IMPORTED_MODULE_2__services_AddAreaService__["a" /* AddAreaService */], __WEBPACK_IMPORTED_MODULE_5__services_AddCategoryService__["a" /* AddCategoryService */], __WEBPACK_IMPORTED_MODULE_3__services_GetPopularChemistService__["a" /* GetPopularChemistService */], __WEBPACK_IMPORTED_MODULE_4__services_AddChemistService__["a" /* AddchemistService */], __WEBPACK_IMPORTED_MODULE_6__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_GetChemistDataService__["a" /* GetChemistDataService */],
            __WEBPACK_IMPORTED_MODULE_3__services_GetPopularChemistService__["a" /* GetPopularChemistService */],
            __WEBPACK_IMPORTED_MODULE_2__services_AddAreaService__["a" /* AddAreaService */],
            __WEBPACK_IMPORTED_MODULE_4__services_AddChemistService__["a" /* AddchemistService */],
            __WEBPACK_IMPORTED_MODULE_5__services_AddCategoryService__["a" /* AddCategoryService */],
            __WEBPACK_IMPORTED_MODULE_6__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */],
            __WEBPACK_IMPORTED_MODULE_7__services_AddMedicineService__["a" /* AddMedicineService */]])
    ], AddMedicineComponent);
    return AddMedicineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/medicine/add-medicine/add-medicine.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMedicineModule", function() { return AddMedicineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_medicine_component__ = __webpack_require__("../../../../../src/app/theme/medicine/add-medicine/add-medicine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_medicine_routing_module__ = __webpack_require__("../../../../../src/app/theme/medicine/add-medicine/add-medicine-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_jquery_locationpicker_plugin_master_src_locationpicker_jquery_js__ = __webpack_require__("../../../../../src/assets/jquery-locationpicker-plugin-master/src/locationpicker.jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_jquery_locationpicker_plugin_master_src_locationpicker_jquery_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__assets_jquery_locationpicker_plugin_master_src_locationpicker_jquery_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AddMedicineModule = (function () {
    function AddMedicineModule() {
    }
    AddMedicineModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__add_medicine_routing_module__["a" /* AddMedicineRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["b" /* SimpleNotificationsModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__add_medicine_component__["a" /* AddMedicineComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__add_medicine_component__["a" /* AddMedicineComponent */]]
        })
    ], AddMedicineModule);
    return AddMedicineModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/services/AddMedicineService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMedicineService; });
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




var AddMedicineService = (function () {
    function AddMedicineService(http) {
        this.http = http;
        this.urlService = new __WEBPACK_IMPORTED_MODULE_3__ServiceUrl__["a" /* ServiceUrl */]();
        console.log("Add Measurement Service");
    }
    AddMedicineService.prototype.getAllCategoryValues = function (categoryId) {
        var body = JSON.stringify({});
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getCategoriesByChemistId?chemistId=" + categoryId, options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.getAllSubCategoryValues = function (chemistId, categoryId) {
        var body = JSON.stringify({});
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getSubCategoriesByChemistIdByCategoryId?chemistId=" + chemistId + "&categoryId=" + categoryId, options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.getAllDosageValues = function () {
        var body = JSON.stringify({});
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllChemistUnits", options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.getSubcategoryByCategoryID = function (chemistId, categoryId) {
        var body = JSON.stringify({});
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getSubCategoriesByChemistIdByCategoryId?chemistId=" + chemistId + "&categoryId=" + categoryId, options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.getAllMeasurementValues = function () {
        var body = JSON.stringify({});
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllChemistMeasurements", options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.addMedicineAndDosageService = function (SingleMedicineModel, PricePerQuantityModel) {
        var body = JSON.stringify({ PictureURL: SingleMedicineModel.Url, ChemistId: SingleMedicineModel.ChemistId, ManufacturedBy: SingleMedicineModel.ManufacturedBy, DosageSizeAndValues: SingleMedicineModel.DosageSizeAndValues, Name: SingleMedicineModel.MedicineName, MeasurementIds: SingleMedicineModel.MeasurementModel, SubCategoryId: SingleMedicineModel.SubCategoryId, AddProductDaosageAndSizeMappingDTO: PricePerQuantityModel });
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "Chemist/addProduct", body, options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.addImage = function (file) {
        var formData = new FormData();
        formData.append("file", file, file.name);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ method: 'post' });
        return this.http.post(this.urlService.baseUrl + "product/uploadProductImage", formData, options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.addMedicine = function (Name, ManufacturedBy, MeasurementIds, AddProductDaosageAndSizeMappingDTO, SubCategoryId, ChemistId, PictureURL) {
        console.log(Name);
        var body = JSON.stringify({ Name: Name, ManufacturedBy: ManufacturedBy, MeasurementIds: MeasurementIds, AddProductDaosageAndSizeMappingDTO: AddProductDaosageAndSizeMappingDTO, SubCategoryId: SubCategoryId, ChemistId: ChemistId, PictureURL: PictureURL });
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "Chemist/addProduct", body, options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AddMedicineService);
    return AddMedicineService;
}());



/***/ })

});
//# sourceMappingURL=add-medicine.module.chunk.js.map