// function check_id(x){
//   let bl=/^[A-Z]\d{9}$/.test(x);
//   return bl;
// }
// function check_phone(x){
//   let bl=/^09\d{8}$/.test(x);
//   return bl;
// }
// function check_email(x){
//   let bl=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(x);
//   return bl;
// }
function check_id(x){
  let bl=/^[A-Z]\d{9}$/.test(x);
  return bl;
}
function check_uid(x) {
  var flag=false
  var arr=[["A",10],["B",11],["C",12],["D",13],["E",14],["F",15],["G",16],["H",17],["I",34],["J",18],["K",19],["L",20],["M",21],["N",22],["O",35],["P",23],["Q",24],["R",25],["S",26],["T",27],["U",28],["V",29],["X",30],["Y",31],["W",32],["Z",33]]
  var num=[1,9,8,7,6,5,4,3,2,1,1]
  var count=0
  if(x.length!=10) {
    return false
  }
  else if(x.substr(1,1)!=1&&x.substr(1,1)!=2) {
    return false
  }
  else {
    for(let i in arr) {
	  if(x[0]==arr[i][0]) {
	    x=arr[i][1]+x.substr(1,10)
	  }
	}
	for(let i in num) {
	  count+=x[i]*num[i]
	}
	if(count%10==0) {
	  flag=true
	}
	return flag
  }
}
function check_id(x) {
  let bl = /^[A-Z]\d{9}$/.test(x);
  return bl;
}
function check_phone(x) {
  let bl = /^09\d{8}$/.test(x);
  return bl;
}
function check_tel(x) {
  let bl = /0\d{9,11}/.test(x);
  return bl;
}
function check_email(x) {
  let bl = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    x
  );
  return bl;
}
function check_name(x) {
  let bl = /^[\u4E00-\u9FA5]{2,5}$/.test(x);
  return bl;
}
