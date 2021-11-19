import {useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import {useFetchLocation} from '../hooks/useFetchLocation.js'
export  const SearchComponent = () => {

    const [input, setInput] = useState('')

    const {dataUpdate} = useFetchLocation()

    const handleSubmit = (e) => {
        e.preventDefault() 
        dataUpdate(input)
        setInput('')
    }

    return (
        <form  onSubmit={handleSubmit} className="absolute z-10 top-2 right-4 text-white px-4 py-3 bg-black bg-opacity-50 border-card rounded-full search flex justify-between md:right-10 md:top-8 w-11/12 md:w-2/6">
            <input type="text" className="bg-transparent outline-none w-11/12 md:w-2/6" onChange={(e)=>setInput(e.target.value)} value={input} placeholder="Search"/>
            <button type="submit"> <AiOutlineSearch/></button>
        </form>
    )
}
