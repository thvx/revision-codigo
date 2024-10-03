import React from 'react';

type CheckBoxProps = {
  checkboxType?: 'checkbox-primary' | 'checkbox-secondary' | 'checkbox-accent' | 'checkbox-success' | 'checkbox-warning' | 'checkbox-info' | 'checkbox-error',
    checkedType?: 'defaultChecked' | 'checked',
    isDisabled?: boolean,
    size: 'checkbox-xs' | 'checkbox-sm' | 'checkbox-md' | 'checkbox-lg'
};

const Checkbox: React.FC<CheckBoxProps> = ({ checkboxType = '', checkedType = 'defaultChecked', isDisabled = false, size }) => {
    const checkBoxProps = {
        [checkedType]: true,
        disabled: isDisabled,
        className: `checkbox ${checkboxType} ${size}`
      };

      return (
        <input type="checkbox" {...checkBoxProps} />
      );
}

export default Checkbox;