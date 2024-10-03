import Logo from "../../Atoms/Media/logo/logo"
import LogoNegocio from "../../../assets/imagenes/Logo-Emprende-Conecta.png"

const Footer: React.FC = () => {
    return (
    <div className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <Logo src={LogoNegocio} alt="Logo" size="w-32" />
      </aside>
      <nav>
        <h6 className="footer-title">Políticas</h6> 
        <a className="link link-hover">Política de reembolso</a>
        <a className="link link-hover">Política de privacidad</a>
        <a className="link link-hover">Términos de servicio</a>
      </nav> 
      <nav>
        <h6 className="footer-title">Company</h6> 
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav> 
      <nav>
        <h6 className="footer-title">Legal</h6> 
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <div>
        <p>Copyright © 2024 - All right reserved by G6-UX</p>
      </div>
    </div>
    );
};
  
export default Footer