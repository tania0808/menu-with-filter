import React from 'react';

const Item = ({ title, price, img, desc}) => {
    return (
        <article>
            <img src={img} alt="item" />
            <div className="infos">
                <h4>{title}</h4>
                <p>$ {price}</p>
            </div>
            <p>{desc}</p>
        </article>
    );
}

export default Item;
