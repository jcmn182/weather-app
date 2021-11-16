import {WeatherDataDisplay} from './components/WeatherDataDisplay.jsx'
import Background from './assets/pexels-brian-de-karma-1677345.jpg'
import './App.css';
import {useFetchLocation} from './hooks/useFetchLocation'

function App() {
  const {data} = useFetchLocation()
  
  return (
    <div className="relative ">
      <img src={Background} className="w-full h-screen z-0" alt="landscape"/>
      <WeatherDataDisplay data={data}/>
    </div>
  );
}

export default App;
