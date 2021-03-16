import ChartCMP from "./Components/Chart"
import Navbar from "./Components/Navbar"
import SidePanel from "./Components/SidePanel"

const App : React.FC = () => {
  return (
    <div id="Main" className="">
     <Navbar />
     <SidePanel />
     <ChartCMP />
    </div>
  );
}

export default App;
