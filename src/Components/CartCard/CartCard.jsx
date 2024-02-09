
const CartCard = ({ data }) => {

    console.log(data);


    return (
        <div className="flex justify-between items-center border-b my-2 bg-gray-100 rounded-lg shadow-lg">
            <div className="flex flex-wrap items-center gap-4">
                <img className="w-[150px] aspect-square object-cover rounded-lg bg-slate-500" src={data?.photo} alt="" />
                <div>
                    <h5 className="text-lg font-medium">{data?.name}</h5>
                    <p className="text-sm text-gray-400">Order at {data?.orderPlaceDate}</p>
                </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-10 ">
                <span className="cursor-pointer py-1 px-2 hover:bg-yellow-500 text-lg font-bold duration-200">[ {data?.orderItemQuantity} items ]</span>
                <h6 className="text-xl pr-3 font-bold text-yellow-600">$300</h6>
            </div>
        </div>
    )
}

export default CartCard