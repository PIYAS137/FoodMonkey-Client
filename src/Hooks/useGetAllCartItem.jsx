import { useQuery } from 'react-query';
import usePublicAxios from './usePublicAxios';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/FirebaseContext';



const useGetAllCartItem = () => {
    const publicAxios = usePublicAxios();
    const {user, loader} = useContext(AuthContext);

    const { data: allItems, refetch } = useQuery({
        queryKey: ['getAllRestaurants'],
        enabled : !loader,
        queryFn: async () => {
            const res = await publicAxios.get(`/cart/${user?.email}`);
            return res.data;
        }
    })
    return [allItems, refetch]
}

export default useGetAllCartItem