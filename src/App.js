import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

function App() {
 
  const [items, setItems] = useState(data);

  return (
    <main>
      <header>
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </header>
      <Categories items={data} filterList={setItems} />
      <Menu items={items} />
    </main>
  );
}

export default App;
