import React from 'react'

import { FaTrashAlt } from 'react-icons/fa'


const SingleItem = ({ item, handelDelete, handelClick }) => {
    return (
        <li className='item'>
            <input
                type="checkbox"
                checked={item?.checked}
                id={`list_${item?.id}`}
                onChange={() => handelClick(item?.id)}
            />
            <label htmlFor={`list_${item?.id}`}> {item.item} </label>
            <FaTrashAlt
                role="button"
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
                onClick={() => handelDelete(item?.id)}
            />
        </li>
    )
}

export default SingleItem