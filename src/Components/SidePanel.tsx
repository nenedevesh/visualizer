import React from "react"
import noUiSlider from 'nouislider'

const panelWidth = 96

const SidePanel = () => {

    const [doneInit, setDoneInit] = React.useState(false)

    const generateNoUiSlider = () => {      
       
        let slider = document.getElementById('slider')
        
        if (slider !== null && !doneInit){
            noUiSlider.create(slider, {
                start: [2020, 2040],
                connect: true,
                range: {
                    'min': 2020,
                    'max': 2060
                }
            });
            setDoneInit(true)
        }else {
            console.error("Element with id Slider Not Found")
        }

    }

    const [isPanelOpen, setIsPanelOpen] = React.useState(false)

    React.useEffect(() => {
        generateNoUiSlider()
    }, [])    


    return (
        <>
            <div id="SidePanelClickable" className={"z-50 fixed top-2/4 " + (isPanelOpen ? `right-${panelWidth}` : "right-0")} onClick={() => setIsPanelOpen(!isPanelOpen)}>
                <i className={"fas fa-3x " + (isPanelOpen ? "fa-chevron-circle-right" : "fa-chevron-circle-left")} />
            </div>
            {/*eslint-disable-next-line */}
            <div id="SidePanel" className={"z-50  bg-gray-50 border-l-2 border-t-2 border-blue-300 shadow-2xl fixed h-screen " + `w-${panelWidth} `  + (isPanelOpen ?  "right-0" : `-right-${panelWidth}`)}>
                    
                    <div id="SelectorGrid">
                        <div className="grid grid-cols-3 gap-4 m-4">
                            <button className="bg-blue-700 rounded-lg">
                                Chart
                            </button>
                            <button className="bg-blue-700 rounded-lg">
                                Quick Guide
                            </button>
                            <button className="bg-blue-700 rounded-lg">
                                Feedback
                            </button>
                        </div>
                        <hr className="m-2" />
                    </div>
                    
                    <div id="Waves" className="flex justify-around">
                        <div className="m-2 p-1">
                            Future Waves(Years)
                        </div>
                        <div className="grid grid-cols-5 m-2 border border-gray-400">
                            <button className="p-1 border border-gray-300">
                                All
                            </button>
                            <button className="p-1 border border-gray-300">
                                1
                            </button>
                            <button className="p-1 border border-gray-300">
                                2
                            </button>
                            <button className="p-1 border border-gray-300">
                                3
                            </button>
                            <button className="p-1 border border-gray-300">
                                4
                            </button>
                        </div>
                    </div>
                    <hr className="m-2" />

                    <div className="text-center m-2 p-2">
                        Year Range
                    </div>

                    <div id="slider-container" className="m-6">
                        <div id="slider"/>
                    </div>

                    <div className="flex justify-evenly" >
                        <div className="flex-col m-4 px-8" >
                            Filter
                            <hr />
                            <br/>
                            
                            <div>
                                <div><input disabled type="checkbox" id="topic"/> <span> <label htmlFor="topic">Topic</label></span> </div>
                                 
                                <select disabled name="topicC" id="topicC">
                                    <option value="">All</option>
                                </select>
                            </div>

                            <div>
                                <div><input disabled type="checkbox" id="sector"/> <span> <label htmlFor="sector">Sector</label></span> </div>

                                <select disabled name="sectorC" id="sectorC">
                                    <option value="">All</option>
                                </select>
                            </div>

                            <div>
                                <div><input disabled type="checkbox" id="region"/> <span> <label htmlFor="region">Region</label></span> </div>

                                <select disabled name="regionC" id="regionC">
                                    <option value="">All</option>
                                </select>
                            </div>

                            <div>
                                <div><input disabled type="checkbox" id="pestle"/> <span> <label htmlFor="pestle">Pestle</label></span> </div>

                                <select disabled name="pestle" id="pestle">
                                    <option value="">All</option>
                                </select>
                            </div>
                            
                        </div>
                        <div className="flex-col m-4 px-4" >
                            
                            <div>
                                <div>Measure</div>
                                <hr />
                                <br />
                                <select name="measure" id="measure">
                                <option id="relevance">Relevance</option>
                                <option id="likelihood">Likelihood</option>
                                <option id="impact">Impact</option>
                                <option id="intensity">Intensity</option>
                                </select>
                            </div>

                            <div>
                                <div>Source</div>
                                <select disabled name="source" id="source">
                                
                                </select>
                            </div>

                            <div>
                                <div>SWOT</div>
                                <select disabled name="swot" id="swot">
                                
                                </select>
                            </div>

                            <div>
                                <div>Confidence</div>
                                <select disabled name="confidence" id="confidence">
                                
                                </select>
                            </div>
                        </div>
                    </div>
                    

            </div>
        </>
    )
}

export default SidePanel
