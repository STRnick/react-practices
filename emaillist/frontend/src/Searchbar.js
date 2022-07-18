import React from 'react';
import './assets/scss/Searchbar.scss';

function Searchbar() {
    return (
        <div id={'Searchbar'}>
            찾기: <input type='text' placeholder='search'/>
        </div>
    );
}

export default Searchbar;