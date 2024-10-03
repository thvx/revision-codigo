import React from 'react';

interface ToastProps {
  messages: { id: number; message: string; type: 'info' | 'success' | 'warning' | 'error' }[];
  position?: 'top-start' | 'top-center' | 'top-end';
  onClose: (id: number) => void;
}

const Toast: React.FC<ToastProps> = ({ messages, position = 'top-start', onClose }) => {
  const positionClasses = {
    'top-start': 'toast toast-top toast-start',
    'top-center': 'toast toast-top toast-center',
    'top-end': 'toast toast-top toast-end',
  };

  const alertClasses = {
    info: 'alert alert-info',
    success: 'alert alert-success',
    warning: 'alert alert-warning',
    error: 'alert alert-error',
  };

  return (
    <div className={positionClasses[position]}>
      {messages.map((msg) => (
        <div key={msg.id} className={alertClasses[msg.type]}>
          <span>{msg.message}</span>
          <button className="ml-auto btn btn-ghost btn-sm" onClick={() => onClose(msg.id)}>✕</button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
