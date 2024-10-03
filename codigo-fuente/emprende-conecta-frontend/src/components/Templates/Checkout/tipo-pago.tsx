import React, { useState } from 'react';
import Steps from '../../Atoms/Navigation/steps/steps';
import Button from '../../Atoms/Actions/button/button';
import Radio from '../../Atoms/Input/radio/Radio';
import FormGroup from '../../Organism/formGroup/formGroup';
import logoPagoEfectivo from '../../../assets/imagenes/logo-pagoefectivo 3.png'
import { useTotalAmount } from '../../../app/Checkout/totalAmountContext';
import Modal from '../../Organism/modal/modal';
import { Link } from 'react-router-dom';

interface PagoProps {
  stepsData: {
    stepsText: string[];
    numPages: number;
    actualPage: number;
  }[];
  paymentOptions: {
    img: string;
    type: string;
  }[];
}

const Pago: React.FC<PagoProps> = ({ stepsData, paymentOptions}) => {
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const {totalAmount} = useTotalAmount();
  // Verificar el valor de totalAmount
  console.log('Total Amount recibido:', totalAmount);

  const handleOptionChange = (index: number) => {
    setSelectedOption(index);
  };

  const [isCodeGenerated, setIsCodeGenerated] = useState(false);
  const [cipCode, setCipCode] = useState('');
  const [paymentDate, setPaymentDate] = useState('');

  const generateRandomCode = () => {
    return Math.floor(100000000 + Math.random() * 900000000).toString();
  };

  const getFutureDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const handleGenerateCode = () => {
    setCipCode(generateRandomCode());
    setPaymentDate(getFutureDate());
    setIsCodeGenerated(true);
  };

  const openModal = () => {
    const modal = document.getElementById('confirmar_tarjeta'||'confirmar_compra') as HTMLDialogElement | null;
    modal?.showModal();
};

  return (
    <main className="main-content flex flex-col">
      <Steps numPages={stepsData[0].numPages} actualPage={stepsData[0].actualPage} stepsText={stepsData[0].stepsText} />
      <div className="flex flex-row justify-center mt-8 lg:gap-48 md:gap-24 sm:gap-12">
        <div className="flex flex-col space-y-2 gap-4">
            <h2 className="text-2xl text-white text-center font-bold">Tipo de Pago</h2>
            {paymentOptions.map((option, index) => (
                <div key={index} className="bg-blue-200 text-custom-blue py-4 px-8 flex items-center rounded-2xl">
                    <Radio
                        size="radio-md"
                        name="paymentOption"
                        text=" "
                        isChecked={selectedOption === index}
                        marginRight="mr-2"
                        onChange={() => handleOptionChange(index)}
                    />
                    <div className="flex flex-row ml-2 gap-4">
                        <img src={option.img} className="h-10 w-10"></img>
                        <span className="font-bold">{option.type}</span>
                    </div>
                </div>
                ))}
            </div>
        <div className="flex flex-col space-y-2 gap-4">
          <form className="flex flex-col justify-center ">
            {selectedOption === 0 && (
                <div>
                    <div className="flex flex-col justify-center mb-8 bg-sky-500/[.06] ... p-6 text-white py-4 px-8 rounded-2xl">
                        <h2 className="text-white text-xl text-center font-bold p-6">Tarjeta de Crédito o Débito</h2>
                        <FormGroup
                            type='text'
                            label=""
                            name="cardNumber"
                            placeholder="N° de tarjeta"
                        />
                        <div className="flex flex-row gap-4 sm:flex-col sm:gap-0 mb-4">
                            <FormGroup
                                type='date'
                                label=""
                                name="expirationDate"
                                placeholder="mm/aa"
                            />
                            <FormGroup
                                type='text'
                                label=""
                                name="cvv"
                                placeholder="CVV"
                            />
                        </div>
                        <Button text="Probar Tarjeta" width="auto" type="button" onClick={openModal} />
                            <Modal 
                                id="confirmar_tarjeta"
                                title="Success!" 
                                message="Su medio de pago fue verificado con con éxito." 
                                leftButtonText="Regresar" 
                                rightButtonText="Confirmar Tarjeta"
                                leftButtonLink='/pago'
                                rightButtonLink='/voucher' 
                            />
                    </div>
                    <div className="flex flex-row justify-between my-8">
                        <h3 className="text-lg text-white">Total del Pedido</h3>
                        <h3 className="text-lg text-white">S/.{totalAmount.toFixed(2)}</h3>
                    </div>
                    <Link to="/voucher">
                        <Button text="Finalizar compra" width="half" type="submit" />
                    </Link>
                </div>
            )}
            {selectedOption === 1 && (
            <div className="flex flex-col justify-center">
                <img src={logoPagoEfectivo} alt="Logo de Pago Efectivo" className="h-20 w-64 self-center"></img>
                {!isCodeGenerated ? (
                <div>
                    <div className="flex flex-col justify-center ">
                        <div className="flex flex-col bg-sky-500/[.06] ... p-6 rounded-xl mb-8">
                            <h3 className="text-white text-lg font-bold">Banca por Internet/móvil</h3>
                            <p>Selecciona la opción de servicios:</p>
                            <ol className="list-decimal pl-6">
                                <li>Busca y selecciona la institución/empresa PAGO EFECTIVO.</li>
                                <li>Selecciona PAGO EFECTIVO [Moneda].</li>
                                <li>Ingresa tu código CIP: {cipCode || '[Código]'} y sigue los pasos.</li>
                            </ol>
                            <h3 className="text-white text-lg font-bold pt-8">Agentes y Bodegas/Agencias</h3>
                            <ol className="list-decimal pl-6">
                                <li>Indica que vas a realizar un pago a la empresa PAGO EFECTIVO.</li>
                                <li>Indica que realizarás el pago de [Moneda].</li>
                                <li>Indica el código CIP {cipCode || '[Código]'} y el importe a pagar.</li>
                            </ol>
                        </div>
                        <Button text="Generar Código" width="half" type="button" onClick={handleGenerateCode} />
                    </div>
                </div>
                ) : (
                <div className="flex flex-col bg-sky-500/[.06] ... p-6 rounded-xl mb-8 text-center">
                    <h3 className="text-white text-lg font-bold">Detalle del pago</h3>
                    <p className="text-white">¡Estás a punto de terminar tu compra!</p>
                    <div className="flex flex-col my-6">
                        <div className="bg-warning p-6 rounded-t-2xl text-black text-center">
                            <p className="text-2xl font-bold">Código del pago (CIP)</p>
                            <p className="text-2xl">{cipCode}</p>
                        </div>
                        <div className="bg-black p-6 rounded-b-2xl text-white text-center">
                            <p className="text-lg  font-bold">Monto a pagar</p>
                            <p className="text-2xl">S/.{totalAmount.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="text-white mb-4">
                        <h4 className="font-bold">¡Recuerda!</h4>
                        <p>Págalo antes de {new Date(paymentDate).toLocaleDateString('es-ES', { weekday: 'long' })}</p>
                        <p>{paymentDate} - 11:59 pm</p>
                    </div>
                    <Link to="/voucher">
                        <Button text="Finalizar compra" width="auto" type="submit" />
                    </Link>
                </div>
                )}
            </div>
            )}
            {selectedOption === 2 && (
                <div className="flex flex-col bg-sky-500/[.06] ... p-6 rounded-xl mb-8 text-center">
                    <h2 className="text-white text-xl text-center font-bold p-6">Pago Contraentrega</h2>
                    <p className="text-white">Recuerda tener el monto listo al momento de recoger tu pedido</p>
                    <div className="flex flex-col my-6">
                        <div className="bg-blue-200 p-6 rounded-2xl text-black text-center w-3/5 self-center">
                            <p className="text-2xl font-bold">Monto a pagar</p>
                            <p className="text-2xl">S/.{totalAmount}</p>
                        </div>
                    </div>
                    <Link to="/voucher">
                        <Button text="Finalizar compra" width="half" type="submit" />
                    </Link>
                </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Pago;