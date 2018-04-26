webpackJsonp(["add-dosage.module"],{

/***/ "../../../../../src/app/theme/measurements/add-dosage/add-dosage-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDosageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_dosage_component__ = __webpack_require__("../../../../../src/app/theme/measurements/add-dosage/add-dosage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__add_dosage_component__["a" /* AddDosageComponent */],
        data: {
            title: 'Add Dosage',
            status: false
        }
    }
];
var AddDosageRoutingModule = (function () {
    function AddDosageRoutingModule() {
    }
    AddDosageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AddDosageRoutingModule);
    return AddDosageRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/measurements/add-dosage/add-dosage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-3\">\r\n\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <!-- Basic Inputs Validation start -->\r\n    <app-card [title]=\"'Add Dosage'\" [cardOptionBlock]=\"true\">\r\n      <form #dos=\"ngForm\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Dosage Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" #dosage=\"ngModel\" [(ngModel)]=\"Dosage.name\" id=\"name\" placeholder=\"\" name=\"add-dosage\"\r\n              required>\r\n            <!-- <div class=\"messages text-danger\">Dosage can't be blank</div> -->\r\n            <small [hidden]=\"dosage.valid || (dosage.pristine)\" class=\"text-danger \">\r\n              Dosage can't be blank\r\n            </small>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Dosage Symbol</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" #symbol=\"ngModel\" [(ngModel)]=\"Dosage.symbol\" id=\"symbol\" placeholder=\"\" name=\"symbol-dosage\"\r\n              required>\r\n            <!-- <div class=\"messages text-danger\">Dosage can't be blank</div> -->\r\n            <small [hidden]=\"symbol.valid || (symbol.pristine)\" class=\"text-danger \">\r\n              Dosage Symbol can't be blank\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4\"></label>\r\n          <div class=\"col-sm-8\">\r\n            <button type=\"submit\" [disabled]=\"!dos.form.valid\" (click)=\"validation()\" (click)=\"addDosageServices()\" class=\"btn btn-primary m-b-0\">Submit</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n<div id=\"list\" class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <app-card [title]=\"'Dosage List'\" [classHeader]=\"true\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <label class=\"dt-cust-search f-right\">\r\n              <div class=\"form-group\">\r\n                <label>Search: </label>\r\n                <input type='text' class=\"form-control input-sm m-l-10\" placeholder='Search Name' (keyup)='updateFilter($event)' />\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <ngx-datatable #table class='data-table' [scrollbarH]=\"true\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\" [rowHeight]=\"60\" [limit]=\"10\" [rows]='rowsFilter' (select)='onSelect($event)'>\r\n          <ngx-datatable-column name=\"Dosage Name\" sortable=\"false\" prop=\"UnitName\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Dosage Symbol\" sortable=\"false\" prop=\"UnitSymbol\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Update\" sortable=\"false\" prop=\"Id\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <button type=\"button\" class=\"btn btn-out-dashed btn-warning btn-square\" (click)=\"openMyModal(value);modalSmall.show()\">Edit</button>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Delete\" sortable=\"false\" prop=\"Id\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <button class=\"btn btn-out-dashed btn-danger btn-square\" (click)=\"deleteMeasurementServices(value)\">Delete</button>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--Update -->\r\n<app-modal-basic #modalSmall [dialogClass]=\"'modal-lg'\">\r\n  <div class=\"app-modal-header\">\r\n    <h4 class=\"modal-title\">Update Dosage</h4>\r\n    <button type=\"button\" class=\"close basic-close\" (click)=\"modalSmall.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n    <form #update=\"ngForm\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Dosage Value</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" #dosage=\"ngModel\" [(ngModel)]=\"Dosage2.name\" id=\"name\" placeholder=\"\" name=\"add-dosage\"\r\n            required>\r\n          <!-- <div class=\"messages text-danger\">Dosage can't be blank</div> -->\r\n          <small [hidden]=\"dosage.valid || (dosage.pristine)\" class=\"text-danger \">\r\n            Dosage can't be blank\r\n          </small>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Dosage Symbol</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" #symbol=\"ngModel\" [(ngModel)]=\"Dosage2.symbol\" id=\"symbol\" placeholder=\"\" name=\"symbol-dosage\"\r\n            required>\r\n          <!-- <div class=\"messages text-danger\">Dosage can't be blank</div> -->\r\n          <small [hidden]=\"symbol.valid || (symbol.pristine)\" class=\"text-danger \">\r\n            Dosage Symbol can't be blank\r\n          </small>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4\"></label>\r\n        <div class=\"col-sm-8\">\r\n          <button type=\"submit\" [disabled]=\"!update.form.valid\" class=\"btn btn-primary m-b-0\" (click)=\"updateDosage();modalSmall.hide()\">Update</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"app-modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalSmall.hide()\">Close</button>\r\n  </div>\r\n</app-modal-basic>"

/***/ }),

/***/ "../../../../../src/app/theme/measurements/add-dosage/add-dosage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/measurements/add-dosage/add-dosage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDosageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_MeasurementAndDosageSizesService__ = __webpack_require__("../../../../../src/app/theme/services/MeasurementAndDosageSizesService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddDosageComponent = (function () {
    function AddDosageComponent(_addMeasurementServices, _addDosageServices) {
        this._addMeasurementServices = _addMeasurementServices;
        this._addDosageServices = _addDosageServices;
        this.rowsBasic = [];
        this.fullScreenRow = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.Dosage = {};
        this.Dosagee = [];
        this.Dosage2 = {};
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];
        this.rows = [];
        this.expanded = {};
        this.rowsFilter = [];
        this.tempFilter = [];
        this.dosages_array = [];
        //services
        this.addDosage = {};
        this.dosage_id = 0;
        this.getDosages();
    }
    AddDosageComponent.prototype.ngOnInit = function () {
    };
    AddDosageComponent.prototype.getDosages = function () {
        var _this = this;
        this._addMeasurementServices.getDosage().subscribe(function (response) {
            if (response.code == 200) {
                _this.dosages_array = response.data;
                _this.tempFilter = _this.dosages_array;
                _this.rowsFilter = _this.dosages_array;
            }
        });
    }; // Get Measurements End
    AddDosageComponent.prototype.fetchBasicData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/basic.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    AddDosageComponent.prototype.fetchFullScreenData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/fullscreen.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    AddDosageComponent.prototype.fetchFilterData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    AddDosageComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.tempFilter.filter(function (d) {
            return d.UnitName.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rowsFilter = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    AddDosageComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    AddDosageComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            var rows = JSON.parse(req.response);
            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                var row = rows_1[_i];
                row.height = Math.floor(Math.random() * 80) + 50;
            }
            cb(rows);
        };
        req.send();
    };
    AddDosageComponent.prototype.getRowHeight = function (row) {
        return row.height;
    };
    AddDosageComponent.prototype.validation = function () {
    };
    AddDosageComponent.prototype.addDosageServices = function () {
        var _this = this;
        this._addDosageServices.addDosageAndSizeService(this.Dosage.name, this.Dosage.symbol).subscribe(function (data) {
            _this.dosages_array.push(data.data);
            _this.Dosage = {};
        });
    };
    //Delete Services
    AddDosageComponent.prototype.deleteMeasurementServices = function (i) {
        console.log(i);
        var self = this;
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: 'Are you sure?',
            text: 'You wont be able to revert',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value == true) {
                self._addMeasurementServices.deleteDosage(i).subscribe(function (response) {
                    var index_number = self.dosages_array.findIndex(function (x) { return x.Id == i; });
                    self.dosages_array.splice(index_number, 1);
                    self.rowsFilter = self.dosages_array;
                    self.tempFilter = self.dosages_array;
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Deleted!', 'Package has been deleted.', 'success');
                });
            }
            else {
            }
        }).catch(__WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.noop);
    };
    //edit function
    AddDosageComponent.prototype.editDosage = function (dosage) {
        this.Dosage2 = dosage;
        $('#showIt').show();
        console.log(dosage);
    };
    AddDosageComponent.prototype.openMyModal = function (Id) {
        this.dosage_id = Id;
        var obj = this.dosages_array.find(function (x) { return x.Id == Id; });
        this.Dosage2.name = obj.UnitName;
        this.Dosage2.symbol = obj.UnitSymbol;
    };
    AddDosageComponent.prototype.updateDosage = function () {
        var _this = this;
        var index_number = this.dosages_array.findIndex(function (x) { return x.Id == _this.dosage_id; });
        this.dosages_array[index_number].UnitName = this.Dosage2.name;
        this.dosages_array[index_number].UnitSymbol = this.Dosage2.symbol;
        this._addMeasurementServices.updateDosage(this.dosage_id, this.Dosage2.name, this.Dosage2.symbol).subscribe(function (response) { });
        this.rowsFilter = this.dosages_array;
        this.tempFilter = this.dosages_array;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"])
    ], AddDosageComponent.prototype, "table", void 0);
    AddDosageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-dosage',
            template: __webpack_require__("../../../../../src/app/theme/measurements/add-dosage/add-dosage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/measurements/add-dosage/add-dosage.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */], __WEBPACK_IMPORTED_MODULE_2__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]])
    ], AddDosageComponent);
    return AddDosageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/measurements/add-dosage/add-dosage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDosageModule", function() { return AddDosageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_dosage_component__ = __webpack_require__("../../../../../src/app/theme/measurements/add-dosage/add-dosage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_dosage_routing_module__ = __webpack_require__("../../../../../src/app/theme/measurements/add-dosage/add-dosage-routing.module.ts");
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








var AddDosageModule = (function () {
    function AddDosageModule() {
    }
    AddDosageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__add_dosage_routing_module__["a" /* AddDosageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__add_dosage_component__["a" /* AddDosageComponent */]]
        })
    ], AddDosageModule);
    return AddDosageModule;
}());



/***/ })

});
//# sourceMappingURL=add-dosage.module.chunk.js.map