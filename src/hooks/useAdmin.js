import { useEffect, useState } from "react"

const useAdmin = user =>{
    const [admin, setAdmin] = useState(false);
    // console.log(admin);
    useEffect(()=>{
        const email = user?.email;
        if(email){
            fetch(`http://localhost:5000/admin/${email}`)
            .then(res=>res.json())
            .then(data=>setAdmin(data));
        }
    },[user])
    return [admin]
}
export default useAdmin;