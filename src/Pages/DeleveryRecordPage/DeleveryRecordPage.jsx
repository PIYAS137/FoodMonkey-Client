

const DeleveryRecordPage = () => {
    return (
        <div>
            <div className=" h-20 w-full bg-black"></div>
            <div className=" h-screen bg-yellow-50">
                <h1 className=" text-center font-bold text-lg pt-5">Your Order History</h1>
                <div>
                    <h1 className=" text-center my-3 bg-white py-2 border-y">
                        <span className=" font-custom text-xl">An order of $100 was placed on February 11</span>
                        <button className="shadow-xl btn btn-sm ml-3 uppercase bg-purple-400 hover:bg-purple-600 text-white">view items</button>
                    </h1>
                    <h1 className=" text-center my-3 bg-white py-2 border-y">
                        <span className=" font-custom text-xl">An order of $100 was placed on February 11</span>
                        <button className=" btn btn-sm shadow-xl ml-3 uppercase bg-purple-400 hover:bg-purple-600 text-white">view items</button>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default DeleveryRecordPage