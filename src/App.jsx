// Components
import {DailyWeatherDataComponent} from './components/DailyWeatherDataComponent.jsx'
import {DateComponent} from './components/DateComponent.jsx'
import {WeatherDataDisplayComponent} from './components/WeatherDataDisplayComponent.jsx'
import {LoaderComponent} from './components/LoaderComponent/LoaderComponent.jsx';
// Background img
import Background from './assets/pexels-brian-de-karma-1677345.jpg'
import './App.css';
// Custom Hoooks
import {useFetchLocation} from './hooks/useFetchLocation'

function App() {
  const {data,loading} = useFetchLocation()
  return (
    <div>
      <img src={Background} className="w-full h-screen z-0 object-cover" alt="landscape"/>
     { loading?
      
      (<>
      <DateComponent data={data}/>
      <WeatherDataDisplayComponent data={data}/>
      <DailyWeatherDataComponent data={data}/>
      </>):<LoaderComponent/>
        }
    </div>
  );
}

export default App;
