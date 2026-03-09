import React from "react";
import GroceryInput from "./components/GroceryInput";
import GroceryList from "./components/GroceryList";

const App = () => {

  const [items, setItems] = React.useState([]);

  const addItem = (item) => {
    if (item === "") return;
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{textAlign:"center", marginTop:"40px"}}>
      <h1>Grocery List</h1>

      <GroceryInput addItem={addItem}/>
      <GroceryList items={items} deleteItem={deleteItem}/>

    </div>
  );
};

export default App;
