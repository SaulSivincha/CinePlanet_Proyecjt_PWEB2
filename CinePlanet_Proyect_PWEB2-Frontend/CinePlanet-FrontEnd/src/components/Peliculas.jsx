import NavBar from './NavBar.jsx';
import Sidebar from './CompPeliculas/Sidebar.jsx';
import MoviesGrid from './CompPeliculas/MoviesGrid.jsx';
import LoadMore from './CompPeliculas/LoadMore.jsx';
import Funsion from './CompPeliculas/Funsion.jsx';
import  Device  from '../devices/Device.jsx';
import FooterP1 from './FooterP1.jsx';
import FooterP2 from './FooterP2.jsx';

function Peliculas() {
    return(
        <div>
             <NavBar/>
             
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
            
            <FooterP1 />
            <FooterP2 />
        </div>
    );
}

export default Peliculas;
