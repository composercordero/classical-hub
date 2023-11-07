import Arrow from './Arrow'
import classes from './SearchBar.module.css'

const SearchBar = () => {
    return(<>
        <form>
            <div className={classes.form}>
                <div>

                    <div className={classes.formImage}>
                        <img />
                    </div>
                    
                    <div className={classes.formInput}>
                        <input 
                            type="text"
                            placeholder="Enter the name or the organization, instruments, or address"
                            />
                        <label>What are you looking for?</label>
                    </div>

                    <div>
                        <button>
                            <Arrow />
                        </button>
                    </div>
                </div>
            </div>

        </form>
    </>)
};

export default SearchBar;