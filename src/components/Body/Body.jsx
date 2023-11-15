import example from '../../assets/hero_austin.png'


const Body = () => {
    return(<>

    <div className="grid grid-cols-12 grid-rows-1 gap-9">
        <div className='col-span-3'>Filter</div>
        <div className='col-span-9'>
            <h1>Events</h1>
            <img src={example} className=''/>
            <h3>Title</h3>
            <p>Description</p>
        </div>
    </div>


    </>)
};

export default Body;