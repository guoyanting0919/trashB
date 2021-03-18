"use strict";

Vue.component("dc-leftmenu", {
  props: ["list"],
  data: function data() {
    return {};
  },
  template: "<div>" + "<div class='content-l'>" + "<div class='content-l-d'>" + "<img class='content-l-d-img' src='img/2.png'>" + "<div class='content-l-d-s'>控制台</div>" + "</div>" + "<div class='content-l-d'>" + "<img class='content-l-d-img' src='img/2.png'>" + "<div class='content-l-d-s'>預約訂單</div>" + "</div>" + "<div class='content-l-d'>" + "<img class='content-l-d-img' src='img/2.png'>" + "<div class='content-l-d-s'>派車調度</div>" + "</div>" + "<div class='content-l-d'>" + "<img class='content-l-d-img' src='img/2.png'>" + "<div class='content-l-d-s'>個案資料</div>" + "</div>" + "<div class='content-l-d'>" + "<img class='content-l-d-img' src='img/2.png'>" + "<div class='content-l-d-s'>司機車輛管理</div>" + "</div>" + "<div class='content-l-d'>" + "<img class='content-l-d-img' src='img/2.png'>" + "<div class='content-l-d-s'>系統資料管理</div>" + "</div>" + "</div>" + "<div class='content-l-list'>" + "<div class='content-l-list-d' v-for='(item,index) in list'>{{item}}</div>" + "</div>" + "</div>"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9sZWZ0bWVudS5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsImRhdGEiLCJ0ZW1wbGF0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsSUFBSUMsU0FBSixDQUFjLGFBQWQsRUFBNkI7QUFDM0JDLFNBQU8sQ0FBQyxNQUFELENBRG9CO0FBRTNCQyxRQUFNLGdCQUFXO0FBQ2YsV0FBTyxFQUFQO0FBQ0QsR0FKMEI7QUFLM0JDLFlBQ0UsVUFDQSx5QkFEQSxHQUVBLDJCQUZBLEdBR0EsK0NBSEEsR0FJQSxzQ0FKQSxHQUtBLFFBTEEsR0FNQSwyQkFOQSxHQU9BLCtDQVBBLEdBUUEsdUNBUkEsR0FTQSxRQVRBLEdBVUEsMkJBVkEsR0FXQSwrQ0FYQSxHQVlBLHVDQVpBLEdBYUEsUUFiQSxHQWNBLDJCQWRBLEdBZUEsK0NBZkEsR0FnQkEsdUNBaEJBLEdBaUJBLFFBakJBLEdBa0JBLDJCQWxCQSxHQW1CQSwrQ0FuQkEsR0FvQkEseUNBcEJBLEdBcUJBLFFBckJBLEdBc0JBLDJCQXRCQSxHQXVCQSwrQ0F2QkEsR0F3QkEseUNBeEJBLEdBeUJBLFFBekJBLEdBMEJBLFFBMUJBLEdBMkJBLDhCQTNCQSxHQTRCQSwyRUE1QkEsR0E2QkEsUUE3QkEsR0E4QkE7QUFwQ3lCLENBQTdCIiwiZmlsZSI6ImxlZnRtZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiVnVlLmNvbXBvbmVudChcImRjLWxlZnRtZW51XCIsIHtcclxuICBwcm9wczogW1wibGlzdFwiXSxcclxuICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9LFxyXG4gIHRlbXBsYXRlOlxyXG4gICAgXCI8ZGl2PlwiICtcclxuICAgIFwiPGRpdiBjbGFzcz0nY29udGVudC1sJz5cIiArXHJcbiAgICBcIjxkaXYgY2xhc3M9J2NvbnRlbnQtbC1kJz5cIiArXHJcbiAgICBcIjxpbWcgY2xhc3M9J2NvbnRlbnQtbC1kLWltZycgc3JjPSdpbWcvMi5wbmcnPlwiICtcclxuICAgIFwiPGRpdiBjbGFzcz0nY29udGVudC1sLWQtcyc+5o6n5Yi25Y+wPC9kaXY+XCIgK1xyXG4gICAgXCI8L2Rpdj5cIiArXHJcbiAgICBcIjxkaXYgY2xhc3M9J2NvbnRlbnQtbC1kJz5cIiArXHJcbiAgICBcIjxpbWcgY2xhc3M9J2NvbnRlbnQtbC1kLWltZycgc3JjPSdpbWcvMi5wbmcnPlwiICtcclxuICAgIFwiPGRpdiBjbGFzcz0nY29udGVudC1sLWQtcyc+6aCQ57SE6KiC5ZauPC9kaXY+XCIgK1xyXG4gICAgXCI8L2Rpdj5cIiArXHJcbiAgICBcIjxkaXYgY2xhc3M9J2NvbnRlbnQtbC1kJz5cIiArXHJcbiAgICBcIjxpbWcgY2xhc3M9J2NvbnRlbnQtbC1kLWltZycgc3JjPSdpbWcvMi5wbmcnPlwiICtcclxuICAgIFwiPGRpdiBjbGFzcz0nY29udGVudC1sLWQtcyc+5rS+6LuK6Kq/5bqmPC9kaXY+XCIgK1xyXG4gICAgXCI8L2Rpdj5cIiArXHJcbiAgICBcIjxkaXYgY2xhc3M9J2NvbnRlbnQtbC1kJz5cIiArXHJcbiAgICBcIjxpbWcgY2xhc3M9J2NvbnRlbnQtbC1kLWltZycgc3JjPSdpbWcvMi5wbmcnPlwiICtcclxuICAgIFwiPGRpdiBjbGFzcz0nY29udGVudC1sLWQtcyc+5YCL5qGI6LOH5paZPC9kaXY+XCIgK1xyXG4gICAgXCI8L2Rpdj5cIiArXHJcbiAgICBcIjxkaXYgY2xhc3M9J2NvbnRlbnQtbC1kJz5cIiArXHJcbiAgICBcIjxpbWcgY2xhc3M9J2NvbnRlbnQtbC1kLWltZycgc3JjPSdpbWcvMi5wbmcnPlwiICtcclxuICAgIFwiPGRpdiBjbGFzcz0nY29udGVudC1sLWQtcyc+5Y+45qmf6LuK6Lyb566h55CGPC9kaXY+XCIgK1xyXG4gICAgXCI8L2Rpdj5cIiArXHJcbiAgICBcIjxkaXYgY2xhc3M9J2NvbnRlbnQtbC1kJz5cIiArXHJcbiAgICBcIjxpbWcgY2xhc3M9J2NvbnRlbnQtbC1kLWltZycgc3JjPSdpbWcvMi5wbmcnPlwiICtcclxuICAgIFwiPGRpdiBjbGFzcz0nY29udGVudC1sLWQtcyc+57O757Wx6LOH5paZ566h55CGPC9kaXY+XCIgK1xyXG4gICAgXCI8L2Rpdj5cIiArXHJcbiAgICBcIjwvZGl2PlwiICtcclxuICAgIFwiPGRpdiBjbGFzcz0nY29udGVudC1sLWxpc3QnPlwiICtcclxuICAgIFwiPGRpdiBjbGFzcz0nY29udGVudC1sLWxpc3QtZCcgdi1mb3I9JyhpdGVtLGluZGV4KSBpbiBsaXN0Jz57e2l0ZW19fTwvZGl2PlwiICtcclxuICAgIFwiPC9kaXY+XCIgK1xyXG4gICAgXCI8L2Rpdj5cIlxyXG59KTtcclxuIl19