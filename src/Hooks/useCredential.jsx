import { useEffect, useState } from "react";


export const useCredential = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true); // Add this!
  const id = localStorage.getItem('uId');

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await fetch(`https://sheba-xyz-backend.onrender.com/user/${id}`);
          const result = await response.json();
          if (result.status) {
            setUser(result.user);
          }
        } catch (err) {
          console.error(err);
        }
      }
      setLoading(false); 
    };
    fetchData();
  }, [id]);
  const logout=()=>{
    localStorage.removeItem('uId')
    setUser({})
  }

  return { user, setUser, loading,logout}; 
};