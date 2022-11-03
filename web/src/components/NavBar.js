import './NavBar.css'

export default function NavBar(props){
    return(
        <>
            <nav className="NavBar">
                {props.children}
            </nav>
        </>
    );
}