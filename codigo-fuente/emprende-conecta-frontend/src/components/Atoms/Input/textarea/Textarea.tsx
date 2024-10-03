import React, { ChangeEvent } from 'react';

type TextAreaProps = {
  textareaType?: 'textarea-primary' | 'textarea-secondary' | 'textarea-accent' | 'textarea-success' | 'textarea-warning' | 'textarea-info' | 'textarea-error',
    isDisabled?: boolean,
    size: 'xs' | 'sm' | 'md' | 'lg',
    placeholder: string
    required?: boolean
    name?: string
    value?: string
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
};

const TextArea: React.FC<TextAreaProps> = ({ textareaType = '', isDisabled = false, size, placeholder,  required, value, name, onChange }) => {
    const TextAreaProps = {
        disabled: isDisabled,
        className: `textarea textarea-bordered w-full max-w-xs ${textareaType} textarea-${size}`,
        required: required,
        value: value,
        name: name,
        onChange: onChange
      };
    
      return (
        <textarea {...TextAreaProps} placeholder={placeholder}></textarea>
      );
}

export default TextArea;
