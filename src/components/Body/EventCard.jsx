import EventTitle from '../UI/EventTitle'

const EventCard = (props) => {
    return(<>
            <div className='grid grid-cols-6 gap-9'>
                <div className='col-span-2'>
                    <img src={props.image} className=''/>
                </div>

                <div className='col-span-4'>
                    <EventTitle>{props.title}</EventTitle>
                    <p>{props.description}</p>
                </div>
            </div>
            

            </>)
}

export default EventCard