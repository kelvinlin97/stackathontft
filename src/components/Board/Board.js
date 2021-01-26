import React from "react";
import Graph from "./Graph.js";
import { Anime } from "react-anime";
import Synergy from "./Synergies.js";
import anime from "animejs/lib/anime.es.js";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      championsList: [],
      championTraits: {},
      statView: false,
      championIds: [],
    };
    this.boardState = this.boardState.bind(this);
    this.switchStatView = this.switchStatView.bind(this);
  }

  boardState(stats, traits, id) {
    let joinedArr = this.state.championsList.concat(stats);
    this.setState({ championsList: joinedArr });

    let joinedIdArr = this.state.championIds.concat(id);
    this.setState({ championIds: joinedIdArr });

    let joinedTraitsArr = this.state.championTraits;

    for (let i = 0; i < traits.length; i++) {
      if (joinedTraitsArr[traits[i]] === undefined) {
        joinedTraitsArr[traits[i]] = 1;
      } else {
        joinedTraitsArr[traits[i]] += 1;
      }
    }

    //Refactor below

    if (id === 1) {
      anime({ targets: `#anime${id}`, translateY: 140, translateX: 21 });
    } else if (id === 2) {
      anime({ targets: `#anime${id}`, translateY: 140, translateX: 29 });
    } else if (id === 3) {
      anime({ targets: `#anime${id}`, translateY: 140, translateX: 39 });
    } else if (id === 4) {
      anime({ targets: `#anime${id}`, translateY: 140, translateX: 47 });
    } else if (id === 5) {
      anime({ targets: `#anime${id}`, translateY: 140, translateX: 56 });
    } else if (id === 6) {
      anime({ targets: `#anime${id}`, translateY: 140, translateX: 65 });
    } else if (id === 7) {
      anime({ targets: `#anime${id}`, translateY: 140, translateX: 72 });
    } else if (id === 8) {
      anime({ targets: `#anime${id}`, translateY: 200, translateX: -300 });
    } else if (id === 9) {
      anime({ targets: `#anime${id}`, translateY: 200, translateX: -292 });
    } else if (id === 10) {
      anime({ targets: `#anime${id}`, translateY: 199, translateX: -284 });
    } else if (id === 11) {
      anime({ targets: `#anime${id}`, translateY: 198, translateX: -275 });
    } else if (id === 12) {
      anime({ targets: `#anime${id}`, translateY: 198, translateX: -265 });
    }

    this.setState({ championTrait: joinedTraitsArr });
    document.getElementById(`anime${id}`).style.clipPath =
      "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";
  }

  switchStatView() {
    if (this.state.championsList.length) {
      this.setState({
        statView: true,
      });
    } else {
      alert("Please add champions first!");
    }
  }

  render() {
    const { championList } = this.props;
    const d3Data = { offense: 0, defense: 0, traits: {} };
    for (let i = 0; i < this.state.championsList.length; i++) {
      d3Data.offense += this.state.championsList[i].offense.dps;
      d3Data.defense +=
        this.state.championsList[i].defense.armor +
        this.state.championsList[i].defense.mr;
    }

    const traitDisplay = [];

    for (const [key, value] of Object.entries(this.state.championTraits)) {
      traitDisplay.push(`${key}: ${value}`);
    }

    const d3Dataset = [];

    for (let i = 1; i < 30; i++) {
      let defense = d3Data.defense;
      let offense = d3Data.offense * i;
      let totalDamage = offense + defense;
      d3Dataset.push({ seconds: i, stats: totalDamage });
    }

    if (this.state.statView === false) {
      return (
        <div className="board">
          <button id="boardButton" onClick={this.switchStatView}>
            Calculate Stats
          </button>
          {championList.map((champion) => {
            return (
              <>
                <img
                  key={champion.id}
                  id={"anime" + champion.id}
                  onClick={() =>
                    this.boardState(
                      champion.stats,
                      champion.traits,
                      champion.id
                    )
                  }
                  className="item-image"
                  src={`../../public/champions/${champion.id}.png`}
                />
              </>
            );
          })}
          <h3>Board</h3>
          <img id="boardSize" src={"../../public/boardimg.png"} />
          <ul id="listStats" style={{ listStyleType: "none" }}>
            <li>
              {" "}
              Base Offensive Stats (1s): {d3Data.offense
                ? d3Data.offense
                : 0}{" "}
            </li>
            <li>
              {" "}
              Base Defensive Stats (1s): {d3Data.defense
                ? d3Data.defense
                : 0}{" "}
            </li>
          </ul>
          <div id="listTraits">
            <h3 id="traitsTitle">Traits</h3>
            {traitDisplay.map((trait) => {
              return <div>{trait}</div>;
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div id="graph">
          <div id="selectedChampIcon">
            <h4> Selected Champions </h4>
            {this.state.championIds.map((id) => {
              return (
                <img
                  className="item-image"
                  src={`../../public/champions/${id}.png`}
                ></img>
              );
            })}
          </div>
          <h4>Overall Team Stats Over Time(seconds)</h4>
          <div id="graphD3">
            <Graph data={d3Dataset} />
          </div>
          <ul style={{ listStyleType: "none" }}>
            <li> Total Offensive Stats: {d3Data.offense}</li>
            <li> Total Defensive Stats: {d3Data.defense} </li>
          </ul>
        </div>
      );
    }
  }
}
