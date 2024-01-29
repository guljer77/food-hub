import { useQuery } from "react-query";
import { useAuth } from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";

export const useCartData = () =>{
  const {user, loading} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {data: cart=[], refetch} = useQuery({
    queryKey:['cart', user?.email],
    enabled: !loading,
    queryFn: async () =>{
      const res = await axiosSecure.get(`/userFoods?email=${user?.email}`);
      console.log('problem', res);
      return res.data;
    }
  })
  return [cart, refetch]
}