import { FaRegStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const RestaurantCard = () => {
    return (
        <div className=" rounded-xl overflow-hidden border">
            <NavLink to={'/oneres'}>
                <img className=" w-full object-cover min-h-[200px]" src="https://images.deliveryhero.io/image/fd-bd/LH/nf64-listing.jpg?width=400&height=225" alt="" />
                <div className=" p-3">
                    <div className=" flex justify-between items-center">
                        <h1 className=" text-lg">Restaurants Name</h1>
                        <p className=" flex items-center space-x-1"><FaRegStar /> <span>4.5</span></p>
                    </div>
                    <small>10+ items for sale</small>
                </div>
            </NavLink>
        </div>
    )
}

export default RestaurantCard