import React from 'react';

interface CardProps {
  image: string;
  title: string;
  price?: string;
  badges: string[];
  isNew?: boolean;
  extraClasses?: string;
}

const Card: React.FC<CardProps> = ({ image, title, price, badges, isNew, extraClasses }) => {
  return (
    <div className={`card sm:max-w-72 shadow-xl ${extraClasses}`}>
      <figure><img src={image} alt={title} /></figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-xl¿">
          {title}
          {isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{price}</p>
        <div className="card-actions justify-end">
          {badges.map((badge, index) => (
            <div key={index} className="badge badge-outline">{badge}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
