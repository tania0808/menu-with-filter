import React from 'react';
import Item from './Item';

const Menu = ({ items }) => {
  return (
    <section>
    {
      items.map((item) => {
        return <Item {...item} key={item.id}/>
      })
    }
    </section>
  )
};

export default Menu;
