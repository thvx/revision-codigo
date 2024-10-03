import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
  size: 'w-10' | 'w-16' | 'w-24' | 'w-32'; 
}

const Logo: React.FC<LogoProps> = ({ src, alt, size }) => {
  return (
    <img src={src} alt={alt} className={` ${size}`} />
  );
};

export default Logo;
