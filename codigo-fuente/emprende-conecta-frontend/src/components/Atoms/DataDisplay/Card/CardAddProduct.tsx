
import React, { useState, useEffect } from 'react';

type CardProductosProps = { 
    image: string;
    title: string;
    store: string;
    price: string;
    initialQuantity: number;
    extraClasses?: string;
    onQuantityChange: (newQuantity: number) => void;
};

const CardProductos: React.FC<CardProductosProps> = ({ image, title, store, price, initialQuantity, extraClasses, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const parsePrice = (price: string) => {
        const parsed = parseFloat(price.replace('S/', ''));
        return isNaN(parsed) ? 0 : parsed;
    };

    useEffect(() => {
        if (quantity !== initialQuantity) {
            onQuantityChange(quantity);
        }
    }, [quantity, initialQuantity, onQuantityChange]);

    const increaseQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
    const decreaseQuantity = () => setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));

    const totalPrice = (parsePrice(price) * quantity).toFixed(2);

    return (
        <div className={`card max-w-72 bg-blue-200 shadow-xl flex flex-row ${extraClasses}`}>
            <div className="w-1/3 content-center ml-4">
                <figure><img src={image} alt={title} className="w-full h-full object-cover" /></figure>
            </div>
            <div className="text-custom-blue p-4">
                <h2 className="text-custom-blue font-bold">{title}</h2>
                <p>{store}</p>
                <p>S/ {totalPrice}</p>
                <div className="card-actions flex justify-end items-center mt-2">
                    <button onClick={decreaseQuantity} className="btn bg-custom-yellow border-none text-custom-blue">-</button>
                    <span className="mx-2">{quantity}</span>
                    <button onClick={increaseQuantity} className="btn bg-custom-yellow border-none text-custom-blue">+</button>
                </div>
            </div>
        </div>
    );
};

export default CardProductos;