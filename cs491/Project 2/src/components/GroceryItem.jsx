import React from "react";

const GroceryItem = ({ item, index, deleteItem }) => {

  return (
    <li>
      {item}
      <button onClick={() => deleteItem(index)}>
        delete
      </button>
    </li>
  );
};

export default GroceryItem;