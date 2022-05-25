import React from 'react';

const AnyQuery = () => {
    return (
        <div className="hero p-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Any Queries ??</h1>
                    <p className="py-6">An easy way to post your sourcing requests and get quotes.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Product name or keywords" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            
                        <textarea className="textarea input-bordered" placeholder="Your query"></textarea>
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnyQuery;