import EventTitle from '../UI/EventTitle'

const EventCard = (props) => {
    return(<>
            <div className='grid grid-cols-6 gap-9'>
                <div className='col-span-2'>
                    <img src={props.image} className=''/>
                </div>

                <div className='col-span-4'>
                    <EventTitle>{props.title}</EventTitle>

                    <div className='flex gap-5 pb-5'>
                        <p><b>Cost:</b> {props.cost}</p>
                        <p><b>Date:</b> {props.date}</p>
                        <p><b>Time:</b> {props.time}</p>
                    </div>

                        <p><b>Description:</b> {props.description}</p>
                    
                    <a className='button'>More info</a>

                </div>
            </div>
            

            </>)
}

export default EventCard