import React from 'react'
import { useRef } from 'react'

import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handelSubmit }) => {
   const inputRef = useRef();
    return (
        <form className='addForm' onSubmit={(e) => handelSubmit(e)}>
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type="text"
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
                onClick={(e)=>inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem