import Register from './Register';
import FormPromociones from './FormPromociones';
import FormFunsion from './CompPeliculas/FormFunsion';
import EliminarFunsion from './CompPeliculas/EliminarFunsion';

function Administrador() {
    return (
        <div>
            <Register />
            <FormPromociones />
            <FormFunsion/>
            <EliminarFunsion/>
        </div>
    );
}

export default Administrador;

