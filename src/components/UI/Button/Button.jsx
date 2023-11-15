
const Button = (props) => {
    return(<>
        <button
            className='bg-white py-2 px-8 rounded-3xl'
        >{props.children}</button>
    </>)
};

export default Button;