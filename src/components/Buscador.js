import {restaurante1} from "./Constantes"
import {useState} from "react";


function Buscador () {

    const [valores, setValores] = useState({})
    const {nombre =""} = valores
    const [resultado, setResultado] = useState([]);
    
   
    
    const handleOnChange = (e) => {

      setValores({ ...valores, [e.target.name]: e.target.value})
    }


    const buscador = (e) => {
      e.preventDefault();
      const filtro = restaurante1.
      filter(filtrar => filtrar.nombre.toUpperCase().includes(nombre.toUpperCase()));
      setResultado(filtro);
    }
    return (

        <div style= {{margin: "30px"}}>
        <h1 style={{textAlign: "center",
        color: "rgb(172, 217, 244)",
        fontWeight: "bold",
        fontSize: "60px",
        fontFamily: "Cambria, Cochin, Georgia, Times, TimesNewRoman, serif"
        }}>buscar restaurantes</h1>
    <div className="col-lg-6">

        <h5>nombre del restaurante:</h5>
        <input required id="search" type="text" name="nombre" value={nombre} className="form-control"
        onChange={(e)=> {handleOnChange(e)}}/>
    </div>
    
    <div style={{marginBottom: "40px"}}>
            
            
            <button id="boton" onClick={buscador} className="btn btn-success" value="buscar">buscar</button> 
            </div>
            {resultado.map((z)=>{
 
 
 //card.innerHTML +=
 return (
 <div key={z.id} className="col" style={{width: "22rem", animationDuration: "1.2s", display: "inline-block", marginLeft: "20px", marginTop: "10px" }}>
 <div className="card">
   <img src={z.img} className="card-img-top" alt=""/>
   <div className="card-body">
     <h5 className="card-title text-center">{z.nombre}</h5>
     <p className="card-text text-center">{z.restaurantes_descripcion}</p>
     <p className="card-text text-center"><small className="text-muted">{z.restaurantes_direccion}</small></p>
     </div>
 </div>
</div>
 )
})}

        </div>
    
    )

}

export default Buscador