import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
  const {login} = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit=(data)=>{
 console.log(data)
 login(data.email, data.password)
 navigate("/")
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Login Now!</h1>
        <p className="py-6 w-4/5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })}
          />
          {errors.email && <span className='text-red-500 text-sm font-light'>Email is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true, minLength: 6 })} />
          {errors.password?.type === 'required' && (<span className='text-red-500 text-sm font-light'>Password is required</span>)}
          {errors.password?.type === 'minLength' && (<span className='text-red-500 text-sm font-light'>Password must have at least 6 Characters</span>)}
          </div>
          <div className="form-control mt-6">
            <button type='submit' className="btn btn-primary">Login</button>
          </div>
          {/* <GoogleLogin/> */}
        <p className='my-2 font-light text-sm'>New Here? <Link to ='/signup' className='text-primary font-medium'>Register</Link></p>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;