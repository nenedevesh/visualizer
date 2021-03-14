import React from "react"

import {ChartData} from "chart.js"

const initialMapData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 10, 5, 2, 3],
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
}

interface stateShape {
    chartData : ChartData,
    setChartData : React.Dispatch<React.SetStateAction<ChartData>>
}

const nullState = {
    chartData : {},
    setChartData : () => {}
}

const ChartState = React.createContext<stateShape>(nullState)

const  StoreComponent : React.FC = ({children}) => {

    const [chartData,setChartData] = React.useState<ChartData>(initialMapData)

    const initialState = {
        chartData,setChartData
    }
    
    return (
        <ChartState.Provider value={initialState}>
            {children}
        </ChartState.Provider>
    )
}




export {StoreComponent, ChartState}