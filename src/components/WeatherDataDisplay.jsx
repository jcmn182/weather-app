import React from 'react'


export const WeatherDataDisplay = ({data}) => {
    const {current} = data
    console.log(current)
    //console.log(current)
    return (
        <>
            {   current ?
                (<div className="absolute top-px w-3/12">
                    <div className="flex justify-between">
                        <div>Humidity</div>
                        <div>{current.humidity}%</div>
                    </div>
                    <div className="flex justify-between">
                        <div>Pressure</div>
                        <div>{current.pressure}</div>
                    </div>
                </div>
                ) : null
            }
        </>
    )
}
