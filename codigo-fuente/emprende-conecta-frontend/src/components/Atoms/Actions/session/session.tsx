import React from "react";

type SessionProps = {
    logo: string;
    network: string;
    extraClasses?: string; // Añadir esta prop para clases adicionales
};

const Session: React.FC<SessionProps> = ({ logo, network, extraClasses }) => {
    return (
        <button
            className={`w-full flex items-center border rounded py-2 bg-white text-[#1E1E1E] ${extraClasses}`}
        >
            <div className="flex items-center justify-center w-1/12">
                <img className="h-5 w-5" src={logo} alt={network} />
            </div>
            <div className="flex-1 text-center">
                <span className="text-md">{`Continuar con ${network}`}</span>
            </div>
        </button>
    );
};

export default Session;
