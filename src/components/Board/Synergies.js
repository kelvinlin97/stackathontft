import React from "react";

const Synergy = (props) => {
  const { traits } = props;
  return (
    <div>
      Cultist: {traits["Cultist"] || "No Cultist"}
      Vanguard: {traits["Vanguard"] || "No Vanguard"}
      Ninja: {traits["Ninja"] || "No Ninja"}
      Assassin: {traits["Assassin"] || "No Assassin"}
      Fortune: {traits["Fortune"] || "No Fortune"}
      Mage: {traits["Mage"] || "No Mage"}
      Dragonsoul: {traits["Dragonsoul"] || "No Dragonsoul"}
      Warlord: {traits["Warlord"] || "No Warlord"}
      Keeper: {traits["Keeper"] || "No Keeper"}
      Emperor: {traits["Emperor"] || "No Emperor"}
      Slayer: {traits["Slayer"] || "No Slayer"}
      Spirit: {traits["Spirit"] || "No Spirit"}
      Enlightened: {traits["Enlightened"] || "No Enlightened"}
      Duelist: {traits["Duelist"] || "No Duelist"}
    </div>
  );
};

export default Synergy;
