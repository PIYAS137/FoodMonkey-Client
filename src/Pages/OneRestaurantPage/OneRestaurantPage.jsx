import FoodCard from "../../Components/SharedComponents/FoodCard/FoodCard"
import SectionHeader from "../../Components/SharedComponents/SectionHeader/SectionHeader"


const OneRestaurantPage = () => {
    return (
        <div>
            <div className=" h-20 w-full bg-black"  ></div>
            <img src="https://marketplace.foodotawp.com/wp-content/themes/foodota/libs/images/options/p1-x.png" alt="" />

            <div className=" my-20">
            <SectionHeader small={'30+ Active Items'} large={'Items of Rantaurant Name'}/>
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

export default OneRestaurantPage