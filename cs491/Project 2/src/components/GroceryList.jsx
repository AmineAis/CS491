import React from "react";
import GroceryItem from "./GroceryItem";

const GroceryList = ({ items, deleteItem }) => {

  return (
    <ul>
      {items.map((item, index) => (
        <GroceryItem
          key={index}
          item={item}
          index={index}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
};

export default GroceryList;