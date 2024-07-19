import { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import "../style/SearchPage.css"

function SearchPage() {

    return (
        <div className='searchPage'>
            <form className='searchForm'>
                <input type='text' className='search' placeholder='지역 또는 간병인 이름으로 검색하세요.' />
                <input type='submit' className='sub' value={""}></input>
            </form>
        </div>
    )
}

export default SearchPage;
