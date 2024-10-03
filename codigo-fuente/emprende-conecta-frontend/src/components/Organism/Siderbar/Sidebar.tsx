import home from "../../../assets/imagenes/iconos/sidebarhome.png";
import carrito from "../../../assets/imagenes/iconos/sidebarshopcar.png";
import corazon from "../../../assets/imagenes/iconos/sidebarlike.png";
import user from "../../../assets/imagenes/iconos/sidebarprofile.png";
import mensaje from "../../../assets/imagenes/iconos/sidebarmesage.png";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className='flex flex-col items-center gap-7 p-4 bg-custom-blue bg-sky-500/[.06] ...'>
      <Link to="/dashboard">
        <div className='w-10 h-10 flex justify-center items-center'>
          <img className="object-cover" src={home} alt='icono-home' />
        </div>
      </Link>
      <Link to="/checkout">
        <div className='w-10 h-10 flex justify-center items-center'>
          <img className="object-cover" src={carrito} alt='icono-carrito' />
        </div>
      </Link>
      <Link to="/favoritos">
        <div className='w=10 h-10 flex justify-center items-center'>
          <img className="object-cover" src={corazon} alt='icono-favoritos' />
        </div>
      </Link>
      <Link to="/perfil/usuario">
        <div className='w-10 h-10 flex justify-center items-center'>
          <img className="object-cover" src={user} alt='icono-perfi' />
        </div>
      </Link>
      <Link to="/mensaje">
        <div className='w-10 h-10 flex justify-center items-center'>
          <img className="object-cover" src={mensaje} alt='icono-mensajes' />
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
