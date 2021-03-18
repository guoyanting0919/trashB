function ConvertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    var title=Object.keys(array[0])
	for(let i=0;i<title.length;i++) {
        str+=title[i]+","
	}
	str +='\r\n';	
    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if(String(array[i][index]).indexOf("#")!=-1) continue;
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}
async function convertAndExport(obj) {
    var csv = ConvertToCSV(obj)
    await delay(5000)
    var fileName = "CSV";
    var uri = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURI(csv); //encodeURI用來轉為UTF-8編碼
    await delay(1000)
    var link = document.createElement("a");
	var body=document.querySelectorAll("body")[0];
    body.appendChild(link);
    link.download = fileName + ".xls";
    link.href = uri;
    link.click();
    link.remove();
}
function delay(x) {
    return new Promise(function(resolve) {
      setTimeout(()=> {
        resolve();
      }, x);
    });
  }
  