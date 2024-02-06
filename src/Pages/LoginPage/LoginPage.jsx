import { useContext } from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/FirebaseContext";
import Swal from 'sweetalert2';
import { FaGoogle } from "react-icons/fa6";
import usePublicAxios from "../../Hooks/usePublicAxios";

const LoginPage = () => {
  const { Firebase_Login_User, Firebase_Google_Login } = useContext(AuthContext);
  const navigate = useNavigate();
  const publicAxios = usePublicAxios()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    // console.log(data);
    Firebase_Login_User(data.email, data.pass)
      .then(res => {
        if (res.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Login",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/')
        }
      }).catch(err => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500
        });
      })

  }


  // google login function 
  const handleClickGoogleLogin = () => {
    Firebase_Google_Login()
      .then(res => {
        if (res.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Login",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/')
          publicAxios.post('/user', res.user)
            .then(res => {
              console.log(res.data);
            })
        }
      }).catch(err => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500
        });
      })
  }




  return (
    <div className=" w-full h-screen bg-yellow-700 3 flex justify-center items-center">
      <div className="grid grid-cols-5 min-w-[900px] min-h-[600px] rounded-xl overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit)} className="p-3 bg-yellow-300 col-span-2 w-full h-full flex flex-col justify-center">
          <h1 className=" text-4xl font-bold font-custom text-center ">Login Here</h1>

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
              <p className="text-black label-text-alt link link-hover mt-4">Dont have an account? <Link to={'/signup'} className=" font-semibold">Create Account</Link></p>
            </label>
          </div>
          <div className="form-control ">
            <button className="btn hover:bg-yellow-400 bg-yellow-500 text-black border-none uppercase tracking-wider">Login</button>
            <button onClick={handleClickGoogleLogin} className="btn hover:bg-blue-500 bg-blue-400 text-black border-none uppercase tracking-wider mt-3 text-xs">
              <FaGoogle className=" text-white text-xl" />
              <span className=" text-white">Login With Google</span>
            </button>
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

export default LoginPage