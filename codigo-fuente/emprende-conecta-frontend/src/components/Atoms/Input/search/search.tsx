import React, { forwardRef } from 'react';
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState, KeyboardEvent } from 'react';

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder, value, onChange }, ref) => {
    const navigate = useNavigate();

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && value.trim()) {
          navigate(`/dashboard?search=${encodeURIComponent(value)}`);
      }
    };

    return (
      <input 
        type="text" 
        placeholder={placeholder} 
        aria-label={placeholder} // Accessibility improvement
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyPress}
        className="input input-bordered min-w-32 w-full mx-8 px-8" 
        ref={ref}
      />
    );
  }
);

export default SearchInput;