import React from "react";

const DisplayData = ({ data }) => {
  return (
    <div>
      {Object.keys(data).map(key => (
        <p key={key}><strong>{key}:</strong> {data[key]}</p>
      ))}
    </div>
  );
};

export default DisplayData;