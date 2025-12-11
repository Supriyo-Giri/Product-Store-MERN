import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/all");
        setProducts(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
        toast.error("Something went wrong!");
      } finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/all");
        setProducts(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
        toast.error("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  
  if (loading) {
    return <h2 className="loading-text">Loading data...</h2>;
  }
  return (
    <div>
      <h1 className="loading-text">
        {" "}
        <br />
        All products
        <br /> <br />
      </h1>
      <div className="product-card-container">
        {products.length === 0 ? (
          <p className="loading-text">No products found!</p>
        ) : (
          products.map((p) => (
            <div key={p._id}>
              <ProductCard
                name={p.name}
                price={p.price}
                image={p.image}
                pid={p._id}
                fetchData={()=>{fetchData()}}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
