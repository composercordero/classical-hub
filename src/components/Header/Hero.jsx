import SearchBar from "../UI/SearchBar/SearchBar";

const Hero = () => {
    return(<>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-white text-3xl font-bold p-5'>
                Discover your next concert near you.
            </h1>

            <SearchBar />
        </div>
    </>)
};

export default Hero;