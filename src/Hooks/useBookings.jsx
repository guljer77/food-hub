import { useQuery } from "react-query";
import { useAuth } from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";

export const useBookings = () =>{
  const {user, loading} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {data: bookings = [], refetch} = useQuery({
    queryKey: ['bookings', user?.email],
    enabled: !loading,
    queryFn: async () =>{
      const res = await axiosSecure.get(`/bookings?email=${user?.email}`)
      return res.data;
    }
  })
  return [bookings, refetch]
}