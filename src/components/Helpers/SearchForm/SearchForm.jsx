import React from 'react'

const SearchForm = ({ setSearchText }) => {
  return (
    <div>
        <input type="text" className='input' onChange={(e) => setSearchText(e.target.value)}/>
    </div>
  )
}

export default SearchForm