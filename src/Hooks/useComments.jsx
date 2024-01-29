import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure"

export const useComments = () =>{
  const [axiosSecure] = useAxiosSecure();
  const {data: comments = [], refetch: reload } = useQuery({
    queryKey:['comments'],
    queryFn: async () =>{
      const res = await axiosSecure.get(`/comments`)
      return res.data
    }
  })
  return [comments, reload]
}