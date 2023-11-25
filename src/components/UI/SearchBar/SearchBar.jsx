import classes from './SearchBar.module.css'
import Arrow from './Arrow';

const SearchBar = () => {
    return(<>
        <div className='flex items-center justify-center grow'>
        <form className='w-full'>
            <div className='flex items-center'>
                    
                    <div className='grow'>
                        <input 
                            type="text"
                            placeholder="Enter the name or the organization"
                            className='rounded-full p-5 px-10'
                        />
                    </div>

                    <div className='max-w-full'>
                        <button className='relative max-w-full m-0 p-0 inline-flex w-xl '>
                            <Arrow />
                        </button>
                    </div>
            </div>

        </form>
        </div>
    </>)
};

export default SearchBar;