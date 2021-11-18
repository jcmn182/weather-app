// Components
import {DailyWeatherData} from './components/DailyWeatherData.jsx'
import {DateComponent} from './components/DateComponent.jsx'
import {WeatherDataDisplay} from './components/WeatherDataDisplay.jsx'
// Background img
import Background from './assets/pexels-brian-de-karma-1677345.jpg'
import './App.css';
// Custom Hoooks
import {useFetchLocation} from './hooks/useFetchLocation'

function App() {
  const {data} = useFetchLocation()
  
  return (
    <div className="relative">
      <img src={Background} className="w-full h-screen z-0" alt="landscape"/>
      <DateComponent data={data}/>
      <WeatherDataDisplay data={data}/>
      <DailyWeatherData data={data}/>
    </div>
  );
}

export default App;
