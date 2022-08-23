import React  from 'react';

const Categories = ({ items, filterList }) => {


  const categories = [...new Set(items.map(item => {
    return item.category
  }))];

  const filteredList = (category) => {
    const result = items.filter(item => item.category === category )
    filterList(result)
  }

  return (
    <div className='btn-container'>
      <button className='filter-btn' onClick={() => filterList(items)} >All</button>
      {
        categories.map((category, index) => {
          return <button className='filter-btn' key={index} onClick={() => filteredList(category)} >{category}</button>
        })
      }
    </div>
  );
};

export default Categories;
