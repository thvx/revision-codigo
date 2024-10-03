import React from 'react';
import Card from '../../Atoms/Data Display/card/card';

interface CarouselProps {
  items: {
    image: string;
    title: string;
    price: string;
    badges: string[];
    isNew?: boolean;
    extraClasses?: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <div className="carousel carousel-center max-w p-4 space-x-4 bg-neutral rounded-box">
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          <Card 
            image={item.image}
            title={item.title}
            price={item.price}
            badges={item.badges}
            isNew={item.isNew}
            extraClasses={item.extraClasses}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
