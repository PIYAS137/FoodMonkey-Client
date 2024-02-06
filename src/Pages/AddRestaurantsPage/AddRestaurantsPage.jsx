import { useForm } from "react-hook-form"
import { areaArr } from "../../Utils/Cities";
import usePublicAxios from "../../Hooks/usePublicAxios";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddRestaurantsPage = () => {

  const publicAxios = usePublicAxios();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const temp = data;
    temp.start_since = new Date().getFullYear(); //take the current year
    temp.ratings = Math.floor((Math.random() * 5) + 1); //for this temporary porject, i simplify the backend !
    publicAxios.post('/restaurant', temp)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Added Restaurant !",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/');
        }
      })
      .catch(err => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500
        });
      })
    reset()
  }



  return (
    <div>
      {/* <h1 className=" text-center font-bold text-lg"></h1> */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-3 col-span-2 w-full h-full flex flex-col justify-center max-w-xl mx-auto">
        <h1 className=" text-4xl font-bold font-custom text-center mb-5">Add Restaurants</h1>

        {/* restaurants name field */}
        <div className="form-control mb-2">
          <label className="label">
            <span className="label-text text-black">Restaurant Name</span>
          </label>
          <input {...register("res_name", { required: true })} placeholder="Enter restaurants name" className="input input-bordered bg-yellow-400" />
          {errors.res_name && <span className=" text-red-500">Name is required</span>}
        </div>


        {/* Location Cities field */}
        <label className="label-text text-black">Restaurant Location ( city )</label>
        <select {...register("res_city", { required: true })} className="p-3 w-full mt-1 border rounded-lg input-bordered mr-2 bg-yellow-400 cursor-pointer">
          <option value="" >Select Restaurants City</option>
          {
            areaArr.map(one => <option value={one?.name} key={one.id} className=" capitalize" >{one?.name}</option>)
          }
        </select>
        {errors.res_city && <span className=" text-red-500">City is required</span>}

        <div className="form-control ">
          <button className="btn hover:bg-yellow-400 mt-3 bg-yellow-500 text-black border-none uppercase tracking-wider ">Create</button>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurantsPage