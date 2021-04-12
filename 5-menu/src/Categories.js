import React from 'react';

const Categories = ({ filterMenuItems, categories }) => {
  return (
    <div className="btn-container">
      {categories[0].map((category, index) => {
        return (
          <button
            className="filter-btn"
            onClick={() => filterMenuItems(category)}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
