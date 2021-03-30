import React from "react";

function SlotCard(props) {
  return (
    <div className="slot-card">
      <span className="slot-card-text">{props.time} </span>
    </div>
  );
}

export default SlotCard;
