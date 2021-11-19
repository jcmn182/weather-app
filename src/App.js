// Components
import {DailyWeatherDataComponent} from './components/DailyWeatherDataComponent.jsx'
import {SearchComponent} from './components/SearchComponent.jsx'
import {DateComponent} from './components/DateComponent.jsx'
import {WeatherDataDisplayComponent} from './components/WeatherDataDisplayComponent.jsx'
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
      <SearchComponent/>
      <DateComponent data={data}/>
      <WeatherDataDisplayComponent data={data}/>
      <DailyWeatherDataComponent data={data}/>
    </div>
  );
}

export default App;
