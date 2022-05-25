import React from 'react';

const Popular = () => {
    return (
        <div className='py-28'>
            <h2 className='text-2xl font-bold mb-5 text-center'>Our Popupar Items</h2>
            <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box py-10">
                <div className="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=8B7BCDC2" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=225E6693" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=9D9539E7" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=BDC01094" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=7F5AE56A" className="rounded-box" />
                </div>
            </div>
        </div>
    );
};

export default Popular;