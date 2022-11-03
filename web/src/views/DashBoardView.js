import {useParams} from 'react-router-dom';

export const DashBoardView = ()=>{

    const {search} = useParams();
    return (
        <>
            <h1>DashBoardView</h1>
            <h6>{search}</h6>
            <table>
                <thead>
                    <td>
                        <tr>Articulos</tr>
                        <tr>Proveedores</tr>
                        <tr>ventas</tr>
                        <tr>Reportes</tr>
                        <tr>Configuraciones</tr>
                    </td>
                </thead>
                <tbody>
                    <td>
                        <tr>1</tr>
                        <tr>asd</tr>
                        <tr>asd</tr>
                        <tr>asd</tr>
                        <tr>asd</tr>
                    </td>
                    <td>
                        <tr>2</tr>
                        <tr>qwe</tr>
                        <tr>qwe</tr>
                        <tr>qwe</tr>
                        <tr>qwe</tr>
                    </td>
                    <td>
                        <tr>3</tr>
                        <tr>rty</tr>
                        <tr>rty</tr>
                        <tr>rty</tr>
                        <tr>rty</tr>
                    </td>
                </tbody>
            </table>
        </>
    );
}