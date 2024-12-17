import NavBar from './NavBar.jsx';
import Sidebar from './CompPeliculas/Sidebar.jsx';
import MoviesGrid from './CompPeliculas/MoviesGrid.jsx';
import LoadMore from './CompPeliculas/LoadMore.jsx';
import Funsion from './CompPeliculas/Funsion.jsx';
import  Device  from '../devices/Device.jsx';

function Peliculas() {
    return(
        <div>             
             <div className="container mt-3">
                
                <div className="row mb-3">
                    <div className="col-12">
                    <MoviesGrid/>
                    </div>
                </div>
                
                <div className="row mb-3">
                    <div className="col-12 col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-12 col-md-9">
                        <div className="row mb-3">
                            <div className="col-12">
                                <Funsion />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <LoadMore />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Peliculas;
