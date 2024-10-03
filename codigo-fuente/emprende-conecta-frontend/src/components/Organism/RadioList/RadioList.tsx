import React, { useState } from 'react';
import Radio from '../../Atoms/Input/radio/Radio';
import { RadioItem } from '../../Atoms/Input/radio/radioType';

type RadioListProps = {
    items: RadioItem[]
  };
  
  const RadioList: React.FC<RadioListProps> = ({ items }) => {
    const [selected, setSelected] = useState<string>(items[0].name);
  
    const handleChange = (name: string) => {
      setSelected(name);
    };
  
    return (
      <div>
        {items.map((item) => (
          <Radio
            key={item.name}
            name={item.name}
            text={item.text}
            size={item.size}
            marginRight={item.marginRight}
            isChecked={selected === item.name}
            onChange={() => handleChange(item.name)}
          />
        ))}
      </div>
    );
  };
  
  export default RadioList;