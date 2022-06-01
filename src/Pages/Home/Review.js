import React, { useEffect, useState } from 'react';

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-reef-16634.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div className=''>
            
            <div className="overflow-x-auto my-20">
            <h4 className='text-2xl py-5 font-bold text-center'>Customer Review</h4>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map((r, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{r.buyerName}</td>
                                    <td>{r.buyer}</td>
                                    <td>{r.userReview}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Review;