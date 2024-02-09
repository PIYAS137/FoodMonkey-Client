import { useQuery } from 'react-query';
import usePublicAxios from './usePublicAxios';



const useGetAllPurchases = () => {
    const publicAxios = usePublicAxios()

    const { data: allDat } = useQuery({
        queryKey: ['getAllPurchases'],
        queryFn: async () => {
            const res = await publicAxios.get('/purchases');
            return res.data;
        }
    })
    return [allDat]
}

export default useGetAllPurchases