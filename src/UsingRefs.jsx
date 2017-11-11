import React from 'react';

export default class UsingRefs extends React.Component {
  constructor() {
    super();
    this.updateRef = this.updateRef.bind(this);
  }

  componentDidMount() {
    this.input.value = 'Hello World!';
  }

  updateRef(ref) {
    this.input = ref;
  }

  render() {
    return (
      <div>
        <h1>Using refs</h1>
        <input ref={this.updateRef} className="form-control" />
      </div>
    );
  }
}
