import React from 'react';

type TextInputTelProps = {
  inputType?: 'input-primary' | 'input-secondary' | 'input-accent' | 'input-success' | 'input-warning' | 'input-info' | 'input-error',
    isDisabled?: boolean,
    size: 'xs' | 'sm' | 'md' | 'lg',
    placeholder: string
    required?: boolean
    name?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const TextInputTel: React.FC<TextInputTelProps> = ({ inputType = '', isDisabled = false, size, placeholder, required, value, name, onChange }) => {
    const TextInputProps = {
        disabled: isDisabled,
        className: `input input-bordered w-full max-w-xs ${inputType} input-${size}`,
        required: required,
        value: value,
        name: name,
        onChange: onChange
      };
    
      return (
        <input type="tel" placeholder={placeholder} {...TextInputProps} />
      );
}

export default TextInputTel;