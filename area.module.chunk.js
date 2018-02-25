webpackJsonp(["area.module"],{

/***/ "../../../../../src/app/theme/location/area/area-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_component__ = __webpack_require__("../../../../../src/app/theme/location/area/area.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__area_component__["a" /* AreaComponent */],
        data: {
            title: 'Category List',
            status: false
        }
    }
];
var AreaRoutingModule = (function () {
    function AreaRoutingModule() {
    }
    AreaRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AreaRoutingModule);
    return AreaRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/location/area/area.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n\n    </div>\n    <div class=\"col-sm-6\">\n      <!-- Basic Inputs Validation start -->\n      <app-card [title]=\"'Select City'\" [cardOptionBlock]=\"true\">\n\n        <form #f=\"ngForm\">\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\">City</label>\n            <div class=\"col-sm-8\">\n              <select name=\"select\" [(ngModel)]=\"city_id\" (change)=\"getAreas()\" class=\"form-control form-control-default\">\n                <option *ngFor=\"let city of cities_array\" value=\"{{city.Id}}\">{{city.Name}}</option>\n              </select>\n            </div>\n          </div>\n          <div id=\"categories-fetcher\" class=\"form-group row fetcher\">\n            <div class=\"messages text-success\" id=\"fetching_categories_message\">Fetching Areas ...</div>\n          </div>\n        </form>\n      </app-card>\n    </div>\n  </div>\n</div>\n\n<div id=\"second-div\" style=\"display:none\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n\n    </div>\n    <div class=\"col-sm-6\">\n      <!-- Basic Inputs Validation start -->\n      <app-card [title]=\"'Add Area'\" [cardOptionBlock]=\"true\">\n\n        <form #f=\"ngForm\">\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\">Area Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"packaging.name\" #addPackaging=\"ngModel\" name=\"packaging-name\" id=\"name\"\n                placeholder=\"\" required>\n              <!-- <div class=\"messages text-danger\">Packaging Name can't be blank</div> -->\n              <small [hidden]=\"addPackaging.valid || (addPackaging.pristine)\" class=\"text-danger \">\n                Area Name can't be blank\n              </small>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4\"></label>\n            <div class=\"col-sm-8\">\n              <button [disabled]=\"!f.form.valid\" type=\"submit\" (click)=\"loadServices()\" class=\"btn btn-primary m-b-0\">Submit</button>\n\n            </div>\n          </div>\n        </form>\n\n\n      </app-card>\n    </div>\n  </div>\n  <div id=\"list\" class=\"page-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <app-card [title]=\"'Areas List'\" [classHeader]=\"true\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <label class=\"dt-cust-search f-right\">\n                <div class=\"form-group\">\n                  <label>Search: </label>\n                  <input type='text' class=\"form-control input-sm m-l-10\" placeholder='Search Name' (keyup)='updateFilter($event)' />\n                </div>\n              </label>\n            </div>\n          </div>\n          <ngx-datatable #table class='data-table' [scrollbarH]=\"true\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\n            [footerHeight]=\"50\" [rowHeight]=\"60\" [limit]=\"10\" [rows]='rowsFilter' (select)='onSelect($event)'>\n            <ngx-datatable-column name=\"Area Name\" sortable=\"false\" prop=\"Name\">\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                {{value}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Update\" sortable=\"false\" prop=\"Id\">\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                <button type=\"button\" class=\"btn btn-out-dashed btn-warning btn-square\" (click)=\"openMyModal(value);modalSmall.show()\">Edit</button>\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Delete\" sortable=\"false\" prop=\"Id\">\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                <button class=\"btn btn-out-dashed btn-danger btn-square\" (click)=\"deleteAreaServices(value)\">Delete</button>\n              </ng-template>\n            </ngx-datatable-column>\n          </ngx-datatable>\n\n        </app-card>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-modal-basic #modalSmall [dialogClass]=\"'modal-lg'\">\n  <div class=\"app-modal-header\">\n    <h4 class=\"modal-title\">Update Area</h4>\n    <button type=\"button\" class=\"close basic-close\" (click)=\"modalSmall.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form #AreaFrom=\"ngForm\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label\">Area Name</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"packaging2.name\" #addPackaging=\"ngModel\" name=\"packaging-name\" id=\"name\"\n            placeholder=\"\" required>\n          <!-- <div class=\"messages text-danger\">Packaging Name can't be blank</div> -->\n          <small [hidden]=\"addPackaging.valid || (addPackaging.pristine)\" class=\"text-danger \">\n            Area Name can't be blank\n          </small>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4\"></label>\n        <div class=\"col-sm-8\">\n          <button [disabled]=\"!AreaFrom.form.valid\" type=\"submit\" class=\"btn btn-primary m-b-0\" (click)=\"updateArea();modalSmall.hide()\">Update</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\">\n    <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalSmall.hide()\">Close</button>\n  </div>\n</app-modal-basic>"

/***/ }),

/***/ "../../../../../src/app/theme/location/area/area.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fetcher {\n  padding-left: 5%;\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/location/area/area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_MeasurementAndDosageSizesService__ = __webpack_require__("../../../../../src/app/theme/services/MeasurementAndDosageSizesService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AddAreaService__ = __webpack_require__("../../../../../src/app/theme/services/AddAreaService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_GetChemistDataService__ = __webpack_require__("../../../../../src/app/theme/services/GetChemistDataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AreaComponent = (function () {
    function AreaComponent(_addMeasurementServices, _addAreaService, _getChemistDataService) {
        this._addMeasurementServices = _addMeasurementServices;
        this._addAreaService = _addAreaService;
        this._getChemistDataService = _getChemistDataService;
        this.rowsBasic = [];
        this.fullScreenRow = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.packaging = {};
        this.area = [];
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
        this.areas_array = [];
        this.cities_array = [];
        this.city_id = 0;
        this.AreaId = 0;
        //services
        this.addArea = {};
        this.getCities();
    }
    AreaComponent.prototype.ngOnInit = function () {
    };
    AreaComponent.prototype.getCities = function () {
        var _this = this;
        this._getChemistDataService.getAllCitiesService().subscribe(function (response) {
            if (response.code == 200) {
                console.log(response.data);
                _this.cities_array = response.data;
                _this.tempFilter = _this.cities_array;
                _this.rowsFilter = _this.cities_array;
            }
        });
    }; // Get cities End
    AreaComponent.prototype.getAreas = function () {
        var _this = this;
        $("#categories-fetcher").show();
        this._addAreaService.getAreaName(this.city_id).subscribe(function (response) {
            if (response.code == 200) {
                console.log(response.data);
                $("#categories-fetcher").hide();
                $("#second-div").show();
                _this.areas_array = response.data;
                _this.tempFilter = _this.areas_array;
                _this.rowsFilter = _this.areas_array;
            }
        });
    }; // Get Areas End
    AreaComponent.prototype.openMyModal = function (Id) {
        this.AreaId = Id;
        console.log(Id);
        var obj = this.areas_array.find(function (x) { return x.Id == Id; });
        this.packaging2.name = obj.Name;
    };
    AreaComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.tempFilter.filter(function (d) {
            return d.AreaName.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rowsFilter = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    AreaComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    AreaComponent.prototype.getRowHeight = function (row) {
        return row.height;
    };
    AreaComponent.prototype.loadServices = function () {
        var _this = this;
        console.log(this.packaging.name);
        this._addAreaService.addArea(this.city_id, this.packaging.name).subscribe(function (data) {
            _this.addArea = data.data;
            _this.areas_array.push(_this.addArea);
            _this.packaging = {};
        });
    };
    //Delete Services
    //Delete Services
    AreaComponent.prototype.deleteAreaServices = function (i) {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
            title: 'Are you sure?',
            text: 'You wont be able to revert',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value == true) {
                var index_number = self.areas_array.findIndex(function (x) { return x.Id == i; });
                self.areas_array.splice(index_number, 1);
                self.rowsFilter = self.areas_array;
                self.tempFilter = self.areas_array;
                self._addAreaService.deleteArea(i).subscribe(function (response) {
                    __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Deleted!', 'Package has been deleted.', 'success');
                });
            }
            else {
                // alert('No deletion');
            }
        }).catch(__WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.noop);
    };
    AreaComponent.prototype.updateArea = function () {
        for (var i = 0; i < this.areas_array.length; i++) {
            if (this.areas_array[i].Id == this.AreaId) {
                this.areas_array[i].Name = this.packaging2.name;
            }
        }
        this.tempFilter = this.areas_array;
        this.rowsFilter = this.areas_array;
        this._addAreaService.updateArea(this.AreaId, this.packaging2.name).subscribe(function (response) {
            console.log(response);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"])
    ], AreaComponent.prototype, "table", void 0);
    AreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-area',
            template: __webpack_require__("../../../../../src/app/theme/location/area/area.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/location/area/area.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */], __WEBPACK_IMPORTED_MODULE_3__services_AddAreaService__["a" /* AddAreaService */], __WEBPACK_IMPORTED_MODULE_4__services_GetChemistDataService__["a" /* GetChemistDataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_MeasurementAndDosageSizesService__["a" /* MeasurementAndDosageSizesService */],
            __WEBPACK_IMPORTED_MODULE_3__services_AddAreaService__["a" /* AddAreaService */],
            __WEBPACK_IMPORTED_MODULE_4__services_GetChemistDataService__["a" /* GetChemistDataService */]])
    ], AreaComponent);
    return AreaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/location/area/area.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaModule", function() { return AreaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_component__ = __webpack_require__("../../../../../src/app/theme/location/area/area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_routing_module__ = __webpack_require__("../../../../../src/app/theme/location/area/area-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AreaModule = (function () {
    function AreaModule() {
    }
    AreaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__area_routing_module__["a" /* AreaRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__area_component__["a" /* AreaComponent */]]
        })
    ], AreaModule);
    return AreaModule;
}());



/***/ })

});
//# sourceMappingURL=area.module.chunk.js.map