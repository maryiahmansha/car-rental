"use client"

import React, { useState } from 'react'
import { SearchManufacturer } from '.'

const SearchBar = () => {
    const [manufacturer, setManfacturer] = useState('')
    const handleSearch = () => {

    }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManfacturer} />
            </div>
        </form>
    )
}

export default SearchBar