Vue.component("user-header", {
  template:
    '<header class="header">\
        <img class="header_logo" src="img/logo-light.png" alt="" />\
        <div class="header_wrap">\
          <div class="header_block1">\
            <div class="hamburger">\
              <img src="img/icons8-list.png" alt="" />\
            </div>\
            <div class="search">\
              <input type="text" placeholder="快速搜尋訂單編號" v-model="key" @keyup.enter="to_search" />\
              <img src="img/icons8-search.png" alt="" />\
            </div>\
          </div>\
          <div class="header_block3">\
            <a href="./download/ntpc_20210118.apk" download v-if="user.RoleId==30||user.RoleId==34"><img class="header-download" src="img/android_download.png"></a>\
            <a href="#" v-if="user.RoleId==30||user.RoleId==34"><img class="header-download" src="img/ios_download.png"></a>\
            <div class="user_personal">\
              <img :src="user.Pic" alt="" v-if="user.Pic!=\'string\'&&user.Pic!=\'\'" />\
			  <!--<img src="https://images.plurk.com/35XBU0ZlPTWeuC5q5Bph3l.jpg" alt="" v-else />-->\
              <div>\
              <span v-if="user.CarCompanys">{{user.CarCompanys.CompanyName}}</span><span v-if=\'user.RoleId==34\'> ({{vlist.ViolationCount}}點)</span><br>\
              <span>{{user.CompanyUserName}}</span>\
              </div>\
              </div>\
            <a href="#" class="header-logout" @click="login_out">登出</a>\
          </div>\
        </div>\
        <!-- <hr /> -->\
      </header>',
  props: ["user"],
  data: function () {
    return {
      key: "",
      sen: 3600,
      vlist: [],
    };
  },
  mounted: async function () {
    document.body.addEventListener(
      "click",
      () => {
        this.sen = 3600;
      },
      false
    );
    setInterval(() => {
      this.sen--;
      //console.log(this.sen)
      if (this.sen == 0) {
        alert("閒置過久，請重新登入");
        this.login_out();
      }
    }, 1000);
    window.sen = this.sen;
    await this.getVList();
    console.log(this.point);
  },
  methods: {
    login_out: function () {
      localStorage.removeItem("dk2_user");
      location.href = "login1.html";
    },
    to_search: function () {
      location.href =
        "./reservation_order.html?page=1&pmod=1&status=&key=" +
        this.key +
        "&isDescending=false&date=&orderby=3";
    },
    async getVList() {
      await axios
        .get("https://api.donkeymove.com/api/CarCompanys/GetCompanyViolation")
        .then((res) => {
          this.vlist = res.data.response[0];
          console.log("vlist", this.vlist);
        });
    },
  },
});
