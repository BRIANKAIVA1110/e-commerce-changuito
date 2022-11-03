import './Menu.css'
export default function Menu(props){


    return (
        <ul className='menu'>
            {props.children}
        </ul>
    );
}