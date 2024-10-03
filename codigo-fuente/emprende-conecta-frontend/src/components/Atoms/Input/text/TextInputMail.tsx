import React from 'react';

type TextInputMailProps = {
  inputType?: 'input-primary' | 'input-secondary' | 'input-accent' | 'input-success' | 'input-warning' | 'input-info' | 'input-error',
    isDisabled?: boolean,
    size: 'xs' | 'sm' | 'md' | 'lg',
    placeholder: string
    required?: boolean
    name?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const TextInputMail: React.FC<TextInputMailProps> = ({ inputType = '', isDisabled = false, size, placeholder,  required, value, name, onChange }) => {
    const TextInputMailProps = {
        className: `input input-bordered ${inputType} w-full max-w-xs flex items-center gap-2 input-${size}`
      };
    
      return (
        // <input type="text" placeholder={placeholder} {...TextInputProps} />
        <label {...TextInputMailProps} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" placeholder={placeholder} disabled={isDisabled} required={required} name={name} value={value} onChange={onChange} />
        </label>
      );
}

export default TextInputMail;
