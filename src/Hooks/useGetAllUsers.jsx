import usePublicAxios from './usePublicAxios';
import { useQuery } from 'react-query';


const useGetAllUsers = () => {
    const publicAxios = usePublicAxios()

    const { data:allUsers,refetch} = useQuery({
        queryKey: ['getAllUsers'],
        queryFn: async () => {
            const res = await publicAxios.get('/user');
            return res.data;
        }
    })
    return [allUsers,refetch]
}

export default useGetAllUsers