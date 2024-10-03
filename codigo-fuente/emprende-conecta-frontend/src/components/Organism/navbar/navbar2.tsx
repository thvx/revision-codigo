
import React from "react";
import arrow_left from "../../../assets/imagenes/arrowleft.png"
import logo_emprende from "../../../assets/imagenes/Logo-Emprende-Conecta.png"
import { Link, useNavigate } from "react-router-dom";

const NavBarUser: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar bg-custom-blue" style={{ boxShadow: "0 6px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 5px -2px rgba(0, 0, 0, 0.2)" }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={() => navigate(-1)}>
                        <img className="h-8 w-8" src={arrow_left} />
                    </div>
                </div>
            </div>
            <div className="navbar-center text-blue-200">
                <Link to="/">
                <a className="btn btn-ghost text-xl">Emprende&Conecta</a>
                </Link>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <Link to="/">
                        <img src={logo_emprende} className="h-10 w-10" />
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default NavBarUser


/*
import Logo from '../../Atoms/Media/logo/logo';
import Imagen from '../../../assets/react.svg'

const Navbar= () => {
  return (
    <div className="navbar px-12 gap-12 ">
      <div className="flex-1 justify-around items-center gap-12">
        <Logo src={Imagen} alt="Logo Left" size="w-10" />
        <h1 className="text-2xl font-bold self-center text-center text-light-grey pt-6 mb-8">Emprende & Conecta</h1>
        <Logo src={Imagen} alt="Logo Right" size='w-10' />
      </div>
    </div>
  );
};

export default Navbar;
*/