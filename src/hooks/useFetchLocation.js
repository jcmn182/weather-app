import {useState,useEffect} from 'react';

export const useFetchLocation = () => {

    const [coordinates, setCoordinates] = useState({lat:'',lng:''})
    const [data, setData] = useState([])
    const key = '1754d5382375a2dd80f483b00a12456a';
   
    const getLocation = () => {
        if (!navigator.geolocation) {
          console.log('Geolocation is not supported by your browser');
        } 
        else {
          console.log('Locating...');
          navigator.geolocation.getCurrentPosition((position) => {
          setCoordinates({lat:position.coords.latitude,lng:position.coords.longitude})  
          }, () => {
          console.log('Unable to retrieve your location');
          });
        }
      }

    const {lat,lng} = coordinates
    const fetchData = async () => {
        const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=alerts,hourly,minutely&appid=${key}&units=metric`
        const response = await fetch(API);
        const result = await response.json();
        setData(result)
      }
      
    useEffect(() => {
      getLocation()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    useEffect(() => {
      if(lat!==''&&lng!==''){
      fetchData()}
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coordinates])  

    return {data}
}