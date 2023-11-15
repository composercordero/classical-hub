
const ThemeList = (props) => {
    return(<>
        <li>
            <input 
                type="radio" 
                name="theme-dropdown" 
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start" 
                aria-label={props.label}
                value={props.value}
            />
        </li>
    </>)
};

export default ThemeList;