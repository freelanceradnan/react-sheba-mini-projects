import { useEffect, useState } from "react";


export const useCredential = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [categories,setCategories]=useState([])
  const [services,setServices]=useState([])
  const [service,setService]=useState([])
  const id = localStorage.getItem('uId');
  const [staffs,setStaffs]=useState([])
//  get-categories
useEffect(()=>{
const fetchData=async()=>{
  try{
  const response=await fetch(`https://sheba-xyz-backend.onrender.com/categories`)
  const result=await response.json()
  result.status &&setCategories(result.categories)
  }
  catch(err){
    console.log(err)
  }
}
fetchData()
},[])
//  get-services
useEffect(()=>{
const fetchData=async()=>{
  try{
  const response=await fetch(`https://sheba-xyz-backend.onrender.com/services`)
  const result=await response.json()
  result.status &&setServices(result.services)
  }
  catch(err){
    console.log(err)
  }
}
fetchData()
},[])
//  get-staff
useEffect(()=>{
const fetchData=async()=>{
  try{
  const response=await fetch(`https://sheba-xyz-backend.onrender.com/staffs`)
  const result=await response.json()
  result.status &&setStaffs(result.staffs)
  }
  catch(err){
    console.log(err)
  }
}
fetchData()
},[])
//get-login/signup
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

  return { user, setUser, loading,logout,categories,services,setCategories,setServices,service,setService,staffs,setStaffs}; 
};