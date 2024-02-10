import { Link } from 'react-router-dom';
import './FoodCard.css';



const FoodCard = ({data}) => {

    return (
        <Link to={`/onecard/${data?._id}`}>
            <div className=" border flex flex-col justify-center items-center rounded-lg targetx cursor-pointer mx-2 md:mx-0">
                <div className=" w-full flex justify-center items-center relative pt-2">
                    <div className="z-20 absolute bg-yellow-50 w-full -left-50 -right-50 min-h-28 top-50 bgx"></div>
                    <img className="z-30 bgi max-w-[200px]" src={data?.photo} />
                </div>
                <div className=" space-y-1 text-center pb-4">
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h1 className=" font-semibold text-2xl">{data?.name}</h1>
                    <div className=" flex flex-col justify-center items-center space-x-1">
                        <small className=" text-gray-400 line-through">${data?.main_price}.00</small>
                        <small className=" text-2xl text-yellow-500">${data?.discount_price}.00</small>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default FoodCard