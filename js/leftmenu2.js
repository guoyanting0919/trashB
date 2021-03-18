Vue.component('left-menu', {
  template: '<nav class="nav">\
          <!-- 父選單 -->\
          <div class="nav_fathers">\
            <div @click="selectNav(1);openNav2();" class="nav_father" :class="{\'active\':mc==1}" v-if="get_index(1)!=-1">\
              <img v-if="mc!=1" class="noActivePNG" src="img/icons8-combo_chart.png" alt="" />\
              <img v-if="mc==1" class="ActivePNG" src="img/icons8-combo_chartACTIVE.png" alt="" />\
              <span>控制台</span>\
            </div>\
            <div @click="selectNav(2);openNav2();" class="nav_father" :class="{\'active\':mc==2}" v-if="get_index(8)!=-1">\
              <img v-if="mc!=2" src="img/icons8-check.png" alt="" />\
              <img v-if="mc==2" src="img/icons8-checkACTIVE.png" alt="" />\
              <span>預約訂單</span>\
            </div>\
            <div @click="selectNav(3);openNav2();" class="nav_father" :class="{\'active\':mc==3}" v-if="get_index(14)!=-1">\
              <img v-if="mc!=3" src="img/icons8-car_rental.png" alt="" />\
              <img v-if="mc==3" src="img/icons8-car_rentalACTIVE.png" alt="" />\
              <span>派車調度</span>\
            </div>\
            <div @click="selectNav(4);openNav2();" class="nav_father" :class="{\'active\':mc==4}" v-if="get_index(17)!=-1">\
              <img v-if="mc!=4" src="img/icons8-user_folder.png" alt="" />\
              <img v-if="mc==4" src="img/icons8-user_folderACTIVE.png" alt="" />\
              <span>個案資料</span>\
            </div>\
            <div @click="selectNav(5);openNav2();" class="nav_father" :class="{\'active\':mc==5}" v-if="get_index(23)!=-1">\
              <img v-if="mc!=5" src="img/icons8-time_card_filled.png" alt="" />\
              <img v-if="mc==5" src="img/icons8-time_card_filled.png" alt="" />\
              <span>司機車輛管理</span>\
            </div>\
            <div @click="selectNav(6);openNav2();" class="nav_father" :class="{\'active\':mc==6}" v-if="get_index(29)!=-1">\
              <img v-if="mc!=6" src="img/icons8-maintenance.png" alt="" />\
              <img v-if="mc==6" src="img/icons8-maintenanceACTIVE.png" alt="" />\
              <span>系統資料管理</span>\
            </div>\
            <div @click="to_qa()" class="nav_father" :class="{\'active\':mc==7}" v-if="get_index(29)!=-1">\
              <img v-if="mc!=7" src="img/icons8-faq.png" alt="" />\
              <img v-if="mc==7" src="img/icons8-faq.png" alt="" />\
              <span>常見問題</span>\
            </div>\
          </div>\
          <!-- 子選單1 -->\
          <div class="nav_sonsArrow " :class="{\'active\': isLeft}">\
            <div class="nav_sons">\
              <!-- 01 控制台-->\
              <div v-if="nav_status=== 1" class="nav_son_absolute">\
                <div class="nav_son" :class="{\'active\':cc==11}" v-if="get_index(2)!=-1">\
                  <a href="./console1.html">\
                    <img v-if="cc!=11" src="img/icons8-sine_filledcopy.svg" alt="" />\
                    <img v-if="cc==11" src="img/icons8-sine_filledActive.png" alt="" />\
                    <span>本日接送狀況</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==12}" v-if="get_index(3)!=-1">\
                  <a href="./console2.html">\
                    <img v-if="cc!=12" src="img/icons8-weak_financial_growth.png" alt="" />\
                    <img v-if="cc==12" src="img/icons8-weak_financial_growthActive.png" alt="" />\
                    <span>車輛使用率比較表</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==13}" v-if="get_index(4)!=-1">\
                  <a href="./console4.html">\
                    <img v-if="cc!=13" src="img/icons8-point_objects.png" alt="" />\
                    <img v-if="cc==13" src="img/icons8-point_objectsActive.png" alt="" />\
                    <span>營收報表</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==15}" v-if="get_index(5)!=-1">\
                  <a href="./console5.html">\
                    <img v-if="cc!=15" src="img/icons8-map_marker.png" alt="" />\
                    <img v-if="cc==15" src="img/icons8-map_markerActive.png" alt="" />\
                    <span>出發區域比率</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==15}" v-if="get_index(7)!=-1">\
                  <a href="./console8.html">\
                    <img v-if="cc!=15" src="img/icons8-minus_1year_filled.png" alt="" />\
                    <img v-if="cc==15" src="img/icons8-minus_1year_filledActive.png" alt="" />\
                    <span>返回區域比率</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==16}" v-if="get_index(6)!=-1">\
                  <a href="./console6.html">\
                    <img v-if="cc!=16" src="img/icons8-treasure_map.png" alt="" />\
                    <img v-if="cc==16" src="img/icons8-treasure_mapActive.png" alt="" />\
                    <span>區域月報表</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==17}" v-if="get_index(38)!=-1">\
                  <a href="./hospital.html">\
                    <img v-if="cc!=17" src="img/icons8-treasure_map.png" alt="" />\
                    <img v-if="cc==17" src="img/icons8-treasure_mapActive.png" alt="" />\
                    <span>醫療院所比例</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==18}" v-if="get_index(41)!=-1">\
                  <a href="./WrongStatus.html" target="_blank">\
                    <img v-if="cc!=18" src="img/icons8-treasure_map.png" alt="" />\
                    <img v-if="cc==18" src="img/icons8-treasure_mapActive.png" alt="" />\
                    <span>系統操作問題單</span>\
                  </a>\
                </div>\
              </div>\
              <!-- 02 預約訂單 -->\
              <div v-else-if="nav_status=== 2" class="nav_son_absolute">\
                <div class="nav_son" :class="{\'active\':cc==21}" v-if="get_index(9)!=-1">\
                  <a href="./reservation_order.html?page=1&pmod=1&status=&key=&date=&isDescending=true&orderby=3">\
                    <img v-if="cc!=21" src="img/icons8-administrative_tools.png" alt="" />\
                    <img v-if="cc==21" src="img/icons8-administrative_toolsACTIVE.png" alt="" />\
                    <span>全部資料</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==22}" v-if="get_index(10)!=-1">\
                  <a href="./reservation_order.html?page=1&pmod=2&status=&key=&date=&isDescending=true&orderby=3">\
                    <img v-if="cc!=22" src="img/icons8-edit_property.png" alt="" />\
                    <img v-if="cc==22" src="img/icons8-edit_propertyACTIVE.png" alt="" />\
                    <span>今日任務</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==23}" v-if="get_index(11)!=-1">\
                  <a href="./reservation_order.html?page=1&pmod=3&status=&key=&date=&isDescending=true&orderby=3">\
                    <img v-if="cc!=23" src="img/icons8-training.png" alt="" />\
                    <img v-if="cc==23" src="img/icons8-trainingACTIVE.png" alt="" />\
                    <span>本週任務</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==24}" v-if="get_index(12)!=-1">\
                  <a href="./reservation_order.html?page=1&pmod=4&status=&key=&date=&isDescending=true&orderby=3">\
                    <img v-if="cc!=24" src="img/icons8-planner.png" alt="" />\
                    <img v-if="cc==24" src="img/icons8-plannerACTIVE.png" alt="" />\
                    <span>本月任務</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==25}" v-if="get_index(13)!=-1">\
                  <a href="./reservation_order.html?page=1&pmod=5&status=&key=&date=&isDescending=true&orderby=3">\
                    <img v-if="cc!=25" src="img/icons8-list.png" alt="" />\
                    <img v-if="cc==25" src="img/icons8-listACTIVE.png" alt="" />\
                    <span>今年任務</span>\
                  </a>\
                </div>\
              </div>\
              <!-- 03 派車調度 -->\
              <div v-else-if="nav_status=== 3" class="nav_son_absolute">\
                <div class="nav_son" :class="{\'active\':cc==31}" v-if="get_index(15)!=-1">\
                  <a href="./car_1.html">\
                    <img v-if="cc!=31" src="img/icons8-bus_stop_filled.png" alt="" />\
                    <img v-if="cc==31" src="img/icons8-bus_stop_filledACTIVE.png" alt="" />\
                    <span>調度單搜尋</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==32}" v-if="get_index(16)!=-1">\
                  <a href="./car_4_new.html">\
                    <img v-if="cc!=32" src="img/icons8-property_time.png" alt="" />\
                    <img v-if="cc==32" src="img/icons8-property_timeACTIVE.png" alt="" />\
                    <span>調度控制台</span>\
                  </a>\
                </div>\
                <!--<div class="nav_son" :class="{\'active\':cc==39}" v-if="get_index(39)!=-1">\
                  <a href="./car_5.html?page=1&pmod=1&status=0&key=">\
                    <img v-if="cc!=39" src="img/icons8-property_time.png" alt="" />\
                    <img v-if="cc==39" src="img/icons8-property_timeACTIVE.png" alt="" />\
                    <span>調度控制台 - 列表式</span>\
                  </a>\
                </div>-->\
                <div class="nav_son" :class="{\'active\':cc==40}" v-if="get_index(40)!=-1">\
                  <a href="./car_6.html?page=1&pmod=1&status=&key=">\
                    <img v-if="cc!=40" src="img/icons8-property_time.png" alt="" />\
                    <img v-if="cc==40" src="img/icons8-property_timeACTIVE.png" alt="" />\
                    <span>調度控制台 - 表格式</span>\
                  </a>\
                </div>\
              </div>\
              <!-- 04 個案資料-->\
              <div v-else-if="nav_status=== 4" class="nav_son_absolute">\
                <div class="nav_son" :class="{\'active\':cc==41}" v-if="get_index(18)!=-1">\
                  <a href="./personal.html?page=1&key=&isDescending=true&pMode=1&orderby=">\
                    <img v-if="cc!=41" src="img/icons8-product_documents.png" alt="" />\
                    <img v-if="cc==41" src="img/icons8-product_documentsACTIVE.png" alt="" />\
                    <span>全部個案資料</span>\
                  </a>\
                </div>\
                <!--<div class="nav_son" :class="{\'active\':cc==42}" v-if="get_index(19)!=-1">\
                  <a href="./personal.html?page=1&key=&isDescending=true&pMode=2&orderby=">\
                    <img v-if="cc!=42" src="img/icons8-customer_support_filled.png" alt="" />\
                    <img v-if="cc==42" src="img/icons8-customer_support_filledACTIVE.png" alt="" />\
                    <span>新申請未審核</span>\
                  </a>\
                </div>-->\
                <div class="nav_son" :class="{\'active\':cc==43}" v-if="get_index(20)!=-1">\
                  <a href="./personal.html?page=1&key=&isDescending=true&pMode=3&orderby=">\
                    <img v-if="cc!=43" src="img/icons8-average_2.png" alt="" />\
                    <img v-if="cc==43" src="img/icons8-average_2ACTIVE.png" alt="" />\
                    <span>自費個案</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==44}" v-if="get_index(21)!=-1">\
                  <a href="./personal.html?page=1&key=&isDescending=true&pMode=4&orderby=">\
                    <img v-if="cc!=44" src="img/icons8-pixel_heart.png" alt="" />\
                    <img v-if="cc==44" src="img/icons8-pixel_heartACTIVE.png" alt="" />\
                    <span>公費個案</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==45}" v-if="get_index(22)!=-1">\
                  <a href="./personal.html?page=1&key=&isDescending=true&pMode=5&orderby=">\
                    <img v-if="cc!=45" src="img/icons8-swithching_between_tabs.png" alt="" />\
                    <img v-if="cc==45" src="img/icons8-swithching_between_tabsACTIVE.png" alt="" />\
                    <span>結案</span>\
                  </a>\
                </div>\
              </div>\
              <!-- 05 司機車輛管理-->\
              <div v-else-if="nav_status=== 5" class="nav_son_absolute">\
              <div class="nav_son" :class="{\'active\':cc==54}" v-if="get_index(27)!=-1">\
              <a href="./driverVehicle_driver.html?key=&orderby=&isDescending=true&status=&compId=&page=1">\
                <img v-if="cc!=54" src="img/icons8-driver_filled.png" alt="" />\
                <img v-if="cc==54" src="img/icons8-driver_filledACTIVE.png" alt="" />\
                <span>駕駛資料</span>\
              </a>\
            </div>\
            <div class="nav_son" :class="{\'active\':cc==55}" v-if="get_index(28)!=-1&&false">\
              <a href="./driverVehicle_bodyHeart.html?driverId=0&page=1">\
                <img v-if="cc!=55" src="img/icons8-timeline_week_filled.png" alt="" />\
                <img v-if="cc==55" src="img/icons8-timeline_week_filledACTIVE.png" alt="" />\
                <span>身心檢查紀錄</span>\
              </a>\
            </div>\
                <div class="nav_son" :class="{\'active\':cc==51}" v-if="get_index(24)!=-1">\
                  <a href="./driverVehicle.html?page=1&carType=0&Status=&key=&isDescending=true&compId=&orderby=">\
                    <img v-if="cc!=51" src="img/icons8-car_filled.png" alt="" />\
                    <img v-if="cc==51" src="img/icons8-time_card_filledACTIVE.png" alt="" />\
                    <span>車輛資料</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==52}" v-if="get_index(25)!=-1&&false">\
                  <a href="./driverVehicle_examine.html?page=1">\
                    <img v-if="cc!=52" src="img/icons8-car_service_filled.png" alt="" />\
                    <img v-if="cc==52" src="img/icons8-car_service_filledACTIVE.png" alt="" />\
                    <span>車輛檢查紀錄</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==53}" v-if="get_index(26)!=-1">\
                  <a href="./driverVehicle_maintenance.html?id=&compId=&page=1">\
                    <img v-if="cc!=53" src="img/icons8-maintenance.png" alt="" />\
                    <img v-if="cc==53" src="img/icons8-maintenanceACTIVE.png" alt="" />\
                    <span>車輛保養紀錄</span>\
                  </a>\
                </div>\
              </div>\
              <!-- 06 系統資料管理-->\
              <div v-else-if="nav_status=== 6" class="nav_son_absolute">\
                <div class="nav_son" :class="{\'active\':cc==62}" v-if="get_index(30)!=-1">\
                  <a href="./s_6.html">\
                    <img v-if="cc!=62" src="img/icons8-diamond_care_1.png" alt="" />\
                    <img v-if="cc==62" src="img/icons8-diamond_care_1ACTIVE.png" alt="" />\
                    <span>補助車資參數</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==63}" v-if="get_index(31)!=-1">\
                  <a href="./s_2.html">\
                    <img v-if="cc!=63" src="img/icons8-car_service.png" alt="" />\
                    <img v-if="cc==63" src="img/icons8-car_serviceACTIVE.png" alt="" />\
                    <span>司機車輛設定</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==64}" v-if="get_index(32)!=-1">\
                  <a href="./s_3Before.html">\
                    <img v-if="cc!=64" src="img/icons8-enterprise_resource_planning_filled.png" alt="" />\
                    <img v-if="cc==64" src="img/icons8-enterprise_resource_planning_filledACTIVE.png" alt="" />\
                    <span>營運單位設定</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==65}" v-if="get_index(33)!=-1">\
                  <a href="./s_4.html?county=&key=&page=1">\
                    <img v-if="cc!=65" src="img/icons8-clinic.png" alt="" />\
                    <img v-if="cc==65" src="img/icons8-clinicACTIVE.png" alt="" />\
                    <span>醫療院所管理</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==66}" v-if="get_index(34)!=-1">\
                  <a href="./s_5.html?key=&page=1">\
                    <img v-if="cc!=66" src="img/icons8-groups.png" alt="" />\
                    <img v-if="cc==66" src="img/icons8-groupsACTIVE.png" alt="" />\
                    <span>系統管理員設定</span>\
                  </a>\
                </div>\
                <div class="nav_son" :class="{\'active\':cc==67}" v-if="get_index(37)!=-1">\
                  <a href="./A_comp.html?key=&page=1">\
                    <img v-if="cc!=67" src="img/icons8-groups.png" alt="" />\
                    <img v-if="cc==67" src="img/icons8-groupsACTIVE.png" alt="" />\
                    <span>A單位一覽表</span>\
                  </a>\
                </div>\
              </div>\
              <div class="nav_arrow_button" @click="openNav">\
                <img src="img/icons8-forward.png" alt="" />\
              </div>\
            </div>\
            <!-- <div class="nav_arrow">\
                <div class="nav_arrow_button">\
                  <img src="img/icons8-forward.png" alt="">\
                </div>\
              </div> -->\
          </div>\
          <!-- 陰影 button -->\
          <div>\
            <div></div>\
            <div></div>\
            <div></div>\
          </div>\
        </nav>',
  props: ['mm','mc','cc','menu'],
  data: function () {
    return {
          nav_status: 1,
          isLeft: true,
          isRotate: false,
    }
  },
  mounted:async function (){
    axios.interceptors.response.use(null, (error) => {
      if (error.config && error.response&&error.response.status==500) {
        return axios.request(error.config);
      }
      return Promise.reject(error);
    });
	this.$forceUpdate()
  },
  methods: {
		selectNav:function(number) {
            this.nav_status = number;
          },
          openNav2: function() {
            this.isLeft = false;
            this.isMainleft = false;
		    console_main.isLeft = false;
		    console_main.isMainleft = false;
			//v.isLeft = false;
		    //v.isMainleft = false;
		  },

      openNav: function() {
		this.nav_status=this.mc
        this.isLeft = !this.isLeft;
        this.isMainleft = !this.isMainleft;
		console_main.isLeft = !console_main.isLeft;
		console_main.isMainleft = !console_main.isMainleft;
		//v.isLeft = !v.isLeft;
		//v.isMainleft = !v.isMainleft;
	  },
	  get_index:function(x) {
		var num=-1
		for(let i in this.menu) {
		  if(x==this.menu[i]) {
		    num=i
			break;
		  }
		}
		return num
    },
    to_qa:function() {
      location.href="./QA.html"
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