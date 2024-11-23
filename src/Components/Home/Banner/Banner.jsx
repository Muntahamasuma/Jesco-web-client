import { LuShoppingBasket } from "react-icons/lu";
import { RxDividerHorizontal } from "react-icons/rx";
import "animate.css";

const Banner = () => {
  return (
    <div className="carousel w-full h-screen justify-between late-font uppercase">
      <div id="slide1" className="carousel-item relative w-full bg-[#FCF6F6]">

        <div className="flex flex-col lg:flex-row gap-3 items-center justify-around container mx-auto my-10">

          <div className="space-y-4 lg:space-y-8 text-center md:text-left lg:text-left">

            <h2 className="flex items-center text-xl justify-center md:justify-start lg:justify-start font-normal text-[#474747] space-x-2">
              <RxDividerHorizontal className="text-[#FD466A]" size={42} />
              <span>offer 2024</span>
            </h2>
            <h1 className="text-6xl lg:text-8xl font-light text-[#3C3C3C] animate__animated animate__fadeInUp">
              sale up to
            </h1>
            <h1 className="text-6xl lg:text-7xl font-bold text-[#3C3C3C] animate__animated animate__fadeInDown">
              50% off
            </h1>
            <button className="btn border-none bg-[#FF7004] rounded-full btn-md lg:btn-lg text-lg text-white animate__animated animate__fadeInDown bg-gradient-to-r from-[#FD7364] to-[#FD466A] hover:bg-gradient-to-r hover:from-[#FD466A] hover:to-[#FD7364] hover:shadow-lg">
              Shop Now
              <LuShoppingBasket />
            </button>
          </div>

          <div className="mt-8 lg:mt-0">
            <img
              src="https://i.ibb.co.com/n8GtSJJ/slider-1.png"
              className="h-[300px] lg:h-auto w-full animate__animated animate__fadeInUp object-cover"
            />
          </div>

        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* slide 2 */}
      <div id="slide2" className="carousel-item relative w-full bg-[#CEBDB5]">

        <div className="flex flex-col lg:flex-row gap-3 items-center justify-around container mx-auto my-10">
        
        <div className="space-y-4 lg:space-y-8 text-center md:text-left lg:text-left">

            <h2 className="flex items-center text-xl justify-center md:justify-start lg:justify-start font-normal text-[#474747] space-x-2">
              <RxDividerHorizontal className="text-[#FD466A]" size={42} />
              <span>offer 2024</span>
            </h2>
            <h1 className="text-6xl lg:text-8xl font-light text-[#3C3C3C] animate__animated animate__fadeInUp">
              sale up to
            </h1>
            <h1 className="text-7xl font-bold text-[#3C3C3C] animate__animated animate__fadeInUp">
              50% off
            </h1>
            <button className="btn border-none bg-[#FF7004] rounded-full btn-md lg:btn-lg px-12 text-lg text-white animate__animated animate__fadeInDown bg-gradient-to-r from-[#FD7364] to-[#FD466A] hover:bg-gradient-to-r hover:from-[#FD466A] hover:to-[#FD7364] hover:shadow-lg">
              Shop Now
              <LuShoppingBasket />
            </button>
          </div>
         <div className="mt-8 lg:mt-0"> <img
            src="https://i.ibb.co.com/DVT9jdW/slider-2.png"
            className="w-full animate__animated animate__fadeInUp h-[300px] lg:h-auto object-cover"
          /></div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;