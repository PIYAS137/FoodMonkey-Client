import RestaurantCard from "../../Components/SharedComponents/RestaurantCard/RestaurantCard"


const DivisionRestaurantsPage = () => {
    return (
        <div>
            <div className=" h-20 w-full bg-black"  ></div>
            <img src="https://marketplace.foodotawp.com/wp-content/themes/foodota/libs/images/options/p1-x.png" alt="" />
            <div className=" bg-white absolute left-0 right-0 ml-auto mr-auto -mt-10 rounded-xl font-bold py-5 text-xl w-[400px] text-center p-3 shadow-xl">Restaurants of Dhaka</div>

            <div className=" grid grid-cols-4 gap-10 container mx-auto my-28">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>


        </div>
    )
}

export default DivisionRestaurantsPage