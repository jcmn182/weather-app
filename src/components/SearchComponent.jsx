import {AiOutlineSearch} from 'react-icons/ai';

export  const SearchComponent = () => {
    return (
        <form className="absolute top-2 right-4 text-white px-4 py-3 bg-black bg-opacity-50 border-card rounded-full search flex justify-between md:right-10 md:top-8 w-11/12 md:w-2/6">
            <input type="text" className="bg-transparent outline-none w-11/12 md:w-2/6" placeholder="Search"/>
            <button> <AiOutlineSearch/></button>
        </form>
    )
}
