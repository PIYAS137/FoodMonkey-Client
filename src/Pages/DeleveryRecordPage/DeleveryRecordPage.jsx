import { useContext, useEffect, useState } from "react"
import usePublicAxios from "../../Hooks/usePublicAxios"
import { AuthContext } from "../../Contexts/FirebaseContext";


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
                        datas?.length === 0 && <p className=" text-red-600 bg-red-100 text-center py-2 rounded-lg max-w-2xl mx-auto mt-5">No Record Found !</p>
                    }
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