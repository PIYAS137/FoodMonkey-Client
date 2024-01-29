import FoodCard from "../SharedComponents/FoodCard"
import SectionHeader from "../SharedComponents/SectionHeader"


const DeliciousDealSection = () => {
    return (
        <div className=" container mx-auto">

            {/* delicious section header */}
            <div className=" my-20">
                <SectionHeader small={'SUPER DELICIOUS'} large={'Super Delicious Deals'} />
            </div>

            {/* delicious section content */}
            <div className=" grid grid-cols-4 mb-20 gap-10">
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

export default DeliciousDealSection