import SearchBar from "../UI/SearchBar/SearchBar";
import classes from './HeaderHero.module.css'

const HeaderHero = () => {
    return(<>
    <div className={classes.hero}>
        <header className={classes.header}>
            <div className={classes.logo}>
                <h1>Austin Classical Hub</h1>
            </div>

            <div className={classes.buttons}>
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </header>

        <div>
            <h1>Discover your next concert near you.</h1>
            <SearchBar />
        </div>

    </div>
    </>)
};

export default HeaderHero;