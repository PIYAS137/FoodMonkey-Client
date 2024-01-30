import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

const SignUpPage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }




  return (
    <div className=" w-full h-screen bg-yellow-700 3 flex justify-center items-center">
      <div className="grid grid-cols-5 min-w-[900px] min-h-[600px] rounded-xl overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit)} className="p-3 bg-yellow-300 col-span-2 w-full h-full flex flex-col justify-center">
          <h1 className=" text-4xl font-bold font-custom text-center ">Register Here</h1>

          {/* name field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Name</span>
            </label>
            <input {...register("name", { required: true })} placeholder="Enter your name" className="input input-bordered bg-yellow-400" />
            {errors.name && <span className=" text-red-500">This field is required</span>}
          </div>

          {/* photo field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Photo URL</span>
            </label>
            <input {...register("photo", { required: true })} placeholder="Enter your photo URL" className="input input-bordered bg-yellow-400" />
            {errors.photo && <span className=" text-red-500">This field is required</span>}
          </div>

          {/* email field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Email</span>
            </label>
            <input {...register("email", { required: true })} placeholder="Enter your email" className="input input-bordered bg-yellow-400" />
            {errors.email && <span className=" text-red-500">This field is required</span>}
          </div>
          
          {/* password field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Password</span>
            </label>
            <input {...register("pass", { required: true })} placeholder="Enter your password" className="input input-bordered bg-yellow-400" />
            {errors.pass && <span className=" text-red-500">This field is required</span>}
            <label className="label ">
              <p className="text-black label-text-alt link link-hover mt-4">Already have an account? <Link to={'/login'} className=" font-semibold">Go Login</Link></p>
            </label>
          </div>
          
          
          
          <div className="form-control ">
            <button className="btn hover:bg-yellow-400 bg-yellow-500 text-black border-none uppercase tracking-wider">Register</button>
          </div>
        </form>
        <div className=" col-span-3 w-full h-full bg-contain object-cover bg-center " style={{ 
      backgroundImage: `url("https://i.pinimg.com/originals/c5/e0/fb/c5e0fb9892c8af9c2b69de1000019457.jpg")` 
    }}>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage