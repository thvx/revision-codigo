import React from 'react';

type SelectProps = {
    selectType?: 'select-primary' | 'select-secondary' | 'select-accent' | 'select-success' | 'select-warning' | 'select-info' | 'select-error',
    isDisabled?: boolean,
    size: 'select-xs' | 'select-sm' | 'select-md' | 'select-lg',
    items: string[]
};

const Select: React.FC<SelectProps> = ({ selectType = '', isDisabled = false, size, items }) => {
    const selectProps = {
        disabled: isDisabled,
        className: `select select-bordered w-full max-w-xs ${selectType} ${size}`
    };
    
    return (
        <select {...selectProps}>
            {items.map((item, index) => (
                index == 0 ? <option key={index} disabled selected>{item}</option>
                : <option key={index}>{item}</option>
            ))}
        </select>
    );
}

export default Select;
