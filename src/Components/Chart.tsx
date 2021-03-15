import React from 'react'
import Chart from 'chart.js';
import { ChartState } from '../GlobalState/ChartState';

const ChartCMP = () => {

    //const [myChart, setgraphInitDone] = React.useState(false)

    const [graphInitDone, setgraphInitDone] = React.useState(false)

    const {chartData, setChartData} = React.useContext(ChartState)

    const initializeGraph = () => {
        var elm  = document.getElementById('myChart') as (HTMLCanvasElement | null) 

        if (elm !== null && !graphInitDone){
            var ctx = elm.getContext('2d');
            if (ctx !== null){
                //eslint-disable-next-line
                var myChart = new Chart(ctx, {
                    type: 'radar',
                    data: chartData,
                });
                setgraphInitDone(true)
            }
        }
    }

    const updateGraph = () => {
        var elm  = document.getElementById('myChart') as (HTMLCanvasElement | null) 

        if (elm !== null){
            var ctx = elm.getContext('2d');
            if (ctx !== null){
                //eslint-disable-next-line
                var myChart = new Chart(ctx, {
                    type: 'radar',
                    data: chartData,
                });
                setgraphInitDone(true)
            }
        }
    }

    React.useEffect(() => {
        initializeGraph()
    }, [])

    React.useEffect(() => {
        updateGraph()
    },[chartData])

    return (
            <canvas id="myChart" className="h-screen" />
    )
}

export default ChartCMP
