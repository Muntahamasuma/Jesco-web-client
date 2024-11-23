import axios from "axios";
import { useEffect, useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import SearchBar from "../Components/Shop_products/SearchBar";
import SortByPrice from "../Components/Shop_products/SortByPrice";
import FilterBar from "../Components/Shop_products/FilterBar";
import Shop_product from "../Components/Shop_products/Shop_product";
import Loading from "../Components/Loading/Loading";
import { Link } from "react-router-dom";


const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [category, setCategory] = useState("");
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios
        .get(
          `http://localhost:5000/all-products?title=${search}&page=${page}&limit=${6}&sort=${sort}&category=${category}`
        )
        .then((res) => {
          setProducts(res.data.products);
          // console.log(res.data)
          setUniqueCategory(res.data.categories);
          setTotalPages(Math.ceil(res.data.totalProducts/6));
          // console.log(res.data.totalProducts)
          setLoading(false);
        });
    };
    fetch();
  }, [search, sort, category, page]);
 

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  const handleReset = () => {
    setSearch("");
    setCategory("");
    setSort("asc");
    window.location.reload();
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scroll({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-medium lato-font text-center mt-20">Shop Now</h2>
      <Link to='/'><h2 className="text-[#FD466A] text-sm font-semibold underline lato-font text-center mt-5">Home</h2></Link>

      <div className="lg:flex justify-between items-center w-full mb-6">
        <SearchBar handleSearch={handleSearch}/>
        <SortByPrice setSort={setSort}/>
      </div>

      {/* content */}
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <FilterBar
            setCategory={setCategory}
            handleReset={handleReset}
            uniqueCategory={uniqueCategory}
          />
        </div>
        {/* products */}
        <div className="col-span-10 ">
          {loading ? (
            <Loading />
          ) : (
            <>
              {products.length === 0 ? (
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-center font-bold text-3xl">
                    No Product Found
                  </h1>
                </div>
              ) : (
                <div className="w-full min-h-screen grid lg:grid-cols-3 gap-6 mb-12 px-2 items-center">
                  {products.map((product) => (
                    <Shop_product key={product._id} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
          {/* Pegination */}
        <div className="flex justify-center items-center gap-2 my-8">
          <button className="btn" onClick={()=>handlePageChange(page - 1)} disabled= {page === 1}>
            <FaCircleArrowLeft />
            
          </button>
          <p>
            page {page} of {totalPages}
          </p>
          <button className="btn" onClick={()=>handlePageChange(page + 1)} disabled= {page === totalPages}>
            <FaCircleArrowRight />
            
          </button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Shop;