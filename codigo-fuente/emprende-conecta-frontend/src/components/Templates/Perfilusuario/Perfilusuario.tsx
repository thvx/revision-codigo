import perfilusuario from "../../../assets/imagenes/usuario.png"
import pedidos from "../../../assets/imagenes/iconos/pedidos.png"
import abrir from "../../../assets/imagenes/iconos/abrir.png"
import camara from "../../../assets/imagenes/iconos/camara.png"
import datosP from "../../../assets/imagenes/iconos/datos.png"
import contraseña from "../../../assets/imagenes/iconos/candado.png"
import cerrarsesion from "../../../assets/imagenes/iconos/cerrar.png"

const PerfilusuarioTemplate = () => {
    return (
        <div className="flex flex-col mx-auto bg-[#0B3954] min-h-screen w-full">
            <div className="relative mx-auto mt-7">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4">
                    <img src={perfilusuario} alt="" />
                </div>
                <button className="absolute right-2 bottom-2 bg-[#1E1E1E] rounded-full w-8 h-8 flex justify-center items-center">
                    <div className="w-5 h-5 flex justify-center items-center">
                        <img src={camara} alt="" />
                    </div>
                </button>
            </div>
            <h2 className="text-center font-bold text-white mt-4 text-4xl">¡Hola! Christian</h2>
            <h3 className="text-center font-medium text-white mt-4 text-3xl">La Molina, Lima</h3>
            <section className="mt-10 flex flex-col gap-4">
                <button className="flex justify-between px-8 w-full bg-[#34596E] items-center h-14">
                    <div className="flex gap-4">
                        <div>
                            <img src={pedidos} alt="" />
                        </div>
                        <p className="font-semibold text-white">Mis pedidos</p>
                    </div>
                    <div>
                        <img src={abrir} alt="" />
                    </div>
                </button>

                <button className="flex justify-between px-8 w-full bg-[#34596E] items-center h-14">
                    <div className="flex gap-4">
                        <div>
                            <img src={datosP} alt="" />
                        </div>
                        <p className="font-semibold text-white">Datos personales</p>
                    </div>
                    <div>
                        <img src={abrir} alt="" />
                    </div>
                </button>

                <button className="flex justify-between px-8 w-full bg-[#34596E] items-center h-14">
                    <div className="flex gap-4">
                        <div>
                            <img src={contraseña} alt="" />
                        </div>
                        <p className="font-semibold text-white">Cambiar contraseña</p>
                    </div>
                    <div>
                        <img src={abrir} alt="" />
                    </div>
                </button>

                <button className="flex justify-between px-8 w-full bg-[#34596E] items-center h-14"
                onClick={() => { window.location.href = '/'; }}>
                    <div className="flex gap-4">
                        <div>
                            <img src={cerrarsesion} alt="" />
                        </div>
                        <p className="font-semibold text-white">Cerrar Sesión</p>
                    </div>
                    <div>
                        <img src={abrir} alt="" />
                    </div>
                </button>
            </section>

        </div>
    );
};

export default PerfilusuarioTemplate;


