import React from 'react';

const Portfolio = () => {
    return (
        <div className="card w-auto bg-base-100 shadow-xl mx-auto mt-10">
            <div className="card-body">
                <p><span className='font-bold'>Name:</span> Habiza Noor Hussain</p>
                <p><span className='font-bold'>email:</span> habizanoor11@gmail.com</p>
                <p><span className='font-bold'>Education:</span> BSc in CSE </p>
                <p><span className='font-bold'>skills:</span> html, html5, css, css3, bootstrap, tailwind, javascript, dom, ES6, react, firebase authentication, react router, react query, daisyUi, node.js express.js, mongodb, firebase, git, netlify,   </p>
                <p className='font-bold'>Some of my projects live site link: </p>
                <ul className='p-1'>
                    <li>https://independent-service-prov-f268e.web.app/</li>
                    <li>https://starlit-malasada-e56bc8.netlify.app/</li>
                    <li>https://ware-house-34602.web.app/</li>
                </ul>
            </div>
        </div >
    );
};

export default Portfolio;