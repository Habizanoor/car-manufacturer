import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);

    return (
        <div className='py-28'>
            <h2 className='text-2xl font-bold mb-5 text-center'>Our Tools</h2>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 '>
                {
                    tools.slice(0, 6).map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;