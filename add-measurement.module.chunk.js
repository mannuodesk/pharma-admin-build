webpackJsonp(["add-measurement.module"],{

/***/ "../../../../../src/app/theme/measurements/add-measurement/add-measurement-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMeasurementRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_measurement_component__ = __webpack_require__("../../../../../src/app/theme/measurements/add-measurement/add-measurement.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__add_measurement_component__["a" /* AddMeasurementComponent */],
        data: {
            title: 'Add Measurement',
            status: false
        }
    }
];
var AddMeasurementRoutingModule = (function () {
    function AddMeasurementRoutingModule() {
    }
    AddMeasurementRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AddMeasurementRoutingModule);
    return AddMeasurementRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/measurements/add-measurement/add-measurement.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-3\">\r\n\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <!-- Basic Inputs Validation start -->\r\n    <app-card [title]=\"'Add Packaging'\" [cardOptionBlock]=\"true\">\r\n\r\n      <form #f=\"ngForm\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Packaging Name</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"packaging.name\" #addPackaging=\"ngModel\" name=\"packaging-name\" id=\"name\"\r\n              placeholder=\"\" required>\r\n            <!-- <div class=\"messages text-danger\">Packaging Name can't be blank</div> -->\r\n            <small [hidden]=\"addPackaging.valid || (addPackaging.pristine)\" class=\"text-danger \">\r\n              Packaging Name can't be blank\r\n            </small>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">Packaging Symbol</label>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"packaging.symbol\" #addSymbol=\"ngModel\" name=\"packaging-symbol\" id=\"name\"\r\n              placeholder=\"\" required>\r\n            <!-- <div class=\"messages text-danger\">Packaging Name can't be blank</div> -->\r\n            <small [hidden]=\"addSymbol.valid || (addSymbol.pristine)\" class=\"text-danger \">\r\n              Packaging Symbol can't be blank\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4\"></label>\r\n          <div class=\"col-sm-8\">\r\n            <button [disabled]=\"!f.form.valid\" type=\"submit\" (click)=\"onclick()\" (click)=\"loadServices()\" class=\"btn btn-primary m-b-0\">Submit</button>\r\n            <!-- {{addMeasurement | json}} -->\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n\r\n    </app-card>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"list\" class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <app-card [title]=\"'Packaging List'\" [classHeader]=\"true\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <label class=\"dt-cust-search f-right\">\r\n              <div class=\"form-group\">\r\n                <label>Search: </label>\r\n                <input type='text' class=\"form-control input-sm m-l-10\" placeholder='Search Name' (keyup)='updateFilter($event)' />\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <ngx-datatable #table class='data-table' [scrollbarH]=\"true\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\" [rowHeight]=\"60\" [limit]=\"10\" [rows]='rowsFilter' (select)='onSelect($event)'>\r\n          <ngx-datatable-column name=\"Packaging Name\" sortable=\"false\" prop=\"MeasurementName\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Packaging Symbol\" sortable=\"false\" prop=\"MeasurementSymbol\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Update\" sortable=\"false\" prop=\"Id\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <button type=\"button\" class=\"btn btn-out-dashed btn-warning btn-square\" (click)=\"openMyModal(value);modalSmall.show()\">Edit</button>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Delete\" sortable=\"false\" prop=\"Id\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <button class=\"btn btn-out-dashed btn-danger btn-square\" (click)=\"deleteMeasurementServices(value)\">Delete</button>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-modal-basic #modalSmall [dialogClass]=\"'modal-lg'\">\r\n  <div class=\"app-modal-header\">\r\n    <h4 class=\"modal-title\">Update Packaging</h4>\r\n    <button type=\"button\" class=\"close basic-close\" (click)=\"modalSmall.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n    <form #MeasurementFrom=\"ngForm\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Packaging Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"packaging2.name\" #addPackaging=\"ngModel\" name=\"packaging-name\" id=\"name\"\r\n            placeholder=\"\" required>\r\n          <!-- <div class=\"messages text-danger\">Packaging Name can't be blank</div> -->\r\n          <small [hidden]=\"addPackaging.valid || (addPackaging.pristine)\" class=\"text-danger \">\r\n            Packaging Name can't be blank\r\n          </small>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4 col-form-label\">Packaging Symbol</label>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"packaging2.symbol\" #addSymbol=\"ngModel\" name=\"packaging-symbol\" id=\"name\"\r\n            placeholder=\"\" required>\r\n          <!-- <div class=\"messages text-danger\">Packaging Name can't be blank</div> -->\r\n          <small [hidden]=\"addSymbol.valid || (addSymbol.pristine)\" class=\"text-danger \">\r\n            Packaging Symbol can't be blank\r\n          </small>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-4\"></label>\r\n        <div class=\"col-sm-8\">\r\n          <button [disabled]=\"!MeasurementFrom.form.valid\" type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"updateMeasurement();modalSmall.hide()\">Update</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"app-modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalSmall.hide()\">Close</button>\r\n  </div>\r\n</app-modal-basic>"

/***/ }),

/***/ "../../../../../src/app/theme/measurements/add-measurement/add-measurement.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/measurements/add-measurement/add-measurement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMeasurementComponent; });
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




var AddMeasurementComponent = (function () {
    function AddMeasurementComponent(_addMeasurementServices) {
        this._addMeasurementServices = _addMeasurementServices;
        this.rowsBasic = [];
        this.fullScreenRow = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.packaging = {};
        this.measurement = [];
        this.packaging2 = {};
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];
        this.rows = [];
        this.expanded = {};
        this.rowsFilter = [];
        this.tempFilter = [];
        this.measurements_array = [];
        this.measurement_id = "";
        //services
        this.addMeasurement = {};
        this.getMeasurements();
    }
    AddMeasurementComponent.prototype.ngOnInit = function () {
    };
    AddMeasurementComponent.prototype.getMeasurements = function () {
        var _this = this;
        this._addMeasurementServices.getMeasurements().subscribe(function (response) {
            if (response.code == 200) {
                _this.measurements_array = response.data;
                _this.tempFilter = _this.measurements_array;
                _this.rowsFilter = _this.measurements_array;
            }
        });
    }; // Get Measurements End
    AddMeasurementComponent.prototype.openMyModal = function (Id) {
        console.log(Id);
        var obj = this.measurements_array.find(function (x) { return x.Id == Id; });
        this.measurement_id = Id;
        this.packaging2.name = obj.MeasurementName;
        this.packaging2.symbol = obj.MeasurementSymbol;
    };
    AddMeasurementComponent.prototype.fetchBasicData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/basic.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    AddMeasurementComponent.prototype.fetchFullScreenData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/fullscreen.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    AddMeasurementComponent.prototype.fetchFilterData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    AddMeasurementComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.tempFilter.filter(function (d) {
            return d.MeasurementName.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rowsFilter = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    AddMeasurementComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    AddMeasurementComponent.prototype.fetch = function (cb) {
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
    AddMeasurementComponent.prototype.getRowHeight = function (row) {
        return row.height;
    };
    AddMeasurementComponent.prototype.onclick = function () {
        // alert("Hi!!");
    };
    AddMeasurementComponent.prototype.loadServices = function () {
        var _this = this;
        this._addMeasurementServices.addMeasurementService(this.packaging.name, this.packaging.symbol).subscribe(function (data) {
            _this.addMeasurement = data;
            _this.measurements_array.push(data.data);
            _this.packaging = {};
        });
    };
    AddMeasurementComponent.prototype.updateMeasurement = function () {
        var _this = this;
        console.log("Update");
        var index_number = this.measurements_array.findIndex(function (x) { return x.Id == _this.measurement_id; });
        this.measurements_array[index_number].MeasurementName = this.packaging2.name;
        this.measurements_array[index_number].MeasurementSymbol = this.packaging2.symbol;
        this._addMeasurementServices.updateMeasurement(this.measurement_id, this.packaging2.name, this.packaging2.symbol).subscribe(function (response) { });
    };
    //Delete Services
    AddMeasurementComponent.prototype.deleteMeasurementServices = function (i) {
        // this.measurement.splice(i, 1);
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
                self._addMeasurementServices.deleteMeasurement(i).subscribe(function (response) {
                    if (response.code == 200) {
                        var index_number = self.measurements_array.findIndex(function (x) { return x.Id == i; });
                        self.measurements_array.splice(index_number, 1);
                        self.rowsFilter = self.measurements_array;
                        self.tempFilter = self.measurements_array;
                        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Deleted!', 'Package has been deleted.', 'success');
                    }
                });
            }
            else {
                // alert('No deletion');
            }
        }).catch(__WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.noop);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"])
    ], AddMeasurementComponent.prototype, "table", void 0);
    AddMeasurementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-measurement',
            template: __webpack_require__("../../../../../src/app/theme/measurements/add-measurement/add-measurement.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/measurements/add-measurement/add-measurement.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]])
    ], AddMeasurementComponent);
    return AddMeasurementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/measurements/add-measurement/add-measurement.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMeasurementModule", function() { return AddMeasurementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_measurement_component__ = __webpack_require__("../../../../../src/app/theme/measurements/add-measurement/add-measurement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_measurement_routing_module__ = __webpack_require__("../../../../../src/app/theme/measurements/add-measurement/add-measurement-routing.module.ts");
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








var AddMeasurementModule = (function () {
    function AddMeasurementModule() {
    }
    AddMeasurementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__add_measurement_routing_module__["a" /* AddMeasurementRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__add_measurement_component__["a" /* AddMeasurementComponent */]]
        })
    ], AddMeasurementModule);
    return AddMeasurementModule;
}());



/***/ })

});
//# sourceMappingURL=add-measurement.module.chunk.js.map