import React from 'react';

const AnyQuery = () => {
    return (
        <div class="hero p-10 bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Any Queries ??</h1>
                    <p class="py-6">An easy way to post your sourcing requests and get quotes.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <input type="text" placeholder="Product name or keywords" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            
                        <textarea class="textarea input-bordered" placeholder="Your query"></textarea>
                            
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-neutral">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnyQuery;