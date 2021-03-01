import React from 'react'
import './App.css';
import Car from "./Car/Car";

const App = props => {

  const divStyle = {
    textAlign: 'center',
    color: 'red',
    backgroundColor: 'yellow'
  }
    /*
  return (
      <div style={divStyle}>
          <h1 style={{padding: '10px', fontSize: '36px'}}>Hello Pavel</h1>
      </div>
  );*/

  return (
      <div style={divStyle}>
        <h1 style={{padding: '10px', fontSize: '36px'}}>Hello Pavel</h1>
        <Car name={'Ford'} year={2018} />
          <Car name={'Subaru'} year={2021}>
              <p style={{color: 'black', fontSize: '30px'}}>COLOR</p>
          </Car>
        <Car name={'Mitsubishi'} year={2019}/>
      </div>
  );
}

export default App;


