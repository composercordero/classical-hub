import Hero from "./Hero";
import bg from '../../assets/hero_austin.png'
import Button from '../UI/Button/Button'
import ThemeList from "./ThemeList";

const Header = () => {
    return(<>
    <div className='flex flex-col w-full bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${bg})`, height: '50vh'}}>
        <header className='flex justify-between items-center w-full p-5'>
            <div className='text-white'>
                <h1 className="text-3xl font-bold">
                    Austin Classical Hub
                </h1>
            </div>

            <div className='flex gap-5'>
                <Button>Sign In</Button>
                <Button>Sign Up</Button>

            <div className="dropdown">
                <label tabIndex={0} className="btn m-1">
                    Theme
                    <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                </label>

                <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
                    <ThemeList label='Winter' value='winter' />
                    <ThemeList label='Custom' value='custom' />
                    <ThemeList label='Valentine' value='valentine' />
                    <ThemeList label='Dark' value='dark' />
                    <ThemeList label='Light' value='light' />
                </ul>

            </div>

            </div>

        </header>
        <div className='p-20 justify-center'>
            <Hero />
        </div>

    </div>
    </>)
};

export default Header;