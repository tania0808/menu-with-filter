import React from 'react';

const Item = ({ title, price, img, desc}) => {
    return (
        <article>
            <img src={img} alt="item" />
            <div className="infos">
                <div className="header">
                    <h4>{title}</h4>
                    <p>$ {price}</p>
                </div>
                <p className='description'>{desc}</p>
            </div>
        </article>
    );
}

export default Item;
