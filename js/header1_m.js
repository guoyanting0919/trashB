Vue.component('user-header-m', {
    template: '<div><header class="mobile-header">\
      <a href="#" class="menu-burger-icon" @click="open=!open">\
        <img src="img/icon_mobile-menu.svg" alt="">\
      </a>\
      <img src="img/logo-light.png" alt="" class="header_logo">\
    </header>\
    <nav class="mobile-menu" :class="{\'open\':open}">\
    <ul class="menu-list">\
      <li class="search-bar">\
        <div class="search">\
          <input type="text" placeholder="快速搜尋訂單編號">\
          <img src="img/icons8-search.png" alt="">\
        </div>\
      </li>\
      <li class="category order" v-for="(item,index) in list" :class="{\'active\':item.open}" @click="item.open=!item.open" v-if="get_index(item.id)">\
        <a href="#">\
          <img src="img/icons8-combo_chartACTIVE.png" alt="" class="mobile-menu-icon">\
          <span class="item-title">{{item.title}}</span>\
        </a>\
        <ul class="second-list" v-for="(item2,index2) in item.c_list" v-if="get_index(item.id)">\
          <li class="second-item today">\
            <a :href="item2.url">\
              <img src="img/icons8-sine_filledActive.png" alt="" class="mobile-menu-icon">\
              <span class="item-title">{{item2.title}}</span>\
            </a>\
          </li>\
        </ul>\
      </li>\
      <li class="app-download first">\
        <a href="#">\
          <img src="img/ios_download.png" alt="" class="app-download__img ios">\
        </a>\
      </li>\
      <li class="app-download">\
        <a href="#">\
          <img src="img/android_download.png" alt="" class="app-download__img android">\
        </a>\
      </li>\
    </ul>\
    <div class="mobile-menu__logout">\
      <span>登出</span>\
    </div>\
  </nav></div>',
    props: ['mm','mc','cc','menu'],
    data: function () {
      return {
        key:"",
        open:false,
        list:[
          {title:"控制台",open:false,id:1,c_list:[
            {title:"本日接送狀況",id:2,url:"./console1.html"},
            {title:"車輛使用率比較表",id:3,url:"./console2.html"},
            {title:"營收報表",id:4,url:"./console4.html"},
            {title:"出發區域比率",id:5,url:"./console5.html"},
            {title:"返回區域比率",id:6,url:"./console8.html"},
            {title:"區域月報表",id:7,url:"./console6.html"},
            {title:"醫療院所比例",id:38,url:"./hospital.html"},
          ]},
          {title:"預約訂單",open:false,id:8,c_list:[
            {title:"全部任務",id:9,url:"./reservation_order.html?page=1&pmod=1&status=&key=&isDescending=true"},
            {title:"今日任務",id:10,url:"./reservation_order.html?page=1&pmod=2&status=&key=&isDescending=true"},
            {title:"本周任務",id:11,url:"./reservation_order.html?page=1&pmod=3&status=&key=&isDescending=true"},
            {title:"本月任務",id:12,url:"./reservation_order.html?page=1&pmod=4&status=&key=&isDescending=true"},
            {title:"今年任務",id:13,url:"./reservation_order.html?page=1&pmod=5&status=&key=&isDescending=true"},
          ]},
          {title:"個案資料",open:false,id:17,c_list:[
            {title:"全部個案",id:18,url:"./personal.html?page=1&key=&isDescending=true&pMode=1&orderby="},
            {title:"自費個案",id:20,url:"./personal.html?page=1&key=&isDescending=true&pMode=3&orderby="},
            {title:"公費個案",id:21,url:"./personal.html?page=1&key=&isDescending=true&pMode=4&orderby="},
            {title:"結案",id:22,url:"./personal.html?page=1&key=&isDescending=true&pMode=5&orderby="},
          ]},
          {title:"司機車輛管理",open:false,id:23,c_list:[
            {title:"駕駛資料",id:27,url:"./driverVehicle_driver.html?key=&orderby=&isDescending=true&status=&compId=&page=1"},
            {title:"車輛資料",id:24,url:"./driverVehicle.html?page=1&carType=0&Status=&key=&isDescending=true&compId=&orderby="},
            {title:"車輛保養紀錄",id:26,url:"./driverVehicle_maintenance.html?id=&compId=&page=1"},
          ]},
          {title:"系統資料管理",open:false,id:29,c_list:[
            {title:"補助車資參數",id:30,url:"./s_6.html"},
            {title:"司機車輛設定",id:31,url:"./s_2.html"},
            {title:"營運單位設定",id:32,url:"./s_3Before.html#/"},
            {title:"醫療院所管理",id:33,url:"./s_4.html?county=&key=&page=1"},
            {title:"系統管理員設定",id:34,url:"./s_5.html?key=&page=1"},
            {title:"A單位一覽表",id:37,url:"./A_comp.html?key=&page=1"},
          ]},
        ]
      }
    },
    mounted:async function (){

    },
    methods: {
      login_out:function() {
        localStorage.removeItem('dk2_user');
        location.href = 'login1.html';
      },
      to_search:function() {
        location.href = './reservation_order.html?page=1&pmod=1&status=&key='+this.key+"&isDescending=false";
      },
	  get_index:function(x) {
		var flag=false
		for(let i in this.menu) {
		  if(x==this.menu[i]) {
		    flag=true
			break;
		  }
		}
		return flag
	  },
	  delay:function(x) {
	    return new Promise(function(resolve) {
          setTimeout(()=> {
            resolve();
          }, x);
        });
	  }
    }
  })