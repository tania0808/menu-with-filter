import React  from 'react';

const Categories = ({ items, filterList }) => {

  const categories = ['all', ...new Set(items.map(item => {
    return item.category
  }))];

  const filteredList = (category) => {
    if(category === 'all'){
      return filterList(items)
    }
    const result = items.filter(item => item.category === category )
    filterList(result)
  }

  return (
    <div className='btn-container'>
      {
        categories.map((category, index) => {
          return <button className='filter-btn' key={index} onClick={() => filteredList(category)} >{category}</button>
        })
      }
    </div>
  );
};

export default Categories;
