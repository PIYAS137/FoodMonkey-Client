import { useForm } from "react-hook-form"
import { useLoaderData, useNavigate } from "react-router-dom";
import usePublicAxios from "../../Hooks/usePublicAxios";
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";



const UpdateFoodsPage = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  const publicAxios = usePublicAxios();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    setValue('name', loaderData?.name);
    setValue('res_name', loaderData?.res_name);
    setValue('main_price', loaderData?.main_price);
    setValue('discount_price', loaderData?.discount_price);
    setValue('photo', loaderData?.photo);
    setValue('describe', loaderData?.describe);
  }, [loaderData])

  const onSubmit = (data) => {
    Swal.fire({
      title: "Sure to Update?",
      text: "please confirm your decision",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!"
    }).then((result) => {
      if (result.isConfirmed) {
        publicAxios.patch(`/food/${loaderData?._id}`, data)
          .then(res => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: "Updated!",
                text: "Your food has been updated.",
                icon: "success"
              });

              reset();
              navigate('/dashboard/manage_foods')
            }
          }).catch(err => {
            console.log(err.message);
          })
      }
    });

  }


  return (
    <div>
      {/* <h1 className=" text-center font-bold text-lg"></h1> */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-3 col-span-2 w-full h-full flex flex-col justify-center max-w-xl mx-auto">
        <h1 className=" text-4xl font-bold font-custom text-center mb-1">Update Food : {loaderData?.name}</h1>
        <h1 className=" text-sm font-bold  text-center mb-1">Restaurnts name : {loaderData?.res_name}</h1>
        <h1 className=" text-xs font-semibold text-center mb-5 text-gray-500">Change Restaurant name is harmful for current Food Orders</h1>

        {/* restaurants name field */}
        <div className="form-control mb-2">
          <label className="label">
            <span className="label-text text-black">Food Name</span>
          </label>
          <input {...register("name", { required: true })} placeholder="Enter food name" className="input input-bordered bg-yellow-400" />
          {errors.name && <span className=" text-red-500">Name is required</span>}
        </div>

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

export default UpdateFoodsPage