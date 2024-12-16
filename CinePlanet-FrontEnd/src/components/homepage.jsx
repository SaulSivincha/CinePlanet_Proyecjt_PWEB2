import NavBar from './NavBar.jsx';
import NavBar from './home.jsx';
import FooterP1 from './FooterP1.jsx';
import FooterP2 from './FooterP2.jsx';

function homepage() {
    return (
      <div className='PaginaHome'>
            <NavBar />
            <home/>
            <FooterP1 />
            <FooterP2 />
        </div>
      
    );
  }
  
  export default homepage;