import { Link } from "react-router-dom"


const ManageFoodsPage = () => {
    return (
        <div>
            <h1 className=" text-center font-bold text-lg">Manage Foods</h1>
            {/* table content start from here */}
            <div className="overflow-x-auto max-w-3xl mx-auto mt-5 border-x">
                <table className="table">
                    {/* head */}
                    <thead className=" bg-yellow-200">
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>
                                <button className=" btn btn-xs mr-2 btn-error text-white">DELETE</button>
                                <Link to={'/dashboard/update_foods'}>
                                    <button className=" btn btn-xs btn-primary text-white">UPDATE</button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* table content start from here */}
        </div>
    )
}

export default ManageFoodsPage