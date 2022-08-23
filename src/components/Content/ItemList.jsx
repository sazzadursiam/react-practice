import React from 'react'

import SingleItem from './SingleItem'

const ItemList = ({ items, handelDelete, handelClick }) => {
    return (
        <ul>
            {items?.map((item) => (
                <SingleItem
                    key={item.id}
                    item={item}
                    handelClick={handelClick}
                    handelDelete={handelDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList