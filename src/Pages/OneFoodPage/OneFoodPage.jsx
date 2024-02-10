import { useLoaderData } from "react-router-dom"
import usePublicAxios from "../../Hooks/usePublicAxios";
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/FirebaseContext";
import { getCurrentDate } from "../../Utils/getCurrentDate";
import Swal from "sweetalert2";
import useGetAllCartItem from "../../Hooks/useGetAllCartItem";


const OneFoodPage = () => {

    const loaderData = useLoaderData();
    const publicAxios = usePublicAxios();
    const { user } = useContext(AuthContext);
    const [,refetch] = useGetAllCartItem();


    const [quantity, setQuantity] = useState(1)

    const handleClickAddToCart = () => {
        const temp = {
            name: loaderData?.name,
            res_name: loaderData?.name,
            main_price: loaderData?.main_price,
            discount_price: loaderData?.discount_price,
            photo: loaderData?.photo,
            describe: loaderData?.describe,
            ratings: loaderData?.temp,
            foodId: loaderData?._id,
            orderUserEmail: user?.email,
            orderPlaceDate: getCurrentDate(),
            orderItemQuantity: parseInt(quantity),
        }
        publicAxios.post('/cart', temp)
            .then(res => {
                if (res.data.flag === -1) { //already exist
                    Swal.fire({
                        position: "top-end",
                        icon: "warning",
                        title: "Already Added Item",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                if (res.data.insertedId) { // successfully added 
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully added !",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
    }



    return (
        <div className="">
            <div className=" h-20 w-full bg-black"  ></div>

            <div className=" bg-stone-200 flex justify-center items-start py-16 md:py-32 px-3 xl:px-0">
                <div className="max-w-6xl bg-white mx-auto lg:grid grid-cols-5 rounded-xl overflow-hidden">
                    <div className="relative col-span-3 bg-yellow-50 justify-center items-center flex">
                        {
                            loaderData?.status ?
                                <small className=" absolute top-5 left-5 bg-lime-500 text-gray-700 p-3 rounded-lg font-semibold shadow-xl">Active Sale</small>
                                :
                                <small className=" absolute top-5 left-5 bg-orange-700 text-white p-3 rounded-lg font-semibold shadow-xl">Unavailable</small>
                        }
                        <img src={loaderData?.photo} alt="" />
                    </div>
                    <div className=" col-span-2 m-8 md:m-16 space-y-5 flex flex-col justify-center">
                        <h1 className="text-5xl font-custom">{loaderData?.name}</h1>
                        <p className=" text-xs">Items of <span className=" font-bold">{loaderData?.res_name}</span></p>
                        <p className=" text-2xl font-semibold">Price : <span className="text-yellow-600">${loaderData?.main_price}</span></p>
                        <h1 className=" text-3xl font-custom">Details </h1>
                        <p className="text-sm">{loaderData?.describe}</p>
                        <div className=" flex items-center space-x-3">
                            <input onChange={(e) => setQuantity(e.target.value)} className=" input border border-gray-200 w-[70px] shadow-sm" value={quantity} type="number" />
                            <button onClick={() => handleClickAddToCart(loaderData?._id)} className=" btn btn-warning px-8 uppercase shadow-sm">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OneFoodPage