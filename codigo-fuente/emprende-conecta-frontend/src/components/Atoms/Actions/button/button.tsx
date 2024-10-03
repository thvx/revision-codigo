import React from "react";

type ButtonProps = {
    text: string;
    width: "full" | "half" | "quarter" | "auto"; // Agregar 'full' a los anchos disponibles
    onClick?: () => void; // Prop onClick opcional
    type?: "button" | "submit" | "reset"; // Tipo del botón
};

const Button: React.FC<ButtonProps> = ({
    text,
    width,
    onClick,
    type = "button",
}) => {
    const widthClass = {
        full: "w-full", // Clase para el ancho completo
        half: "w-1/2",
        quarter: "w-1/4",
        auto: "w-auto",
    }[width];

    return (
        <button
            type={type}
            className={`bg-custom-yellow text-custom-blue font-bold py-2 px-4 rounded ${widthClass}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
