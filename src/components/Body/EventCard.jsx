import EventTitle from '../UI/EventTitle'

const EventCard = (props) => {
    return(<>
            <EventTitle>{props.title}</EventTitle>
            <img src={props.image} className=''/>
            <p>{props.description}</p>
            </>)
}

export default EventCard