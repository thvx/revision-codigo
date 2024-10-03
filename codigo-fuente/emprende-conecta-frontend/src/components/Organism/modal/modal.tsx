import React from 'react';
import Button from '../../Atoms/Actions/button/button';
import Check from '../../../assets/check.png';

type ModalProps = {
    id: string;
    title: string;
    message: string;
    leftButtonText: string;
    rightButtonText: string;
    leftButtonLink: string;
    rightButtonLink: string;
};

const Modal: React.FC<ModalProps> = ({ id, title, message, leftButtonText, rightButtonText, leftButtonLink, rightButtonLink }) => {
    const handleLeftButtonClick = () => {
        window.location.href = leftButtonLink;
    };

    const handleRightButtonClick = () => {
        window.location.href = rightButtonLink;
    };

    return (
        <dialog id={id} className="modal">
            <div className="modal-box flex flex-col items-center bg-custom-blue">
                <img src={Check} alt="Check" className="w-16 h-16 mb-4" />
                <h3 className="font-bold text-white text-lg text-center">{title}</h3>
                <p className="py-4 text-white text-center">{message}</p>
                <div className="modal-action w-full gap-6 flex justify-between">
                    <Button text={leftButtonText} width="half" type="button" onClick={handleLeftButtonClick} />
                    <Button text={rightButtonText} width="half" type="submit" onClick={handleRightButtonClick} />
                </div>
            </div>
        </dialog>
    );
};

export default Modal;
