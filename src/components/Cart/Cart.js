import React, { useState } from "react";
import "./Cart.css";
import deleteButton from "../../images/delete.png";
import ChooseOne from "../ChooseOne/ChooseOne";

const Cart = (props) => {
  const { cart, chooseAgain, deleteItem } = props;

  const randomItem = Math.floor(Math.random() * cart.length);
  const randomCamera = cart[randomItem];
  const [chooseItem, setChooseItem] = useState([]);

  const choosingItem = () => {
    const emptyArray = [];
    emptyArray.push(randomCamera);
    setChooseItem(emptyArray[0]);
  };
  return (
    <div className="mx-auto cart pb-2">
      <h2 className="ps-3">Selected Items</h2>
      {cart.map((item) => {
        const { name, image, id } = item;

        return (
          <div className="bg-secondary rounded d-flex justify-content-around align-items-center mb-3">
            <div className="item-image">
              <img src={image} alt="" />
            </div>
            <div>
              <p className="fw-bold text-white">{name}</p>
            </div>
            <div className="delete-button">
              <button onClick={() => deleteItem(id)}>
                <img src={deleteButton} alt="" />
              </button>
            </div>
          </div>
        );
      })}
      <button
        onClick={choosingItem}
        className="choose-button mx-auto my-3 fw-bold"
      >
        Choose One
      </button>
      <ChooseOne choosingItem={chooseItem}></ChooseOne>

      <button onClick={chooseAgain} className="choose-button mx-auto fw-bold">
        Choose Again
      </button>
    </div>
  );
};

export default Cart;
