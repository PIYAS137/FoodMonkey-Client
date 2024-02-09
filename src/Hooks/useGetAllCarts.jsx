import { useQuery } from 'react-query';
import usePublicAxios from './usePublicAxios';



const useGetAllCarts = () => {

    const publicAxios = usePublicAxios()

    const { data: allCarts } = useQuery({
        queryKey: ['getAllCarts'],
        queryFn: async () => {
            const res = await publicAxios.get('/carts');
            return res.data;
        }
    })
    return [allCarts]
}

export default useGetAllCarts