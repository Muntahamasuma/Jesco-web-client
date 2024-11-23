import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email;
    const role = data.role;
    const status = role === "buyer" ? "approved" : "pending";
    const wishlist = [];

    const userData = { email, role, status, wishlist };
    console.log(userData);
    createUser(data.email, data.password).then(() => {
      axios
        .post("https://final-run-1-server.vercel.app/users", userData)
        .then((res) => {
          console.log(res);
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Registration Successfull",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
    });
  };

  return (
    <div className="hero min-h-screen">
      <div className="flex mx-auto">
        <div className="my-5">
        <h1 className="text-5xl font-bold lato-font ">Sign up Now!</h1>
        <Link to='/'><h2 className="text-[#FD466A] text-sm font-semibold underline lato-font mt-5">Home</h2></Link>
        </div>
          <div className="rounded-md w-full bg-[#f3b9b9]">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm font-light">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500 text-sm font-light">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500 text-sm font-light">
                    Password must have at least 6 Characters
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confrim Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("confrimPassword", {
                    required: true,
                    validate: (value) => {
                      if (watch("password") != value) {
                        return "Your Password do not match";
                      }
                    },
                  })}
                />
                {errors.confrimPassword && (
                  <span className="text-red-500 text-sm font-light">
                    Both Passwords must have a match
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  {...register("role", { required: true })}
                >
                  <option disabled selected>
                    Choose an option
                  </option>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>
                {errors.role && (
                  <span className="text-red-500 text-sm font-light">
                    You must select a Role
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-[#FD466A]">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Signup;
