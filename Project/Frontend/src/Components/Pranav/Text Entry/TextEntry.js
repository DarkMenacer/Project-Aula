import React from "react";
import "./TextEntryStyle.css";

const TextEntry = ({
  prompt,
  type,
  id,
  name,
  details = undefined,
  setDetails = undefined,
}) => {
  return (
    <div className="TextEntry">
      <div>{prompt}: </div>
      <div>
        {" "}
        {details === undefined ? (
          <input type={type} id={id} name={name} />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            onChange={(e) => setDetails({ ...details, [name]: e.target.value })}
            value={details[name]}
          />
        )}
      </div>
    </div>
  );
};

export default TextEntry;
