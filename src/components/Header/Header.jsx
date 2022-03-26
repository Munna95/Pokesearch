import React from "react";
import './Header.scss';

function Header() {
    return(
        <header className='App-header'>
            <div className='Search-container'>
            <input type='text' className='Search-bar' placeholder='Search for a Pokémon'></input>
            <button className="Search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </header>
    );
}

export default Header;