import example from '../../assets/hero_austin.png'


const Body = () => {
    return(<>

    <div className="grid grid-cols-12 grid-rows-1 gap-9">

        <div className='col-span-3 p-6'>
            <h1 className='text-4xl font-semibold'>Filter</h1>
        </div>

        <div className='col-span-9 p-6'>
            <h1 className='text-4xl font-semibold'>Events</h1>
            <div className="divider"></div> 
            <h3>Title</h3>
            <img src={example} className=''/>
            <p>Description</p>
        </div>
    </div>


    </>)
};

export default Body;