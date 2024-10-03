import Steps from '../../Atoms/Navigation/steps/steps';
import Button from '../../Atoms/Actions/button/button';
import { Link } from 'react-router-dom';

interface VoucherProps {
  stepsData: {
    stepsText: string[];
    numPages: number;
    actualPage: number;
  }[];
  userName: string;
}

const entregaSteps = ['Pedido Recibido', 'Pedido Confirmado', 'Pedido Enviado', 'Pedido Entregado']

const Voucher: React.FC<VoucherProps> = ({ stepsData, userName}) => {
  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };
  return (
        <main className="main-content flex flex-col">
          <Steps numPages={stepsData[0].numPages} actualPage={stepsData[0].actualPage} stepsText={stepsData[0].stepsText} />
          <div className="flex flex-col my-16 p-6 bg-sky-500/[.06] ... lg:mx-48">
            <h2 className="text-2xl text-white text-center font-bold">Confirmación de Compra</h2>
            <img src="/src/assets/check.png" alt="Check" className="mx-auto m-8 h-20" />
            <div className="text-white text-center flex flex-col gap-6">
              <h3>¡{userName}, recibimos tu solicitud de compra!</h3>
              <p>En breve recibirás un correo con la confirmación de tu compra.</p>
              <p>Fecha de recepción: {getCurrentDate()}</p>
            </div>
            <div className="flex flex-col justify-center my-10 gap-16">
              <Steps numPages={4} actualPage={2} stepsText={entregaSteps} />
              <div>
                <Link to="/dashboard">
                <Button text="Finalizar compra" width="quarter" type="button" />
                </Link>
              </div>
            </div>
          </div>
        </main>
  );
};

export default Voucher;
