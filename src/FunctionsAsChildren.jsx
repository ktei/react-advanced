import React from 'react';

function Repeat(props) {
  const items = [];
  for (let i = 0; i < props.numTimes; i += 1) {
    items.push(props.children(i)); // invoke props.children and pass parameter(s)!
  }
  return <div>{items}</div>;
}

export default function FunctionsAsChildren() {
  return (
    <div>
      <h1>Functions as Children</h1>
      <Repeat numTimes={10}>
        {(index) => (<div key={index}>This is item {index} in the list</div>)}
      </Repeat>
    </div>
  );
}
