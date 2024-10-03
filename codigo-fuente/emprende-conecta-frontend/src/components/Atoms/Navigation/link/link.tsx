import React from "react";

type LinkProps = {
    title: string,
    url: string;
}

const Link: React.FC<LinkProps> = ({title, url}) => {
    return(
        <>
            <a href={url} className="text-white hover:underline hover:cursor-pointer capitalize">
                {title}
            </a>
        </>
    )
}

export default Link