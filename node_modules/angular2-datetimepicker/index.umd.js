/**
 * angular2-datetimepicker - Angular 2 or 4 datetime picker component
 * @version v1.1.1
 * @author undefined
 * @link undefined
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ticktock"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else
		root["ticktock"] = factory(root["ng"]["core"], root["ng"]["forms"], root["ng"]["common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(2);
exports.DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DatePicker; }),
    multi: true
};
var DatePicker = /** @class */ (function () {
    function DatePicker() {
        this.onDateSelect = new core_1.EventEmitter();
        this.popover = false;
        this.cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.timeViewDate = new Date(this.date);
        this.hourValue = 0;
        this.minValue = 0;
        this.timeViewMeridian = "";
        this.timeView = false;
        this.yearView = false;
        this.yearsList = [];
        this.monthDays = [];
        this.monthsView = false;
        this.today = new Date();
        this.defaultSettings = {
            defaultOpen: false,
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy hh:mm a',
            cal_days_labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            cal_full_days_lables: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            cal_months_labels: ['January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August', 'September',
                'October', 'November', 'December'],
            cal_months_labels_short: ['JAN', 'FEB', 'MAR', 'APR',
                'MAY', 'JUN', 'JUL', 'AUG', 'SEP',
                'OCT', 'NOV', 'DEC'],
            closeOnSelect: true
        };
    }
    DatePicker.prototype.ngOnInit = function () {
        this.settings = Object.assign(this.defaultSettings, this.settings);
        if (this.settings.defaultOpen) {
            this.popover = true;
        }
    };
    DatePicker.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            this.initDate(value);
        }
        else {
            this.date = new Date();
        }
        this.generateDays();
    };
    DatePicker.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DatePicker.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    DatePicker.prototype.initDate = function (val) {
        this.date = new Date(val);
        if (this.date.getHours() <= 11) {
            this.hourValue = this.date.getHours();
            this.timeViewMeridian = "AM";
        }
        else {
            this.hourValue = this.date.getHours() - 12;
            this.timeViewMeridian = "PM";
        }
        if (this.date.getHours() == 0 || this.date.getHours() == 12) {
            this.hourValue = 12;
        }
        this.minValue = this.date.getMinutes();
    };
    DatePicker.prototype.generateDays = function () {
        this.monthDays = [];
        var year = this.date.getFullYear(), month = this.date.getMonth(), current_day = this.date.getDate(), today = new Date();
        var firstDay = new Date(year, month, 1);
        var startingDay = firstDay.getDay();
        var monthLength = this.getMonthLength(month, year);
        var day = 1;
        var dateArr = [];
        var dateRow = [];
        // this loop is for is weeks (rows)
        for (var i = 0; i < 9; i++) {
            // this loop is for weekdays (cells)
            dateRow = [];
            for (var j = 0; j <= 6; j++) {
                var dateCell = null;
                if (day <= monthLength && (i > 0 || j >= startingDay)) {
                    dateCell = day;
                    if (day == current_day) {
                        // dateCell.classList.add('selected-day');
                    }
                    if (day == this.today.getDate() && this.date.getMonth() == today.getMonth() && this.date.getFullYear() == today.getFullYear()) {
                        // dateCell.classList.add('today');
                    }
                    day++;
                }
                dateRow.push(dateCell);
            }
            // stop making rows if we've run out of days
            if (day > monthLength) {
                dateArr.push(dateRow);
                break;
            }
            else {
                dateArr.push(dateRow);
            }
        }
        this.monthDays = dateArr;
    };
    DatePicker.prototype.generateYearList = function (param) {
        var startYear = null;
        var currentYear = null;
        if (param == "next") {
            startYear = this.yearsList[8] + 1;
            currentYear = this.date.getFullYear();
        }
        else if (param == "prev") {
            startYear = this.yearsList[0] - 9;
            currentYear = this.date.getFullYear();
        }
        else {
            currentYear = this.date.getFullYear();
            startYear = currentYear - 4;
            this.yearView = !this.yearView;
            this.monthsView = false;
        }
        for (var k = 0; k < 9; k++) {
            this.yearsList[k] = startYear + k;
        }
    };
    DatePicker.prototype.getMonthLength = function (month, year) {
        var monthLength = this.cal_days_in_month[month];
        // compensate for leap year
        if (month == 1) {
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                monthLength = 29;
            }
        }
        return monthLength;
    };
    DatePicker.prototype.toggleMonthView = function () {
        this.yearView = false;
        this.monthsView = !this.monthsView;
    };
    DatePicker.prototype.toggleMeridian = function (val) {
        this.timeViewMeridian = val;
    };
    DatePicker.prototype.setTimeView = function () {
        if (this.timeViewMeridian == "AM") {
            if (this.hourValue == 12) {
                this.date.setHours(0);
            }
            else {
                this.date.setHours(this.hourValue);
            }
            this.date.setMinutes(this.minValue);
        }
        else {
            if (this.hourValue == 12) {
                this.date.setHours(this.hourValue);
            }
            else {
                this.date.setHours(this.hourValue + 12);
            }
            this.date.setMinutes(this.minValue);
        }
        this.date = new Date(this.date);
        this.timeView = !this.timeView;
    };
    DatePicker.prototype.setDay = function (evt) {
        if (evt.target.innerHTML) {
            var selectedDay = parseInt(evt.target.innerHTML);
            this.date = new Date(this.date.setDate(selectedDay));
            console.log(this.date);
            this.onChangeCallback(this.date.toString());
            if (this.settings.closeOnSelect) {
                this.popover = false;
                this.onDateSelect.emit(this.date);
            }
        }
    };
    DatePicker.prototype.setYear = function (evt) {
        console.log(evt.target);
        var selectedYear = parseInt(evt.target.getAttribute('id'));
        this.date = new Date(this.date.setFullYear(selectedYear));
        this.yearView = !this.yearView;
        this.generateDays();
    };
    DatePicker.prototype.setMonth = function (evt) {
        if (evt.target.getAttribute('id')) {
            var selectedMonth = this.settings.cal_months_labels_short.indexOf(evt.target.getAttribute('id'));
            this.date = new Date(this.date.setMonth(selectedMonth));
            this.monthsView = !this.monthsView;
            this.generateDays();
        }
    };
    DatePicker.prototype.prevMonth = function (e) {
        e.stopPropagation();
        var self = this;
        if (this.date.getMonth() == 0) {
            this.date.setMonth(11);
            this.date.setFullYear(this.date.getFullYear() - 1);
        }
        else {
            var prevmonthLength = this.getMonthLength(this.date.getMonth() - 1, this.date.getFullYear());
            var currentDate = this.date.getDate();
            if (currentDate > prevmonthLength) {
                this.date.setDate(prevmonthLength);
            }
            this.date.setMonth(this.date.getMonth() - 1);
        }
        this.date = new Date(this.date);
        this.generateDays();
    };
    DatePicker.prototype.nextMonth = function (e) {
        e.stopPropagation();
        var self = this;
        if (this.date.getMonth() == 11) {
            this.date.setMonth(0);
            this.date.setFullYear(this.date.getFullYear() + 1);
        }
        else {
            var nextmonthLength = this.getMonthLength(this.date.getMonth() + 1, this.date.getFullYear());
            var currentDate = this.date.getDate();
            if (currentDate > nextmonthLength) {
                this.date.setDate(nextmonthLength);
            }
            this.date.setMonth(this.date.getMonth() + 1);
        }
        this.date = new Date(this.date);
        this.generateDays();
    };
    DatePicker.prototype.onChange = function (evt) {
        console.log(evt);
    };
    DatePicker.prototype.incHour = function () {
        if (this.hourValue < 12) {
            this.hourValue += 1;
            console.log(this.hourValue);
        }
    };
    DatePicker.prototype.decHour = function () {
        if (this.hourValue > 1) {
            this.hourValue -= 1;
            console.log(this.hourValue);
        }
    };
    DatePicker.prototype.incMinutes = function () {
        if (this.minValue < 59) {
            this.minValue += 1;
            console.log(this.minValue);
        }
    };
    DatePicker.prototype.decMinutes = function () {
        if (this.minValue > 0) {
            this.minValue -= 1;
            console.log(this.minValue);
        }
    };
    DatePicker.prototype.done = function () {
        this.onChangeCallback(this.date.toString());
        this.popover = false;
        this.onDateSelect.emit(this.date);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatePicker.prototype, "settings", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatePicker.prototype, "onDateSelect", void 0);
    DatePicker = __decorate([
        core_1.Component({
            selector: 'angular2-date-picker',
            template: __webpack_require__(7),
            styles: [__webpack_require__(8)],
            providers: [exports.DATEPICKER_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [])
    ], DatePicker);
    return DatePicker;
}());
exports.DatePicker = DatePicker;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(9);
var datepicker_component_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(2);
var AngularDateTimePickerModule = /** @class */ (function () {
    function AngularDateTimePickerModule() {
    }
    AngularDateTimePickerModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [datepicker_component_1.DatePicker],
            exports: [datepicker_component_1.DatePicker, forms_1.FormsModule]
        })
    ], AngularDateTimePickerModule);
    return AngularDateTimePickerModule;
}());
exports.AngularDateTimePickerModule = AngularDateTimePickerModule;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var datepicker_component_1 = __webpack_require__(0);
exports.DatePicker = datepicker_component_1.DatePicker;
var datepicker_module_1 = __webpack_require__(3);
exports.AngularDateTimePickerModule = datepicker_module_1.AngularDateTimePickerModule;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: 'Roboto',sans-serif; }\n\n* {\n  box-sizing: border-box; }\n\n#cuppaDatePickerContainer, #cuppaDatePicker {\n  width: 250px;\n  text-align: center;\n  margin: 0px auto;\n  font-family: 'Roboto','Arial',sans-serif; }\n\n.year-dropdown {\n  text-align: center; }\n\n.calendar-header {\n  color: #333;\n  background: #fff; }\n\n.wc-date-container {\n  float: left;\n  width: 100%;\n  height: 30px;\n  border: 1px solid #1565c0;\n  margin-bottom: 1px;\n  font-size: 16px;\n  padding: 5px;\n  text-align: left;\n  cursor: pointer;\n  background: #fff;\n  line-height: 20px; }\n\n.wc-date-container > span {\n  color: #1565c0; }\n\n.wc-date-container > i {\n  float: right;\n  font-size: 20px;\n  color: #1565c0; }\n\n.winkel-calendar {\n  position: relative;\n  font-family: 'Roboto','Arial',sans-serif; }\n\n.wc-date-popover {\n  font-size: 14px;\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);\n  margin: 0px auto;\n  perspective: 1000px;\n  float: left;\n  background: #fff;\n  background: #ffffff;\n  position: fixed;\n  width: 90%;\n  top: 5%;\n  left: 50%;\n  z-index: 9999999;\n  overflow: hidden;\n  height: 90%;\n  max-width: 320px;\n  transition: all .5s linear;\n  transform: translateX(-50%); }\n\n.wc-banner {\n  /* background: #3ce5ed; */\n  float: left;\n  width: 100%;\n  font-size: 54px;\n  background: #1565c0; }\n\n.wc-day-row {\n  padding: 5px 0px;\n  /*background: rgba(0, 0, 0, 0.09);*/\n  color: #ffffff;\n  width: 100%;\n  float: left;\n  font-size: 3vh;\n  text-align: center; }\n\n.wc-date-row {\n  display: inline-block;\n  font-size: 25vw;\n  color: #ffffff;\n  padding: 5px;\n  width: 50%;\n  float: left;\n  text-align: right;\n  font-weight: 200; }\n\n.wc-month-row {\n  padding: 25px 0px 0px 0px;\n  font-size: 8vw;\n  color: #ffffff;\n  width: 100%;\n  float: left; }\n\n.wc-month-row > i, .wc-year-row > i {\n  float: right;\n  font-size: 12px;\n  padding: 10px 6px;\n  cursor: pointer; }\n\n.wc-month-row > i:hover, .wc-year-row > i:hover {\n  color: rgba(255, 255, 255, 0.63); }\n\n.wc-year-row {\n  text-align: left;\n  color: #ffffff;\n  font-size: 7vw;\n  float: left;\n  width: 100%;\n  padding: 2px 0px 0px 0px; }\n\n.timepicker-true .wc-year-row {\n  font-size: 20px;\n  padding: 5px 0px 0px 12px; }\n\n.timestate > .active {\n  color: #fff; }\n\n.timestate span {\n  cursor: pointer; }\n\n.wc-my-sec {\n  display: inline-block;\n  padding: 5px 10px;\n  float: left;\n  width: 50%;\n  font-weight: 300; }\n\n.timepicker-true .wc-my-sec {\n  width: 20%; }\n\n.time i {\n  font-size: 21px;\n  display: block;\n  text-align: center;\n  cursor: pointer; }\n\n.time i:hover {\n  color: rgba(255, 255, 255, 0.65); }\n\n.time > .hour, .time > .minutes {\n  float: left;\n  width: 48%;\n  text-align: center; }\n\n.wc-month-row > div:nth-child(1), .wc-year-row > div:nth-child(1) {\n  float: left;\n  text-align: left; }\n\n.wc-time-sec {\n  color: #ffffff;\n  text-align: center;\n  padding: 0px 10px 10px;\n  float: left;\n  width: 100%; }\n\n.wc-time-sec > .time {\n  font-size: 38px;\n  font-weight: 300;\n  width: 100%;\n  text-align: center;\n  float: left; }\n\n.time-divider {\n  width: 4%;\n  float: left;\n  text-align: center;\n  padding: 0px 10px; }\n\n.time-view {\n  position: absolute;\n  background: #fff;\n  width: 100%;\n  z-index: 1;\n  top: 40px;\n  padding: 35px;\n  border-top: 1px solid #1565c0; }\n\n.time-view-btn {\n  text-align: center; }\n\n.meridian {\n  text-align: center;\n  padding: 15px 0px; }\n\n.button {\n  width: 100%;\n  padding: 10px;\n  background: #1565c0;\n  color: #fff;\n  margin: 0px auto;\n  border: 1px solid #1565c0;\n  border-radius: 3px; }\n\n.button-sm {\n  width: 50%; }\n\n.time-view .time {\n  font-size: 36px;\n  width: 100%;\n  margin: 0px auto;\n  display: inline-block;\n  padding: 5px 0px 0px 0px;\n  color: #1565c0;\n  font-weight: 300; }\n\n.time-view .time-divider {\n  padding: 16px 0; }\n\n.wc-time-sec .time input, .time-view .time input {\n  display: inline-block;\n  width: 100%;\n  background: none;\n  border: none;\n  text-align: center;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 32px;\n  font-weight: 300;\n  padding: 0px 10px;\n  text-align: center;\n  color: #1565c0; }\n\n.inc-btn, .dec-btn {\n  font-size: 14px;\n  display: block;\n  color: #8e8e8e; }\n\n.wc-time-sec > .time > .timestate {\n  float: left;\n  padding: 0px 10px; }\n\n.show-time-picker .wc-date-row {\n  width: 33% !important; }\n\n.show-time-picker .wc-my-sec {\n  width: 22% !important; }\n\n.wc-month-controls > .fa:hover, .wc-year-controls > .fa:hover {\n  color: #fff; }\n\n.wc-details > .fa:hover {\n  color: #ccc; }\n\n.wc-month-controls {\n  padding: 5px;\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.71);\n  float: right; }\n\n.wc-year-controls {\n  padding: 2px 5px 0px 5px;\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.71);\n  float: right; }\n\n.wc-year-controls > .fa, .wc-month-controls > .fa {\n  cursor: pointer;\n  padding: 0px 4px; }\n\n.wc-details {\n  float: left;\n  width: 65%;\n  padding: 10px 0px 10px;\n  color: #ffffff;\n  background: #1565c0; }\n\n.banner-true > .wc-details {\n  padding: 10px 0px 10px; }\n\n.wc-prev {\n  float: left;\n  width: 25%;\n  text-align: left;\n  padding: 0px 15px;\n  cursor: pointer;\n  font-size: 35px; }\n\n.month-year {\n  float: left;\n  width: 50%;\n  font-size: 18px;\n  line-height: 35px;\n  text-align: center; }\n\n.wc-next {\n  float: right;\n  width: 25%;\n  text-align: right;\n  padding: 0px 15px;\n  cursor: pointer;\n  font-size: 35px; }\n\n.calendar-days {\n  color: #07c;\n  background: #fff; }\n\n.cal-util {\n  width: 100%;\n  float: left;\n  cursor: pointer;\n  position: absolute;\n  bottom: 0;\n  background: #fff; }\n\n.cal-util > .ok {\n  width: 100%;\n  padding: 15px;\n  border-bottom: 1px solid #d1d1d1;\n  float: left;\n  color: #1565c0;\n  font-size: 18px;\n  border-top: 1px solid #d1d1d1;\n  text-align: center; }\n\n.ok > i {\n  margin-right: 5px; }\n\n.cal-util > .cancel {\n  width: 50%;\n  float: left;\n  padding: 10px;\n  color: #1565c0;\n  font-size: 20px; }\n\n.cal-util > .ok:hover, .cal-util > .cancel:hover {\n  box-shadow: inset 0px 0px 20px #ccc; }\n\n.today > span {\n  border: 1px solid #1565c0;\n  background: none; }\n\n.selected-day > span {\n  /*background: #3ce5ed;*/\n  background: #1565c0;\n  color: #fff; }\n\n.calendar-days td {\n  cursor: pointer; }\n\n.calendar-day:hover > span {\n  background: #1565c0;\n  color: #fff; }\n\n.winkel-calendar table {\n  width: 100%;\n  text-align: center;\n  font-size: 18px;\n  border-collapse: collapse; }\n\n.winkel-calendar table td {\n  padding: 0px 0px;\n  width: calc((100%)/7);\n  text-align: center;\n  transition: all .1s linear; }\n\n.winkel-calendar table td span {\n  display: block;\n  padding: 7px;\n  margin: 0px;\n  line-height: 32px; }\n\n.calendar-header td {\n  padding: 5px 0px !important; }\n\n.months-view, .years-view {\n  background: #fff;\n  width: 100%;\n  top: 210px;\n  width: 100%;\n  height: calc(100% - 210px);\n  bottom: 0;\n  text-align: center; }\n\n.years-list-view {\n  float: left;\n  width: calc(100% - 60px);\n  height: 100%; }\n\n.months-view > span, .years-list-view > span {\n  display: inline-block;\n  width: 25%;\n  padding: 25px 0px;\n  cursor: pointer;\n  font-size: 16px; }\n\n.years-list-view > span {\n  width: 33.3333%; }\n\n.years-view > .prev, .years-view > .next {\n  float: left;\n  width: 30px;\n  padding: 85px 0px;\n  cursor: pointer;\n  font-size: 52px; }\n\n.years-view > .prev:hover, .years-view > .next:hover {\n  color: #ccc; }\n\n.years-view > .next {\n  float: right; }\n\n.current-month, .current-year {\n  color: #1565c0; }\n\n.years-view > span {\n  width: 33.3333%; }\n\n.months-view > span:hover, .years-list-view > span:hover {\n  color: #1565c0; }\n\n.banner-true {\n  padding-top: 0px !important; }\n\n.banner-true > .wc-banner {\n  margin-bottom: 0px !important; }\n\n.banner-true > .time-view {\n  height: calc(100% - 124px);\n  top: 142px; }\n\n.methods {\n  clear: left;\n  padding: 50px 0px;\n  text-align: center; }\n\n.month-year i {\n  cursor: pointer;\n  font-size: 10px; }\n\n.timepicker-true .wc-month-row {\n  font-size: 28px;\n  padding: 5px 0px 5px 15px; }\n\n.timepicker-true .wc-month-row > i, .wc-year-row > i {\n  padding: 8px 6px; }\n\n.timepicker-true .wc-my-sec {\n  padding: 16px 2px; }\n\n.timepicker-true .wc-time-sec {\n  width: 48%;\n  padding: 25px 0px;\n  margin: 0px;\n  cursor: pointer; }\n\n.timepicker-true .wc-time-sec:hover {\n  color: rgba(255, 255, 255, 0.65); }\n\n.timepicker-true .wc-time-sec > .time {\n  width: 75%;\n  cursor: pointer; }\n\n.timepicker-true .time i {\n  display: none; }\n\n.timepicker-true .time-divider {\n  padding: 0px; }\n\n.timepicker-true .timestate {\n  padding: 0px;\n  width: auto;\n  padding-top: 7px;\n  font-size: 20px;\n  font-weight: 300; }\n\n.year-title {\n  width: 35%;\n  float: left;\n  line-height: 55px;\n  font-size: 18px;\n  color: #ffffff;\n  background: #1565c0; }\n\n.year-title i {\n  float: right;\n  padding: 13px 10px 7px 0px;\n  font-size: 28px; }\n\n@media (min-width: 365px) and (max-width: 767px) {\n  .timepicker-true .wc-date-row {\n    width: 54%;\n    padding: 20px 5px 10px; }\n  .timepicker-true .wc-my-sec {\n    padding: 33px 2px 10px;\n    width: 46%; }\n  .timepicker-true .wc-time-sec {\n    width: 100%;\n    padding: 0px 0px 15px 0px; }\n  .timepicker-true .wc-time-sec > .time {\n    width: 35%;\n    float: none;\n    margin: 0px auto;\n    font-size: 42px; }\n  .timepicker-true .wc-month-row {\n    font-size: 42px;\n    padding: 5px 0px 5px 5px; }\n  .timepicker-true .wc-year-row {\n    font-size: 24px;\n    padding: 15px 0px 0px 5px; }\n  .timepicker-true .timestate {\n    font-size: 22px;\n    font-weight: 100; }\n  .months-view, .years-view {\n    top: 297px; }\n  .banner-true > .time-view {\n    top: 240px; }\n  .time-view .time {\n    font-size: 62px; }\n  .cuppa-btn-group {\n    font-size: 22px;\n    font-weight: 300; }\n  .angular-range-slider {\n    height: 5px;\n    margin: 20px auto 25px auto; }\n  .angular-range-slider div.handle {\n    width: 45px;\n    height: 45px;\n    top: -20px;\n    font-size: 26px; }\n  .time-view-btn {\n    padding: 25px 0px; }\n  .button-sm {\n    width: 80%;\n    padding: 10px;\n    font-size: 16px; }\n  .cuppa-btn-group > .button {\n    padding: 5px 15px !important; } }\n\n@media (min-width: 768px) {\n  .wc-date-popover {\n    width: 250px;\n    position: absolute;\n    top: 31px;\n    height: auto;\n    left: 0;\n    transform: translateX(0); }\n  .wc-day-row {\n    padding: 5px 0px;\n    font-size: 0.25em; }\n  .wc-date-row {\n    font-size: 1em;\n    padding: 5px; }\n  .wc-my-sec {\n    padding: 5px 0px; }\n  .timepicker-true .wc-my-sec {\n    padding: 15px 3px; }\n  .wc-month-row {\n    padding: 10px 0px 0px 0px;\n    font-size: 0.4em; }\n  .wc-year-row {\n    font-size: 0.3em;\n    padding: 0px; }\n  .month-year {\n    font-size: 14px;\n    line-height: 20px;\n    cursor: pointer; }\n  .wc-prev, .wc-next {\n    font-size: 18px; }\n  .wc-details {\n    padding: 10px 0px 10px; }\n  .year-title {\n    line-height: 40px;\n    font-size: 16px; }\n  .year-title i {\n    padding: 11px 10px 10px 0px;\n    font-size: 18px; }\n  .calendar-header td {\n    padding: 5px 0px !important; }\n  .winkel-calendar table {\n    font-size: 14px; }\n  .winkel-calendar table td span {\n    line-height: 24px;\n    width: 35px;\n    height: 35px; }\n  .months-view, .years-view {\n    top: 40px;\n    width: 100%;\n    height: calc(100%); }\n  .banner-true .months-view, .banner-true .years-view {\n    top: 165px;\n    height: calc(100% - 128px); }\n  .winkel-calendar table td span {\n    padding: 6px; }\n  .cal-util > .ok {\n    font-size: 14px;\n    padding: 10px; }\n  .wc-time-sec > .time {\n    font-size: 0.35em; }\n  .time i {\n    font-size: 10px; }\n  .wc-time-sec > .timestate {\n    font-size: 16px; }\n  .wc-month-row > div:nth-child(1), .wc-year-row > div:nth-child(1) {\n    min-width: 35px; }\n  .wc-month-row > i, .wc-year-row > i {\n    font-size: 8px; }\n  .cal-util {\n    position: relative; }\n  .banner-true > .time-view {\n    top: 159px; }\n  .timepicker-true .wc-month-row {\n    padding: 6px 0px 0px 0px;\n    font-size: 18px; }\n  .timepicker-true .wc-year-row {\n    padding: 0px 0px 0px 0px;\n    font-size: 16px; } }\n\n.time-view h5 {\n  text-align: left;\n  width: 80%;\n  margin: 0px auto;\n  padding: 5px 0px;\n  font-weight: 400; }\n\n.cuppa-btn-group {\n  display: inline-flex; }\n\n.cuppa-btn-group > .active {\n  background: #1565c0 !important;\n  color: #fff !important; }\n\n.cuppa-btn-group > .button {\n  border: 1px solid #1565c0;\n  background: #fff;\n  border-radius: 3px;\n  float: left;\n  margin: 0px;\n  align-items: initial;\n  color: #1565c0;\n  width: auto;\n  padding: 5px 10px; }\n\n.cuppa-btn-group > .button:first-child {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-right: 0px; }\n\n.cuppa-btn-group > .button:last-child {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px; }\n\n/* Slider CSS*/\n.slider {\n  width: 200px;\n  height: 5px;\n  background: #ccc;\n  border-radius: 5px;\n  margin: 12px auto;\n  position: relative; }\n\n.slider > .circle {\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  position: absolute;\n  top: -8px;\n  border-radius: 20px;\n  left: 60px;\n  box-shadow: 0px 0px 5px #ccc;\n  cursor: pointer; }\n\ninput[type='number'] {\n  -moz-appearance: textfield; }\n\n/* Webkit browsers like Safari and Chrome */\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<div class=\"winkel-calendar\">\r\n    <input type=\"hidden\" class=\"wc-input\" value=\"{{date}}\">\r\n    <div class=\"wc-date-container\" (click)=\"popover = !popover\">\r\n        <span>{{date | date: settings.format}}</span>\r\n        <i class=\"fa fa-calendar\"></i>\r\n    </div>\r\n    <div class=\"wc-date-popover\" [ngClass]=\"{'banner-true': settings.bigBanner == true}\" [hidden]=\"!popover\">\r\n        <div class=\"wc-banner\" *ngIf=\"settings.bigBanner\">\r\n            <div class=\"wc-day-row\">{{date | date: 'EEEE'}}</div>\r\n            <div class=\"wc-date-row\">{{date | date: 'dd'}}</div>\r\n            <div class=\"wc-my-sec\">\r\n                <div class=\"wc-month-row\">\r\n                    <div>{{date | date: 'MMMM'}}</div>\r\n                </div>\r\n                <div class=\"wc-year-row\">\r\n                    <div>{{date | date: 'yyyy'}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"wc-time-sec ng-scope\" ng-click=\"toggleTimeView()\">\r\n                                <div *ngIf=\"settings.timePicker\" class=\"time\" (click)=\"timeView = !timeView\">\r\n                                    {{date | date: 'hh'}} : {{date | date: 'mm'}} {{date | date: 'a'}} <span class=\"fa fa-clock-o\"></span>\r\n                                </div>\r\n                            </div>\r\n\r\n        </div>\r\n        <div class=\"wc-details\">\r\n            <i class=\"wc-prev fa fa-angle-left\" (click)=\"prevMonth($event)\"></i>\r\n            <div class=\"month-year\" *ngIf=\"settings.bigBanner\" (click)=\"toggleMonthView()\">{{date | date: 'MMMM'}}\r\n                <!-- <i ng-show=\"!monthsView\" class=\"fa fa-arrow-down\"></i>\r\n                                 <i ng-show=\"monthsView\" class=\"fa fa-arrow-up\"></i> -->\r\n            </div>\r\n            <div class=\"month-year\" *ngIf=\"!settings.bigBanner\" (click)=\"toggleMonthView()\">\r\n                {{date | date: 'MMMM'}}\r\n                <!--    <i ng-show=\"!monthsView\" class=\"fa fa-arrow-down\" (click)=\"toggleMonthView()\"></i>\r\n                                    <i ng-show=\"monthsView\" class=\"fa fa-arrow-up\" (click)=\"toggleMonthView()\"></i>  -->\r\n\r\n            </div>\r\n            <i class=\"wc-next fa fa-angle-right\" (click)=\"nextMonth($event)\"></i>\r\n        </div>\r\n        <div class=\"year-title\">\r\n            <div class=\"year-dropdown\" (click)=\"generateYearList('current')\">\r\n                {{date | date: 'yyyy'}}\r\n                <i *ngIf=\"!yearView\" class=\"fa fa-angle-down\"></i>\r\n                <i *ngIf=\"yearView\" class=\"fa fa-angle-up\"></i>\r\n            </div>\r\n        </div>\r\n        <table class=\"calendar-header\" [hidden]=\"yearView == true || monthsView == true\">\r\n            <tr>\r\n                <td class=\"calendar-header-day\">Su</td>\r\n                <td class=\"calendar-header-day\">Mo</td>\r\n                <td class=\"calendar-header-day\">Tu</td>\r\n                <td class=\"calendar-header-day\">We</td>\r\n                <td class=\"calendar-header-day\">Th</td>\r\n                <td class=\"calendar-header-day\">Fr</td>\r\n                <td class=\"calendar-header-day\">Sa</td>\r\n            </tr>\r\n        </table>\r\n       <div class=\"months-view\" [hidden]=\"!monthsView\" (click)=\"setMonth($event)\">\r\n            <span *ngFor=\"let month of settings.cal_months_labels_short\" [ngClass]=\"{'current-month': month == settings.cal_months_labels_short[date.getMonth()]}\" id=\"{{month}}\">{{month}}</span>\r\n        </div>\r\n        <div class=\"years-view\" *ngIf=\"yearView\">\r\n            <div class=\"fa fa-angle-left prev\" (click)=\"generateYearList('prev')\"></div>\r\n            <div class=\"fa fa-angle-right next\" (click)=\"generateYearList('next')\"></div>\r\n            <div class=\"years-list-view\" (click)=\"setYear($event)\">\r\n                <span *ngFor=\"let year of yearsList\" [ngClass]=\"{'current-year': year == date.getFullYear()}\" id=\"{{year}}\">{{year}}</span>\r\n            </div>\r\n        </div>\r\n       <div class=\"time-view\" [hidden]=\"!timeView\">\r\n            <div class=\"time\">\r\n                <div class=\"hour\">\r\n                    <span class=\"fa fa-plus inc-btn\" (click)=\"incHour()\"></span>\r\n                    <input type=\"number\" value=\"{{hourValue}}\" [(ngModel)] = \"hourValue\" autofocus/>\r\n                    <span class=\"fa fa-minus dec-btn\" (click)=\"decHour()\"></span>\r\n                </div>\r\n                <div class=\"time-divider\">:</div>\r\n                <div class=\"minutes\">\r\n                    <span class=\"fa fa-plus inc-btn\" (click)=\"incMinutes()\"></span>                    \r\n                    <input type=\"number\" value=\"{{minValue}}\" [(ngModel)] = \"minValue\"/>\r\n                    <span class=\"fa fa-minus dec-btn\" (click)=\"decMinutes()\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"meridian\">\r\n                <div class=\"cuppa-btn-group\">\r\n                    <button [ngClass]=\"{'active': timeViewMeridian == 'AM'}\" class=\"button\" ng-model=\"timeViewMeridian\" (click)=\"toggleMeridian('AM')\">AM</button>\r\n                    <button [ngClass]=\"{'active': timeViewMeridian == 'PM'}\" class=\"button\" ng-model=\"timeViewMeridian\" (click)=\"toggleMeridian('PM')\">PM</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"time-view-btn\">\r\n                <button class=\"button\" (click)=\"setTimeView()\">Set Time</button>\r\n            </div>\r\n        </div>\r\n        <table class=\"calendar-days\" (click)=\"setDay($event);\" [hidden]=\"monthsView || yearView\">\r\n            <tr *ngFor=\"let week of monthDays\">\r\n                <td [ngClass]=\"{'calendar-day': day != null,'today': day == today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear(),'selected-day': day == date.getDate()}\"\r\n                    *ngFor=\"let day of week\">\r\n                    <span>{{day}}</span>\r\n                </td>\r\n\r\n            </tr>\r\n        </table>\r\n        <!-- <div ng-if=\"!bigBanner\">\r\n            <i class=\"fa fa-clock-o\" aria-hidden=\"true\" (click)=\"toggleTimeView()\"></i>\r\n        </div>-->\r\n        <div class=\"cal-util\">\r\n            <div class=\"ok\" (click)=\"done()\"><i class=\"fa fa-check\"></i>Done\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(5);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.umd.js.map