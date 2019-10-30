import React, { useState } from 'react';

function Listing(props) {

  const [count, setCount] =  useState(0)

  const updateCount = () => {
      setCount(count +1)
  }

  return (
    <div className="App">
      <h1>Listing, {props.name}</h1>
      <div>
        <label>You clicked {count} times </label>
        <button onClick={updateCount}> Click </button>
      </div>
    </div>
  );
}

export default Listing;