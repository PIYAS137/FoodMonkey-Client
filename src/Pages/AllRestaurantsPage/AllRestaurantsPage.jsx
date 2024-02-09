import FoodCard from "../../Components/SharedComponents/FoodCard/FoodCard"
import RestaurantCard from "../../Components/SharedComponents/RestaurantCard/RestaurantCard"
import SectionHeader from "../../Components/SharedComponents/SectionHeader/SectionHeader"
import useGetAllRestaurants from "../../Hooks/useGetAllRestaurants"


const AllRestaurantsPage = () => {

    const [allRes,refetch]= useGetAllRestaurants();
    console.log(allRes);

    return (
        <div className=" w-full ">
            <div className=" h-20 w-full bg-black mb-10"></div>

            <div className=" my-10">
                <SectionHeader small={'30+ Active Restaurants'} large={'Find Best Rantaurants'} />
            </div>

            <div className=" grid grid-cols-4 gap-10 container mx-auto my-20">
                {
                    allRes?.map(one=><RestaurantCard key={one?._id} data={one}/>)
                }
            </div>


        </div>
    )
}

export default AllRestaurantsPage