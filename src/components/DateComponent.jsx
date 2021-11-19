import {useDate} from '../hooks/useDate.js';

export const DateComponent = ({data}) => {
    const {newTime,newDate} = useDate()
    const {timezone} = data
    return (
        <>
        <div className="absolute top-24	left-4 w-10/12 text-white font-roboto md:top-12 sm:w-6/12 sm:left-10">
            <div className="text-5xl pb-4">{newTime}</div>
            <div className="text-3xl">{newDate}</div>
            <div className="text-2xl">{timezone}</div>
        </div> 
        </>
    )
}
