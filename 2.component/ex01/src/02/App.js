import React, { Component } from 'react';
import Foodlist from './FoodList'

class App extends Component {
    constructor(props) {
        super(props);

        this.foods = [{
            no: 1,
            name: 'Egg',
            quantity: 20
        }, {
            no: 2,
            name: 'Milk',
            quantity: 10
        }, {
            no: 3,
            name: 'Bread',
            quantity: 2
        }];
    }

    render() {
        return (
            <div id='App'>
                <Foodlist 
                    foods={this.foods} />
            </div>
        );
    }
}

export default App;