import Banner from "../Home/Banner/Banner";
import FeatureProduct from "../Home/FeatureProducts/FeatureProduct";
import Navbar from "../Home/Navbar/Navbar";
import Testimonial from "../Home/Testimonials/Testimonial";


const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
     <div className="container mx-auto">
     <FeatureProduct/>
     <Testimonial/>
     </div>
    </div>
  );
};

export default Homepage;