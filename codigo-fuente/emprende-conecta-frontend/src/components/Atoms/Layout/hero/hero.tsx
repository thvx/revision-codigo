import React from "react";

const Hero: React.FC = () => {
    return (
        <div className="hero min-h-screen bg-[#0B3954]">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="../../../../assets/images/portada.png"
                    className="max-w-sm rounded-lg shadow-2xl"
                    alt="Hero Image"
                />
                <div>
                    <h1 className="text-5xl font-bold text-white">
                        Lleva tu negocio al mundo digital y
                    </h1>
                    <h2 className="text-4xl font-bold text-yellow-400">
                        Vende a todo el Perú
                    </h2>
                    <p className="py-6 text-white">
                        Sin comisiones. Digitaliza tu MYPE <br />
                        Sin tarifas. Crecimiento digital en Perú
                    </p>
                    <button className="btn bg-yellow-400 text-black border-none hover:bg-yellow-500">
                        Vamos
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
