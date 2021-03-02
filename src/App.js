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
        pageTitle: 'React Components',
        showCars: false
    }

    changeTitleHandler = (newTitle) => {
        this.setState({
            pageTitle: newTitle
        })
    }

    showCarHandler = pageTitle => {
        this.setState({pageTitle})
    }

    handleInput = (event) => {
        this.setState({
            pageTitle: event.target.value
        })
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    onChangeName(name, index){
        const car = this.state.cars[index]
        car.name = name;
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({
            cars: cars
        })

    }

    deleteHandler(index){
        const cars = [...this.state.cars]
        cars.splice(index, 1)
        this.setState({
            cars: cars
        })

    }

    render() {
        const divStyle = {
            textAlign: 'center',
            color: 'red',
            backgroundColor: 'yellow'
        }

        // const cars = this.state.cars

        return (
            <div style={divStyle}>
                <h1 style={{padding: '10px', fontSize: '36px'}}>{this.state.pageTitle}</h1>


                <input type="text" onChange={this.handleInput}/>


                {/*это была кнопка для изменения названия*/}
                <button
                    onClick={this.changeTitleHandler.bind(this, 'Changed!')}
                >Change title
                </button>


                <button
                    onClick={this.toggleCarsHandler}
                >Show Cars
                </button>

                {
                    this.state.showCars
                        ? this.state.cars.map((car, index) => {
                            return (
                                <Car
                                    key={index}
                                    name={car.name}
                                    year={car.year}
                                    onDelete={this.deleteHandler.bind(this, index)}
                                    onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
                                    /*    onChangeTitle={() => this.changeTitleHandler(car.name)}*/
                                    onChangeName = { (event) => this.onChangeName(event.target.value, index) }
                                />
                            )

                        })
                        : null
                }

                {/*<Car*/}
                {/*    name={cars[0].name}*/}
                {/*    year={cars[0].year}*/}
                {/*    onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}*/}
                {/*/>*/}
                {/*<Car*/}
                {/*    name={cars[1].name}*/}
                {/*    year={cars[1].year}*/}
                {/*    onChangeTitle={() => this.changeTitleHandler(cars[1].name)}*/}
                {/*/>*/}
                {/*<Car*/}
                {/*    name={cars[2].name}*/}
                {/*    year={cars[2].year}*/}
                {/*    onChangeTitle={() => this.changeTitleHandler(cars[2].name)}*/}
                {/*/>*/}
            </div>
        );
    }
}

export default App;


