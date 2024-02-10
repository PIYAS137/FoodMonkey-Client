import { useQuery } from 'react-query';
import usePublicAxios from './usePublicAxios';



const useGetAllRestaurants = () => {

    const publicAxios = usePublicAxios()

    const { data: allRes, refetch } = useQuery({
        queryKey: ['getAllRestaurants','extraKey'],
        queryFn: async () => {
            const res = await publicAxios.get('/restaurant');
            return res.data;
        }
    })
    return [allRes, refetch]
}

export default useGetAllRestaurants