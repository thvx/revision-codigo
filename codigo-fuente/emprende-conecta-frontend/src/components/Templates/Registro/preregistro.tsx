import {Link} from 'react-router-dom';
import CardLogin from '../../Atoms/DataDisplay/Card/CardLogIn';
import Comprador from '../../../assets/imagenes/comprador.jpg';
import Vendedor from '../../../assets/imagenes/vendedor.jpg';

const Preregistro = () => {
    return (
        <div className="flex flex-col bg-custom-blue">
            <h1 className="text-3xl font-bold text-center text-white m-12 pt-12">¿Quién Soy?</h1>
            <div className="flex justify-center content-around sm:flex-col md:flex-col lg:flex-row flex-wrap gap-12 m-12">
                <Link to="/registro/comprador">
                    <CardLogin img={Comprador} content="Comprador"/>
                </Link>
                <Link to="/registro/vendedor">
                    <CardLogin img={Vendedor} content="Vendedor"/>
                </Link>
            </div>
        </div>
    )
}
export default Preregistro;