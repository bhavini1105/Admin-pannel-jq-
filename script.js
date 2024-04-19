
// 
var visible = false;
function sideCustomization() {
  visible = !visible;

  if (visible) {
    $("#content,#nav").css("width", "100%");
    $("#module").css({
      left: "0px",
      top: "55px",
      width: "100%",
      height: "95vh",
      position: "fixed",
    });
    $(".lg").css({ left: "40%", top: "40%" });
  }
   else {
    $("#content,#nav").css("width", "80%");
    $("#module").css({
      left: "151px",
      top: "55px",
      width: "80%",
      height: "90vh",
    });
    $(".lg").css({ left: "47%", top: "30%" });
   }
}

// 
// var visible = false;

// function sideCustomization() {
//   visible = !visible;
//   $("#sidebar").toggle(50, function () {
//     if (visible) {
//       $("#content,#content>div,#nav").css("width", "100%");
//     } else {
//       $("#content,#content>div,#nav").css("width", "80%");
//     }
//   });
// }

$("#content>div").hide()
$("#nav").show()
$("#dashboard").show()

$("#sidebar>button").on("click",function(){
    $("#content>div").hide()
    $($(this).attr("for")).show()
    $("#nav").show()
    // $("#modal").hide()
})

// $("#hember").on("click",function(){
//   sideCustomization();
// })

// hember1

$("#hember").on("click",function(){
  $("#sidebar").toggle(10);
 sideCustomization();
})

// extra

$("#register").hide()

$(".toggle-btn1").on("click",function(){
  $("#register").toggle("1",function(){
      $("#login").hide()
      $("#register").css("left","50px")
      $("span").css("Buttom","150px")
      // $(".toggle-btn1").css("backgroundColor"," lightcoral")
      $(".toggle-btn1").css("borderRadius"," 30px")
  })
})

$(".toggle-btn").on("click",function(){
  $("#login").toggle("1",function(){
      $("#register").hide()
      $("#login").css("left","50px")
      // $(".toggle-btn").css("backgroundColor"," lightcoral")
      $(".toggle-btn").css("borderRadius"," 30px")
  })
})

// extra
// pop-up form


$("#log-form").on("click",function(){
  console.log("hello")
    $("#module").toggle()
})

// Counter

$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing:"swing",
        step:function (now) {
          now = Number(Math.ceil(now)).toLocaleString('en');
          $(this).text(now);
        },
      }
    );
});


// 

// Appax chart

var options = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };
  
  var chart = new ApexCharts(document.querySelector("#corner"), options);
  chart.render();
  
  // achart-2
  
  var options = {
    series: [{
    name: 'Inflation',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
  }],
    chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: 'top',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  title: {
    text: 'Monthly Inflation in Argentina, 2002',
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      color: '#444'
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#corner-1"), options);
  chart.render();

//   apax chart over

// chart

var  options = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight'
},
title: {
  text: 'Product Trends by Month',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
}
};

var chart = new ApexCharts(document.querySelector("#chart-1"), options);
chart.render();

// 2

      
var options = {
  series: [{
  name: 'north',
  data: [{
      x: 1996,
      y: 322
    },
    {
      x: 1997,
      y: 324
    },
    {
      x: 1998,
      y: 329
    },
    {
      x: 1999,
      y: 342
    },
    {
      x: 2000,
      y: 348
    },
    {
      x: 2001,
      y: 334
    },
    {
      x: 2002,
      y: 325
    },
    {
      x: 2003,
      y: 316
    },
    {
      x: 2004,
      y: 318
    },
    {
      x: 2005,
      y: 330
    },
    {
      x: 2006,
      y: 355
    },
    {
      x: 2007,
      y: 366
    },
    {
      x: 2008,
      y: 337
    },
    {
      x: 2009,
      y: 352
    },
    {
      x: 2010,
      y: 377
    },
    {
      x: 2011,
      y: 383
    },
    {
      x: 2012,
      y: 344
    },
    {
      x: 2013,
      y: 366
    },
    {
      x: 2014,
      y: 389
    },
    {
      x: 2015,
      y: 334
    }
  ]
}, {
  name: 'south',
  data: [
    {
      x: 1996,
      y: 162
    },
    {
      x: 1997,
      y: 90
    },
    {
      x: 1998,
      y: 50
    },
    {
      x: 1999,
      y: 77
    },
    {
      x: 2000,
      y: 35
    },
    {
      x: 2001,
      y: -45
    },
    {
      x: 2002,
      y: -88
    },
    {
      x: 2003,
      y: -120
    },
    {
      x: 2004,
      y: -156
    },
    {
      x: 2005,
      y: -123
    },
    {
      x: 2006,
      y: -88
    },
    {
      x: 2007,
      y: -66
    },
    {
      x: 2008,
      y: -45
    },
    {
      x: 2009,
      y: -29
    },
    {
      x: 2010,
      y: -45
    },
    {
      x: 2011,
      y: -88
    },
    {
      x: 2012,
      y: -132
    },
    {
      x: 2013,
      y: -146
    },
    {
      x: 2014,
      y: -169
    },
    {
      x: 2015,
      y: -184
    }
  ]
}],
  chart: {
  type: 'area',
  height: 350
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight'
},

title: {
  text: 'Area with Negative Values',
  align: 'left',
  style: {
    fontSize: '14px'
  }
},
xaxis: {
  type: 'datetime',
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  }
},
yaxis: {
  tickAmount: 4,
  floating: false,

  labels: {
    style: {
      colors: '#8e8da4',
    },
    offsetY: -7,
    offsetX: 0,
  },
  axisBorder: {
    show: false,
  },
  axisTicks: {
    show: false
  }
},
fill: {
  opacity: 0.5
},
tooltip: {
  x: {
    format: "yyyy",
  },
  fixed: {
    enabled: false,
    position: 'topRight'
  }
},
grid: {
  yaxis: {
    lines: {
      offsetX: -30
    }
  },
  padding: {
    left: 20
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-2"), options);
chart.render();

// 3 chart

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'polarArea',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();

// 4 chart

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions-1'),
    {
      type: 'radar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();

// chart

// celender

var calendarInstance1 = new calendarJs( "calendar-1", {
  manualEditingEnabled: true
  // All your options can be set here
} );

// OR
var calendarElement = document.getElementById( "calendar-1" );
var calendarInstance2 = new calendarJs( calendarElement, {
  manualEditingEnabled: true
  // All your options can be set here
} );

// celender over