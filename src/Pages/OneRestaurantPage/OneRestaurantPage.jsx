import { useLoaderData, useParams } from "react-router-dom"
import ResFoodCard from "../../Components/ResFoodCard/ResFoodCard"
import SectionHeader from "../../Components/SharedComponents/SectionHeader/SectionHeader"


const OneRestaurantPage = () => {

    const loaderData = useLoaderData();
    const { resName } = useParams();

    return (
        <div>
            <div className=" h-20 w-full bg-black"  ></div>
            <img src="https://marketplace.foodotawp.com/wp-content/themes/foodota/libs/images/options/p1-x.png" alt="" />

            <div className=" my-20">
                <SectionHeader small={'30+ Active Items'} large={`Items of : ${resName}`} />
            </div>

            {/* if no items found  */}
            {
                loaderData?.length == 0 && <p className=" bg-red-200 text-red-500 text-xl font-bold max-w-xl mx-auto py-2 text-center rounded-lg">No items found !</p>
            }

            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 container mx-auto my-20">

                {
                    loaderData?.map(one => <ResFoodCard key={one?._id} data={one} />)
                }

            </div>


        </div>
    )
}

export default OneRestaurantPage