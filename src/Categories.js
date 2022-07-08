import React from "react";

const Categories = ({ categoryList, handleFiltered }) => {
  return (
    <div className="btn-container">
      {categoryList.map((category, index) => {
        return (
          <button
            onClick={() => handleFiltered(category)}
            key={index}
            className="filter-btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
