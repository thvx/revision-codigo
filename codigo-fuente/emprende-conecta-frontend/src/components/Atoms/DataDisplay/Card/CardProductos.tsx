import React from 'react';



type CardProductosProps = { 
    id: number,
    image: string;
    title: string;
    description?: string;
    badges: string[];
    isNew?: boolean;
    extraClasses?: string;
};


const CardProductos: React.FC<CardProductosProps> = ({ id, image, title, description, badges, isNew, extraClasses }) => {
    return (
      <div className={`card sm:w-64 sm:max-w-64 shadow-xl ${extraClasses}`}>
        <figure><a href={`/productdetails/${id}`}><img src={image} alt={title} /></a></figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-xl¿">
            {title}
            {isNew && <div className="badge badge-secondary">NEW</div>}
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {badges.map((badge, index) => (
              <div key={index} className="badge badge-outline">{badge}</div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default CardProductos;