import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
const SearchBar = ({ handleSearch, searchedURL, handleCancleSearch }) => {

    const [searchedWord, setSearchedWord] = useState("");

    return (
        <div className="searchBar-container">
            <div className='searchBar'>
                <input
                    type="url"
                    className="form-control"
                    id="inputurl1"
                    placeholder="Search website"
                    value={searchedWord}
                    onChange={(e) => (
                        setSearchedWord(e.target.value),
                        handleSearch(searchedWord))
                    }
                />
                {
                    searchedWord.length === 0 ? <IoIosSearch className='searchBar-icon' /> : <RxCross2 className='searchBar-icon' onClick={() => (
                        setSearchedWord(""), handleCancleSearch())} />
                }


            </div>
            <div className="searchedResultContainer">
                {
                    searchedURL.map((serchedRow) => (
                        <div className="searchedResult d-flex justify-content-between">
                            <p>{serchedRow.webURL}</p>
                            <p>{serchedRow.userName}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchBar
