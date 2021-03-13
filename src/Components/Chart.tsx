import React from 'react'
import Chart from 'chart.js';

const ChartCMP = () => {

    const [graphInitDone, setgraphInitDone] = React.useState(false)

    const initializeGraph = () => {
        var elm  = document.getElementById('myChart') as (HTMLCanvasElement | null) 

        if (elm !== null && !graphInitDone){
            var ctx = elm.getContext('2d');
            if (ctx !== null){
                //eslint-disable-next-line
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
                                'rgba(255, 99, 132, 1)',
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
                setgraphInitDone(true)
            }
        }
    }

    React.useEffect(() => {
        initializeGraph()
    }, [])

    return (
            <canvas id="myChart" className="h-screen" />
    )
}

export default ChartCMP
