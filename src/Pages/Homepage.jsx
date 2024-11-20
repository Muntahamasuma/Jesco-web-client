import Banner from "../Home/Banner/Banner";
import FeatureProduct from "../Home/FeatureProducts/FeatureProduct";
import Navbar from "../Home/Navbar/Navbar";


const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
     <div className="container mx-auto">
     <FeatureProduct/>
     </div>
    </div>
  );
};

export default Homepage;