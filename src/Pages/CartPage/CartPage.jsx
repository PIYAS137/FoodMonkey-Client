import { useContext } from "react";
import CartCard from "../../Components/CartCard/CartCard";
import useGetAllCartItem from "../../Hooks/useGetAllCartItem"
import usePublicAxios from "../../Hooks/usePublicAxios";
import { getCurrentDate } from "../../Utils/getCurrentDate";
import { AuthContext } from "../../Contexts/FirebaseContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CartPage = () => {

    const [allItems, refetch] = useGetAllCartItem();
    const publicAxios = usePublicAxios();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClickPlaceOrder = () => {
        const purchaseInfo = {
            totalPrice: allItems?.reduce((total, next) => total + next?.orderItemQuantity * next?.discount_price, 0),
            totalQuantity: allItems.reduce((total, next) => total + next?.orderItemQuantity, 0),
            items: allItems.filter(one => one?.foodId),
            purchase_date: getCurrentDate(),
            order_status: 'pending',
            user_email : user?.email
        }
        Swal.fire({
            title: "Sure to Purchase all Items ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Purchase !"
        }).then((result) => {
            if (result.isConfirmed) {
                publicAxios.post('/purchase', purchaseInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Purchased!",
                                text: "Lets waiting for foods delevary !",
                                icon: "success"
                            });
                            refetch();
                            navigate('/del_rec');
                        }
                    })
            }
        });
    }



    return (
        <div className=" min-h-screen">
            <div className=" h-20 w-full bg-black"></div>
            <div className=" grid grid-cols-3  mt-10">
                <div className="max-w-xl mx-auto col-span-2 DeleveryRecordPage">

                    {
                        allItems?.map(one => <CartCard key={one?._id} data={one} />)
                    }

                </div>
                <div>
                    <div className=" bg-yellow-500 max-w-xs mx-auto p-4 rounded-xl">
                        <h1 className=" text-center font-bold text-xl mb-3">Final Calculation</h1>
                        <h1 className=" text-center">Total Price : <span className=" font-bold">$
                            {
                                //reduce price
                                allItems.reduce((total, next) => total + next?.orderItemQuantity * next?.discount_price, 0)
                            }
                        </span></h1>
                        <h1 className=" text-center">Total Items : <span className=" font-bold">
                            {
                                // reduce total items
                                allItems.reduce((total, next) => total + next?.orderItemQuantity, 0)
                            }
                        </span></h1>
                    </div>
                    <div className=" mt-5 max-w-xs mx-auto">
                        <button onClick={handleClickPlaceOrder} className="max-w-xs mx-auto shadow-xl border-none bg-yellow-500 hover:bg-yellow-600 btn text-black uppercase w-full">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage