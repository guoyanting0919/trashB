function drew_chart(el,type,larr,d,showl) {  //bar,line,pie
    var obj=""
    if(type=="doughnut") {
        obj={}
    }
    else {
        obj={ 
            yAxes: [{
                ticks: {
                    min: 0,
                }
            }],
            xAxes: [{
                ticks: {
                    min: 0,
                }
            }]
        }
    }
  return new Chart(el, {
    type: type,
    data: {
        labels: larr,  
        datasets:d
    },
    options: {
	  maintainAspectRatio: false,
      scales:obj,
      legend: { display: showl }
	}
  });
}
function drew_chart_remove_lab(el,type,larr,d) {  //bar,line,pie
    return new Chart(el, {
    type: type,
    data: {
        labels: larr,  
        datasets:d
    },
    options: {
	  maintainAspectRatio: false,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        min: 0,
                                    }
                                }],
                                xAxes: [{
                                    ticks: {
                                        min: 0,
                                    }
                                }]
                            },
	  legend: {
        display: false
      }
	}
  });
}
function drew_chart_line(el,type,larr,d) {  //bar,line,pie
    return new Chart(el, {
    type: type,
    data: {
        labels: larr,
        datasets:d
    },
        options: {
            responsive: true,
			maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Grid Line Settings'
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        drawBorder: false,
                        color: ['pink', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']
                    },
                    ticks: {
                        min: 0,
                        stepSize: 10
                    }
                }]
            }
        }
  });
}
/*
[
  {
	label: 'Dataset 2',
    backgroundColor: 'rgb(255, 99, 132)',
    data: arr2
  },
  {
	label: 'Dataset 2',
    backgroundColor: 'rgb(255, 99, 132)',
    data: arr2
  }
]
*/