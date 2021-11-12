import Background from './assets/pexels-brian-de-karma-1677345.jpg'
import './App.css';
import {useFetchLocation} from './hooks/useFetchLocation'

function App() {
  const {data} = useFetchLocation()
  console.log(data)
  
  

  return (
    <div className="relative ">
      <img src={Background} className="w-full h-screen z-0" alt="landscape" />
      <p className="absolute top-px">hola</p>
    </div>
  );
}

export default App;
