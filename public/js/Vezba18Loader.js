/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doctor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PersonCs__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LabCheck__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Logger__ = __webpack_require__(61);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





// import { Pacijent } from './Pacijent';


var Doctor = function (_PersonAbstract) {
    _inherits(Doctor, _PersonAbstract);

    function Doctor(firstName, lastName, speciality, pacients) {
        _classCallCheck(this, Doctor);

        var _this = _possibleConstructorReturn(this, (Doctor.__proto__ || Object.getPrototypeOf(Doctor)).call(this, firstName, lastName));

        _this.speciality = speciality;
        _this.pacients = pacients;
        _this.log();
        return _this;
    }

    _createClass(Doctor, [{
        key: "getFullName",
        value: function getFullName() {
            return "Name: " + this.firstName + " " + this.lastName + " - " + this.speciality;
        }
    }, {
        key: "scheduleLabCheck",
        value: function scheduleLabCheck(pacient, typeOfCheck) {
            var labCheck = new __WEBPACK_IMPORTED_MODULE_1__LabCheck__["a" /* LabCheck */]("12.12.2012", "15:15", pacient);
            if (typeOfCheck === "BP") {
                this.loging = new __WEBPACK_IMPORTED_MODULE_2__Logger__["a" /* Logger */]();
                this.loging.logg(Date.now(), "Did bloodPresure test!");
                return labCheck.bloodPresure();
            } else if (typeOfCheck === "SIP") {
                this.loging = new __WEBPACK_IMPORTED_MODULE_2__Logger__["a" /* Logger */]();
                this.loging.logg(Date.now(), "Did suggarInBlood test!");
                return labCheck.sugarInBlood("15:15");
            } else if (typeOfCheck === "CIP") {
                this.loging = new __WEBPACK_IMPORTED_MODULE_2__Logger__["a" /* Logger */]();
                this.loging.logg(Date.now(), "Did cholesterolInBLood test!");
                return labCheck.cholesterolInBlood();
            } else {
                return "We can't do that check!";
            }
        }
    }, {
        key: "log",
        value: function log() {
            this.loging = new __WEBPACK_IMPORTED_MODULE_2__Logger__["a" /* Logger */]();
            this.loging.logg(Date.now(), this.getFullName());
        }
    }, {
        key: "sing",
        value: function sing() {
            return "Singing loud!!";
        }
    }]);

    return Doctor;
}(__WEBPACK_IMPORTED_MODULE_0__PersonCs__["a" /* PersonAbstract */]);

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonAbstract; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PersonAbstract = function () {
    function PersonAbstract(firstName, lastName) {
        _classCallCheck(this, PersonAbstract);

        this.firstName = firstName;
        this.lastName = lastName;

        if (new.target === PersonAbstract) {
            throw new TypeError("This class cannot be instanced!");
        }
    }

    _createClass(PersonAbstract, [{
        key: "sing",
        value: function sing() {
            throw new Error('You have to implement the method doSomething!');
        }
    }]);

    return PersonAbstract;
}();

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vezba18_Doctor__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vezba18_Pacijent__ = __webpack_require__(55);



/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabCheck; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Doctor__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var LabCheck = function () {
    function LabCheck(checkDate, checkTime, pacient) {
        _classCallCheck(this, LabCheck);

        if (LabCheck.Instance === undefined) {
            this.checkDate = checkDate;
            this.checkTime = checkTime;
            this.pacient = pacient;

            LabCheck.Instance = this;
        }

        return LabCheck.Instance;
    }

    _createClass(LabCheck, [{
        key: "bloodPresure",
        value: function bloodPresure() {
            this.valueUp = Math.floor(Math.random() * 100 + 80);
            this.valueDown = Math.floor(Math.random() * 100);
            this.valueUp < this.valueDown ? this.valueDown = Math.floor(Math.random() * this.valueUp) : "";
            this.pulse = Math.floor(Math.random() * 180 + 50);
            return "You have " + this.valueUp + " up value, " + this.valueDown + " down value and " + this.pulse + " puls";
        }
    }, {
        key: "sugarInBlood",
        value: function sugarInBlood(lastMeal) {
            this.value = Math.floor(Math.random() * 15 + 1);
            this.lastMeal = lastMeal;

            return "You ate at: " + this.lastMeal + " and your sugar in blood value is : " + this.value;
        }
    }, {
        key: "cholesterolInBlood",
        value: function cholesterolInBlood(lastMeal) {
            this.value = Math.floor(Math.random() * 15 + 1);
            this.lastMeal = lastMeal;

            return "You ate at: " + this.lastMeal + " and your cholesterol in blood value is : " + this.value;
        }
    }]);

    return LabCheck;
}();

var lab = new LabCheck("asd0", "asd", "pac");
console.log(lab.checkDate);
var lab1 = new LabCheck("asd1", "asd", "pac");
console.log(lab1.checkDate);

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Pacijent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PersonCs__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Doctor__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Logger__ = __webpack_require__(61);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Pacijent = function (_PersonAbstract) {
    _inherits(Pacijent, _PersonAbstract);

    function Pacijent(firstName, lastName, JMBG, healthCardNumb) {
        _classCallCheck(this, Pacijent);

        var _this = _possibleConstructorReturn(this, (Pacijent.__proto__ || Object.getPrototypeOf(Pacijent)).call(this, firstName, lastName));

        _this.JMBG = JMBG;
        _this.healthCardNumb = healthCardNumb;
        _this.doctor = "";
        _this.log();
        return _this;
    }

    _createClass(Pacijent, [{
        key: 'getFullName',
        value: function getFullName() {
            return "Name: " + this.firstName + " " + this.lastName + " - " + this.healthCardNumb;
        }
    }, {
        key: 'selectDoctor',
        value: function selectDoctor(doctor) {
            if (doctor instanceof __WEBPACK_IMPORTED_MODULE_1__Doctor__["a" /* Doctor */]) {
                this.doctor = doctor;
                this.loging = new __WEBPACK_IMPORTED_MODULE_2__Logger__["a" /* Logger */]();
                this.loging.logg(Date.now(), "Picked: " + this.doctor.getFullName());
                return "Success! You've got yourself a doctor!!";
            } else {
                return "Failed!! That's not a doctor!!";
            }
        }
    }, {
        key: 'sing',
        value: function sing() {
            return "Singing the loudest!";
        }
    }, {
        key: 'log',
        value: function log() {
            this.loging = new __WEBPACK_IMPORTED_MODULE_2__Logger__["a" /* Logger */]();
            this.loging.logg(Date.now(), this.getFullName());
        }
    }]);

    return Pacijent;
}(__WEBPACK_IMPORTED_MODULE_0__PersonCs__["a" /* PersonAbstract */]);

var pacient1 = new Pacijent("Marko", "Markovic", "123351231351134", "1233512", doctor);
var pacient2 = new Pacijent("Nenad", "Nenadovic", "135914813491352", "1344821", doctor);
var pacient3 = new Pacijent("Milos", "Milosevic", "123541233123567", "5676767", doctor);
console.log("PRavimo doktora");
var doctor = new __WEBPACK_IMPORTED_MODULE_1__Doctor__["a" /* Doctor */]("Petar", "Nikolic", "Ginekolog", [pacient1, pacient3]);
console.log(pacient1.selectDoctor(doctor));
console.log(pacient2.selectDoctor(pacient1));
console.log(pacient3.selectDoctor(doctor));
console.log(pacient1);
console.log(pacient2);
console.log(doctor);
console.log(doctor.scheduleLabCheck(pacient2, "SIP"));
console.log(doctor.scheduleLabCheck(pacient2, "BP"));

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);

        if (!Logger.Instance) {

            Logger.Instance = this;
        }

        return Logger.Instance;
    }

    _createClass(Logger, [{
        key: "logg",
        value: function logg(curDate, item) {
            console.log("Time: " + curDate + " - " + item);
        }
    }]);

    return Logger;
}();

/***/ })

/******/ });