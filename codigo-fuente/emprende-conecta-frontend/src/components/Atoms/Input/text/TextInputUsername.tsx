import React from 'react';

type TextInputUsernameProps = {
  inputType?: 'input-primary' | 'input-secondary' | 'input-accent' | 'input-success' | 'input-warning' | 'input-info' | 'input-error',
    isDisabled?: boolean,
    size: 'xs' | 'sm' | 'md' | 'lg',
    placeholder: string
    required?: boolean
    name?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const TextInputUsername: React.FC<TextInputUsernameProps> = ({ inputType = '', isDisabled = false, size, placeholder,  required, value, name, onChange }) => {
    const TextInputUsernameProps = {
        className: `input input-bordered ${inputType} w-full max-w-xs flex items-center gap-2 input-${size}`
      };
    
      return (
      <label {...TextInputUsernameProps}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
        <input type="text" className="grow" placeholder={placeholder} disabled={isDisabled} required={required} name={name} value={value} onChange={onChange}/>
        </label>
      );
}

export default TextInputUsername;