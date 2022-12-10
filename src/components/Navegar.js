import {Link, Navigate, NavLink} from 'react-router-dom'

function Navegar () {


    return(
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/mostrador">Inicio</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to="/buscador">Buscador</NavLink>
              <NavLink className="nav-link" to="/nuevo">Nuevo</NavLink>
            
            </div>
          </div>
        </div>
      </nav>

    )

}

export default Navegar