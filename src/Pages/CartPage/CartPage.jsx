


const items = [
    { id: 1, name: 'Item 1', deliveryDate: '7th january', price: '$10.99', imgToFetch: 'bed' },
    { id: 2, name: 'Item 2', deliveryDate: '17th december', price: '$20.99', imgToFetch: 'furniture' },
    { id: 3, name: 'Item 3', deliveryDate: '12th march', price: '$30.99', imgToFetch: 'door' },
    { id: 4, name: 'Item 4', deliveryDate: '24th February', price: '$10.99', imgToFetch: 'golf set' },
    { id: 4, name: 'Item 5', deliveryDate: '21th February', price: '$50.99', imgToFetch: 'i phone' }
];




const CartPage = () => {
    return (
        <div className=" min-h-screen">
            <div className=" h-20 w-full bg-black"></div>
            <div className=" grid grid-cols-3  mt-10">
                <div className="max-w-xl mx-auto col-span-2 DeleveryRecordPage">



                    <div className="flex justify-between items-center border-b my-2 bg-gray-100 rounded-lg shadow-lg">
                        <div className="flex flex-wrap items-center gap-4">
                            <img className="w-[150px] aspect-square object-cover rounded-lg bg-slate-500" src={`https://i.pinimg.com/564x/73/39/6a/73396a95a82b5080b32a70e5036eb2a4.jpg`} alt="" />
                            <div>
                                <h5 className="text-lg font-medium">Name Here</h5>
                                <p className="text-sm text-gray-400">Delivery 12 Feb 2024</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 md:gap-10 ">
                            <div className="space-x-3">
                                <span className="cursor-pointer py-1 px-2 hover:bg-yellow-500 text-xl duration-200">-</span>
                                <span className="cursor-pointer py-1 px-2.5 border hover:bg-yellow-500 hover:text-white hover:border-yellow-500 duration-300 ease-in-out rounded-sm">4</span>
                                <span className="cursor-pointer py-1 px-2 hover:bg-yellow-500 text-xl duration-200">+</span>
                            </div>
                            <h6 className="text-xl pr-3 font-bold text-yellow-600">$300</h6>
                        </div>
                    </div>





                </div>
                <div>
                    <div className=" bg-yellow-500 max-w-xs mx-auto p-4 rounded-xl">
                        <h1 className=" text-center font-bold text-xl mb-3">Final Calculation</h1>
                        <h1 className=" text-center">Total Price : <span className=" font-bold">$300</span></h1>
                        <h1 className=" text-center">Total Items : <span className=" font-bold">3</span></h1>
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