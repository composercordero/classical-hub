import Hero from "./Hero";
import bg from '../../assets/hero_austin.png'
import Button from '../UI/Button/Button'

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
            </div>
        </header>
        <div className='p-20 justify-center'>
            <Hero />
        </div>

    </div>
    </>)
};

export default Header;