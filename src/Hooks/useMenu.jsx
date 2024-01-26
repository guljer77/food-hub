import axios from "axios"
import { useQuery } from "react-query"

export const useMenu = () =>{
  const {data: foods = [], refetch} = useQuery({
    queryKey: ['foods'],
    queryFn: async ()=>{
      const res = await axios.get(`http://localhost:5000/foods/admin`)
      return res.data;
    }
  })
  return [foods, refetch]
}