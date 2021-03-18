function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};
function r_color() {
  var arr=[]
  for(let i=0;i<=2;i++) {
    arr.push(getRandom(0,255))
  }
  
  return "rgba("+arr[0]+","+arr[1]+","+arr[2]+",1)"
}