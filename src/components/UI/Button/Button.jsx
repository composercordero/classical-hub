
const Button = (props) => {
    return(<>
        <button
            className='btn btn-neutral m-1'
        >{props.children}</button>
    </>)
};

export default Button;