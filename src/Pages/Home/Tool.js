import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/purchase/${id}`);
    }
    // add korci
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
                        <button onClick={()=>navigateToServiceDetail(tool._id)} className="btn btn-outline btn-secondary">Purchase</button>
                    </div>
                    {/* onclick add korci  */}
                </div>
            </div>
        </div>
    );
};

export default Tool;