// This file is intentionally left blank.
// Add your JavaScript code here.

// Get the download button element
let downloadButton = document.getElementById('download');

// Add a click event listener
downloadButton.addEventListener('click', function() {
    // Export the chart
    Highcharts.charts[0].exportChart({
        type: 'image/png',
        filename: 'my-chart'
    });
});


// Get income and expense values for each month
// Get the chart tab element
let chartTab = document.getElementById('chart-tab');

// Add a click event listener
chartTab.addEventListener('click', function() {


    // Clear previous data
    incomeData = [];
    expenseData = [];

    let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    // Fetch new data
    months.forEach(month => {
        let income = document.getElementById(`${month}-income`).value;
        let expense = document.getElementById(`${month}-expense`).value;

        // Convert to number and add to arrays if input is a number
        if (!isNaN(income)) {
            incomeData.push(Number(income));
        }
        if (!isNaN(expense)) {
            expenseData.push(Number(expense));
        }
    });

    // Update the chart
    Highcharts.chart('chart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Your Chart Title'
        },
        xAxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            title: {
                text: 'Months'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Amount'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [{
            name: 'Income',
            data: incomeData
        }, {
            name: 'Expense',
            data: expenseData
        }]
    });
});


