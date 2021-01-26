import Items from "./src/components/Item/Items.js";
import Board from "./src/components/Board/Board.js";
import Champion from "./src/components/Champions/Champion.js";
import React, { Component } from "react";
import { items } from "./assets/data/items.js";
import Navbar from "./src/navbar.js";
import { champions } from "./assets/data/champions.js";
import { allChampions } from "./assets/data/championList.js";
import { Anime, anime } from "react-anime";

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: false,
      champions: false,
      traits: false,
      board: false,
    };
    this.toggleItem = this.toggleItem.bind(this);
    this.toggleChampion = this.toggleChampion.bind(this);
    this.toggleTrait = this.toggleTrait.bind(this);
    this.toggleBoard = this.toggleBoard.bind(this);
  }

  toggleItem() {
    this.setState({
      item: true,
      champions: false,
      traits: false,
      board: false,
    });
  }

  toggleChampion() {
    this.setState({
      item: false,
      champions: true,
      traits: false,
      board: false,
    });
  }

  toggleTrait() {
    this.setState({
      item: false,
      champions: false,
      traits: true,
      board: false,
    });
  }
  toggleBoard() {
    this.setState({
      item: false,
      champions: false,
      traits: false,
      board: true,
    });
  }

  render() {
    return (
      <div>
        <Navbar
          toggleItem={this.toggleItem}
          toggleChampion={this.toggleChampion}
          toggleTrait={this.toggleTrait}
          toggleBoard={this.toggleBoard}
        />
        {this.state.item ? (
          <Anime opacity={[0, 1]} translateY={[-64, 0]}>
            <Items itemList={items} />{" "}
          </Anime>
        ) : (
          ""
        )}
        {this.state.board ? (
          <>
            <Anime
              opacity={[0, 1]}
              delay={anime.stagger(500)}
              translateY={[-64, 0]}
            >
              <Board championList={champions} />
            </Anime>
          </>
        ) : (
          ""
        )}
        {this.state.champions ? (
          <Anime opacity={[0, 1]} translateY={[-64, 0]}>
            <Champion championList={allChampions} />{" "}
          </Anime>
        ) : (
          ""
        )}
        {this.state.traits ? "Didn't have enough time to add this :(" : ""}
      </div>
    );
  }
}
