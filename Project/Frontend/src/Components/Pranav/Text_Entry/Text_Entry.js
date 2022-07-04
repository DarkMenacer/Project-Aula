import React from "react";
import "./text_entry_style.css";

const Text_Entry = ({
  prompt,
  type,
  id,
  name,
  details = undefined,
  setDetails = undefined,
}) => {
  return (
    <div className="Text_Entry">
      <span>{prompt}: </span>
      <span>
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
      </span>
    </div>
  );
};

export default Text_Entry;