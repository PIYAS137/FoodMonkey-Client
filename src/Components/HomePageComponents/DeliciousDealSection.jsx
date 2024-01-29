import FoodCard from "../SharedComponents/FoodCard/FoodCard"
import SectionHeader from "../SharedComponents/SectionHeader/SectionHeader"


const DeliciousDealSection = () => {
    return (
        <div className=" container mx-auto">

            {/* delicious section header */}
            <div className=" my-20">
                <SectionHeader small={'SUPER DELICIOUS'} large={'Super Delicious Deals'} />
            </div>

            {/* delicious section content */}
            <div className=" grid grid-cols-4 gap-10">
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
            </div>

            <div className=" flex justify-center mb-20 mt-10">
                <button className=' btn px-5 rounded-sm hover:bg-yellow-500 bg-yellow-300 border-none'>VIEW ALL FOODS</button>
            </div>

        </div>
    )
}

export default DeliciousDealSection