import React from 'react'

import './content.css'
import ItemList from './ItemList'

const Content = ({ items, handelDelete, handelClick }) => {


    return (
        <>

            {items.length ? (
                <ItemList
                    items={items}
                    handelClick={handelClick}
                    handelDelete={handelDelete}
                />
            ) : (
                <h3 style={{ margin: "5px", color: "red" }}>List is empty</h3>
            )}
        </>
    )
}

export default Content