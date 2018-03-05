webpackJsonp(["add-manufacturing.module"],{

/***/ "../../../../../src/app/theme/measurements/add-manufacturing/add-manufacturing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-6\">\n    <!-- Basic Inputs Validation start -->\n    <app-card [title]=\"'Add Manufacture'\" [cardOptionBlock]=\"true\">\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label\">Manufacture Name</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"manufacture_name\" id=\"name\" placeholder=\"\" required>\n          <!-- <div id=\"manufacture-name-error\" class=\"messages text-danger\">Manufacture Name can't be blank</div> -->\n          <small id=\"error-message\" style=\"display:none\" class=\"text-danger \">\n             Name can't be blank\n          </small>\n        </div>\n      </div>\n     \n      \n      <div class=\"form-group row\">\n        <label class=\"col-sm-4\"></label>\n        <div class=\"col-sm-8\">\n          <button type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"addManufacture()\">Submit</button>\n        </div>\n      </div>\n\n    </app-card>\n</div>\n\n<div id=\"list\" class=\"page-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <app-card [title]=\"'Manufacturing List'\" [classHeader]=\"true\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <label class=\"dt-cust-search f-right\">\n              <div class=\"form-group\">\n                <label>Search: </label>\n                <input type='text' class=\"form-control input-sm m-l-10\" placeholder='Search Name' (keyup)='updateFilter($event)' />\n              </div>\n            </label>\n          </div>\n        </div>\n        <ngx-datatable #manufacturingTable class='data-table' [scrollbarH]=\"true\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\n          [footerHeight]=\"50\" [rowHeight]=\"50\" [limit]=\"10\" [rows]='rowsFilter' (activate)=\"onActivate($event)\"\n          (select)='onSelect($event)'>\n          <ngx-datatable-column name=\"Name\" sortable=\"false\" prop=\"Name\">\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              {{value}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Update\" sortable=\"false\" prop=\"Id\">\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              <button type=\"button\" class=\"btn btn-out-dashed btn-warning btn-square\" (click)=\"view(value);modalSmall.show()\">Edit</button>\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Delete\" sortable=\"false\" prop=\"Id\">\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              <button class=\"btn btn-out-dashed btn-danger btn-square\" (click)=\"Deletion(value)\">Delete</button>\n            </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>\n\n      </app-card>\n    </div>\n  </div>\n</div>\n\n\n\n<app-modal-basic #modalSmall [dialogClass]=\"'modal-lg'\">\n  <div class=\"app-modal-header\">\n    <h4 class=\"modal-title\">Update {{type}}</h4>\n    <button type=\"button\" class=\"close basic-close\" (click)=\"modalSmall.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form #EditForm=\"ngForm\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label\">{{type}} Name</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"manfactureUpdate.Name\" name=\"packaging-name\" id=\"name\"\n            placeholder=\"\" required>\n          <!-- <div class=\"messages text-danger\">Packaging Name can't be blank</div> -->\n          <small id=\"error-message\" style=\"display:none\" class=\"text-danger \">\n            {{type}} Name can't be blank\n          </small>\n        </div>\n      </div>\n      \n      <div class=\"form-group row\">\n        <label class=\"col-sm-4\"></label>\n        <div class=\"col-sm-8\">\n          <button [disabled]=\"!EditForm.form.valid\" type=\"submit\" (click)=\"update()\" class=\"btn btn-primary m-b-0\">Update</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\">\n    <button id=\"close-btn\" type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalSmall.hide()\">Close</button>\n  </div>\n</app-modal-basic>"

/***/ }),

/***/ "../../../../../src/app/theme/measurements/add-manufacturing/add-manufacturing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#seo-card1 canvas,\n#seo-card2 canvas {\n  height: 150px !important;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px; }\n  @media only screen and (max-width: 768px) {\n    #seo-card1 canvas,\n    #seo-card2 canvas {\n      padding-bottom: 30px; } }\n\n.text-danger {\n  display: none; }\n\n.fetcher {\n  padding-left: 5%;\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/measurements/add-manufacturing/add-manufacturing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddManufacturingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_MeasurementAndDosageSizesService__ = __webpack_require__("../../../../../src/app/theme/services/MeasurementAndDosageSizesService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddManufacturingComponent = (function () {
    function AddManufacturingComponent(_measurementAndDosageSizesService) {
        this._measurementAndDosageSizesService = _measurementAndDosageSizesService;
        this.manfactureUpdate = {};
        this.rowsFilter = [];
        this.tempFilter = [];
        this.manuFacturingArray = [];
    }
    AddManufacturingComponent.prototype.ngOnInit = function () {
        this.getManufacturing();
    };
    AddManufacturingComponent.prototype.addManufacture = function () {
        var _this = this;
        if (this.manufacture_name != null && this.manufacture_name != undefined && this.manufacture_name != '') {
            var body = {
                Name: this.manufacture_name
            };
            this._measurementAndDosageSizesService.addManufacturing(body).subscribe(function (response) {
                console.log(response);
                if (response.code == 200) {
                    _this.manuFacturingArray.push(response.data);
                    _this.rowsFilter = _this.manuFacturingArray;
                    _this.tempFilter = _this.manuFacturingArray;
                }
                else {
                    console.log('Error adding Manufacturer Name.');
                }
            }, function (err) {
                console.log('Error adding Manufacturer Name:', err);
            });
        }
    };
    AddManufacturingComponent.prototype.getManufacturing = function () {
        var _this = this;
        this._measurementAndDosageSizesService.getAllManufactures().subscribe(function (response) {
            if (response.code == 200) {
                _this.manuFacturingArray = response.data;
                _this.rowsFilter = _this.manuFacturingArray;
                _this.tempFilter = _this.manuFacturingArray;
                // console.log(this.manuFacturingArray);
            }
        });
    };
    AddManufacturingComponent.prototype.view = function (id) {
        var element = this.manuFacturingArray.find(function (abc) { return abc.Id == id; });
        this.manfactureUpdate = element;
    };
    AddManufacturingComponent.prototype.update = function () {
        var body = {
            Id: this.manfactureUpdate.Id,
            Name: this.manfactureUpdate.Name
        };
        this._measurementAndDosageSizesService.updateManufacture(body).subscribe(function (response) {
            console.log(response);
        });
    };
    AddManufacturingComponent.prototype.Deletion = function (id) {
        var self = this;
        //
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Are you sure?',
            text: 'You wont be able to revert',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value == true) {
                //Manfacture Delete
                self._measurementAndDosageSizesService.DeleteManufacture(id).subscribe(function (response) {
                    var index_number = self.manuFacturingArray.findIndex(function (x) { return x.Id == id; });
                    console.log(index_number);
                    self.manuFacturingArray.splice(index_number, 1);
                    self.rowsFilter = self.manuFacturingArray;
                    self.tempFilter = self.manuFacturingArray;
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Deleted!', 'Manfacture has been deleted.', 'success');
                });
            }
            else {
                // alert('No deletion');
            }
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    AddManufacturingComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.tempFilter.filter(function (d) {
            return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rowsFilter = temp;
        // Whenever the filter changes, always go back to the first page
        this.manufacturingTable.offset = 0;
    };
    AddManufacturingComponent.prototype.onActivate = function (event) { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"])
    ], AddManufacturingComponent.prototype, "manufacturingTable", void 0);
    AddManufacturingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-manufacturing',
            template: __webpack_require__("../../../../../src/app/theme/measurements/add-manufacturing/add-manufacturing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/measurements/add-manufacturing/add-manufacturing.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]])
    ], AddManufacturingComponent);
    return AddManufacturingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/measurements/add-manufacturing/add-manufacturing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddManufacturingModule", function() { return AddManufacturingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_manufacturing_routing_module__ = __webpack_require__("../../../../../src/app/theme/measurements/add-manufacturing/add-manufacturing.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_manufacturing_component__ = __webpack_require__("../../../../../src/app/theme/measurements/add-manufacturing/add-manufacturing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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








var AddManufacturingModule = (function () {
    function AddManufacturingModule() {
    }
    AddManufacturingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__add_manufacturing_routing_module__["a" /* AddManufacturingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__add_manufacturing_component__["a" /* AddManufacturingComponent */]]
        })
    ], AddManufacturingModule);
    return AddManufacturingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/measurements/add-manufacturing/add-manufacturing.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddManufacturingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_manufacturing_component__ = __webpack_require__("../../../../../src/app/theme/measurements/add-manufacturing/add-manufacturing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__add_manufacturing_component__["a" /* AddManufacturingComponent */],
        data: {
            title: 'Add Manufacture',
            status: false
        }
    }
];
var AddManufacturingRoutingModule = (function () {
    function AddManufacturingRoutingModule() {
    }
    AddManufacturingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */]]
        })
    ], AddManufacturingRoutingModule);
    return AddManufacturingRoutingModule;
}());



/***/ })

});
//# sourceMappingURL=add-manufacturing.module.chunk.js.map