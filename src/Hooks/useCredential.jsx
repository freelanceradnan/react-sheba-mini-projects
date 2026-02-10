import { useEffect, useState } from "react";
import userDetails from '../Data/userData.json'

export const useCredential = () => {
    const [user, setUser] = useState({});
    const id = localStorage.getItem('uId');

    const userData = () => {
        const fetchData = async () => {
            try {
               
                const tempUser = userDetails.find(user => user.id == id) || {};
                setUser(tempUser);
            } catch (error) {
                console.log(error); 
            }
        };
        fetchData(); 
    };

    useEffect(() => {
        if (id) {
            userData();
        } else {
            setUser({});
        }
    }, [id]);

    const logout = () => {
        localStorage.removeItem('uId');
        setUser({});
    };

    return { user, setUser, logout };
};