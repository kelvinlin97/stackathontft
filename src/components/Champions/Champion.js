import React from "react";

const Champion = (props) => {
  const { championList } = props;
  return (
    <div className="item">
      {championList.map((champion) => {
        return (
          <>
            <img
              className="item-image"
              src={`../../public/champions/${champion.id}.png`}
            />
            <a className="item-name">{champion.name}</a>
          </>
        );
      })}
    </div>
  );
};

export default Champion;
