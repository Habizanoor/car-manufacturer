import React from 'react';

const Tool = ({ tool }) => {
    return (
        <div>
            <div className="card w-50 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={tool.picture} alt="Shoes" className="rounded-xl h-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{tool.name}</h2>
                   
                    <p>{tool?.description}</p>
                    <p className='text-xl'>Price: {tool.price}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-secondary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;