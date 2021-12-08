import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { item, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleAddClick = (product) => {
    dispatch(addtoCart(product));
    navigation("/cart");
  };
  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {item &&
              item?.map((product) => (
                <div key={product.id} className="product">
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} />
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className="price">${product.price}</span>
                  </div>
                  <button
                    onClick={() => {
                      handleAddClick(product);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>please waite</p>
      ) : (
        <p>unexpected error occured</p>
      )}
    </div>
  );
};

export default Home;
