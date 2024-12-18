import Register from './Register';
import FormPromociones from './FormPromociones';
import FormFunsion from './CompPeliculas/FormFunsion';
import EliminarFunsion from './CompPeliculas/EliminarFunsion';
import DulceriaForm from './DulceriaForm';

function Administrador() {
    return (
        <div>
            <Register />
            <FormPromociones />
            <FormFunsion/>
            <EliminarFunsion/>
            <DulceriaForm />
        </div>
    );
}

export default Administrador;

