async function get_left_menu(x,callback) {
  var arr=""
  await put_header()
  await axios.get("https://api.donkeymove.com/api/Permission/GetMenuIds?uid="+x)
  .then(async res => {
	  if(res.data.success) {
	    arr=res.data.response
	    callback(arr)
	  }
  })
  .catch (async err=>{
    await RefreshToken()
      window.location.reload()
  })
}
async function RefreshToken() {
  var obj=JSON.parse(localStorage.dk_token)
  await axios.get("https://api.donkeymove.com/api/CompanyUser/RefreshToken/api/CompanyRefreshToken?token="+obj.token)
  .then(async res => {
	localStorage.dk_token=JSON.stringify({token:res.data.token});
    console.log("已刷新token")
	console.log(JSON.parse(localStorage.dk_token).token)
  })
}
async function put_header() {
  await axios.interceptors.request.use(
    config => {
	  if(localStorage.dk_token) {
		var obj=JSON.parse(localStorage.dk_token)
        config.headers.Authorization ="Bearer "+obj.token;
		console.log("已放置token")
		console.log(obj.token)
		//window.location.reload()
      }
      return config;
  });  
}
function delay(x) {
  return new Promise(function(resolve) {
    setTimeout(()=> {
      resolve();
    }, x);
  });
}