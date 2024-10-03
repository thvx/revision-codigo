import React from "react";

type PaginationProps = {
    numPages: number,
    actualPage: number,
}

const Pagination: React.FC<PaginationProps> = ({ numPages, actualPage }) => {
    const pages = [];
    for(let i=0; i<numPages; i++){
        pages.push(
            <button key={i} className={`join-item btn  hover:bg-custom-yellow ${i===actualPage ? 'bg-custom-darkblue': 'bg-custom-blue'}`}> {i} </button>
        )
    }
    return(
        <div className="join">
            {pages}
        </div>
    )
}

export default Pagination