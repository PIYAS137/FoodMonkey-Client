import { Link } from "react-router-dom"
import useGetAllRestaurants from "../../Hooks/useGetAllRestaurants"


const ManageRestaurantsPage = () => {

    const [allRes, refetch] = useGetAllRestaurants()



    return (
        <div>
            <h1 className=" text-center font-bold text-lg">Manage Restaurants</h1>
            {/* table content start from here */}
            <div className="overflow-x-auto max-w-3xl mx-auto mt-5 border-x">
                <table className="table">
                    {/* head */}
                    <thead className=" bg-yellow-200">
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Work Since</th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allRes?.map(one => {
                                return (
                                    <tr key={one?._id}>
                                        <td>{one?.res_name}</td>
                                        <td className=" capitalize">{one?.res_city}</td>
                                        <td>{one?.start_since}</td>
                                        <td>
                                            <Link to={'/dashboard/update_restaurants'}>
                                                <button className=" btn btn-xs mr-2 btn-primary text-white">VIEW</button>
                                            </Link>
                                            <button className=" btn btn-xs mr-2 btn-error text-white">DELETE</button>
                                            <Link to={'/dashboard/update_restaurants'}>
                                                <button className=" btn btn-xs btn-primary text-white">UPDATE</button>
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

export default ManageRestaurantsPage