import React from 'react';
import ReactDOM from 'react-dom';

const messageRoot = document.getElementById('message');
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    messageRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    messageRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default class PortalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showTooltip: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showTooltip: !this.state.showTooltip });
  }

  render() {
    return (
      <div style={{ width: 150, marginTop: 200, marginLeft: 200 }}>
        <button
          onClick={this.handleClick}
          className="btn btn-primary"
        >
          Show message
          {this.state.showTooltip && (
            <Message>
              <div className="panel panel-default">
                <div className="panel-body">Hello world</div>
              </div>
            </Message>
          )}
        </button>
      </div>
    );
  }
}
