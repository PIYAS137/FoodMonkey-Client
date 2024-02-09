import { Link } from "react-router-dom";
import AdminGraph from "../../Components/DashboardComponents/AdminGraph/AdminGraph";
import useGetAllUsers from "../../Hooks/useGetAllUsers";
import UserTableRow from "../../Components/DashboardComponents/UserTableRow/UserTableRow";
import useGetAllRestaurants from "../../Hooks/useGetAllRestaurants";
import useGetAllFoods from "../../Hooks/useGetAllFoods";


const DashboardHomePage = () => {

  const [allUser, ] = useGetAllUsers();
  const [allRes,] = useGetAllRestaurants();
  const [allFoods,] = useGetAllFoods();
  console.log(allFoods);

  return (
    <div className="">
      <h1 className=" text-center font-bold text-4xl text-gray-600 font-custom mb-3">Welcome to Admin Dashboard</h1>
      <div className="space-y-3">
        <div className=" grid grid-cols-4 gap-5 p-5">
          {/* Restaurants card */}
          <div className=" bg-white p-3 rounded-lg shadow-lg border border-gray-100">
            <h1 className="text-sm font-semibold text-gray-500">Total Restaurants</h1>
            <div className=" text-center">
              <h1 className="text-4xl font-semibold my-1 text-gray-500 font-custom tracking-widest">{allRes?.length}</h1>
              <h1 className="text-sm italic text-green-600">all are active Restaurants</h1>
            </div>
            <h1 className="text-sm text-right font-semibold text-gray-500">
              <Link>
                <button className=" btn btn-sm bg-green-600 hover:bg-green-700 text-white">view all</button>
              </Link>
            </h1>
          </div>
          {/* Restaurants card */}
          {/* Foods card */}
          <div className=" bg-white p-3 rounded-lg shadow-lg border border-gray-100">
            <h1 className="text-sm font-semibold text-gray-500">Total Foods</h1>
            <div className=" text-center">
              <h1 className="text-4xl font-semibold my-1 text-gray-500 font-custom tracking-widest">{allFoods?.length}</h1>
              <h1 className="text-sm italic text-green-600">{allFoods?.filter(one=>one.status==true).length} active Food Items</h1>
            </div>
            <h1 className="text-sm text-right font-semibold text-gray-500">
              <Link>
                <button className=" btn btn-sm bg-green-600 hover:bg-green-700 text-white">view all</button>
              </Link>
            </h1>
          </div>
          {/* Foods card */}
          {/* Total Order card */}
          <div className=" bg-white p-3 rounded-lg shadow-lg border border-gray-100">
            <h1 className="text-sm font-semibold text-gray-500">Total Orders</h1>
            <div className=" text-center">
              <h1 className="text-4xl font-semibold my-1 text-gray-500 font-custom tracking-widest">23</h1>
              <h1 className="text-sm italic text-green-600">22 Completed <span className=" text-gray-500 font-semibold">&</span> <span className=" text-red-500">21 Active</span></h1>
            </div>
            <h1 className="text-sm text-right font-semibold text-gray-500">
              <Link>
                <button className=" btn btn-sm bg-green-600 hover:bg-green-700 text-white">view all</button>
              </Link>
            </h1>
          </div>
          {/* Total Order card */}
          {/* Total Revenue card */}
          <div className=" bg-white p-3 rounded-lg shadow-lg border border-gray-100">
            <h1 className="text-sm font-semibold text-gray-500">Total Revenue</h1>
            <div className=" text-center">
              <h1 className="text-4xl font-semibold my-1 text-gray-500 font-custom tracking-widest"> $40000</h1>
              <h1 className="text-sm italic text-green-600">already placed</h1>
            </div>
            <h1 className="text-sm text-right font-semibold text-gray-500">
              <Link>
                <button className=" btn btn-sm bg-green-600 hover:bg-green-700 text-white">view all</button>
              </Link>
            </h1>
          </div>
          {/* Total Revenue card */}
        </div>
        <div className=" grid grid-cols-2 p-5 gap-5 max-h-[600px]">
          {/* manage users field */}
          <div className="overflow-x-auto p-3 bg-white rounded-lg overflow-y-scroll shadow-xl border">
            <small className="text-sm font-semibold text-gray-600">User Management</small>
            <table className="table w-full">
              {/* head */}
              <thead className=" w-full">
                <tr>
                  <th className=" pl-0">Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  allUser?.map(one => <UserTableRow key={one?._id} one={one}/>)
                }
              </tbody>
            </table>
          </div>
          {/* manage users field */}
          <div className=" bg-white p-3 rounded-lg h-[400px] shadow-xl border">
            <small className="text-sm font-semibold text-gray-600">Business Overview</small>
            <AdminGraph />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHomePage;