import { useContext, useEffect, useState } from "react"
import usePublicAxios from "../../Hooks/usePublicAxios"
import { AuthContext } from "../../Contexts/FirebaseContext";
import { Link } from 'react-router-dom';


const DeleveryRecordPage = () => {

    const publicAxios = usePublicAxios();
    const { user } = useContext(AuthContext);
    const [datas, setDatas] = useState([])


    useEffect(() => {
        publicAxios.get(`/purchase?email=${user?.email}`)
            .then(res => {
                setDatas(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, [user])


    return (
        <div>
            <div className=" h-20 w-full bg-black"></div>
            <div className=" h-screen bg-yellow-50">
                <h1 className=" text-center font-bold text-lg pt-5">Your Order History</h1>
                <div>
                    {
                        datas?.map(one => {
                            return (
                                <h1 key={one?._id} className=" text-center my-3 bg-white py-2 border-y">
                                    <span className=" font-custom text-xl">An order of $ {one?.totalPrice} [{one?.items.length} items] was placed at :  {one?.purchase_date}</span>
                                    {/* i can add more function here but i think for this project its alreay enough ! */}
                                </h1>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default DeleveryRecordPage