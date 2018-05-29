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

module.exports = "<!-- <div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n\r\n    <app-card [title]=\"'Add Medicine'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"form-group row\" *ngIf=\"showAttr == true\">\r\n        <label class=\"col-sm-4 col-form-label\">Pharmacist ID</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"PharmacistId\" (change)=\"getCategories()\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let chemist of chemists_array\" value=\"{{chemist.Id}}\">{{chemist.PharmacyName}} {{chemist.Address}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"pharmacist_id_error\">Pharmacist ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Medicine Image</label>\r\n        <div class=\"col-sm-8\">\r\n          <input id=\"medicine-image\" type=\"file\" (change)=\"getImageUrl($event)\">\r\n          <div class=\"messages text-danger\" id=\"medicine_image_error\">Medicine Image can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" id=\"image-div\" style=\"display: none\">\r\n        <div class=\"col-sm-12\">\r\n          <img src=\"{{ImageUrl}}\" class=\"medicine-image\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Medicine Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MedicineName\" id=\"name\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" id=\"medicine_name_error\">Medicine Name can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Manufacturer</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"ManufacturerId\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let manufacturer of manufacturers_array\" value=\"{{manufacturer.Id}}\">{{manufacturer.Name}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"manufacturer_name_error\">Manufacturer ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Category</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"CategoryId\" (change)=\"getSubCategories()\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let category of chemists_categories\" value=\"{{category.Id}}\">{{category.CategoryName}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"category_id_error\">Category ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Sub Category</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"SubCategoryId\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let sub_category of chemists_sub_categories\" value=\"{{sub_category.Id}}\">{{sub_category.CategoryName}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"sub_category_id_error\">Sub Category ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card [title]=\"'Measurement'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Measurements</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"MeasurementListId\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let measurement of measurements_array\" value=\"{{measurement.Id}}\">{{measurement.MeasurementName}} {{measurement.MeasurementSymbol}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"measurement_list_id_error\">Measurement ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4\"></label>\r\n        <div class=\"col-sm-8\">\r\n          <button type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"addMeasurement()\">Add Measurement</button>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n\r\n    <app-card [title]=\"'Variations'\" [cardOptionBlock]=\"true\">\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Measurements</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"Measurement_Id\" (click)=\"selectMeasurement()\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let measurement of selectedMeasurementArry\" value=\"{{measurement.Id}}\">{{measurement.measurement_name}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"measurement_id_error\">Measurement ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Dosage</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"DosageId\" (change)=\"getDosageValues()\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let dosage of dosages_array\" value=\"{{dosage.Id}}\">{{dosage.UnitName}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"dosage_id_error\">Dosage ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Dosage Value</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"DosageValueId\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let dosage_size of dosages_sizes_array\" value=\"{{dosage_size.Id}}\">{{dosage_size.Value}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" id=\"dosage_value_id_error\">Dosage Value can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Product Quantity</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"ProductQuantity\" id=\"email\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" id=\"product_quantity_error\">Product Quantity can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Product Price</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"ProductPrice\" id=\"pharmaCommission\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" id=\"product_price_error\">Product Price can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4\"></label>\r\n        <div class=\"col-sm-8\">\r\n          <button type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"addVariation()\">Add Variation</button>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <app-card [title]=\"'Measurement List'\" [cardOptionBlock]=\"true\">\r\n      <ngx-datatable #table2 class='data-table' [scrollbarH]=\"true\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n        [footerHeight]=\"50\" [rowHeight]=\"50\" [limit]=\"3\" [rows]='rowsFilter2' (select)='onSelect($event)'>\r\n        <ngx-datatable-column name=\"Measurement\" sortable=\"false\" prop=\"measurement_name\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"Id\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n\r\n            <button class=\"delete-btn\" (click)=\"deleteMeasurement(value)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n      </ngx-datatable>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Variations List'\" [cardOptionBlock]=\"true\">\r\n      <ngx-datatable #table class='data-table' [scrollbarH]=\"true\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n        [footerHeight]=\"50\" [rowHeight]=\"50\" [limit]=\"10\" [rows]='rowsFilter' (select)='onSelect($event)'>\r\n        <ngx-datatable-column name=\"Measurement\" sortable=\"false\" prop=\"measurement_name\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Dosage Name\" sortable=\"false\" prop=\"dosage_name\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Dosage Value\" sortable=\"false\" prop=\"dosage_value_name\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Quantity\" sortable=\"false\" prop=\"quantity\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Price\" sortable=\"false\" prop=\"price\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"Id\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n\r\n            <button class=\"delete-btn\" (click)=\"deleteVariation(value)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n      </ngx-datatable>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Submission'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"form-group row\">\r\n        <div class=\"messages text-danger\" id=\"measurement_list_error\">Measurment List can't be empty</div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"messages text-danger\" id=\"variation_list_error\">Variation List can't be empty</div>\r\n      </div>\r\n      <div class=\"preloader3 loader-block\" id=\"loader\">\r\n        <div class=\"circ1\"></div>\r\n        <div class=\"circ2\"></div>\r\n        <div class=\"circ3\"></div>\r\n        <div class=\"circ4\"></div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <button type=\"submit\" class=\"btn btn-primary m-b-0 col-md-12\" (click)=\"addMedicine()\">Submit</button>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n -->\r\n<!-- Ends -->\r\n\r\n<div  class=\"overlay-loader\" style=\"display:block\" *ngIf=\"runnerLoader\">\r\n    <div  class=\"preloader3 custom-preloader loader-block\">\r\n      <div  class=\"circ1 loader-primary loader-lg\"></div>\r\n      <div  class=\"circ2 loader-primary loader-lg\"></div>\r\n      <div class=\"circ3 loader-primary loader-lg\"></div>\r\n      <div  class=\"circ4 loader-primary loader-lg\"></div>\r\n    </div>\r\n  </div>\r\n  \r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-md-6\">\r\n\r\n    <app-card [title]=\"'Add Medicine'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"form-group row\" *ngIf=\"showAttr == true\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Pharmacy</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"PharmacistId\" (change)=\"getCategories()\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let chemist of chemists_array\" value=\"{{chemist.Id}}\">{{chemist.PharmacyName}} {{chemist.Address}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" *ngIf=\"pharmacist_id_error\">Pharmacist ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" id=\"image-div\" style=\"display: none\">\r\n        <div class=\"col-sm-12\">\r\n          <img src=\"{{ImageUrl}}\" class=\"medicine-image\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Medicine Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MedicineName\" id=\"name\" placeholder=\"\">\r\n          <div class=\"messages text-danger\" *ngIf=\"medicine_name_error\">Medicine Name can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Manufacturer</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"ManufacturerId\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let manufacturer of manufacturers_array\" value=\"{{manufacturer.Id}}\">{{manufacturer.Name}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" *ngIf=\"manufacturer_name_error\">Manufacturer ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Category</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"CategoryId\" (change)=\"getSubCategories()\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let category of chemists_categories\" value=\"{{category.Id}}\">{{category.CategoryName}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" *ngIf=\"category_id_error\">Category ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Select Sub Category</label>\r\n        <div class=\"col-sm-8\">\r\n          <select name=\"select\" [(ngModel)]=\"SubCategoryId\" class=\"form-control form-control-default\">\r\n            <option *ngFor=\"let sub_category of chemists_sub_categories\" value=\"{{sub_category.Id}}\">{{sub_category.CategoryName}}</option>\r\n          </select>\r\n          <div class=\"messages text-danger\" *ngIf=\"sub_category_id_error\">Sub Category ID can't be blank</div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n\r\n    <app-card [title]=\"'Add Medicine Image'\" [cardOptionBlock]=\"true\">\r\n\r\n        <div class=\"form-group row\" style=\"height: 277px\">\r\n            <div class=\"col-sm-12\">\r\n              <form id=\"form1\" runat=\"server\" (click)=\"changeImage()\">\r\n                <input type='file' style=\"width:0,\" (change)=\"changeimage($event)\" id=\"imgInp\" style=\"visibility:hidden; height: 0;\" />\r\n                 <img  src=\"../../../../assets/images/pharma-avatar.png\"  class=\"pharma-logo\" id=\"blah\"  alt=\"your image\" /> \r\n             \r\n              </form>\r\n              <div class=\"messages text-danger\" *ngIf=\"image_error\">Please select an image</div>\r\n            </div>\r\n          </div>\r\n\r\n    </app-card>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"add-variation row\">\r\n\r\n  <div class=\"col-md-12\">\r\n\r\n\r\n    <app-card [title]=\"'Add Variations'\" [cardOptionBlock]=\"true\">\r\n\r\n\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">Select Packaging</label>\r\n            <div class=\"col-sm-8\">\r\n              <select name=\"select\" [(ngModel)]=\"Measurement_Id\" (click)=\"selectMeasurement()\" class=\"form-control form-control-default\">\r\n                <option *ngFor=\"let measurement of selectedMeasurementArry\" value=\"{{measurement.Id}}\">{{measurement.measurement_name}}</option>\r\n              </select>\r\n              <div class=\"messages text-danger\" *ngIf=\"measurement_id_error\">Measurement ID can't be blank</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">Select Dosage</label>\r\n            <div class=\"col-sm-8\">\r\n              <select name=\"select\" [(ngModel)]=\"DosageId\" (change)=\"getDosageValues()\" class=\"form-control form-control-default\">\r\n                <option *ngFor=\"let dosage of dosages_array\" value=\"{{dosage.Id}}\">{{dosage.UnitName}}</option>\r\n              </select>\r\n              <div class=\"messages text-danger\" *ngIf=\"dosage_id_error\">Dosage ID can't be blank</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">Select Dosage Value</label>\r\n            <div class=\"col-sm-8\">\r\n              <select name=\"select\" [(ngModel)]=\"DosageValueId\" class=\"form-control form-control-default\">\r\n                <option *ngFor=\"let dosage_size of dosages_sizes_array\" value=\"{{dosage_size.Id}}\">{{dosage_size.Value}}</option>\r\n              </select>\r\n              <div class=\"messages text-danger\" *ngIf=\"dosage_value_id_error\">Dosage Value can't be blank</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">Product Quantity</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"ProductQuantity\" id=\"email\" placeholder=\"\">\r\n              <div class=\"messages text-danger\" *ngIf=\"product_quantity_error\">Product Quantity can't be blank</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">Product Price</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"ProductPrice\" id=\"pharmaCommission\" placeholder=\"\">\r\n              <div class=\"messages text-danger\" *ngIf=\"product_price_error\">Product Price can't be blank</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4\"></label>\r\n            <div class=\"col-sm-8\">\r\n              <button type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"addVariation()\">Add Variation</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <div class=\"row\" style=\"    padding-top: 75px;\">\r\n\r\n\r\n        <div class=\"col-sm-12\">\r\n          <ngx-datatable #table class='data-table' [scrollbarH]=\"true\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n            [footerHeight]=\"50\" [rowHeight]=\"50\" [limit]=\"10\" [rows]='rowsFilter' (select)='onSelect($event)'>\r\n            <ngx-datatable-column name=\"Measurement\" sortable=\"false\" prop=\"measurement_name\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                {{value}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Dosage Name\" sortable=\"false\" prop=\"dosage_name\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                {{value}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Dosage Value\" sortable=\"false\" prop=\"dosage_value_name\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                {{value}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Quantity\" sortable=\"false\" prop=\"quantity\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                {{value}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Price\" sortable=\"false\" prop=\"price\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                {{value}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"Id\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n\r\n                <button class=\"delete-btn\" (click)=\"deleteVariation(value)\">\r\n                  <i class=\"fa fa-trash-o\"></i>\r\n                </button>\r\n\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n          </ngx-datatable>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-group row\">\r\n          <div class=\"messages text-danger\" *ngIf=\"measurement_list_error\">Measurment List can't be empty</div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"messages text-danger\" *ngIf=\"variation_list_error\">Variation List can't be empty</div>\r\n        </div>\r\n\r\n   \r\n\r\n      <div class=\"row\" style=\"padding-top:30px;text-align: center\">\r\n          <button type=\"submit\" class=\"btn btn-success m-b-0 addmedicinebtn\" (click)=\"addMedicine()\">Add Medicine</button>\r\n      </div>\r\n\r\n    </app-card>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/medicine/add-medicine/add-medicine.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#seo-card1 canvas,\n#seo-card2 canvas {\n  height: 150px !important;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px; }\n  @media only screen and (max-width: 768px) {\n    #seo-card1 canvas,\n    #seo-card2 canvas {\n      padding-bottom: 30px; } }\n\n.medicine-image {\n  width: 180px;\n  height: 180px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.pharma-logo {\n  width: 250px; }\n\n#form1 {\n  text-align: center;\n  width: 45%;\n  margin: 0 auto; }\n\n.addmedicinebtn {\n  width: 400px;\n  margin: 0 auto; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_userService__ = __webpack_require__("../../../../../src/app/theme/services/userService.ts");
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
    function AddMedicineComponent(_getChemistDataService, _getPopularChemistService, _AddAreaNameService, _addChemistServiceService, _addCategoryService, _userService, _addMeasurementServices, _addMedicineService) {
        this._getChemistDataService = _getChemistDataService;
        this._getPopularChemistService = _getPopularChemistService;
        this._AddAreaNameService = _AddAreaNameService;
        this._addChemistServiceService = _addChemistServiceService;
        this._addCategoryService = _addCategoryService;
        this._userService = _userService;
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
        this.ProfilePicture = File;
        this.showAttr = false;
        /* Osamas's code */
        this.pharmacist_id_error = false;
        this.medicine_name_error = false;
        this.manufacturer_name_error = false;
        this.category_id_error = false;
        this.sub_category_id_error = false;
        this.image_error = false;
        this.measurement_id_error = false;
        this.dosage_id_error = false;
        this.dosage_value_id_error = false;
        this.product_quantity_error = false;
        this.product_price_error = false;
        this.ShowMedicineForm = false;
        this.measurement_list_error = false;
        this.variation_list_error = false;
        this.runnerLoader = false;
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
        });
    }; // End of Get Chemists
    AddMedicineComponent.prototype.resetErrors = function () {
        this.pharmacist_id_error = false;
        this.medicine_name_error = false;
        this.manufacturer_name_error = false;
        this.category_id_error = false;
        this.sub_category_id_error = false;
        this.measurement_list_error = false;
        this.variation_list_error = false;
    };
    AddMedicineComponent.prototype.addMedicine = function () {
        var _this = this;
        console.log(this.ManufacturerId, this.CategoryId);
        var error = false;
        this.resetErrors();
        if (__WEBPACK_IMPORTED_MODULE_8__models_validation_class__["a" /* ValidationModel */].validateNumber(this.PharmacistId) || this.PharmacistId == 0) {
            error = true;
            this.pharmacist_id_error = true;
        }
        if (__WEBPACK_IMPORTED_MODULE_8__models_validation_class__["a" /* ValidationModel */].validateString(this.MedicineName)) {
            error = true;
            this.medicine_name_error = true;
        }
        if (this.ManufacturerId == undefined || this.ManufacturerId == 0) {
            error = true;
            this.manufacturer_name_error = true;
        }
        if (this.CategoryId == undefined || this.CategoryId == 0) {
            error = true;
            this.category_id_error = true;
        }
        if (this.SubCategoryId == undefined || this.SubCategoryId == 0) {
            error = true;
            this.sub_category_id_error = true;
        }
        if (this.variation_array.length == 0) {
            error = true;
            this.variation_list_error = true;
        }
        if (this.measurement_final_ids.length == 0) {
            error = true;
            this.measurement_list_error = true;
        }
        if (error) {
        }
        else {
            this.runnerLoader = true;
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
            console.log(this.MedicineName, this.ManufacturerId, measurement_ids, variation_dto_array, this.SubCategoryId, this.PharmacistId, this.ImageUrl);
            this._addMedicineService.addMedicine(this.MedicineName, this.ManufacturerId, measurement_ids, variation_dto_array, this.SubCategoryId, this.PharmacistId, this.ImageUrl).subscribe(function (response) {
                $('#loader').hide();
                console.log(response);
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
    AddMedicineComponent.prototype.deleteMeasurement = function (id) {
        this.rowsFilter2 = this.rowsFilter2.filter(function (obj) {
            return obj.Id != id;
        });
    };
    AddMedicineComponent.prototype.selectMeasurement = function () {
        this.selectedMeasurementArry = this.rowsFilter2;
        // console.log(this.selectedMeasurement);
    }; //end of selected Measurement
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
        console.log(this.variation_array);
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
        if (this.Measurement_Id <= 0) {
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
        var measurementObj = this.selectedMeasurementArry.find(function (x) { return x.Id == _this.Measurement_Id; });
        console.log(measurementObj);
        this.variation_model.measurement_id = measurementObj.measurement_id;
        this.variation_model.measurement_name = measurementObj.measurement_name;
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
    // Images//
    AddMedicineComponent.prototype.changeImage = function () {
        $("#imgInp").click();
    };
    AddMedicineComponent.prototype.changeimage = function (elem) {
        this.readURL(elem);
    };
    AddMedicineComponent.prototype.readURL = function (input) {
        var reader, target;
        reader = new FileReader();
        input = document.getElementById('imgInp');
        if (input.files && input.files[0]) {
            // var reader = new FileReader();
            var self = this;
            reader.onload = function (e) {
                console.log(e);
                $('#blah').attr('src', e.target.result);
                self.ProfilePicture = input.files[0];
                $("#blah").css("width", "250px");
                self.saveImageService();
            };
            reader.readAsDataURL(input.files[0]);
        }
    };
    AddMedicineComponent.prototype.saveImageService = function () {
        var _this = this;
        this._userService.saveImageForPharmacy(this.ProfilePicture).subscribe(function (a) {
            console.log(a);
            _this.LogoUrl = a.data;
        });
    };
    //Images//
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
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__services_AddMedicineService__["a" /* AddMedicineService */], __WEBPACK_IMPORTED_MODULE_1__services_GetChemistDataService__["a" /* GetChemistDataService */], __WEBPACK_IMPORTED_MODULE_2__services_AddAreaService__["a" /* AddAreaService */], __WEBPACK_IMPORTED_MODULE_5__services_AddCategoryService__["a" /* AddCategoryService */], __WEBPACK_IMPORTED_MODULE_3__services_GetPopularChemistService__["a" /* GetPopularChemistService */], __WEBPACK_IMPORTED_MODULE_4__services_AddChemistService__["a" /* AddchemistService */], __WEBPACK_IMPORTED_MODULE_6__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_GetChemistDataService__["a" /* GetChemistDataService */],
            __WEBPACK_IMPORTED_MODULE_3__services_GetPopularChemistService__["a" /* GetPopularChemistService */],
            __WEBPACK_IMPORTED_MODULE_2__services_AddAreaService__["a" /* AddAreaService */],
            __WEBPACK_IMPORTED_MODULE_4__services_AddChemistService__["a" /* AddchemistService */],
            __WEBPACK_IMPORTED_MODULE_5__services_AddCategoryService__["a" /* AddCategoryService */],
            __WEBPACK_IMPORTED_MODULE_10__services_userService__["a" /* UserService */],
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



/***/ })

});
//# sourceMappingURL=add-medicine.module.chunk.js.map