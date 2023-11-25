const EventTitle = (props) => {
    return(<>
        <h2 className="font-bold text-3xl pb-5">
            {props.children}
        </h2>
    </>)
}

export default EventTitle;