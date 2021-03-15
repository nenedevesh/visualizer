import ChartCMP from "./Components/Chart"
import Navbar from "./Components/Navbar"
import SidePanel from "./Components/SidePanel"
import Test from "./Components/Test"

const App : React.FC = () => {
  return (
    <div id="Main" className="">
     <Navbar />
     <SidePanel />
     <ChartCMP />
     <Test />
    </div>
  );
}

export default App;
