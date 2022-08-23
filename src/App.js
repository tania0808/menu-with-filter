import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

function App() {
 
  const [items, setItems] = useState(data);

  const categories = [...new Set(items.map(item => {
    return item.category
  }))];




  return (
    <main>
      <header>
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </header>
      <Categories categories={categories}/>
      <Menu items={items} />
    </main>
  );
}

export default App;
