import React from "react";
import addItem from "../../images/addItem.png";
import "./Item.css";

const Item = (props) => {
  const { item, selectedItem } = props;
  const { id, name, image, price } = item;

  return (
    <div className="item-style">
      <img src={image} alt="" />
      <p className="fw-bold">Name: {name}</p>
      <p className="fw-bold">Price: BDT{price}</p>
      <button className="w-100 mb-0" onClick={() => selectedItem(item, id)}>
        <p className="fw-bold">Add Item</p>
        <img src={addItem} alt="" />
      </button>
    </div>
  );
};

export default Item;
