import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size: 'w-10' | 'w-16' | 'w-24' | 'w-32'; 
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size }) => {
  return (
    <div className="avatar">
      <div className={`rounded-full ${size}`}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Avatar;
