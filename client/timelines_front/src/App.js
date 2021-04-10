import './App.css';
import MapComponent from './components/MapComponent';
import TimelineContainer from './containers/TimelineContainer';
import EventContainer from './components/EventContainer';
import './semantic/dist/semantic.css';
import PokedexHeader from "./components/PokedexHeader";




function App() {
  return (
    <>
   
    <div className="pageContainer">
    <PokedexHeader name={"Visualise and Plot the Past"}/>
    <TimelineContainer/>
    
    {/* <EventContainer /> */}
    </div>
    </>
  );
}

export default App;
