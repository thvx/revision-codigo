import React, {useRef, useState} from 'react';

interface AvatarProps {
    alt: string;
    size: 'w-10' | 'w-16' | 'w-24' | 'w-32'; 
  }

const Avatar: React.FC<AvatarProps> = ({ alt, size }) => {
    
    const DEFAULT_IMAGE = "../../../../assets/imagenes/iconos/useer.png"
    const [image, setImage] = useState<string | ArrayBuffer | null>(DEFAULT_IMAGE);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files ? e.target.files[0] : null;
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
      };

    return (
        <>
        <div className="avatar" onClick={handleClick}>
          <div className={`rounded-full overflow-hidden ring-2 ring-custom-lightblue ring-offset-base-100 ring-offset-2 ${size}`} style={{ backgroundImage: `url(${image ? image.toString() : DEFAULT_IMAGE})`, backgroundSize: 'contain', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
            {/* Eliminar el elemento img */}
          </div>
        </div>
        <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} style={{ display: 'none' }} />
      </>
      );
}

export default Avatar;