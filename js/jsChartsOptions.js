var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var dataa = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: [
            'dimgrey',
            'lightgrey'],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};
var donutEl = document.getElementById("donut").getContext("2d");
var datax = {
    datasets: [
        {
            fill: true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'],
            data: [25, 75, 87],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ]
        }
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};
var donut = new Chart(donutEl, {
    type: 'doughnut',
    data: datax
});





var popCanvas = document.getElementById("popChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var popData = {
datasets: [{
label: ['Datos en Burbuja'],
data: [{
x: 100,
y: 0,
r: 10
}, {
x: 60,
y: 30,
r: 20
}, {
x: 40,
y: 60,
r: 25
}, {
x: 80,
y: 80,
r: 50
}, {
x: 20,
y: 30,
r: 25
}, {
x: 0,
y: 100,
r: 5
}],
backgroundColor: "rgba(25,25,25,0.0)",
hoverBackgroundColor: "rgba(25,25,25,0.0)",
hoverBorderColor: "#6fffe9",
hoverBorderWidth: 5,
borderColor : '#6fffe9',
hoverRadius: 5
}]
};

var bubbleChart = new Chart(popCanvas, {
type: 'bubble',
data: popData
});