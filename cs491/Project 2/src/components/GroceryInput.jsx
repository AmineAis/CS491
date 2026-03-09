import React from "react";

const GroceryInput = ({ addItem }) => {

  const [input, setInput] = React.useState("");

  const handleAdd = () => {
    addItem(input);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default GroceryInput;