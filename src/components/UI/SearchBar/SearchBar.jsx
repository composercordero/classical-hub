import classes from './SearchBar.module.css'
import Arrow from './Arrow';

const SearchBar = () => {
    return(<>
        <div className='flex items-center justify-center grow'>
        <form className='w-full'>
            <div className='flex items-center'>
                    
                    <div className='flex'>
                        <input 
                            type="text"
                            placeholder="Enter the name or the organization, instruments, or address"
                            className='rounded-3xl p-5 px-10'
                        />
                    </div>

                    <div>
                        <button>
                            <Arrow />
                        </button>
                    </div>
            </div>

        </form>
        </div>
    </>)
};

export default SearchBar;