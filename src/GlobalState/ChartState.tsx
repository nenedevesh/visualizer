import React from "react"

import {ChartData} from "chart.js"

const initialMapData = {
    labels: [
        "Energy",
        "Environment",
        "Government",
        "Aerospace & defence",
        "Manufacturing",
        "Retail",
        "Financial services",
        "Support services",
        "Information Technology",
        "Healthcare",
        "Food & agriculture",
        "Automotive",
        "Tourism & hospitality",
        "Construction",
        "Security",
        "Transport",
        "Water",
        "Media & entertainment"
    ],
    datasets: [{
        label: 'Relevance',
        data: [12, 19, 10, 5, 2, 3],
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