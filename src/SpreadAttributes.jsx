import React from 'react';

function Button({ children, ...rest }) {
  return <button className="btn" {...rest}>{children}</button>;
}

function sayHello() {
  window.alert('Hello!');
}

function Greeting(props) {
  return <div>Hello {props.firstName} {props.lastName}!</div>;
}

export default function SpreadAttributes() {
  const person = { firstName: 'Bruce', lastName: 'Lee' };

  return (
    <div>
      <h1>Spread Attributes</h1>
      <Greeting {...person} />
      <Button style={{ width: 100 }} onClick={sayHello}>Greeting</Button>
    </div>
  );
}

