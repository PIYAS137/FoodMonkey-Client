import { useQuery } from 'react-query';
import usePublicAxios from './usePublicAxios';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/FirebaseContext';



const useGetAdminStatus = () => {
    const publicAxios = usePublicAxios();
    const {user, loader} = useContext(AuthContext);

    const { data: adminStatus } = useQuery({
        queryKey: ['getAdminStatus'],
        enabled : !loader,
        queryFn: async () => {
            const res = await publicAxios.get(`/adminstatus/${user?.email}`);
            return res.data;
        }
    })
    return [adminStatus]
}

export default useGetAdminStatus