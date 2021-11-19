import React from 'react';
import moment from 'moment';

export const DailyWeatherDataComponent = ({data}) => {
    const {daily} = data
    console.log(daily)
    return (
        <div className="items-center absolute bottom-0 bg-black bg-opacity-50 flex justify-between overflowTest w-full bottom-0 absolute">
            {
                daily?
                (daily.map((day,index)=>{
                    return (
                    <div className="p-3 text-white font-roboto border-card rounded-lg m-2 p-4 relative" key={day.dt}>
                        <div>
                        <div className="absolute top-6 left-0 w-full"><p className=" w-full text-center">{moment().add(index, 'days').format('dddd')}</p></div>
                        <img  className="m-2.5" src={`http://openweathermap.org/img/wn/${daily[index].weather[0].icon}@2x.png`} alt=""/>
                        <div className="absolute top-28 left-0 w-full"><p className=" w-full text-center">{daily[index].weather[0].description}</p></div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div>Morning</div>
                            <div className="pl-2">{daily[index].temp.morn} °C</div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div>Day</div>
                            <div>{daily[index].temp.day} °C</div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div>Night</div>
                            <div>{daily[index].temp.night} °C</div>
                        </div>
                    </div>
                    )
                })):null
            }
        </div>
    )
}
