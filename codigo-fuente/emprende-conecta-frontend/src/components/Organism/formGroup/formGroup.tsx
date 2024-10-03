import React from "react";
import TextInput from "../../Atoms/Input/text/TextInput";
import TextInputMail from "../../Atoms/Input/text/TextInputMail";
import TextInputPassword from "../../Atoms/Input/text/TextInputPassword";
import TextInputSearch from "../../Atoms/Input/text/TextInputSearch";
import TextInputUsername from "../../Atoms/Input/text/TextInputUsername";
import TextInputTel from "../../Atoms/Input/text/TextInputTel";
import TextArea from "../../Atoms/Input/textarea/Textarea";
import TextInputCardNumber from "../../Atoms/Input/text/TextInputCardNumber";
import TextInputDate from "../../Atoms/Input/text/TextInputDate";

type FormGroupProps = {
    label: string,
    isDisabled?: boolean,
    type: 'text' | 'email' | 'password' | 'search' | 'username' | 'textarea' | 'tel' | 'cardNumber' | 'date' | 'number',
    inputType?: 'input-primary' | 'input-secondary' | 'input-accent' | 'input-success' | 'input-warning' | 'input-info' | 'input-error',
    placeholder: string,
    size?: 'xs' | 'sm' | 'md' | 'lg',
    required?: boolean,
    name?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
}

const FormGroup: React.FC<FormGroupProps> = ({
    label,
    isDisabled = false,
    inputType,
    type = 'text',
    size = 'md',
    placeholder,
    required = false,
    name,
    value,
    onChange
}) => {

    const selectInputComponent = (type: string): React.ElementType | null => {
        switch(type) {
            case 'text':
                return TextInput;
            case 'email':
                return TextInputMail;
            case 'password':
                return TextInputPassword;
            case 'search':
                return TextInputSearch;
            case 'username':
                return TextInputUsername;
            case 'tel':
                return TextInputTel;
            case 'textarea':
                return TextArea;
            case 'cardNumber':
                return TextInputCardNumber;
            case 'date':
                return TextInputDate;
            default:
                return TextInput;
        }
    }

    const InputComponent = selectInputComponent(type);

    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text text-white font-bold">{label}</span>
            </label>
            {InputComponent && (
                <InputComponent
                    inputType={inputType}
                    isDisabled={isDisabled}
                    placeholder={placeholder} 
                    size={size} 
                    required={required} 
                    value={value} 
                    onChange={onChange} 
                    name={name}
                />
            )}
        </div>
    );
}

export default FormGroup;