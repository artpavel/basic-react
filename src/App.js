import React from 'react'
import './App.css';
import Car from "./Car/Car";
import {Component} from "react/cjs/react.production.min";

class App extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Subaru', year: 2021},
            {name: 'Mitsubishi', year: 2019},
        ],
        pageTitle: 'React Components'
    }

    changeTitleHandler = (newTitle) => {
        this.setState({
            pageTitle: newTitle
        })
    }

    render() {
        const divStyle = {
            textAlign: 'center',
            color: 'red',
            backgroundColor: 'yellow'
        }

        const cars = this.state.cars

        return (
            <div style={divStyle}>
                <h1 style={{padding: '10px', fontSize: '36px'}}>{this.state.pageTitle}</h1>

                <button
                    onClick={this.changeTitleHandler.bind(this, 'Changed!')}
                >Change title</button>

                <Car
                    name={cars[0].name}
                    year={cars[0].year}
                    onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
                />
                <Car
                    name={cars[1].name}
                    year={cars[1].year}
                    onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
                />
                <Car
                    name={cars[2].name}
                    year={cars[2].year}
                    onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
                />
            </div>
        );
    }
}

export default App;


