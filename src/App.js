import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const test = items.map((item) => {
    return item.category;
  });
  const categoryList = ["all", ...new Set(test)];

  const handleFiltered = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categoryList={categoryList}
          handleFiltered={handleFiltered}
        />
        <Menu items={menuItems} />;
      </section>
    </main>
  );
}

export default App;
