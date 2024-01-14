/* https://calculator-dostavki.ru/ */

// Расстояние
function de() {
  var rng  = document.getElementById("distance"); //rng - это ползунок
  var i1   = document.getElementById("с_distance"); // i1 - input
  i1.value = rng.value;
}

// Вес
function wt() {
  var rng  = document.getElementById("weight");
  var i1   = document.getElementById("с_weight");
  i1.value = rng.value;
}

// Длина
function lh() {
  var rng  = document.getElementById("length");
  var i1   = document.getElementById("с_length");
  i1.value = rng.value;
}

// Ширина
function wh() {
  var rng  = document.getElementById("width");
  var i1   = document.getElementById("с_width");
  i1.value = rng.value;
}

// Высота
function ht() {
  var rng  = document.getElementById("height");
  var i1   = document.getElementById("с_height");
  i1.value = rng.value;
}

$(function () {
  $("#submit").click(function () {
    //$("#loading").css("display", "block");

    var с_distance = parseFloat($("#с_distance").val()); // Расстояние (км).
    var с_weight   = parseFloat($("#с_weight").val()); // Вес (кг).
    var с_length   = parseFloat($("#с_length").val()); // Длина (см).
    var с_width    = parseFloat($("#с_width").val()); // Ширина (см).
    var с_height   = parseFloat($("#с_height").val()); // Высота (см).

    var in_cash = document.getElementById("cash").checked; // Оплата наличными? (да/нет).

    var nds    = 120; // 120 р. за 1 км.
    var no_nds = 110; // 110 р. за 1 км.
    var cash   = 100; // 100 р. за 1 км. при наличной оплате.
    var fixing = 30000; // 30000 р. - фиксированная сумма если расстояние до 500 км.

    // Расстояние свыше 500 км.
    if(с_distance > 500){

      if(in_cash){
        
      }

    }

    // Расстояние до 500 км.
    if(с_distance < 500){

      

    }

     document.getElementById("c_result").innerHTML = с_distance + с_weight;
  });

  $("#reset").click(function () {
    document.getElementById("с_distance").value   = ""; // Расстояние (км).
    document.getElementById("с_weight").value     = ""; // Вес (кг).
    document.getElementById("с_length").value     = ""; // Длина (см).
    document.getElementById("с_width").value      = ""; // Ширина (см).
    document.getElementById("с_height").value     = ""; // Высота (см).
    document.getElementById("c_result").innerHTML = ""; // Результат

    // Сбрасываем ползунки
    document.getElementById("distance").value = 0;
    document.getElementById("weight").value   = 0;

    document.getElementById("length").value = 0;
    document.getElementById("width").value  = 0;
    document.getElementById("height").value = 0;

    // Сбрсывает чекбокс - оплату наличными.
    document.getElementById("cash").checked = false;
  });
});

// if (
//   typeof jQuery == "function" &&
//   "ui" in jQuery &&
//   jQuery.ui &&
//   "version" in jQuery.ui
// ) {
//   $(function () {
//     $("#city1").autocomplete({
//       source: function (request, response) {
//         $.ajax({
//           url: host + "/service/jsonp.php?callback=?",

//           dataType: "jsonp",
//           data: {
//             q: function () {
//               return $("#city1").val();
//             },
//             tk: function () {
//               return $("#city1").attr("tk");
//             },
//           },

//           success: function (data) {
//             response(
//               $.map(data.geonames, function (item) {
//                 return {
//                   label: item.np_,
//                   value: item.np_,
//                   id: item.id,
//                 };
//               })
//             );
//           },
//         });
//       },
//       minLength: 1,
//       select: function (event, ui) {
//         $("#city1_id").val(ui.item.id);
//         $(".input-tooltip1").removeClass("open"); //скрыть подсказку city1
//       },
//     });
//     $("#city2").autocomplete({
//       source: function (request, response) {
//         $.ajax({
//           url: host + "/service/jsonp.php?callback=?",
//           dataType: "jsonp",
//           data: {
//             q: function () {
//               return $("#city2").val();
//             },
//             tk: function () {
//               return $("#city1").attr("tk");
//             },
//             country: function () {
//               return $("#city1").attr("country");
//             },
//           },
//           success: function (data) {
//             response(
//               $.map(data.geonames, function (item) {
//                 return {
//                   label: item.np_,
//                   value: item.np_,
//                   id: item.id,
//                 };
//               })
//             );
//           },
//         });
//       },
//       minLength: 1,
//       select: function (event, ui) {
//         $("#city2_id").val(ui.item.id);
//         $(".input-tooltip2").removeClass("open"); //скрыть подсказку city2
//       },
//     });

//     $("#form_tk").autocomplete({
//       source: function (request, response) {
//         $.ajax({
//           url: host + "/service/jsonp.php?callback=?",
//           dataType: "jsonp",
//           data: {
//             q: function () {
//               return $("#form_tk").val();
//             },
//             tk: function () {
//               return $("#form_tk").attr("tk");
//             },
//           },
//           success: function (data) {
//             response(
//               $.map(data.result, function (item) {
//                 return {
//                   value: item.show_text,
//                   result: item.result,
//                 };
//               })
//             );
//           },
//         });
//       },
//       autoFocus: true,
//       minLength: 1,
//       select: function (event, ui) {
//         //$('#id_tk').val(ui.item.result);
//         $(".input-tooltip4").removeClass("open"); //скрыть подсказку tk
//         //console.log(url_not_get);
//         //если url содержит слеш, нужно укоротить url
//         //if( url_not_get.indexOf('/') != 1) {
//         //	exp = url_not_get.split('/');
//         //	url_not_get = exp[0];
//         //}
//         //console.log(url_not_get);
//         //console.log(host + '/' + url_not_get + '?search=' + ui.item.result);
//         $(location).attr(
//           "href",
//           host + "/" + url_not_get + "?search=" + ui.item.result
//         );
//       },
//     });

//     //страна для международного калькуляторв
//     $("#country1").autocomplete({
//       source: function (request, response) {
//         $.ajax({
//           url: host + "/service/jsonp.php?callback=?",
//           dataType: "jsonp",
//           data: {
//             q: function () {
//               return $("#country1").val();
//             },
//             tk: function () {
//               return $("#country1").attr("tk");
//             },
//           },

//           success: function (data) {
//             response(
//               $.map(data.geonames, function (item) {
//                 return {
//                   label: item.country,
//                   value: item.country,
//                   id: item.id,
//                 };
//               })
//             );
//           },
//         });
//       },
//       minLength: 1,
//       select: function (event, ui) {
//         $("#country1_id").val(ui.item.id);
//         $(".input-tooltip1").removeClass("open"); //скрыть подсказку country1
//         $("#city1_").attr("country", ui.item.id); //подсказывать города только выбранной страны
//         $("#city1_").val(""); //очистить поле ввода города
//       },
//     });
//     $("#country2").autocomplete({
//       source: function (request, response) {
//         $.ajax({
//           url: host + "/service/jsonp.php?callback=?",
//           dataType: "jsonp",
//           data: {
//             q: function () {
//               return $("#country2").val();
//             },
//             tk: function () {
//               return $("#country2").attr("tk");
//             },
//           },
//           success: function (data) {
//             response(
//               $.map(data.geonames, function (item) {
//                 return {
//                   label: item.country,
//                   value: item.country,
//                   id: item.id,
//                 };
//               })
//             );
//           },
//         });
//       },
//       minLength: 1,
//       select: function (event, ui) {
//         $("#country2_id").val(ui.item.id);
//         $(".input-tooltip2").removeClass("open"); //скрыть подсказку city2_
//         $("#city2_").attr("country", ui.item.id); //подсказывать города только выбранной страны
//         $("#city2_").val(""); //очистить поле ввода города
//       },
//     });

//     //город для международного калькулятора
//     $("#city1_").autocomplete({
//       source: function (request, response) {
//         $.ajax({
//           url: host + "/service/jsonp.php?callback=?",

//           dataType: "jsonp",
//           data: {
//             q: function () {
//               return $("#city1_").val();
//             },
//             tk: function () {
//               return $("#city1_").attr("tk");
//             },
//             country: function () {
//               return $("#city1_").attr("country");
//             },
//           },

//           success: function (data) {
//             response(
//               $.map(data.geonames, function (item) {
//                 return {
//                   label: item.city_,
//                   value: item.city,
//                   id: item.id,
//                 };
//               })
//             );
//           },
//         });
//       },
//       minLength: 1,
//       select: function (event, ui) {
//         $("#city1_id_").val(ui.item.id);
//         $(".input-tooltip7").removeClass("open"); //скрыть подсказку city1_
//       },
//     });
//     $("#city2_").autocomplete({
//       source: function (request, response) {
//         $.ajax({
//           url: host + "/service/jsonp.php?callback=?",
//           dataType: "jsonp",
//           data: {
//             q: function () {
//               return $("#city2_").val();
//             },
//             tk: function () {
//               return $("#city2_").attr("tk");
//             },
//             country: function () {
//               console.log($("#city2_").attr("country"));
//               return $("#city2_").attr("country");
//             },
//           },
//           success: function (data) {
//             response(
//               $.map(data.geonames, function (item) {
//                 return {
//                   label: item.city_,
//                   value: item.city,
//                   id: item.id,
//                 };
//               })
//             );
//           },
//         });
//       },
//       minLength: 1,
//       select: function (event, ui) {
//         $("#city2_id_").val(ui.item.id);
//         $(".input-tooltip8").removeClass("open"); //скрыть подсказку city2_
//       },
//     });
//   });
// }

// //для м.к. дописывать код страны в поле ввода города, реквизит country
// $(function () {
//   $("#city1_").click(function () {
//     var country1_id = $("#country1_id").val();
//     if (country1_id != "") {
//       $("#city1_").attr("country", country1_id);
//     }
//   });
//   $("#city2_").click(function () {
//     var country2_id = $("#country2_id").val();
//     if (country2_id != "") {
//       $("#city2_").attr("country", country2_id);
//     }
//   });
// });

// //иконка удаления формы для поиска, раздел ТК
// $(function () {
//   if ($("#form_tk").attr("value") != "") {
//     $(".search_del").addClass("dbl");
//   }
//   //console.log();
// });

// $.fn.switchKeyboard = function () {
//   var map = {
//     q: "й",
//     w: "ц",
//     e: "у",
//     r: "к",
//     t: "е",
//     y: "н",
//     u: "г",
//     i: "ш",
//     o: "щ",
//     p: "з",
//     "[": "х",
//     "]": "ъ",
//     a: "ф",
//     s: "ы",
//     d: "в",
//     f: "а",
//     g: "п",
//     h: "р",
//     j: "о",
//     k: "л",
//     l: "д",
//     ";": "ж",
//     z: "я",
//     x: "ч",
//     c: "с",
//     v: "м",
//     b: "и",
//     n: "т",
//     m: "ь",
//     ",": "б",
//     ".": "ю",
//     "'": "э",
//     "`": "ё",
//   };
//   function transformTypedChar(charStr) {
//     charStr = charStr.toLowerCase();
//     if (typeof map[charStr] == "string") return map[charStr];
//     else return charStr;
//   }

//   return this.each(function () {
//     if ($(this).attr("eng-replacement") !== undefined) return false;
//     $(this).on("keypress", function (evt) {
//       var val = this.value;
//       evt = evt || window.event;
//       if (evt.metaKey) return;
//       // Ensure we only handle printable keys, excluding enter and space
//       var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
//       if (charCode && charCode > 32) {
//         var keyChar = String.fromCharCode(charCode);
//         // Transform typed character
//         var mappedChar = transformTypedChar(keyChar);
//         var start, end;
//         if (
//           typeof this.selectionStart == "number" &&
//           typeof this.selectionEnd == "number"
//         ) {
//           // Non-IE browsers and IE 9
//           start = this.selectionStart;
//           end = this.selectionEnd;
//           this.value = val.slice(0, start) + mappedChar + val.slice(end);
//           // Move the caret
//           this.selectionStart = this.selectionEnd = start + 1;
//         } else if (document.selection && document.selection.createRange) {
//           // For IE up to version 8
//           var selectionRange = document.selection.createRange();
//           var textInputRange = this.createTextRange();
//           var precedingRange = this.createTextRange();
//           var bookmark = selectionRange.getBookmark();
//           textInputRange.moveToBookmark(bookmark);
//           precedingRange.setEndPoint("EndToStart", textInputRange);
//           start = precedingRange.text.length;
//           end = start + selectionRange.text.length;
//           this.value = val.slice(0, start) + mappedChar + val.slice(end);
//           start++;
//           // Move the caret
//           textInputRange = this.createTextRange();
//           textInputRange.collapse(true);
//           textInputRange.move(
//             "character",
//             start - (this.value.slice(0, start).split("\r\n").length - 1)
//           );
//           textInputRange.select();
//         }
//         return false;
//       }
//     });
//     $(this).attr("eng-replacement", "true");
//   });
// };
// $("input.only-ru").switchKeyboard();

// //tags
// $(function () {
//   $(".all-tags").click(function () {
//     $(this).toggleClass("arr-up");
//     $(this).siblings(".tags").toggleClass("tags-open");
//   });
// });

// //поменять name при фокусе
// $(".only-ru").on("focus", function () {
//   var realFields = [];
//   var realFieldsMapper = {};
//   $(this).each(function (i) {
//     realFields[i] = $(this).attr("name");
//     if (realFieldsMapper[realFields[i]]) {
//       $(this).attr("name", realFieldsMapper[realFields[i]]);
//     } else {
//       var randomName = Math.random()
//         .toString(36)
//         .replace(/[^a-z]+/g, "");
//       $(this).attr("name", randomName);
//       realFieldsMapper[realFields[i]] = randomName;
//     }
//   });
// });
// //поменять name обратно
// $(document).mouseup(function (e) {
//   var div1 = $("#city1"),
//     div2 = $("#city2"),
//     div3 = $("#cost"),
//     div5 = $("#date"),
//     div6 = $("#country1"),
//     div7 = $("#country2"),
//     div8 = $("#city1_"),
//     div9 = $("#city2_");
//   if (!div1.is(e.target)) $("input#city1").attr("name", "city1");
//   if (!div2.is(e.target)) $("input#city2").attr("name", "city2");
//   if (!div3.is(e.target)) $("input#cost").attr("name", "cost");
//   if (!div5.is(e.target)) $("input#date").attr("name", "date");
//   if (!div6.is(e.target)) $("input#country1").attr("name", "country1");
//   if (!div7.is(e.target)) $("input#country2").attr("name", "country2");
//   if (!div8.is(e.target)) $("input#city1_").attr("name", "city1_");
//   if (!div9.is(e.target)) $("input#city2_").attr("name", "city2_");
// });

// //tooltip
// if (typeof tooltip != "undefined") {
//   $(function () {
//     $('[data-toggle="tooltip"]').tooltip();
//   });
// }

// //форма калькулятора, ввод габаритов
// $(document).ready(function () {
//   var l_place = $(".place").length + 1;
//   $("span.packages").html("(кол-во мест: " + "<b>" + l_place + "</b>" + ")");

//   $(".add").click(function () {
//     $(
//       '<div class="row place"><div class="col-lg-12 col-md-12"><div class="row text-left"><div class="col-md-3 col-sm-12 col-6"><input name="weight[]" class="form-control" type="number" min="0" step="0.1" placeholder="вес, кг" value="" ></div><div class="form-group col-md-3 col-sm-4 col-6"><input name="length[]" class="form-control" type="number" min="0" placeholder="длина, см" value=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAB/0lEQVQ4jcWTMYsaURDH//P2gYjkQDhzx1qkSXvkAxzGKoHc1We3xYkrojEcIWLKLQ2mOIhZvDzwioUUx1UpzlpDSJ9r8gHigmcaibqKWSdFfIcaUqXIVI//zPzevJl5wD8abQq5XC4lhCgBSAHYBjAA8FEI0Wg2m5/+CnAcR/Z6vTdE9JiZa8zcFkL0F4vFjmEYB8z8EsCVaZonjuP81HlSH5bJ96SUD1zXHa1c8g3Au2Kx+D4Mw0vf908BPNVOocsmokdSyozruiPLsmKrZVqWFXNddzSfz48AHBYKhf01gBCixMyvdHI0Gr22bTsNALZtp6PR6LVlWbFWq/UDQC0Mw9IaAECKmdsA4HnemJmPiejCtu0XRHTBzMee542XsW0iergJ2B4OhzdaVEp1mLlORHVmriulOtoXiUT6y+msAb4nEokdLdq2nSaiCjNXiKiinwMAk8lkF79HuwbohmH4RDeMiM6ZOaOUes3MGSI61401DOMAQHcT8JaZq9ls9o7neeMgCPZ02UqpThAEe57njcvl8haAKhE1NOB2kfL5fIOI7s/n86Nlt9esXC5vTafTSwBflVLPtH67SKZpnvi+fyql/JLP52tSyqvBYNCPx+O7AA5ns1kVwIdkMvl8FfzHXygUCvthGJaIKAXgLoAbAF0iapydnX3ejP//9gvx6NpoO2i9ZAAAAABJRU5ErkJggg==" class="icon-x"></div><div class="form-group col-md-3 col-sm-4 col-6"><input name="width[]" class="form-control" type="number" min="0" placeholder="ширина, см" value=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAB/0lEQVQ4jcWTMYsaURDH//P2gYjkQDhzx1qkSXvkAxzGKoHc1We3xYkrojEcIWLKLQ2mOIhZvDzwioUUx1UpzlpDSJ9r8gHigmcaibqKWSdFfIcaUqXIVI//zPzevJl5wD8abQq5XC4lhCgBSAHYBjAA8FEI0Wg2m5/+CnAcR/Z6vTdE9JiZa8zcFkL0F4vFjmEYB8z8EsCVaZonjuP81HlSH5bJ96SUD1zXHa1c8g3Au2Kx+D4Mw0vf908BPNVOocsmokdSyozruiPLsmKrZVqWFXNddzSfz48AHBYKhf01gBCixMyvdHI0Gr22bTsNALZtp6PR6LVlWbFWq/UDQC0Mw9IaAECKmdsA4HnemJmPiejCtu0XRHTBzMee542XsW0iergJ2B4OhzdaVEp1mLlORHVmriulOtoXiUT6y+msAb4nEokdLdq2nSaiCjNXiKiinwMAk8lkF79HuwbohmH4RDeMiM6ZOaOUes3MGSI61401DOMAQHcT8JaZq9ls9o7neeMgCPZ02UqpThAEe57njcvl8haAKhE1NOB2kfL5fIOI7s/n86Nlt9esXC5vTafTSwBflVLPtH67SKZpnvi+fyql/JLP52tSyqvBYNCPx+O7AA5ns1kVwIdkMvl8FfzHXygUCvthGJaIKAXgLoAbAF0iapydnX3ejP//9gvx6NpoO2i9ZAAAAABJRU5ErkJggg==" class="icon-x"></div><div class="form-group col-md-3 col-sm-4 col-6"><input name="height[]" class="form-control" type="number" min="0" placeholder="высота, см" value=""></div></div></div><div class="container text-right h0"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAABmJLR0QA/wD/AP+gvaeTAAACZklEQVQ4jdWUTW8SURiF71xiYMbw0SGhomkqCLo2lpmmixY6kBkjLIwmJo1tQrf1Zxj/gJq4QqVq3LmpERKasJF0Piz7gmCa6rRGmAEDU6K914UZMuVr01XP8s29T86ce94B4Fzr8/LytbOcg4ODcjKZoZzOkiQI3CSgJAgc5XSWyslkZiJ0N5V64Q0G791YWvJdnJra/CII/CigwvMxyu3OXl9c9PlCofu7qdSrkdBSNBoiILzrnZ11EQQBrs7N+e0u18tBx5IgcA63+22AYS5DCIFnZsZJQHi7FI2GhqALxWL1b6fzoC5JPxBCAEIIgvPzfqtj02GAZf0QQoAxBnVFUVGvt7ZQLFZNFjGUVSLBkTT9OsgwVyCEACEE6pJ0aOj6U9Lj2TAdIoRAXZZVQ9PWIvl8wcoYgpqfSLlcm1ZHR5WKMR0OkwRB/AeKotptt1eZXG578P5IKAAAyPF4lPR6+9mZwhiDuiyrx5qWvpXL5UfdHaqUqUihUDR0/fnPatWwzo8qFaPbbD4bB5wIVXg+Rno8G75QiLTOp8NhkqLpR+PqNhY6WBuMMTjc2zMwxmBS3cZCpUSCs9YGIQRqkqT+qtUefxXF72bdAizrp9zuNzLPxydCFZ6PUTSdtTr8pihqT9fTkXz+yXGj8fBUj1n2EkXT2cEoTm2UzeF4b+1hbWdH7WjaqvkokUKh2G211uqiqCKE+lFAuz07dqMwQh8a+/stc1N67XZ6sIdMLrdtNJsrpmPt4OA3RujTxI0qJ5MZYLPd+dPrrYwqdj97QeAu2O3vwMnJx5tbW+vjzvV11v/p+dE/mBYzuFtOm70AAAAASUVORK5CYII=" class="delete"></div></div>'
//     ).insertBefore(this);
//   });

//   $("html").on("click", ".add", function () {
//     var l_place = $(".place").length + 1;
//     $("span.packages").html("(кол-во мест: " + "<b>" + l_place + "</b>" + ")");
//   });

//   $("html").on("click", ".delete", function () {
//     var l_place = $(".place").length;
//     $("span.packages").html("(кол-во мест: " + "<b>" + l_place + "</b>" + ")");

//     $(this).parent().parent().remove();
//     $(this).parent().remove();
//   });
// });

// //форма калькулятора, ввод объема
// $(document).ready(function () {
//   var l_place = $(".place2").length + 1;
//   $("span.packages2").html("(кол-во мест: " + "<b>" + l_place + "</b>" + ")");

//   $(".add2").click(function () {
//     $(
//       '<div class="row place2"><div class="col-lg-12 col-md-12"><div class="row text-left"><div class="col-md-6 col-sm-6 col-6"><input name="weight[]" class="form-control" type="number" min="0" step="0.1" placeholder="кг" value=""></div><div class="form-group col-md-6 col-sm-6 col-6"><input name="vol[]" class="form-control" type="number" min="0" step="0.0001" placeholder="Объем (м3)" value=""></div></div></div><div class="container text-right h0"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABhElEQVQ4jc1Sy07CUBCdW14tFMItsBBwJQmBFu2nQCHhkWiEpT/g2oSPYIGswYSCf1LaEj5AcIGLEhOkodK6oaS8Nm70rCb3nDkzc3IB/hVGxWJTEoTOOV4ShM6oWGw639x2IRcKT7FU6sFLkpSMELru9+tOoVwqtS4ymYppGGspn/fww+EjAABhC0yELj0+H+kPh8k4y5adm0iC0Ilns3c0w1Aur9cLBBGzOXSwYjvBcVUaY/9S0/TZeNyzTHOT4LgqzTDUUtP0qap2eVGsnzSwpyU5rhLAmFpq2goAwK63zQ2n/sgAAEAqFJ4TuVyFxtgPALDUNH2mKL2bweD+UEsct29hWfvmxGmp6+QJuZx988rQ9e8AxhQZDKZrkchVazJ5PWsgCUI7wbK7wGaK8vI5n8tkKJSmMfZToVCmFo2mnCbuvcmO8Kaq2uUHgwYAgIQQsrkky5Yly7LsMHcGhGW9Gbqufy0W6P0gbV4UGzJBrOPZ7O1mvTbAND9OBvKbr/z3+AHRYq0mE392tQAAAABJRU5ErkJggg==" class="delete2"></div></div>'
//     ).insertBefore(this);
//   });

//   $("html").on("click", ".add2", function () {
//     var l_place = $(".place2").length + 1;
//     $("span.packages2").html("(кол-во мест: " + "<b>" + l_place + "</b>" + ")");
//   });

//   $("html").on("click", ".delete2", function () {
//     var l_place = $(".place2").length;
//     $("span.packages2").html("(кол-во мест: " + "<b>" + l_place + "</b>" + ")");

//     $(this).parent().parent().remove();
//     $(this).parent().remove();
//   });
// });

// //поменять пункты отправки и доставки
// $(function () {
//   $(".arrowlr").click(function () {
//     var city1 = $("#city1").val();
//     var city2 = $("#city2").val();
//     var city1_id = $("#city1_id").val();
//     var city2_id = $("#city2_id").val();
//     $("#city1").val(city2);
//     $("#city2").val(city1);
//     $("#city1_id").val(city2_id);
//     $("#city2_id").val(city1_id);

//     //для международного калькулятора
//     var country1 = $("#country1").val();
//     var country2 = $("#country2").val();

//     var country1_id = $("#country1_id").val();
//     var country2_id = $("#country2_id").val();

//     var city1_ = $("#city1_").val();
//     var city2_ = $("#city2_").val();

//     var city1_id_ = $("#city1_id_").val();
//     var city2_id_ = $("#city2_id_").val();

//     $("#country1").val(country2);
//     $("#country2").val(country1);

//     $("#country1_id").val(country2_id);
//     $("#country2_id").val(country1_id);

//     $("#city1_").attr("country", country2_id);
//     $("#city2_").attr("country", country1_id);

//     $("#city1_").val(city2_);
//     $("#city2_").val(city1_);

//     $("#city1_id_").val(city2_id_);
//     $("#city2_id_").val(city1_id_);
//   });
// });
// //поделиться расчетом
// function share(prefix, key) {
//   $.ajax({
//     url: "/s-h-a-r-e",
//     method: "post",
//     dataType: "html",
//     headers: { prefix: prefix, key: key },
//     success: function (data) {
//       //console.log(data);
//       if (data == "error") {
//         $(".span_share").html("Ошибка");
//       } else {
//         $("#share").addClass("dnone");
//         $("#share2").addClass("dnone");
//         $(".share2").addClass("dnone");
//         $(".span_share2").html(
//           '<button class="btn btn_excel" style="padding: 2px 34px 0px 3px;"><textarea id="cont" rows="2" style="font-size: 12px;width: 100%;margin-top: 2px;border: 1px solid gray;border-radius: 3px;">' +
//             data +
//             '</textarea><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAU0lEQVRIiWNgGOqAEcZIS0v7T4lBs2bNYsQmzkSJocQAFmJdQi6gvw9ggFpxMnA+QHcJsQDd5zT3wagFoxaMWoCUk6ldisLAwJdFlJaqNPfB0AcACoASAbI07/AAAAAASUVORK5CYII=" class="icon-copy" style="top:11px;right:18px;"></button>'
//         );
//         $("#cont").focus(function () {
//           $(this).select();
//         });
//         $(".icon-copy").click(function () {
//           var ta = document.getElementById("cont"); //нашли
//           var range = document.createRange(); //выделение
//           range.selectNode(ta);
//           window.getSelection().addRange(range);
//           document.execCommand("copy"); //копируем в буфер
//           window.getSelection().removeAllRanges(); //очистим выделение
//         });
//         yaCounter49278388.reachGoal("share");
//         gtag("event", "share");
//       }
//     },
//   });
// }
// //reset
// if ($(".close_btn").html()) {
//   $(".reset1").each(function (i, obj) {
//     $(this).attr("href", $(this).attr("href") + "?reset=1");
//   });
//   $(".reset_contakt").each(function (i, obj) {
//     $(this).attr("href", "?reset=contakt");
//   });
// }
// //главная - не более 2-х режимов за 1 расчет
// if ($(".mode:checked").length == 2) {
//   // если выбраны 2 чекбокса
//   $("#mode input:checkbox").filter(":not(':checked')").prop("disabled", true);
// }
// $(".mode").on("click", function () {
//   if ($(".mode:checked").length < 2) {
//     // если выбранных меньше 2
//     $(":checkbox").prop("disabled", false); // то розблокирую
//   }
//   if ($(".mode:checked").length == 2) {
//     // если выбраны 2 чекбокса
//     $("#mode input:checkbox").filter(":not(':checked')").prop("disabled", true);
//   }
// });
// //jde
// /*if($('.jde:checked').length == 2){
// 	$('#mode input:checkbox').filter(":not(':checked')").prop("disabled", true);
// }
// $('.jde').on('click',function(){
//     if($('.jde:checked').length < 2){
// 		$(':checkbox').prop("disabled", false);
//     }
//     if($('.jde:checked').length == 2){
// 		$('#mode input:checkbox').filter(":not(':checked')").prop("disabled", true);
//     }
// });*/

// //слайдер https://www.howtomake.com.ua/front/prostoj-slajder-s-gorizontalnoj-prokrutkoj-svoimi-rukami.html
// if ($(".slide-wrap").length == 1) {
//   function htmSlider() {
//     var slideWrap = jQuery(".slide-wrap");
//     var nextLink = jQuery(".bx-next");
//     var prevLink = jQuery(".bx-prev");
//     var is_animate = false;
//     var slideWidth = jQuery(".slide-item").outerWidth(); // ширина слайда с отступами
//     var newLeftPos = slideWrap.position().left - slideWidth; // смещение слайдера
//     nextLink.click(function () {
//       // Клик по ссылке на следующий слайд
//       if (!slideWrap.is(":animated")) {
//         slideWrap.animate({ left: newLeftPos }, 200, function () {
//           slideWrap
//             .find(".slide-item:first")
//             .appendTo(slideWrap)
//             .parent()
//             .css({ left: 0 });
//         });
//       }
//     });
//     prevLink.click(function () {
//       //Клик по ссылке на предыдующий слайд
//       if (!slideWrap.is(":animated")) {
//         slideWrap
//           .css({ left: newLeftPos })
//           .find(".slide-item:last")
//           .prependTo(slideWrap)
//           .parent()
//           .animate({ left: 0 }, 200);
//       }
//     });
//   }
//   htmSlider(); //иницилизируем функцию слайдера
// }
