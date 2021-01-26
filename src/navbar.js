import React from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { toggleItem, toggleChampion, toggleTrait, toggleBoard } = this.props;
    return (
      <div>
        <ul id="nav">
          <h4 id="title">TFT Board Balancer</h4>
          <img id="imglogo" src="../public/tft_penguin.jpg" />
          <h4>
            <button onClick={toggleItem}>Items</button>
          </h4>
          <h4>
            <button onClick={toggleChampion}>Champions</button>
          </h4>
          <h4>
            <button onClick={toggleBoard}>Board</button>
          </h4>
          <h4>
            <button onClick={toggleTrait}>Traits</button>
          </h4>
        </ul>
      </div>
    );
  }
}
