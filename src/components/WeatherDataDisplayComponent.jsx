import moment from 'moment';

export const WeatherDataDisplayComponent = ({data}) => { 
    const {current} = data

    return (
        <>
        <div className="absolute top-72 left-4 w-11/12 bg-black bg-opacity-50 
        border-card rounded-lg md:top-48 sm:w-3/12 sm:left-10" >
            {   current ?
                (
                <div className="p-5 text-white font-roboto" >
                    <div className="flex justify-between">
                        <div>Humidity</div>
                        <div>{current.humidity}%</div>
                    </div>
                    <div className="flex justify-between">
                        <div>Pressure</div>
                        <div>{current.pressure}</div>
                    </div>
                    <div className="flex justify-between">
                        <div>Temp</div>
                        <div>{current.temp} °C</div>  
                    </div>
                    <div className="flex justify-between">
                        <div>Sunrise</div>
                        <div>{moment(current.sunrise *1000).format('LT')}</div>  
                    </div>
                    <div className="flex justify-between">
                        <div>Sunset</div>
                        <div>{moment(current.sunset *1000).format('LT')}</div>
                    </div>
                </div> 
                ) : null
            } 
        </div>
        </>
    )
}
