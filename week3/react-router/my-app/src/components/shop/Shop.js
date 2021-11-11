import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const fetchApi = async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const items = await res.json();
    setProducts(items);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  console.log(products);
  return (
    <div>
      <h1>Shop</h1>
      {products.length > 0 &&
        products.map((p, index) => {
          return (
            <div key={index}>
              <Link to={`/shop/${p.id}`}>
                <h3>{p.title}</h3>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Shop;
