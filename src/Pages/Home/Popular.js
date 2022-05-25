import React from 'react';
import popular1 from '../../images/popular/popular-1.jpg';
import popular2 from '../../images/popular/popular-2.jpg';
import popular3 from '../../images/popular/popular-3.jpg';
import popular4 from '../../images/popular/popular-4.jpg';
import popular5 from '../../images/popular/popular-5.jpg';
import popular6 from '../../images/popular/popular-6.jpg';
import popular7 from '../../images/popular/popular-7.jpg';

const Popular = () => {
    return (
        // w-[250px]
        <div className='py-32'>
            <h2 className='text-2xl font-bold mb-5 text-center'>Our Popupar Items</h2>
            <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box py-10">
                <div className="carousel-item">
                    <img src={popular1} className="w-[250px] rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src={popular2} className="w-[250px] rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src={popular3} className="w-[250px] rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src={popular4} className="w-[250px] rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src={popular5} className="w-[250px] rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src={popular6} className="w-[250px] rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src={popular7} className="w-[250px] rounded-box" />
                </div>
            </div>
        </div>
    );
};

export default Popular;