import React from 'react';

type FileInputProps = {
  fileInputType?: 'file-input-primary' | 'file-input-secondary' | 'file-input-accent' | 'file-input-success' | 'file-input-warning' | 'file-input-info' | 'file-input-error',
  isDisabled?: boolean,
  accept?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void, // Añade esta línea
};

const FileInput: React.FC<FileInputProps> = ({
  fileInputType = 'file-input-accent',
  isDisabled = false,
  accept = 'image/*', // Cambiado a solo aceptar imágenes por defecto
  onChange, // Añade esta línea
}) => {
  const fileInputProps = {
      disabled: isDisabled,
      className: `file-input file-input-bordered ${fileInputType} w-full max-w-xs`,
      accept,
      onChange, // Añade esta línea
  };
  
  return (
      <input type="file" {...fileInputProps} />
  );
}

export default FileInput;