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
          <img id="imglogo" src="../public/tft_penguin.jpg" />
          <h4 id="title">TFT Board Balancer</h4>
          <h4>
            <button className="navbarButton" onClick={toggleItem}>
              Items
            </button>
          </h4>
          <h4>
            <button className="navbarButton" onClick={toggleChampion}>
              Champions
            </button>
          </h4>
          <h4>
            <button className="navbarButton" onClick={toggleBoard}>
              Board
            </button>
          </h4>
          <h4>
            <button className="navbarButton" onClick={toggleTrait}>
              Traits
            </button>
          </h4>
        </ul>
      </div>
    );
  }
}
