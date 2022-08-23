import React from 'react';

const Categories = ({categories}) => {
  return (
    <div className='btn-container'>
      <button className='filter-btn'>All</button>
      {
        categories.map((category, index) => {
          return <button className='filter-btn' key={index}>{category}</button>
        })
      }
    </div>
  );
};

export default Categories;
