import { useEffect, useState } from "react";

const useToolDetail = _id =>{
    const [perchase, setPurchase] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/tool/${_id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPurchase(data));
    },[_id]);

    return [perchase, setPurchase];
}
export default useToolDetail;