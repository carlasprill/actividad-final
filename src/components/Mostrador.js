import "./css/estilos.css"

function Mostrador () {
    const restaurante1 = [{
        id: "1",
        img: "https://somospacifico.com.co/wp-content/uploads/2018/03/Noticias-Equidad-De-G%C3%A9nero-En-El-Choc%C3%B3-800x445.jpg",
        restaurante_titulo: "Pacifico Mar", 
    restaurantes_direccion:"Av 85 Nro. 45 - 85 Barranquilla",
    restaurantes_descripcion: "Deliciosa comida de mar",
    
    },
    {
        id: "2",
        img: "https://muchosnegociosrentables.com/wp-content/uploads/2017/09/Co%CC%81mo-montar-una-cantina-italiana_opt.jpg",
    restaurante_titulo: "Italiano 65", 
    restaurantes_direccion:"Av 45 Nro. 1 - 85 Medellín",
    restaurantes_descripcion: "Deliciosa comida italiana",
    
    },
    {
        id: "3",
      img: "https://revistas.elheraldo.co/sites/default/files/styles/640x360/public/2013/10/16/articulo/fastfood.jpg?itok=eA2t33tX",  
        restaurante_titulo: "Fritos y Más", 
    restaurantes_direccion:"calle 45 Medellín",
    restaurantes_descripcion: "Comida rápida",
    
    },
    {
        id: "4",
      img: "https://s1.eestatic.com/2021/05/25/cocinillas/restaurantes/583952429_186194227_1024x576.jpg",  
        restaurante_titulo: "Pollo Frito", 
    restaurantes_direccion:"Cr 32 # 56 - 89",
    restaurantes_descripcion: "Lo mejor del pollo frito",
    }
    ];

    return(

        <div id="banner_image" className="container-fluid mt-5">

    <div id="container">
    <h1 style={{textAlign: "center", marginBottom: "150px"}}>restaurantes de colombia</h1>
    </div>
    

    {restaurante1.map((z)=>{
 
 
 //card.innerHTML +=
 return (
 <div key={z.id} className="col" style={{width: "22rem", animationDuration: "1.2s", display: "inline-block", marginLeft: "20px", }}>
 <div className="card">
   <img src={z.img} className="card-img-top" alt=""/>
   <div className="card-body">
     <h5 className="card-title text-center">{z.restaurante_titulo}</h5>
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

export default Mostrador