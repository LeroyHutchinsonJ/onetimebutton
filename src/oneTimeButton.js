import React from "react";

export default class OneTimeButton extends React.Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    this.props.onClick();

    this.setState({ clicked: true });
  };

  render() {
    return (
      <button onClick={() => this.handleClick()} disabled={this.state.clicked}>
        Blah Blah Blah
      </button>
    );
  }
}
