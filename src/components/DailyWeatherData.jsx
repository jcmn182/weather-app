import React from 'react'

export const DailyWeatherData = ({data}) => {
    const {daily} = data
    console.log(daily)
    return (
        <div className="items-center bg-black bg-opacity-50 flex justify-between overflowTest w-full bottom-0 absolute">
            {
                daily?
                (daily.map((day,index)=>{
                    return (
                    <div className="p-3 text-white font-roboto border-card rounded-lg m-2 p-4" key={day.dt}>
                        <img  className="m-0" src={`http://openweathermap.org/img/wn/${daily[index].weather[0].icon}@2x.png`} alt=""/>
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
