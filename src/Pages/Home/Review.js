import React, { useEffect, useState } from 'react';

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(()=>{
        
    },[])

    return (
        <div class="overflow-x-auto my-20">
            <table class="table w-full">
                
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
};

export default Review;