import React from 'react'

const SearchItem = ({ search, setSearch }) => {
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search Item</label>
            <input
                type="text"
                role='search'
                id='search'
                placeholder='Search Items'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
        </form>
    )
}

export default SearchItem