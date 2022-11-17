import './styles.css';
import Card from '../../components/card';
import {useParams} from 'react-router-dom';

export default function SearchResult(){

    const { search } = useParams();
    const data = require('../../dataProductsMock.json');
    const searchResult = [];
    
    // searchResult = data.map(x=> x.descripcion.includes(search));

    const searchResultItems = data.map(x => 
            <Card 
                pathImg = {x.pathImg}
                detail =  {x.descripcion}
                price = {x.price}
            />
        );

    return (
       <>
            <main>
                <h3>resultado busqueda: { search }</h3>
                { searchResultItems }
            </main>
            <footer>

            </footer>
       </>
    );

}