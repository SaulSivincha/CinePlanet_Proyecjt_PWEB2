import NavBar from './NavBar.jsx';
import '../styles/Peliculas.css';
import Funsion from './Funsion.jsx';
import  Device  from '../devices/Device.jsx';
import FooterP1 from './FooterP1.jsx';
import FooterP2 from './FooterP2.jsx';
function Peliculas() {
    return(
        <div>
             <NavBar />
             <Funsion/>
             <FooterP1 />
            <FooterP2 />
        </div>
    );
}

export default Peliculas;
