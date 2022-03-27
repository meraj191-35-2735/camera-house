import React from "react";
import { useEffect, useState } from "react";
import Item from "../Item/Item";
import Cart from "../Cart/Cart";
import "./Items.css";
import ChooseOne from "../ChooseOne/ChooseOne";

const Items = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const selectedItem = (item, newItemID) => {
    const newCart = [...cart, item];
    for (const item of cart) {
      if (item.id === newItemID) {
        return alert("You can not add same item multiple times");
      }
    }
    if (newCart.length <= 4) {
      setCart(newCart);
    } else {
      alert("You can not add more than 4 items");
    }
  };
  const deleteItem = (givenId) => {
    for (const item of cart) {
      if (item.id === givenId) {
        const index = cart.indexOf(item);
        cart.splice(index, 1);
      }
      const newCart = [...cart];
      setCart(newCart);
    }
  };

  const chooseAgain = () => {
    const input = "";
    document.getElementById("chooseOne").innerText = input;
    return setCart([]);
  };

  return (
    <div className="container mx-auto row mt-2">
      <div className="col-lg-9 col-12 items-container">
        {items.map((item) => {
          return (
            <Item item={item} key={item.id} selectedItem={selectedItem}></Item>
          );
        })}
      </div>
      <div className="col-lg-3 col-12 cart-container pt-lg-0 pt-3">
        <Cart
          cart={cart}
          chooseAgain={chooseAgain}
          deleteItem={deleteItem}
        ></Cart>
      </div>
    </div>
  );
};

export default Items;
