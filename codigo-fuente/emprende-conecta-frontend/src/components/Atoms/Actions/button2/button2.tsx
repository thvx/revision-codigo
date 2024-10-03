import classNames from "classnames";

interface Button2Props {
    onClick?: () => void;
    type?: "button" | "submit" | "reset"; // Tipo del botón
    text?: string;
    variant?:
        | "blue"
        | "yellow"
        | "transparent"
        | "lightblue"
        | "darkblue"
        | "grey";
    styles?: string;
    icon?: React.ReactNode;
}

const Button2 = ({
    onClick,
    type = "button",
    text,
    variant,
    styles,
    icon,
}: Button2Props) => {
    const buttonClass = classNames(
        `  ${styles}  sm:text-lg  border-1 border-transparent flex justify-center items-center gap-3  px-4  py-2  font-bold`,
        {
            "bg-custom-blue text-black  ": variant === "blue",
            "bg-custom-yellow text-custom-blue ": variant === "yellow",
            "bg-transparent text-white border-white ":
                variant === "transparent",
            "bg-custom-lightblue text-white  ": variant === "lightblue",
            "bg-custom-darkblue text-white ": variant === "darkblue",
            "bg-custom-grey text-white": variant === "grey",
        }
    );
    return (
        <button type={type} onClick={onClick} className={buttonClass}>
            {icon}
            {text}
        </button>
    );
};

export default Button2;
