import React from 'react'
import './App.css';
import Car from "./Car/Car";

const App = (props) => {

  const divStyle = {
    textAlign: 'center',
    color: 'red',
    backgroundColor: 'yellow'
  }

  return (
      <div style={divStyle}>
        <h1 style={{padding: '10px', fontSize: '36px'}}>Hello Pavel</h1>
        <Car/>
      </div>
  );
}

export default App;

/*
return (
    <div style={divStyle}>
        <h1 style={{padding: '10px', fontSize: '36px'}}>Hello Pavel</h1>
    </div>
);*/
