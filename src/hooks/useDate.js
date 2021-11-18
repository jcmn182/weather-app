import {useState} from 'react';
// we have to download Moment.js
import moment from 'moment';

export const useDate = () => {
    const [newTime, setNewTime] = useState()
    const [newDate, setNewDate] = useState()
    
    let updateTime = () => {
        let time = new Date().toLocaleTimeString() 
        let date = moment().format("MMM Do YY");
        setNewTime(time)  
        setNewDate(date)
       }

    setInterval(updateTime, 1000)
    return {newTime,newDate}
}