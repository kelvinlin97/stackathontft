import React from "react";

const Items = (props) => {
  const { itemList } = props;
  return (
    <div className="item">
      {itemList.map((item) => {
        return (
          <>
            <img
              className="item-image"
              src={`../../public/items/${item.id}.png`}
            />
            <a className="item-name">{item.name}</a>
            {/* {item.description} */}
          </>
        );
      })}
    </div>
  );
};

export default Items;
