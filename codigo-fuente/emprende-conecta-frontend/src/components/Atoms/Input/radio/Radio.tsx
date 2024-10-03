import React from 'react';

type RadioProps = {
  radioType?: 'radio-primary' | 'radio-secondary' | 'radio-accent' | 'radio-success' | 'radio-warning' | 'radio-info' | 'radio-error',
  isDisabled?: boolean,
  isChecked?: boolean,
  size: 'radio-xs' | 'radio-sm' | 'radio-md' | 'radio-lg',
  name: string,
  text: string,
  marginRight: string,
  onChange: () => void
};

const Radio: React.FC<RadioProps> = ({ radioType = 'radio-accent', isDisabled = false, isChecked = true, size, name, text, marginRight, onChange }) => {
  const radioProps = {
    disabled: isDisabled,
    checked: isChecked,
    name: name,
    className: `radio ${radioType} ${size}`,
    // className: 'radio ' + 'radio-' + radioType + 'radio-' + size,
    onChange: onChange
  };

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <input type="radio" style={{ marginRight: '8px' }} {...radioProps} />
        <span className={`label-text ${marginRight}`} style={{ whiteSpace: 'pre-wrap', color: 'white', fontWeight: 'bold' }}>
          {text}
        </span>
      </label>
    </div>
  );
};

export default Radio;