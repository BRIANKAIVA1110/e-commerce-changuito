import './styles.css';
import Card from '../../components/card';
import {useParams} from 'react-router-dom';

export default function SearchResult(){

    const {search} = useParams();
    return (
       <>
            <main>
                <h3>resultado busqueda: { search }</h3>
                <Card pathImg = "../assets/images/producto-mock.png"></Card>
                <Card pathImg = "../assets/images/producto-mock.png"></Card>
                <Card pathImg = "../assets/images/producto-mock.png"></Card>
                <Card pathImg = "../assets/images/producto-mock.png"></Card>
                <Card pathImg = "../assets/images/producto-mock.png"></Card>
                <Card pathImg = "../assets/images/producto-mock.png"></Card>
                <Card pathImg = "../assets/images/producto-mock.png"></Card>
                <Card pathImg = "../assets/images/producto-mock.png"></Card>
                <Card pathImg = "../assets/images/producto-mock.png"></Card>
                <Card pathImg = "../assets/images/producto-mock.png"></Card>
                <Card pathImg = "../assets/images/producto-mock.png"></Card>
                <Card pathImg = "../assets/images/producto-mock.png"></Card>
                <Card pathImg = "../assets/images/producto-mock.png"></Card>
                <Card pathImg = "../assets/images/producto-mock.png"></Card>
                <Card pathImg = "../assets/images/producto-mock.png"></Card>
            </main>
            <footer>

            </footer>
       </>
    );

}