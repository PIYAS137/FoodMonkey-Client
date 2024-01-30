import OneFoodPageSimilar from "../../Components/OneFoodComponents/OneFoodPageSimilar"


const OneFoodPage = () => {
    return (
        <div>
            <div className=" h-20 w-full bg-black"  ></div>

            <div className=" bg-stone-200 h-screen flex justify-center p-20">
                <div className="max-w-6xl bg-white mx-auto grid grid-cols-5">
                    <div className="relative col-span-3 bg-yellow-50 justify-center items-center flex">
                        <small className=" absolute top-5 left-5 bg-lime-500 text-gray-700 p-3 rounded-lg font-semibold shadow-xl">Active Sale</small>
                        <img src="https://dev.foodotawp.com/wp-content/uploads/2021/08/2-4.png" alt="" />
                    </div>
                    <div className=" col-span-2 m-10 space-y-5 flex flex-col justify-center">
                        <h1 className="text-5xl font-custom">Cheez Burger</h1>
                        <p className=" text-2xl font-semibold">Price : <span className="text-yellow-600">$500</span></p>
                        <h1 className=" text-3xl font-custom">Details</h1>
                        <p className="text-sm">Descripti, looked up one from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                        <div className=" flex items-center space-x-3">
                            <input className=" input border border-gray-200 w-[70px]" defaultValue={1} type="number" />
                            <button className=" btn btn-warning px-8 uppercase">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>

            <OneFoodPageSimilar />

        </div>
    )
}

export default OneFoodPage