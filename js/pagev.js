Vue.component('page-v', {
  template:'<div class="page-d">\
      <a v-for="(item,index) in pagev" :href="urlex+item">\
	    <div class="page-v-c" :class="{\'page-v-c-on\':item==pagen}">{{item}}</div>\
      </a>\
	  <div style="float:left;margin:0 10px 0 0;">....</div><a :href="urlex+countn"><div class="page-v-c">{{countn}}</div></a>\
	</div>',
  props: ['pagen','countn','urlex'],
  data: function () {
    return {
    }
  },
  computed: {
    pagev:function() {
      var tarr=[]
      var arr=[this.pagen-1,this.pagen,this.pagen+1]
      for(let i in arr) {
        if(arr[i]>0&&arr[i]<=this.countn) {
	      tarr.push(arr[i])
	    }
      }
	  console.log(tarr)
      return tarr;
    }
  }
})