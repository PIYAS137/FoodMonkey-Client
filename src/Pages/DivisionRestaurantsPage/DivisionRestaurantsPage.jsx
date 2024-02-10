import { useLoaderData } from "react-router-dom"
import RestaurantCard from "../../Components/SharedComponents/RestaurantCard/RestaurantCard"


const DivisionRestaurantsPage = () => {

    const loaderData = useLoaderData();


    return (
        <div>
            <div className=" h-20 w-full bg-black"  ></div>
            <img src="https://marketplace.foodotawp.com/wp-content/themes/foodota/libs/images/options/p1-x.png" alt="" />
            <div className=" bg-white absolute left-0 right-0 ml-auto mr-auto -mt-10 rounded-xl font-bold py-5 text-xl w-[400px] text-center p-3 shadow-xl">
                <p className=" font-custom text-3xl text-gray-600">Restaurants of <span className=" capitalize">{loaderData[0]?.res_city}</span></p>
            </div>

                {
                    loaderData?.length == 0 && <p className=" text-xl bg-red-100 text-red-600 py-2 mt-10 text-center max-w-2xl rounded-lg mx-auto">No Restaurant found !</p>
                }

            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 container mx-auto my-28">
                
                {
                    loaderData?.map(one=><RestaurantCard key={one?._id} data={one}/>)
                }
                
            </div>


        </div>
    )
}

export default DivisionRestaurantsPage