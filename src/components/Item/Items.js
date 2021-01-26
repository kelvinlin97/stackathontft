import React from "react";
// import { Button } from "react-bootstrap/Button";
import ReactTooltip from "react-tooltip";

const Items = (props) => {
  const { itemList } = props;
  return (
    <div className="item">
      {itemList.map((item) => {
        return (
          <>
            <img
              data-tip
              data-for={"registerTip" + item.id}
              className="item-image"
              src={`../../public/items/${item.id}.png`}
            />
            <ReactTooltip
              id={"registerTip" + item.id}
              place="top"
              effect="solid"
            >
              {item.description}
            </ReactTooltip>
            <a className="item-name">{item.name}</a>
            {/* {item.description} */}
          </>
        );
      })}
    </div>
  );
};

export default Items;
