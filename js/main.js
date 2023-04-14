/* global alert */
export function testme() {
  alert("hi!");
}

$(document).ready(function () {
  "use strict";
  //showing-menu
  $(".dropdown-submenu a").on("click", function (event) {
    event.preventDefault();

    $(this).parent().find("ul").first().toggle(300);

    $(this).parent().siblings().find("ul").hide(200);

    //Hide menu when clicked outside
    $(this)
      .parent()
      .find("ul")
      .mouseleave(function () {
        var thisUI = $(this);
        $("html").click(function () {
          thisUI.hide();
          $("html").unbind("click");
        });
      });
  });

  //slidebar-mobile

  $(".menu,.overlay-slide,.sliding-panel-close").on(
    "click touchstart",
    function (e) {
      $(".slidebar-mobile,.overlay-slide").toggleClass("is-visible");
      $("#wrapper").toggleClass("is-obscured");
      e.preventDefault();
    }
  );

  //dropmenus-slidebar-mobile
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
  });
  //data-picker

  $(".date-range").daterangepicker({
    singleDatePicker: true,
  });

  $("#datetimepicker4").datetimepicker({
    format: "L",
    icons: {
      time: "far fa-clock",
      // date: "fa fa-calendar",
      // up: "fa fa-arrow-up",
      // down: "fa fa-arrow-down"
    },
  });
  $("#datetimepicker3").datetimepicker({
    format: "LT",
    time: "fa fa-clock",
  });

  $(".repeater").repeater({
    show: function () {
      $(this).slideDown();
    },
    hide: function (deleteElement) {
      $(this).slideUp(deleteElement);
    },
    // ready: function (setIndexes) {},
  });

  window.outerRepeater = $(".outer-repeater").repeater({
    isFirstItemUndeletable: true,
    show: function () {
      $(this).show();
    },
    hide: function (deleteElement) {
      $(this).hide(deleteElement);
    },
  });

  $("#table_id").DataTable({
    stripeClasses: [],
  });
  $(".work-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 2,
      },
    },
  });

  $(".main-Carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  //prouducts
  $(".proudct-Carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  $(".js-example-tags").select2({
    tags: true,
    maximumSelectionLength: 2,
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
    let box = $(this).closest(".customer-box");
    box.find(".box-content").slideToggle();
  });

  // $('[data-toggle="datepicker"]').datepicker();

  $(window).on("load", function () {
    $("#myModal").modal("show");
  });
});
