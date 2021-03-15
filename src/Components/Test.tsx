import React from 'react'
import { ChartState } from '../GlobalState/ChartState'

interface mapElement {
    added : string
    country : string
    end_year : number
    impact : number
    insight : string
    intensity : number
    likelihood : number
    pestle : string
    published : string
    region : string
    relevance : number
    sector: string
    source : string
    start_year : number
    title: string
    topic: string
    url : string
}

interface mapElementMin {
    impact : number
    intensity : number
    likelihood : number
    relevance : number
    sector: string
}

const Test = () => {

    const {chartData, setChartData} = React.useContext(ChartState)

    const [data, setData] = React.useState<mapElementMin[]>([])
    const [loading, setLoading] = React.useState(false)

    const fetchData = () => {
        fetch("/api").then(rawData => {
            rawData.json().then(jsonData => {
                let array : mapElement[] = jsonData
                console.log(array)
                let arrayMin : mapElementMin[] = array.map((elm,index) => {
                    return {"impact" : elm.impact, "intensity" : elm.intensity, "likelihood" : elm.likelihood, "relevance" : elm.relevance, "sector" : elm.sector  }
                })
                setData(arrayMin)
                setChartData({
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
                        label: '# of Votes',
                        data: [19, 19, 10, 6, 2, 3],
                        borderWidth: 1
                    }]
                })
            })
        })
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    const dataRender = () => {
        return (
            data.map((elm,index) => {
                return <div key={index}>{elm.sector} | {elm.impact} | {elm.likelihood} | {elm.relevance}</div>
            })
        ) 
           
    }

    return (
        <>
        {dataRender()}  
        </>
    )
}

export default Test
