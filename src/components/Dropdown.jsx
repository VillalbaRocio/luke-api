import React from "react";

const Dropdown = ({ resources, selectedResource, onChange }) => {
  return (
    <select value={selectedResource} onChange={onChange}>
      {resources.map(resource => (
        <option key={resource} value={resource}>{resource}</option>
      ))}
    </select>
  );
};

export default Dropdown;