import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterMenuItems = (category) => {
    if (category !== 'all') {
      const filteredItems = items.filter((item) => item.category === category);
      setMenuItems(filteredItems);
    } else {
      setMenuItems(items);
    }
  };

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterMenuItems={filterMenuItems} categories={categories} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
