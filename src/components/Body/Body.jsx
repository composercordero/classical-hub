import example from '../../assets/hero_austin.png'
import EventCard from './EventCard';


const Body = () => {
    return(<>

    <div className="grid grid-cols-12 grid-rows-1 gap-9">

        <div className='col-span-3 p-6'>
            <h1 className='text-4xl font-semibold'>Filter</h1>
        </div>

        <div className='col-span-9 p-6'>
            <h1 className='text-4xl font-semibold'>Events</h1>
            <div className="divider"></div> 
            <EventCard title='Conspirare in the Waterloo Park' image={example} description='This is the description of an event'/>
            <div className='divider'></div>
            <EventCard title='Conspirare in the Waterloo Park' image={example} description='This is the description of an event'/>
        </div>
    </div>


    </>)
};

export default Body;