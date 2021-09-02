import React from 'react'
import './styles/TodoSearch.css'

function TodoSearch(props) {

    const OnSearchValueSearch = (event) => {
        console.log(event.target.value);
    }

    return(
        <input className="TodoSearch" placeholder="cebolla" onChange={OnSearchValueSearch}/>
    )
}

export { TodoSearch }