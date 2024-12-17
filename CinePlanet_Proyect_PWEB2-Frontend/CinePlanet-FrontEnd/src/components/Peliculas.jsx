import NavBar from './NavBar.jsx';
import Sidebar from './CompPeliculas/Sidebar.jsx';
import MoviesGrid from './CompPeliculas/MoviesGrid.jsx';
import Funsion from './CompPeliculas/Funsion.jsx';
import FormFunsion from './CompPeliculas/FormFunsion.jsx';
import EliminarFunsion from './CompPeliculas/EliminarFunsion.jsx';
import  Device  from '../devices/Device.jsx';

function Peliculas() {
    return(
        <div> 

             <div className="container">
                
                <div className="row">
                    <div className="col-12 ">
                        <MoviesGrid/>
                    </div>
                </div>
                
                <div className="row">
                    
                    <div className="col-12 col-md-3">
                        <Sidebar/>
                    </div>

                    <div className="col-12 col-md-9">
                        
                        <div className="row">
                            <div className="col-12">
                                <Funsion />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <FormFunsion />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <EliminarFunsion />
                            </div>
                        </div>

                    </div>

                </div>
            
            </div>
            
        </div>
    );
}

export default Peliculas;
