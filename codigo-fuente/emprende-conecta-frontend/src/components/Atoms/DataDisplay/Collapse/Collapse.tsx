import React from 'react';

type CollapseItem = {
    title: string;
    content: string;
}

type CollapseProps = {
    items: CollapseItem[];
}

const Collapse: React.FC<CollapseProps> = ({items}) => {
    return (
        <>
            {items.map((item) => (
                <div tabIndex={0} className="collapse bg-custom-yellow"> 
                    <div className="collapse-title text-xl font-medium text-custom-blue">
                        {item.title}
                    </div>
                    <div className="collapse-content"> 
                        <p className='text-custom-blue'>{item.content}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Collapse;