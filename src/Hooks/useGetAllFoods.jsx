import { useQuery } from 'react-query';
import usePublicAxios from './usePublicAxios';


const useGetAllFoods = () => {
    const publicAxios = usePublicAxios()

    const { data:allFoods,refetch} = useQuery({
        queryKey: ['getAllRestaurants'],
        queryFn: async () => {
            const res = await publicAxios.get('/food');
            return res.data;
        }
    })
    return [allFoods,refetch]
}

export default useGetAllFoods