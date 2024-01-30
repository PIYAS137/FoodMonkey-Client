import FoodCard from "../SharedComponents/FoodCard/FoodCard"
import SectionHeader from "../SharedComponents/SectionHeader/SectionHeader"


const OneFoodPageSimilar = () => {
    return (
        <div>
            <div className=" my-20">
                <SectionHeader small={'View More'} large={'Similar Items'} />
            </div>
            <div className=" grid grid-cols-4 gap-10 container mx-auto mb-20">
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
            </div>
        </div>
    )
}

export default OneFoodPageSimilar