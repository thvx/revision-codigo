import React, {useState} from 'react';
import Button from '../../Atoms/Actions/button/button';
import FormGroup from '../../Organism/formGroup/formGroup';
import Modal from '../../Organism/modal/modal';
import Mapa from '../../../assets/imagenes/Lima.png';
import Avatar from '../../Atoms/DataDisplay/Avatar/Avatar';
import {crearPersona} from './registro.api';

const RegistroComprador: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        telefono: '',
        password: '',
        nuevaContrasena: '',
        email: '',
        email_recuperacion: '',
        direccion: '',
        tipo: 1
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const openModal = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        const modal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
        modal?.showModal();
        const registrarPersona = async () => {
            try {
                const response = await crearPersona(formData);
                console.log('Success:', response.data);
            } catch (error) {
                if (error.response) {
                    console.error('Error en la respuesta del servidor:', error.response.data);
                    console.error('Código de estado:', error.response.status);
                } else {
                    console.error('Error al hacer la solicitud:', error.message);
                }
            }
        };
        registrarPersona();
    };    

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
        scrollToTop();
    };

    const handleTabChange = (page: number) => {
        setCurrentPage(page);
        scrollToTop();
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <form className="h-full p-4 flex flex-col mb-40">
            {currentPage === 1 && (
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-custom-yellow text-center mb-4 py-6">Datos personales</h1>
                    <div className="flex justify-center mb-4">
                        <div className="relative">
                            <Avatar
                                alt="Foto de perfil de usuario"
                                size="w-32"
                            />
                            <div className="absolute bottom-0 right-0">
                                <button className="bg-white rounded-full p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <FormGroup
                            type='text' 
                            label="Nombres" 
                            placeholder="Nombres" 
                            size='lg'
                            required 
                            value={formData.nombre} 
                            onChange={handleInputChange} 
                            name="nombre" 
                        />
                        <FormGroup
                            type='text'
                            label="Apellidos" 
                            size='lg'
                            placeholder="Apellidos" 
                            required 
                            value={formData.apellido} 
                            onChange={handleInputChange} 
                            name="apellido" 
                        />
                        <FormGroup
                            type='text'
                            label="DNI" 
                            size='lg'
                            placeholder="DNI"
                            required 
                            value={formData.dni} 
                            onChange={handleInputChange}
                            name="dni"
                         />
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button
                            text="Siguiente"
                            width="auto"
                            type="button"
                            onClick={handleNextPage}
                        />
                    </div>
                    <div role="tablist" className="tabs tabs-bordered pt-8 flex justify-center">
                        <a role="tab" className={`tab ${currentPage === 1 ? "tab-active" : ""}`}
                            onClick={() => handleTabChange(1)}>1
                        </a>
                        <a role="tab" className={`tab ${currentPage === 2 ? "tab-active" : ""}`}
                            onClick={() => handleTabChange(2)}>2
                        </a>
                    </div>
                </div>
            )}
            {currentPage === 2 && (
                <>
                    <h1 className="text-2xl font-bold text-custom-yellow text-center mb-4 py-6">Información de contacto</h1>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 w-full sm:w-3/4 lg:w-1/2">
                            <FormGroup
                                type='tel'
                                label="Número de Teléfono"
                                name="telefono"
                                placeholder="Teléfono"
                                required 
                                value={formData.telefono} 
                                onChange={handleInputChange}
                            />
                            <FormGroup
                                label="Contraseña"
                                name="password"
                                placeholder="Contraseña"
                                type='password'
                                required 
                                value={formData.password} 
                                onChange={handleInputChange}
                            />
                            <FormGroup
                                label="Correo Electrónico"
                                name="email"
                                placeholder="Correo electrónico"
                                type='email'
                                required 
                                value={formData.email} 
                                onChange={handleInputChange}
                            />
                            <FormGroup
                                label="Confirmar Contraseña"
                                name="nuevaContrasena"
                                placeholder="Confirmar contraseña"
                                type='password'
                                required 
                                value={formData.nuevaContrasena} 
                                onChange={handleInputChange}
                            />
                            <FormGroup
                                label="Correo de Recuperación"
                                name="email_recuperacion"
                                placeholder="Correo de recuperación"
                                type='email'
                                required 
                                value={formData.email_recuperacion} 
                                onChange={handleInputChange}
                            />
                            <FormGroup
                                label="Dirección"
                                name="direccion"
                                placeholder="Dirección"
                                type='text'
                                required 
                                value={formData.direccion} 
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <img
                            src={Mapa}
                            alt="Mapa"
                            className=" h-64 object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex justify-center mt-4">
                            <Button text="Registrar" width="auto" type="submit" onClick={openModal}/>
                            <Modal
                                id="my_modal_1"
                                title="¡REGISTRO EXITOSO!"
                                message="Sus datos y el de su emprendimiento se han registrado correctamente"
                                leftButtonText="Ir a mi perfil"
                                rightButtonText="Explorar productos"
                                leftButtonLink='/perfil/usuario'
                                rightButtonLink='/dashboard'
                            />
                    </div>
                    <div role="tablist" className="tabs tabs-bordered pt-8 flex justify-center">
                        <a role="tab" className={`tab ${currentPage === 1 ? "tab-active" : ""}`}
                            onClick={() => handleTabChange(1)}>1
                        </a>
                        <a role="tab" className={`tab ${currentPage === 2 ? "tab-active" : ""}`}
                            onClick={() => handleTabChange(2)}>2
                        </a>
                    </div>
                </>
            )}
        </form>
    );
};

export default RegistroComprador;
