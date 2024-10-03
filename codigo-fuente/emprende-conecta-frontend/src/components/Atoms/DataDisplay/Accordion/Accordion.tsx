import React from 'react';

type AccordionItem = {
    title: string;
    content: string;
}

type AccordionProps = {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    return (
    <>
        {items.map((item, index) => (
            <div key={index} className="collapse collapse-arrow bg-base-200 bg-custom-lightblue">
                <input type="radio" name="my-accordion-2" defaultChecked={index===0} />
                <div className="collapse-title text-xl font-medium text-white">
                    {item.title}
                </div>
                <div className="collapse-content text-white">
                    <p>{item.content}</p>
                </div>
            </div>
            ))}
    </>
    );
}

export default Accordion;