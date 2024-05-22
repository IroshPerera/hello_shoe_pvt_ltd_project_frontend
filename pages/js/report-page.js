var pieCtx = document.getElementById("invoice_chart"), pieConfig = {
    colors: ['#7638ff', '#ff737b', '#fda600', '#1ec1b0', '#3498DB', '#34495E'],
    series: [55, 40, 20, 10, 30, 20],
    chart: {fontFamily: 'Poppins, sans-serif', height: 350, type: 'donut',},
    labels: [' Manager', 'Stock Keeper', 'Delivery', 'Cashier','Cleaner',' Security Guard' +
    '\n'],
    legend: {show: false},
    responsive: [{breakpoint: 480, options: {chart: {width: 200}, legend: {position: 'bottom'}}}]
};

var columnCtx = document.getElementById("sales_chart"), columnConfig = {
    colors: ['#7638ff'],
    series: [{
        name: "Sales",
        type: "column",
        data: [70, 150]
    },],
    chart: {type: 'bar', fontFamily: 'Poppins, sans-serif', height: 350, toolbar: {show: false}},
    plotOptions: {bar: {horizontal: false, columnWidth: '10%', endingShape: 'rounded'},},
    dataLabels: {enabled: false},
    stroke: {show: true, width: 2, colors: ['transparent']},
    xaxis: {categories: ['Kottawa', 'Malabe'],},
    yaxis: {title: {text: 'Rs.'}},
    fill: {opacity: 1},
    tooltip: {
        y: {
            formatter: function (val) {
                return "Rs" + val
            }
        }
    }
};