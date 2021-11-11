import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Item = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    setItem(product);
    console.log(product);
  };
  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.category} />
      <p>{item.description}</p>
      <h3>{`$ ${item.price}`}</h3>
    </div>
  );
};

export default Item;
