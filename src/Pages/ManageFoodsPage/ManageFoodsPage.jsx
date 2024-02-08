import { Link } from "react-router-dom"
import useGetAllFoods from "../../Hooks/useGetAllFoods"


const ManageFoodsPage = () => {

    const [allFoods, refetch] = useGetAllFoods();

    console.log(allFoods);




    return (
        <div>
            <h1 className=" text-center font-bold text-lg">Manage Foods</h1>
            {/* table content start from here */}
            <div className="overflow-x-auto max-w-3xl mx-auto mt-5 border-x">
                <table className="table">
                    {/* head */}
                    <thead className=" bg-yellow-200">
                        <tr>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Restaurant Name</th>
                            <th>Food Status</th>
                            <th>Change Status</th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allFoods?.map(one => {
                                return (
                                    <tr key={one?._id}>
                                        <td>{one?.name}</td>
                                        <td>${one?.discount_price}</td>
                                        <td>{one?.res_name}</td>
                                        <td>
                                            {
                                                one?.status ?
                                                    <span className=" italic font-semibold text-green-600">active</span>
                                                    :
                                                    <span className=" italic font-semibold text-red-600">unavilable</span>
                                            }
                                        </td>
                                        <td>
                                            {
                                                one?.status ?
                                                    <button className=" btn btn-xs bg-red-600 text-white">unavilable</button>
                                                    :
                                                    <button className=" btn btn-xs bg-green-600 text-white">avilaable</button>
                                            }
                                        </td>
                                        <td>
                                            <button className=" btn btn-xs mr-2 btn-error text-white">DELETE</button>
                                            <Link to={'/dashboard/update_foods'}>
                                                <button className=" btn btn-xs btn-primary text-white">UPDATE</button>
                                            </Link>
                                            <Link to={'/dashboard/update_foods'}>
                                                <button className=" btn btn-xs bg-purple-500 text-white ml-2">VIEW</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            {/* table content start from here */}
        </div>
    )
}

export default ManageFoodsPage