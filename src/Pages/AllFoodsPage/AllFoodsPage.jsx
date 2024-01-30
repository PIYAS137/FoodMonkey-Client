import FoodCard from "../../Components/SharedComponents/FoodCard/FoodCard"


const AllFoodsPage = () => {
    return (
        <div>
            <div className=" h-20 w-full bg-black"  ></div>

            <div className="p-3 flex justify-end items-center container mx-auto">

                <h1 className=" mr-auto text-2xl font-bold text-yellow-500 rounded-lg">Find all available foods here !</h1>

                <select className="select w-full max-w-xs bg-yellow-300 mr-3 shadow-md">
                    <option disabled selected>Pick your favorite Simpson</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>

                <div>
                    <input type="search" className=" bg-yellow-300 p-3 px-5 rounded-lg shadow-md" placeholder="Search by food name" />
                    <button className=" btn ml-3 bg-yellow-300 outline-none border-none uppercase shadow-md">Search</button>
                </div>
            </div>

            <div className=" grid grid-cols-4 gap-10 container mx-auto my-20">
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
            </div>


        </div>
    )
}

export default AllFoodsPage