import EventTitle from '../UI/EventTitle'

const EventCard = (props) => {
    return(<>
            <div className='grid grid-cols-6 gap-9 '>
                <div className='col-span-2'>
                    <img src={props.image} className='object-cover w-full h-full'/>
                </div>

                <div className='col-span-4'>
                    <EventTitle>{props.title}</EventTitle>

                    <div className='flex gap-5 pb-5'>
                        <p><b>Cost:</b> {props.cost}</p>
                        <p><b>Date:</b> {props.date}</p>
                        <p><b>Time:</b> {props.time}</p>
                    </div>

                        <p><b>Description:</b> {props.description}</p>
                    
                    <a href="#" class="inline-flex items-center justify-center mt-5 px-5 py-3 font-medium rounded-full bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                                            
                    <span class="w-full">More Info</span>
                        <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a> 

                </div>
            </div>
            

            </>)
}

export default EventCard