import {useDate} from '../hooks/useDate.js';

export const DateComponent = ({data}) => {
    const {newTime,newDate} = useDate()
    const {timezone} = data
    return (
        <>
        <div className="absolute top-12	left-10 w-3/12 text-white font-roboto">
            <div className="text-5xl pb-4">{newTime}</div>
            <div className="text-3xl">{newDate}</div>
            <div className="text-2xl">{timezone}</div>
        </div> 
        </>
    )
}
