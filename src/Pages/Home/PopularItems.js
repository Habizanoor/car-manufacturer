import React from 'react';

const PopularItems = ({tool}) => {
    return (
        <div className="carousel-item">
            <img src={tool.picture} className="rounded-box w-[250px]" />
        </div>
    );
};

export default PopularItems;