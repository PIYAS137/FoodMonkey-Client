import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RestaurantCard = ({data}) => {

    return (
        <div className=" rounded-xl overflow-hidden border">
            <Link to={`/oneres/${data?.res_name}`}>
                <img className=" w-full object-cover max-h-[200px]" src={data?.res_photo} alt="" />
                <div className=" p-3">
                    <div className=" flex justify-between items-center">
                        <h1 className=" text-lg font-semibold">{data?.res_name}</h1>
                        <p className=" flex items-center space-x-1"><FaRegStar /> <span>{data?.ratings}</span></p>
                    </div>
                    <small className=" bg-orange-500 px-3 py-1 rounded-lg text-white text-xs uppercase shadow-xl">{data?.res_city}</small>
                </div>
            </Link>
        </div>
    )
}

export default RestaurantCard