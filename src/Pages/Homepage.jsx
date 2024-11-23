import Banner from "../Components/Home/Banner/Banner";
import FeatureProduct from "../Components/Home/FeatureProducts/FeatureProduct";
import Footer from "../Components/Home/Footer/Footer";
import Navbar from "../Components/Home/Navbar/Navbar";
import OurCategory from "../Components/Home/Our Category/OurCategory";
import Testimonial from "../Components/Home/Testimonial";


const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
     <div className="container mx-auto">
      <OurCategory/>
     <FeatureProduct/>
     <Testimonial/>
     <Footer/>
     </div>
    </div>
  );
};

export default Homepage;