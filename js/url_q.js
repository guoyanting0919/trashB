function url_q(url){
  var obj={}
  url=new URL(url)
  var x=url.search.split("?")[1]
  x=x.split("&")
  for(let i in x) {
    var obj_name=x[i].split("=")[0]
    obj[obj_name]=x[i].split("=")[1]
  }
  console.log(obj)
  return obj
}
