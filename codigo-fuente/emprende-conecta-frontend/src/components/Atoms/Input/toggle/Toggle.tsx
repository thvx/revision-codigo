import React from 'react';

type ToggleProps = {
    toggleType?: 'toggle-primary' | 'toggle-secondary' | 'toggle-accent' | 'toggle-success' | 'toggle-warning' | 'toggle-info' | 'toggle-error',
    isDisabled?: boolean,
    size: 'toggle-xs' | 'toggle-sm' | 'toggle-md' | 'toggle-lg'
};

const Toggle: React.FC<ToggleProps> = ({ toggleType = '', isDisabled = false, size }) => {
    const toggleProps = {
        disabled: isDisabled,
        className: `toggle ${toggleType} ${size}`
      };
    
      return (
        <input type="checkbox" {...toggleProps} checked />
      );
}

export default Toggle;