import React from 'react';

type TextInputPasswordProps = {
  inputType?: 'input-primary' | 'input-secondary' | 'input-accent' | 'input-success' | 'input-warning' | 'input-info' | 'input-error',
    isDisabled?: boolean,
    size: 'xs' | 'sm' | 'md' | 'lg',
    placeholder: string
    required?: boolean
    name?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const TextInputPassword: React.FC<TextInputPasswordProps> = ({ inputType = '', isDisabled = false, size, placeholder,  required, value, name, onChange }) => {
    const TextInputPasswordProps = {
        className: `input input-bordered ${inputType} w-full max-w-xs flex items-center gap-2 input-${size}`
      };
    
      return (
      <label {...TextInputPasswordProps}>
        <input type="password" className="grow" placeholder={placeholder} disabled={isDisabled} required={required} name={name} value={value} onChange={onChange}/>
        </label>
      );
}

export default TextInputPassword;