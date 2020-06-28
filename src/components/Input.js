import React from "react";

const Input = (props) => {
  return (
    <div data-test="inputWrapper" className="input-wrapper">
      <label htmlFor="searchItem"> {props.labelText}: </label>
      <input
        id="searchItem"
        data-test="search-input"
        onChange={(e) => props.updateSearch(e.target.value)}
        value={props.inputVal}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
