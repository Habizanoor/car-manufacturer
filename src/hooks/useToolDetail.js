import { useEffect, useState } from "react";

const useToolDetail = _id =>{
    const [perchase, setPurchase] = useState({});
    useEffect(()=>{
        const url = `https://aqueous-reef-16634.herokuapp.com/tool/${_id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPurchase(data));
    },[_id]);

    return [perchase, setPurchase];
}
export default useToolDetail;