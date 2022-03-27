import React from "react";

const ChooseOne = (props) => {
  const { choosingItem } = props;
  const { name } = choosingItem;

  return (
    <div>
      <div className=" mb-3">
        <p id="chooseOne" className="text-center fw-bold">
          {name}
        </p>
      </div>
    </div>
  );
};

export default ChooseOne;
