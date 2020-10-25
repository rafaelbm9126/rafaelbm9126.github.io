var english = {
    chart: {
        height: 180,
        type: 'radialBar',
        foreColor: '#fff'
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    series: [40],
    labels: ['English'],
    theme: {
        monochrome: {
            enabled: true,
            color: '#ff632a',
            shadeTo: 'light',
            shadeIntensity: 0.65,
        }
    },
}

var charte = new ApexCharts(
    document.querySelector("#chart-english"),
    english
);

charte.render();

var spanish = {
    chart: {
        height: 180,
        type: 'radialBar',
        foreColor: '#fff'
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    series: [100],
    labels: ['Spanish'],
    theme: {
        monochrome: {
            enabled: true,
            color: '#ff632a',
            shadeTo: 'light',
            shadeIntensity: 0.65,

        }
    }
}

var charts = new ApexCharts(
    document.querySelector("#chart-spanish"),
    spanish
);

charts.render();

var backend = {
    chart: {
        height: 180,
        type: 'radialBar',
        foreColor: '#fff'
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    series: [76],
    labels: ['Backend'],
    theme: {
        monochrome: {
            enabled: true,
            color: '#ff632a',
            shadeTo: 'light',
            shadeIntensity: 0.65,

        }
    }
}

var chartb = new ApexCharts(
    document.querySelector("#chart-backend"),
    backend
);

chartb.render();

var frontend = {
    chart: {
        height: 180,
        type: 'radialBar',
        foreColor: '#fff'
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    series: [92],
    labels: ['Frontend'],
    theme: {
        monochrome: {
            enabled: true,
            color: '#ff632a',
            shadeTo: 'light',
            shadeIntensity: 0.65,

        }
    }
}

var chartf = new ApexCharts(
    document.querySelector("#chart-frontend"),
    frontend
);

chartf.render();

var native = {
    chart: {
        height: 180,
        type: 'radialBar',
        foreColor: '#fff'
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    series: [40],
    labels: ['Native'],
    theme: {
        monochrome: {
            enabled: true,
            color: '#ff632a',
            shadeTo: 'light',
            shadeIntensity: 0.65,

        }
    }
}

var chartn = new ApexCharts(
    document.querySelector("#chart-native"),
    native
);

chartn.render();