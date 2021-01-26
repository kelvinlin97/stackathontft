import React from "react";
import ReactTooltip from "react-tooltip";

const Champion = (props) => {
  const { championList } = props;
  return (
    <div className="item">
      {championList.map((champion) => {
        return (
          <>
            <img
              data-tip
              data-for={"registerTip" + champion.id}
              className="item-image"
              src={`../../public/champions/${champion.id}.png`}
            />
            <ReactTooltip
              id={"registerTip" + champion.id}
              place="top"
              effect="solid"
            >
              {champion.star} star + {champion.traits} traits
            </ReactTooltip>
            <a className="item-name">{champion.name}</a>
          </>
        );
      })}
    </div>
  );
};

export default Champion;
