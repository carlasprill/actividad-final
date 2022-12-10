import logo from './logo.svg';
import {Route, Routes} from "react-router-dom";

import './App.css';
import Navegar from "./components/Navegar";

import Buscador from "./components/Buscador";
import Nuevo from "./components/Nuevo";
import Mostrador from './components/Mostrador';





function App() {
  return (
    <div>

      
      <Navegar/>
    <Routes>
    <Route exact path="/" element={<Mostrador/>}/>
    <Route exact path="/mostrador" element={<Mostrador/>}/>
    <Route exact path="/buscador" element={<Buscador/>}/>
    <Route exact path="/nuevo" element={<Nuevo/>}/>

    

    

    </Routes>
   
    </div>
  );
}



export default App;
