(function ($) {

    // BTC Line Chart

    var options = {
        chart: {
            height: 100,
            type: 'line',
            zoom: {
                enabled: false
            },

            toolbar: {
                show: false,
            }
        },
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 80, 10, 41, 35, 51, 49, 62, 69, 91, 80]
        }],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2,
            colors: ["#7391FF"],
        },
        grid: {
            show: false,
        },
        tooltip: {
            enabled: false,
            x: {
                format: "dd MMM yyyy"
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            axisBorder: {
                show: false
            },

            labels: {
                show: false
            }
        },
    }

    var chart1 = new ApexCharts(document.querySelector("#chart1"),options);chart1.render();
    var chart2 = new ApexCharts(document.querySelector("#chart2"),options);chart2.render();
    var chart3 = new ApexCharts(document.querySelector("#chart3"),options);chart3.render();
    var chart4 = new ApexCharts(document.querySelector("#chart4"),options);chart4.render();
    var chart5 = new ApexCharts(document.querySelector("#chart5"),options);chart5.render();
    var chart6 = new ApexCharts(document.querySelector("#chart6"),options);chart6.render();


    var options = {
          series: [{
          name: 'Total Balance',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }],
          chart: {
          type: 'bar',
          height: 350,
            zoom: {
                enabled: false
            },

            toolbar: {
                show: false,
            }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#222FB9'],
        // stroke: {
        //   show: true,
        //   width: 2,
        //   colors: ['#ddd']
        // },
        grid: {
            show: false,
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          axisBorder: {
                show: false
            },
        },
        fill: {
          opacity: 1
        },
        // tooltip: {
        //   y: {
        //     formatter: function (val) {
        //       return "$ " + val + " thousands"
        //     }
        //   }
        // }
        };


    var chart = new ApexCharts(document.querySelector("#wallet-chart"), options);
    chart.render();


})(jQuery);