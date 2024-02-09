import { Link } from "react-router-dom"
import useGetAllFoods from "../../Hooks/useGetAllFoods";
import Swal from 'sweetalert2';
import usePublicAxios from '../../Hooks/usePublicAxios';



const ManageFoodsPage = () => {

    const [allFoods, refetch] = useGetAllFoods();
    const publicAxios = usePublicAxios();

    // change food availablity status function 
    const handleClickChangeFoodStatus = (id) => {
        Swal.fire({
            title: "Sure to change?",
            text: "its effect your real time status",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                publicAxios.patch(`/foodstatus/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your file has been updated.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
                    .catch(err => {
                        Swal.fire({
                            title: "Something went wrong!",
                            text: `${err.message}`,
                            icon: "error"
                        });
                    })
            }
        });
    }

    const handleDeleteFoodItem = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                publicAxios.delete(`/food/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }




    return (
        <div>
            <h1 className=" text-center font-bold text-lg">Manage Foods</h1>
            <p className=" text-center text-xs text-orange-300">{allFoods?.length} Items found</p>
            {/* table content start from here */}
            <div className="overflow-x-auto max-w-4xl mx-auto mt-8 border border-gray-50">
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
                                                    <button onClick={() => handleClickChangeFoodStatus(one?._id)} className=" btn btn-xs bg-red-600 text-white">unavilable</button>
                                                    :
                                                    <button onClick={() => handleClickChangeFoodStatus(one?._id)} className=" btn btn-xs bg-green-600 text-white">avilaable</button>
                                            }
                                        </td>
                                        <td>
                                            <button onClick={() => handleDeleteFoodItem(one?._id)} className=" btn btn-xs mr-2 btn-error text-white">DELETE</button>
                                            <Link to={`/dashboard/update_foods/${one?._id}`}>
                                                <button className=" btn btn-xs btn-primary text-white">UPDATE</button>
                                            </Link>
                                            <Link to={`/onecard/${one?._id}`}>
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