import React from 'react';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';
import emails from './assets/json/data.json';

function App() {
    console.log(emails);
    
    return (
        <div id={'App'}>
            <Searchbar />
            <Emaillist emails={emails}/>
        </div>
  );
}

export default App;