
class Producto {
    constructor(props){
        this.Id = props.Id || 0;
        this.Codigo = props.Codigo || "xxx";
        this.Descripcion = props.Descripcion || "";
    }
}

module.exports = Producto;
