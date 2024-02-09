import CartCard from "../../Components/CartCard/CartCard";
import useGetAllCartItem from "../../Hooks/useGetAllCartItem"





const CartPage = () => {

    const [allItems, refetch] = useGetAllCartItem();
    console.log(allItems);



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
                        <h1 className=" text-center">Total Price : <span className=" font-bold">${3}</span></h1>
                        <h1 className=" text-center">Total Items : <span className=" font-bold">
                            {
                                allItems.reduce((total, next) => total+next?.orderItemQuantity,0)
                            }
                        </span></h1>
                    </div>
                    <div className=" mt-5 max-w-xs mx-auto">
                        <button className="max-w-xs mx-auto shadow-xl border-none bg-yellow-500 hover:bg-yellow-600 btn text-black uppercase w-full">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage