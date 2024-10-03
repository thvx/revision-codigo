import React from 'react';



type CardLoginProps = { 
    img: string;
    content: string;
};


const CardLogin: React.FC<CardLoginProps> = ({img, content}) => {
    return (
        <> 
            <div className="card w-96 h-72 bg-custom-yellow shadow-xl">
                <figure><img src={img} alt="Purchaser" /></figure>
                <div className="card-title">
                    <h2 className="card-body text-center text-custom-blue">{content}</h2>
                </div>
            </div>
        </>
    );
}

export default CardLogin;