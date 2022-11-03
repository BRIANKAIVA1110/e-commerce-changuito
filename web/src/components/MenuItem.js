import './MenuItem.css'
export default function MenuItem(props){
    
    return(
        <li className="menuItem">
            <a href={props.path??"#"}>{props.text}</a>
        </li>
    );
}