import './Search.css';
import {useNavigation, useParams, useNavigate} from 'react-router-dom'
export default function Search(){

    const navigation = useNavigation();
    const navigate = useNavigate();
    function pepe(){
        const value = document.getElementById('inputSearch').value;
        console.log(value);
        if(value != '' || value !=null)
            navigate("/"+value);
        // navigation.state(value);
    }
    return(
        <>
            <form className="search">
                    <input id='inputSearch' type="search" placeholder="buscar..."></input>
                    <button onClick={()=>{ pepe(); }}>Buscar</button>
            </form>
        </>
    );
}