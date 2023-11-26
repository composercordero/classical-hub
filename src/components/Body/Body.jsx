import example from '../../assets/hero_austin.png'
import EventCard from './EventCard';

const DUMMY_INFO = [
    {
        organization: 'Conspirare',
        id: '001',
        description: 'Join Conspirare for an evening of music that celebrates the beginning of its landmark 30th year and inaugurates the next extraordinary chapter of dynamic choral art and vibrant, inspirational gatherings of music and connection.',
        cost: '$20-50',
        website: 'https://www.conspirare.org/tickets/',
        date: '10/12/23',
        title: 'We Sing Life',
        time: '7:30 p.m. CST'
    },
    {
        organization: 'Panoramic Voices',
        id: '002',
        description: 'Our 2023-2024 Artistic Season kicks off with a killer collaboration. Join Panoramic Voices and Invoke String Ensemble for an evening of FOLK, BEER, FOOD, and FUN. We’ll be at Jester King Brewery in Dripping Springs, TX, using the beautiful barn setting as a back drop for this mix of folk music of all kinds: classic, old, new, pop, and even tunes commissioned just for this event. Oh, and hey, there might be some GOATS in the mix too…',
        cost: '$10-65',
        website: 'www.panoramicvoices.org/',
        date: '10/21/23',
        title: 'Folk Yeah!',
        time: '7:00 p.m. CST'
    },
]

const Body = () => {
    return(<>

    <div className="grid grid-cols-12 grid-rows-1 gap-9">

        <div className='col-span-8 p-4'>
            <h1 className='text-4xl font-semibold'>Events</h1>
            <div className="divider"></div>

            {DUMMY_INFO.map((item)=> (<>
                <EventCard
                    key={item.id}
                    image={example} 
                    organization= {item.organization}
                    description={item.description}
                    cost= {item.cost}
                    website = {item.website}
                    date= {item.date}
                    title={item.title} 
                    time={item.time} 
                    />
                <div className='divider'></div>
                </>
            ))}
        </div>

        <div className='col-span-4 p-4'>
            <h1 className='text-4xl font-semibold'>Filter</h1>
            <div className='divider'></div>
        </div>

    </div>


    </>)
};

export default Body;