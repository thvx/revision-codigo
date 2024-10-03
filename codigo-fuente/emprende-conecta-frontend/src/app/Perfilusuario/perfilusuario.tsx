import Sidebar from "../../components/Organism/Siderbar/Sidebar";
import PerfilusuarioTemplate from "../../components/Templates/Perfilusuario/Perfilusuario";

const Perfilusuario: React.FC = () => {
    return (
        <div className="flex">
            < Sidebar />
            < PerfilusuarioTemplate />
        </div >
    );
};

export default Perfilusuario;
