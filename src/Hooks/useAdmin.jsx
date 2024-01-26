import { useQuery } from "react-query";
import { useAuth } from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";

export const useAdmin = () =>{
  const {user, loading} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: !loading,
    queryFn: async () =>{
      const res = await axiosSecure(`/users/admin/${user?.email}`)
      console.log(res);
      return res.data.admin;
    }
  })
  return [isAdmin, isAdminLoading];
}