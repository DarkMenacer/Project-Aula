import React from "react";
import "./TextEntryStyle.css";

const TextEntry = ({
  prompt,
  type,
  id,
  name,
  handleOnChange = undefined
}) => {


  return (
    <div className="TextEntry">
      <div>{prompt}: </div>
      <div>
        {" "}
        {handleOnChange === undefined ? (
          <input type={type} id={id} name={name} />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            onChange={handleOnChange}
          />
        )}
      </div>
    </div>
  );
};

export default TextEntry;
