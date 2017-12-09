import React from 'react';

function makeItRed(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <div style={{ backgroundColor: 'red', padding: 15 }}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}

class RawComponent extends React.Component {
  render() {
    return (
      <div>{this.props.words}</div>
    );
  }
}

const RedComponent = makeItRed(RawComponent);

export default function HOCView() {
  return (
    <RedComponent words="Hello World!" />
  );
}
