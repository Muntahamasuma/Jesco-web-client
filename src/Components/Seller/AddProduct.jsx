import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddProduct = () => {
  const {user} = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const title = data.title;
    const brand = data.brand;
    const price = parseFloat(data.price);
    const stock = parseFloat(data.stock);
    const category = data.category;
    const image = data.imageURL;
    const description = data.description;
    const sellerEmail = data.email;
    
    const product = { title, brand, price, stock, category,image, description, sellerEmail}

    const token = localStorage.getItem('access-token')
    axios.post("http://localhost:4000/addproducts", product,{
      headers:{
        authorization: `Bearer ${token}`,
      },
    }).then((res)=>{
      if(res.data.insertedId){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product added Successfull",
          showConfirmButton: false,
          timer: 1500
        });
        reset();
      }
    })
  };
  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center my-20">Add Products</h2>

      <form className="card-body  bg-blue-50 h-full" onSubmit={handleSubmit(onSubmit)}>
        
            <div className="flex gap-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="title"
                placeholder="title"
                className="input input-bordered"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-red-500 text-sm font-light">
                  Title is required
                </span>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <input
                type="brand"
                placeholder="brand"
                className="input input-bordered"
                {...register("brand", { required: true })}
              />
              {errors.brand && (
                <span className="text-red-500 text-sm font-light">
                  Brand is required
                </span>
              )}
            </div>
            </div>
            <div className="flex gap-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">$ Price</span>
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="price"
                className="input input-bordered"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="text-red-500 text-sm font-light">
                  Price is required
                </span>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <input
                type="number"
                placeholder="stock"
                className="input input-bordered"
                {...register("stock", { required: true })}
              />
              {errors.stock && (
                <span className="text-red-500 text-sm font-light">
                  Stock is required
                </span>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Category</span>
              </label>
              <input
                type="text"
                placeholder="category"
                className="input input-bordered"
                {...register("category", { required: true })}
              />
              {errors.category && (
                <span className="text-red-500 text-sm font-light">
                  Category is required
                </span>
              )}
            </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Image URL</span>
              </label>
              <input
                type="text"
                placeholder="imageURL"
                className="input input-bordered"
                {...register("imageURL", { required: true })}
              />
              {errors.imageURL && (
                <span className="text-red-500 text-sm font-light">
                  ImageURL is required
                </span>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="description"
                className="input input-bordered"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <span className="text-red-500 text-sm font-light">
                  Description is required
                </span>
              )}
            </div>
            <div className="btn btn-primary w-full mt-5">
              <button type="submit">Add Product</button>
            </div>
            
          </form>
    </div>
  );
};

export default AddProduct;