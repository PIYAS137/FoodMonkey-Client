import { Link } from "react-router-dom";
import useGetAllFoods from "../../Hooks/useGetAllFoods"
import FoodCard from "../SharedComponents/FoodCard/FoodCard"
import SectionHeader from "../SharedComponents/SectionHeader/SectionHeader"


const DeliciousDealSection = () => {

    const [allFoods,] = useGetAllFoods();



    return (
        <div className=" container mx-auto">

            {/* delicious section header */}
            <div className=" my-20">
                <SectionHeader small={'SUPER DELICIOUS'} large={'Super Delicious Deals'} />
            </div>

            {/* delicious section content */}
            <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10">
                {
                    allFoods?.slice(0, 8)?.map(one => <FoodCard key={one?._id} data={one} />)
                }
            </div>

            <div className=" flex justify-center mb-20 mt-10">
                <Link to={'/allfoods'}>
                    <button className=' btn px-5 rounded-sm hover:bg-yellow-500 bg-yellow-300 border-none'>VIEW ALL FOODS</button>
                </Link>
            </div>

        </div>
    )
}

export default DeliciousDealSection