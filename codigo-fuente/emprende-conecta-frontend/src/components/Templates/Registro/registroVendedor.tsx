import React, { useState } from "react";
import Button from "../../Atoms/Actions/button/button";
import FormGroup from "../../Organism/formGroup/formGroup";
import Checkbox from "../../Atoms/Input/checkbox/Checkbox";
import Modal from "../../Organism/modal/modal";
import Avatar from "../../Atoms/DataDisplay/Avatar/Avatar";
import Mapa from "../../../assets/imagenes/Lima.png";
import Radio from "../../Atoms/Input/radio/Radio";
import { crearEmprendimiento } from "./registro.api";
import axios from "axios";

// Función separada para manejar el registro del emprendimiento
const registrarEmprendimiento = async (formData: any) => {
  try {
    const response = await crearEmprendimiento(formData);
    console.log("Success:", response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error en la respuesta del servidor:", error.response?.data);
      console.error("Código de estado:", error.response?.status);
    } else {
      console.error("Error al hacer la solicitud:", (error as Error).message);
    }
  }
};

const RegistroVendedorForm: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [formData, setFormData] = useState({
    nombre_emprendimiento: "",
    categoria: 1,
    correo: "",
    ubicacion: "",
    presentacion: "",
    telefono_contacto: "",
    nombre: "",
    apellido: "",
    password: "",
    telefono_personal: "",
  });

  const [selected, setSelected] = useState<string>("horario1");

  // Función para abrir el modal
  const openModal = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement | null;
    modal?.showModal();
    registrarEmprendimiento(formData);
  };

  // Función manejadora del cambio de inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para seleccionar el horario
  const handleRadioChange = (name: string) => {
    setSelected(name);
  };

  // Función para cambiar de página en el formulario
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTabChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <form className="h-full p-4 flex flex-col mb-40">
      {currentPage === 1 && (
        <>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-custom-yellow text-center mb-4 py-6">
              Datos básicos
            </h1>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col lg:gap-24 md:gap-24 justify-center px-12 mb-12">
            <div className="flex flex-col gap-4 w-full max-w-80">
              <FormGroup
                type="text"
                label="Nombre"
                placeholder="Nombre del emprendimiento"
                required
                value={formData.nombre_emprendimiento}
                onChange={handleInputChange}
                name="nombre_emprendimiento"
              />
              <FormGroup
                label="Contacto"
                type="email"
                placeholder="Correo electrónico"
                required
                value={formData.correo}
                onChange={handleInputChange}
                name="correo"
              />
              <div className="form-control mb-4">
                <FormGroup
                  label="Presentación"
                  type="textarea"
                  placeholder="Lo mejor para tu negocio digital. Detalles que conectan"
                  required
                  value={formData.presentacion}
                  onChange={handleInputChange}
                  name="presentacion"
                />
                <p className="text-sm text-custom-yellow pt-2">
                  Describa de qué trata su emprendimiento
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-white mb-2">
                  Horario de atención
                </h3>
                <ul>
                  <li className="flex items-center mb-2">
                    <Radio
                      radioType="radio-accent"
                      isDisabled={false}
                      isChecked={selected === "horario1"}
                      size="radio-md"
                      name="horario1"
                      text="Horario no disponible. No mostrar el horario"
                      marginRight="mr-2"
                      onChange={() => handleRadioChange("horario1")}
                    />
                  </li>
                  <li className="flex items-center mb-2">
                    <Radio
                      radioType="radio-accent"
                      isDisabled={false}
                      isChecked={selected === "horario2"}
                      size="radio-md"
                      name="horario2"
                      text="Siempre abierto. El lugar está abierto las 24h"
                      marginRight="mr-2"
                      onChange={() => handleRadioChange("horario2")}
                    />
                  </li>
                  <li className="flex items-center mb-2">
                    <Radio
                      radioType="radio-accent"
                      isDisabled={false}
                      isChecked={selected === "horario3"}
                      size="radio-md"
                      name="horario3"
                      text="Horario habitual. Ingresa un horario específico"
                      marginRight="mr-2"
                      onChange={() => handleRadioChange("horario3")}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full max-w-80">
              <FormGroup
                type="text"
                label="Categoría"
                placeholder="Buscar categorías"
                value={formData.categoria.toString()}
                onChange={handleInputChange}
                name="categoria"
              />
              <FormGroup
                type="text"
                label="Ubicación"
                placeholder="Dirección del emprendimiento"
                required
                value={formData.ubicacion}
                onChange={handleInputChange}
                name="ubicacion"
              />
              <img src={Mapa} alt="Mockup de mapa de Lima" />
              <FormGroup
                type="text"
                label="Conecta WhatsApp"
                placeholder="N° Celular"
                required
                value={formData.telefono_contacto}
                onChange={handleInputChange}
                name="telefono_contacto"
              />
              <p className="text-sm text-custom-yellow">
                Te enviaremos un código por WhatsApp. Solo debes ingresar tu
                número de teléfono personal o el de tu emprendimiento.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-12">
            <Button
              text="Siguiente"
              width="quarter"
              onClick={handleNextPage}
              type="button"
            />
            <div role="tablist" className="tabs tabs-bordered pt-8">
              <button
                role="tab"
                className={`tab ${currentPage === 1 ? "tab-active" : ""}`}
                onClick={() => handleTabChange(1)}
              >
                1
              </button>
              <button
                role="tab"
                className={`tab ${currentPage === 2 ? "tab-active" : ""}`}
                onClick={() => handleTabChange(2)}
              >
                2
              </button>
              <button
                role="tab"
                className={`tab ${currentPage === 3 ? "tab-active" : ""}`}
                onClick={() => handleTabChange(3)}
              >
                3
              </button>
            </div>
          </div>
        </>
      )}
      {currentPage === 2 && (
        <div className="flex flex-col justify-center lg:mx-64 px-12 mb-12">
          <h1 className="text-2xl font-bold text-custom-yellow mb-4 pt-12">
            Personaliza tu emprendimiento
          </h1>
          <p className="text-white  pb-12">
            Usa tu logotipo y/o una imagen de portada que las personas puedan
            asociar fácilmente con tu emprendimiento.
          </p>
          <div className="avatar flex-col mb-24">
            <div className="w-full h-48 rounded">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Fondo default"
              />
            </div>
            <div className="absolute top-36 self-center"></div>
          </div>
          <div className="flex flex-row justify-center gap-8">
            <div className="form-control flex-col ">
              <h2 className="text-xl font-bold text-white text-center p-4">
                Métodos de Entrega
              </h2>
              <label className="label cursor-pointer">
                <span className="label-text p-4 text-white">
                  Retiro en tienda
                </span>
                <Checkbox checkboxType="checkbox-primary" size="checkbox-sm" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text p-4 text-white">
                  Despacho a domicilio
                </span>
                <Checkbox checkboxType="checkbox-primary" size="checkbox-sm" />
              </label>
            </div>
            <div className="form-control flex-col mb-12">
              <h2 className="text-xl font-bold text-white text-center p-4">
                Medios de Pago
              </h2>
              <label className="label cursor-pointer">
                <span className="label-text p-4 text-white">Pago en efectivo</span>
                <Checkbox checkboxType="checkbox-primary" size="checkbox-sm" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text p-4 text-white">Pago con tarjeta</span>
                <Checkbox checkboxType="checkbox-primary" size="checkbox-sm" />
              </label>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-12">
            <Button
              text="Siguiente"
              width="half"
              onClick={handleNextPage}
              type="button"
            />
            <div role="tablist" className="tabs tabs-bordered pt-8">
              <button
                role="tab"
                className={`tab ${currentPage === 1 ? "tab-active" : ""}`}
                onClick={() => handleTabChange(1)}
              >
                1
              </button>
              <button
                role="tab"
                className={`tab ${currentPage === 2 ? "tab-active" : ""}`}
                onClick={() => handleTabChange(2)}
              >
                2
              </button>
              <button
                role="tab"
                className={`tab ${currentPage === 3 ? "tab-active" : ""}`}
                onClick={() => handleTabChange(3)}
              >
                3
              </button>
            </div>
          </div>
        </div>
      )}
      {currentPage === 3 && (
        <div className="flex flex-col lg:mx-64 px-12 mb-12">
          <div className="flex justify-center items-center">
            <h1 className="text-2xl font-bold text-custom-yellow mb-4 p-12 pb-4">
              Datos personales
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <Avatar alt="Foto de perfil emprendimiento" size="w-32" />
            <FormGroup
              type="text"
              label="Nombres"
              placeholder="Nombres"
              size="lg"
              required
              value={formData.nombre}
              onChange={handleInputChange}
              name="nombre"
            />
            <FormGroup
              type="text"
              label="Apellidos"
              size="lg"
              placeholder="Apellidos"
              required
              value={formData.apellido}
              onChange={handleInputChange}
              name="apellido"
            />
            <FormGroup
              type="password"
              label="Contraseña"
              size="lg"
              placeholder="Contraseña"
              required
              value={formData.password}
              onChange={handleInputChange}
              name="password"
            />
            <FormGroup
              label="Teléfono personal"
              type="tel"
              size="lg"
              placeholder="Teléfono personal"
              required
              value={formData.telefono_personal}
              onChange={handleInputChange}
              name="telefono_personal"
            />
          </div>
          <div className="flex flex-col items-center justify-center pt-12">
            <Button
              text="Registrar"
              width="quarter"
              type="submit"
              onClick={openModal}
            />
            <Modal
              id="my_modal_1"
              title="¡REGISTRO EXITOSO!"
              message="Sus datos y el de su emprendimiento se han registrado correctamente"
              leftButtonText="Ir a mi perfil"
              rightButtonText="Explorar productos"
              leftButtonLink="/perfil/usuario"
              rightButtonLink="/dashboard"
            />
            <div role="tablist" className="tabs tabs-bordered pt-8">
              <button
                role="tab"
                className={`tab ${currentPage === 1 ? "tab-active" : ""}`}
                onClick={() => handleTabChange(1)}
              >
                1
              </button>
              <button
                role="tab"
                className={`tab ${currentPage === 2 ? "tab-active" : ""}`}
                onClick={() => handleTabChange(2)}
              >
                2
              </button>
              <button
                role="tab"
                className={`tab ${currentPage === 3 ? "tab-active" : ""}`}
                onClick={() => handleTabChange(3)}
              >
                3
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default RegistroVendedorForm;
