webpackJsonp(["dosage-size.module"],{

/***/ "../../../../../src/app/theme/measurements/dosage-size/dosage-size-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DosageSizeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dosage_size_component__ = __webpack_require__("../../../../../src/app/theme/measurements/dosage-size/dosage-size.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dosage_size_component__["a" /* DosageSizeComponent */],
        data: {
            title: 'Dosage Size',
            status: false
        }
    }
];
var DosageSizeRoutingModule = (function () {
    function DosageSizeRoutingModule() {
    }
    DosageSizeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], DosageSizeRoutingModule);
    return DosageSizeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/measurements/dosage-size/dosage-size.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n\n    </div>\n    <div class=\"col-sm-6\">\n      <!-- Basic Inputs Validation start -->\n      <app-card [title]=\"'Select Dosage'\" [cardOptionBlock]=\"true\">\n\n        <form #f=\"ngForm\">\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\">Dosage Name</label>\n            <div class=\"col-sm-8\">\n              <select name=\"select\" [(ngModel)]=\"dosage_id\" (change)=\"getDosageValues()\" class=\"form-control form-control-default\">\n                <option *ngFor=\"let dosage of dosages_array\" value=\"{{dosage.Id}}\">{{dosage.UnitName}}</option>\n              </select>\n            </div>\n          </div>\n          <div id=\"categories-fetcher\" class=\"form-group row fetcher\">\n            <div class=\"messages text-success\" id=\"fetching_categories_message\">Fetching Dosage Values ...</div>\n          </div>\n        </form>\n      </app-card>\n    </div>\n  </div>\n</div>\n<div id=\"second-div\" style=\"display:none\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n\n    </div>\n    <div class=\"col-sm-6\">\n      <!-- Basic Inputs Validation start -->\n      <app-card [title]=\"'Add Dosage Value'\" [cardOptionBlock]=\"true\">\n\n        <form #f=\"ngForm\">\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\">Dosage Value</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"DosageSizee.name\" id=\"name\" placeholder=\"\" #name=\"ngModel\" name=\"dosage-value-name\"\n                required>\n              <small id=\"dosage-value-error\" class=\"text-danger\">\n                Dosage Values can't be blank\n              </small>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4\"></label>\n\n          </div>\n        </form>\n        <div class=\"col-sm-8\">\n          <button type=\"submit\" (click)=\"addDosageSizeServices()\" class=\"btn btn-primary m-b-0\">Submit</button>\n        </div>\n\n      </app-card>\n    </div>\n  </div>\n  <div id=\"list\" class=\"page-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <app-card [title]=\"'Dosage Values List'\" [classHeader]=\"true\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <label class=\"dt-cust-search f-right\">\n                <div class=\"form-group\">\n                  <label>Search: </label>\n                  <input type='text' class=\"form-control input-sm m-l-10\" placeholder='Search Name' (keyup)='updateFilter($event)' />\n                </div>\n              </label>\n            </div>\n          </div>\n          <ngx-datatable #table class='data-table' [scrollbarH]=\"true\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\n            [footerHeight]=\"50\" [rowHeight]=\"60\" [limit]=\"10\" [rows]='rowsFilter' (select)='onSelect($event)'>\n            <ngx-datatable-column name=\"Dosage Name\" sortable=\"false\" prop=\"Value\">\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                {{value}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Update\" sortable=\"false\" prop=\"Id\">\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                <button type=\"button\" class=\"btn btn-out-dashed btn-warning btn-square\" (click)=\"openMyModal(value);modalSmall.show()\">Edit</button>\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Delete\" sortable=\"false\" prop=\"Id\">\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                <button class=\"btn btn-out-dashed btn-danger btn-square\" (click)=\"deleteDosageSizeServices(value)\">Delete</button>\n              </ng-template>\n            </ngx-datatable-column>\n          </ngx-datatable>\n\n        </app-card>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Update -->\n<app-modal-basic #modalSmall [dialogClass]=\"'modal-lg'\">\n  <div class=\"app-modal-header\">\n    <h4 class=\"modal-title\">Update Dosage Values</h4>\n    <button type=\"button\" class=\"close basic-close\" (click)=\"modalSmall.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form #update=\"ngForm\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label\">Dosage Value</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" #dosage=\"ngModel\" [(ngModel)]=\"DosageSizee2.name\" id=\"name\" placeholder=\"\" name=\"add-dosage\"\n            required>\n          <!-- <div class=\"messages text-danger\">Dosage can't be blank</div> -->\n          <small id = \"update-dosage-value-error\" class=\"text-danger \">\n            Dosage Value can't be blank\n          </small>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4\"></label>\n        <div class=\"col-sm-8\">\n          <button type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"updateDosage();modalSmall.hide()\">Update</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\">\n    <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalSmall.hide()\">Close</button>\n  </div>\n</app-modal-basic>"

/***/ }),

/***/ "../../../../../src/app/theme/measurements/dosage-size/dosage-size.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fetcher {\n  padding-left: 5%;\n  display: none; }\n\n.text-danger {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/measurements/dosage-size/dosage-size.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DosageSizeComponent; });
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




var DosageSizeComponent = (function () {
    function DosageSizeComponent(_dosageSizeServices) {
        this._dosageSizeServices = _dosageSizeServices;
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
        this.expanded = {};
        this.DosageSizee = {};
        this.DosageSizee2 = {};
        this.rowsFilter = [];
        this.tempFilter = [];
        this.dosages_array = [];
        this.dosage_id = [];
        this.dosages_values_array = [];
        //services
        this.addDosage = {};
        this.dosage_value_id = 0;
        this.getDosages();
    }
    DosageSizeComponent.prototype.ngOnInit = function () {
    };
    DosageSizeComponent.prototype.fetchBasicData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/basic.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    DosageSizeComponent.prototype.getDosages = function () {
        var _this = this;
        this._dosageSizeServices.getDosage().subscribe(function (response) {
            if (response.code == 200) {
                _this.dosages_array = response.data;
            }
        });
    }; // Get Dosages End
    DosageSizeComponent.prototype.getDosageValues = function () {
        var _this = this;
        $("#categories-fetcher").show();
        this._dosageSizeServices.getDosageSizes(this.dosage_id).subscribe(function (response) {
            if (response.code == 200) {
                console.log(response.data);
                $("#categories-fetcher").hide();
                $("#second-div").show();
                _this.dosages_values_array = response.data;
                _this.tempFilter = _this.dosages_values_array;
                _this.rowsFilter = _this.dosages_values_array;
            }
        });
    }; // Get Dosage Values End
    DosageSizeComponent.prototype.fetchFullScreenData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/fullscreen.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    DosageSizeComponent.prototype.fetchFilterData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    DosageSizeComponent.prototype.updateFilter = function (event) {
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
    DosageSizeComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    DosageSizeComponent.prototype.fetch = function (cb) {
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
    DosageSizeComponent.prototype.getRowHeight = function (row) {
        return row.height;
    };
    DosageSizeComponent.prototype.chech = function () {
        alert("Hello!!!");
    };
    DosageSizeComponent.prototype.addDosageSizeServices = function () {
        var _this = this;
        $('.text-danger').hide();
        if (this.DosageSizee.name == "" || this.DosageSizee.name === undefined || this.DosageSizee.name.trim() == "") {
            $('#dosage-value-error').show();
            return;
        }
        this._dosageSizeServices.addDosageValues(this.dosage_id, this.DosageSizee.name).subscribe(function (data) {
            // this.addMeasurement=data;
            console.log(data);
            _this.dosages_values_array.push(data.data);
            _this.DosageSizee = {};
        });
    };
    //delete Services
    DosageSizeComponent.prototype.deleteDosageSizeServices = function (i) {
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
                self._dosageSizeServices.deleteDosageValue(i).subscribe(function (response) {
                    var index_number = self.dosages_values_array.findIndex(function (x) { return x.Id == i; });
                    self.dosages_values_array.splice(index_number, 1);
                    self.rowsFilter = self.dosages_values_array;
                    self.tempFilter = self.dosages_values_array;
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Deleted!', 'Package has been deleted.', 'success');
                });
            }
            else {
            }
        }).catch(__WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.noop);
    };
    DosageSizeComponent.prototype.openMyModal = function (Id) {
        this.dosage_value_id = Id;
        var obj = this.dosages_values_array.find(function (x) { return x.Id == Id; });
        this.DosageSizee2.name = obj.Value;
    };
    DosageSizeComponent.prototype.updateDosage = function () {
        var _this = this;
        $('.text-danger').hide();
        if (this.DosageSizee2.name == "" || this.DosageSizee2.name === undefined || this.DosageSizee2.name.trim() == "") {
            $('#update-dosage-value-error').show();
            return;
        }
        var index_number = this.dosages_values_array.findIndex(function (x) { return x.Id == _this.dosage_value_id; });
        this.dosages_values_array[index_number].Value = this.DosageSizee2.name;
        this._dosageSizeServices.updateDosageValue(this.dosage_value_id, this.DosageSizee2.name).subscribe(function (response) {
            console.log(response);
        });
        this.rowsFilter = this.dosages_values_array;
        this.tempFilter = this.dosages_values_array;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"])
    ], DosageSizeComponent.prototype, "table", void 0);
    DosageSizeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-dosage',
            template: __webpack_require__("../../../../../src/app/theme/measurements/dosage-size/dosage-size.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/measurements/dosage-size/dosage-size.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */]])
    ], DosageSizeComponent);
    return DosageSizeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/measurements/dosage-size/dosage-size.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DosageSizeModule", function() { return DosageSizeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dosage_size_component__ = __webpack_require__("../../../../../src/app/theme/measurements/dosage-size/dosage-size.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dosage_size_routing_module__ = __webpack_require__("../../../../../src/app/theme/measurements/dosage-size/dosage-size-routing.module.ts");
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








var DosageSizeModule = (function () {
    function DosageSizeModule() {
    }
    DosageSizeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__dosage_size_routing_module__["a" /* DosageSizeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dosage_size_component__["a" /* DosageSizeComponent */]]
        })
    ], DosageSizeModule);
    return DosageSizeModule;
}());



/***/ })

});
//# sourceMappingURL=dosage-size.module.chunk.js.map