function Nuevo () {

    return(

        <div style={{marginLeft: "40px", marginRight: "40px"}} className="">

	<h1 style={{textAlign: "center",
    color: "rgba(12, 11, 11, 0.658)",
    fontWeight: "bold",
    fontSize: "50px",
    fontFamily: "Times New Roman, Times, serif",
    border: "1px bisque"
    }}>ingresa un restaurante</h1>

    <div>
    <div>
        
        <p style={{fontSize: "20px"}}><strong>Nombre:</strong></p>
        <input className="form-control" type="text"/>
        </div>
        <div>
            
            <p style={{fontSize: "20px"}}><strong>Descripcion:</strong></p>
            <input className="form-control" type="text"/>
        </div>
    <div>
    <p style={{fontSize: "20px"}}><strong>Direccion:</strong></p>
        
        <input className="form-control" type="text"/>
    </div>
    <div>
    <p style={{fontSize: "20px"}}><strong>Ingresa imagen url:</strong></p>
        
        
        <input className="form-control" type="url"/>
    </div>
    </div>
    <input style={{marginTop: "20px"}} className="btn btn-success" value="agregar"></input>
</div>



    )

}

export default Nuevo