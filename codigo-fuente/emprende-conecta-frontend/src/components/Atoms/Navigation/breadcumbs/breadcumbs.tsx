import React from 'react';

type BreadCrumbItem = {
    title: string,
    iconLink: string,
  };
  
type BreadCrumbsProps = {
    items: BreadCrumbItem[],
};

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ items }) => {
    
    return (
        <>
            <div className="text-sm breadcrumbs bg-custom-blue w-auto px-4 flex justify-center">
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {index < items.length - 1 ? (
                                <a className="text-white">
                                    <svg xmlns={item.iconLink} fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"> </path> </svg>
                                    {item.title}
                                </a>
                            ) : (
                                <span className="inline-flex gap-2 items-center text-white">
                                    <svg xmlns={item.iconLink} fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                    {item.title}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default BreadCrumbs;