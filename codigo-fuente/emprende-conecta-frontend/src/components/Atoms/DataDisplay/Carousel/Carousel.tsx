import React from 'react';
import CardProductos from '../Card/CardProductos';

interface CarouselProps {
    items: {
      image: string;
      title: string;
      description: string;
      badges: string[];
      isNew?: boolean;
      extraClasses?: string;
    }[];
  }
  


const Carousel: React.FC<CarouselProps> = ({items}) => {
    
    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    {items.map((item, index) => (
                        <div key={index} className='w-full h-64 object-cover mx-2'>
                            <CardProductos 
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            badges={item.badges}
                            isNew={item.isNew}
                            extraClasses={item.extraClasses}
                            />
                        </div>
                    ))}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    {items.map((item, index) => (
                        <div key={index} className='w-full object-cover mx-2'>
                            <CardProductos 
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            badges={item.badges}
                            isNew={item.isNew}
                            extraClasses={item.extraClasses}
                            />
                        </div>
                    ))}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;