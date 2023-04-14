var mainModule =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided: testme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testme", function() { return testme; });
/* global alert */
function testme() {
  alert("hi!");
}
$(document).ready(function () {
  "use strict"; //showing-menu

  $(".dropdown-submenu a").on("click", function (event) {
    event.preventDefault();
    $(this).parent().find("ul").first().toggle(300);
    $(this).parent().siblings().find("ul").hide(200); //Hide menu when clicked outside

    $(this).parent().find("ul").mouseleave(function () {
      var thisUI = $(this);
      $("html").click(function () {
        thisUI.hide();
        $("html").unbind("click");
      });
    });
  }); //slidebar-mobile

  $(".menu,.overlay-slide,.sliding-panel-close").on("click touchstart", function (e) {
    $(".slidebar-mobile,.overlay-slide").toggleClass("is-visible");
    $("#wrapper").toggleClass("is-obscured");
    e.preventDefault();
  }); //dropmenus-slidebar-mobile
  // $(".sidebar-lists li").click(function () {
  //   $(this).children(".sub-menu").slideToggle(500);
  //   $(this).toggleClass("active");
  //   event.preventDefault();
  // });

  $(".float-btn").click(function () {
    $(".float-btn").toggleClass("show");
    $(".list").toggleClass("show");
  });
  $(".fa-times").click(function () {
    $(this).closest(".chatbox").hide();
  }); //data-picker

  $(".date-range").daterangepicker({
    singleDatePicker: true
  });
  $("#datetimepicker4").datetimepicker({
    format: "L",
    icons: {
      time: "far fa-clock" // date: "fa fa-calendar",
      // up: "fa fa-arrow-up",
      // down: "fa fa-arrow-down"

    }
  });
  $("#datetimepicker3").datetimepicker({
    format: "LT",
    time: "fa fa-clock"
  });
  $(".repeater").repeater({
    show: function show() {
      $(this).slideDown();
    },
    hide: function hide(deleteElement) {
      $(this).slideUp(deleteElement);
    } // ready: function (setIndexes) {},

  });
  window.outerRepeater = $(".outer-repeater").repeater({
    isFirstItemUndeletable: true,
    show: function show() {
      $(this).show();
    },
    hide: function hide(deleteElement) {
      $(this).hide(deleteElement);
    }
  });
  $("#table_id").DataTable({
    stripeClasses: []
  });
  $(".work-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 3
      },
      1000: {
        items: 2
      }
    }
  });
  $(".main-Carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  }); //prouducts

  $(".proudct-Carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });
  $(".js-example-tags").select2({
    tags: true,
    maximumSelectionLength: 2
  });
  /*
  $('.show-password').click(function(){
  	if ($(".password-group input").attr("type") === "password") {
  	$(".password-group input").attr("type", "text");
  } else {
  	$(".password-group input").attr("type", "password");
  }
  // if(document.getElementById('check').checked) {
  // 	$('.password-group input').get(0).type = 'text';
  // } else {
  // 		$('.password-group input').get(0).type = 'password';
  // }
  });
  */
  // var options = {
  //   series: [70],
  //   chart: {
  //     height: 130,
  //     type: "radialBar",
  //   },
  //   plotOptions: {
  //     radialBar: {
  //       hollow: {},
  //     },
  //   },
  //   labels: ["Cricket"],
  // };

  $(document).on("mousedown", ".show-password", function () {
    $(".password-group input").attr("type", "text");
    $(".show-password").html('<i class="fas fa-eye-slash"></i>');
  });
  $(document).on("mouseup", ".show-password", function () {
    $(".password-group input").attr("type", "password");
    $(".show-password").html('<i class="fas fa-eye"></i>');
  });
  $(".disactive-content").on("click", function () {
    console.log("this", $(this).parent(".customer-box"));
    var box = $(this).closest(".customer-box");
    box.find(".box-content").slideToggle();
  }); // $('[data-toggle="datepicker"]').datepicker();

  $(window).on("load", function () {
    $("#myModal").modal("show");
  });
});

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: testme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/main */ "./js/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "testme", function() { return _js_main__WEBPACK_IMPORTED_MODULE_0__["testme"]; });

__webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");



/***/ })

/******/ });
//# sourceMappingURL=main.js.map