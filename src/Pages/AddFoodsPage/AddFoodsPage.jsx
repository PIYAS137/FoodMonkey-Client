import { useForm } from "react-hook-form"
import { useLoaderData, useNavigate } from "react-router-dom";
import usePublicAxios from "../../Hooks/usePublicAxios";
import Swal from 'sweetalert2';

const AddFoodsPage = () => {

  const loader = useLoaderData();
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
    temp.status = true;
    temp.ratings = Math.floor((Math.random() * 5) + 1); //for this temporary porject, i simplify the backend !
    publicAxios.post('/food', temp)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Added Food !",
            showConfirmButton: false,
            timer: 1500
          });
          reset();
          navigate('/dashboard/manage_foods')
        }
      }).catch(err => {
        console.log(err.message);
      })
  }




  return (
    <div>
      {/* <h1 className=" text-center font-bold text-lg"></h1> */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-3 col-span-2 w-full h-full flex flex-col justify-center max-w-xl mx-auto">
        <h1 className=" text-4xl font-bold font-custom text-center mb-5">Add Foods</h1>

        {/* restaurants name field */}
        <div className="form-control mb-2">
          <label className="label">
            <span className="label-text text-black">Food Name</span>
          </label>
          <input {...register("name", { required: true })} placeholder="Enter food name" className="input input-bordered bg-yellow-400" />
          {errors.name && <span className=" text-red-500">Name is required</span>}
        </div>


        {/* Select restaurants field */}
        <label className="label-text text-black">Select Restaurants</label>
        <select {...register("res_name", { required: true })} className="p-3 w-full mt-1 border rounded-lg input-bordered mr-2 bg-yellow-400 cursor-pointer">
          <option value="" >Select Restaurants </option>
          {
            loader.map(one => <option value={one?.res_name} key={one._id} className=" capitalize " >{one?.res_name}</option>)
          }
        </select>
        {errors.res_name && <span className=" text-red-500">City is required</span>}

        {/* main price field */}
        <div className="form-control mb-2">
          <label className="label">
            <span className="label-text text-black">Main Price</span>
          </label>
          <input {...register("main_price", { required: true })} type="number" min={1} placeholder="Enter main price" className="input input-bordered bg-yellow-400" />
          {errors.main_price && <span className=" text-red-500">this field is required</span>}
        </div>

        {/* discount price field */}
        <div className="form-control mb-2">
          <label className="label">
            <span className="label-text text-black">Discount Price</span>
          </label>
          <input {...register("discount_price", { required: true })} type="number" min={1} placeholder="Enter discount price" className="input input-bordered bg-yellow-400" />
          {errors.discount_price && <span className=" text-red-500">this field is required</span>}
        </div>

        {/* photo URL field */}
        <div className="form-control mb-2">
          <label className="label">
            <span className="label-text text-black">Food Picture URL</span>
          </label>
          <input {...register("photo", { required: true })} placeholder="Enter photo url" className="input input-bordered bg-yellow-400" />
          {errors.photo && <span className=" text-red-500">this field is required</span>}
        </div>

        {/* food details field */}
        <div className="form-control mb-2">
          <label className="label">
            <span className="label-text text-black">Describe something about this food</span>
          </label>
          <textarea  {...register("describe", { required: true })} placeholder="Describe something" className="textarea textarea-bordered bg-yellow-400" />
          {errors.describe && <span className=" text-red-500">this field is required</span>}
        </div>



        <div className="form-control ">
          <button className="btn hover:bg-yellow-400 mt-3 bg-yellow-500 text-black border-none uppercase tracking-wider ">Create</button>
        </div>
      </form>
    </div>
  )
}

export default AddFoodsPage