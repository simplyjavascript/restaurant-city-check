import React from "react";
import Input from "./Input";

const SearchList = ({
  list,
  loading,
  search,
  nameFilter,
  updateNameFilter,
}) => {
  if (loading) {
    return <p> Searching for city...</p>;
  }
  return (
    <>
      <h2 className="sub_header"> Search Results for the city of {search}</h2>

      <Input
        labelText="Refine by Name or Address"
        inputVal={nameFilter}
        updateSearch={updateNameFilter}
        placeholder="Eg: bar, inc, tent etc"
      />

      <p className="list_count">
        Items found: <strong>{list.length}</strong>
      </p>
      {list && (
        <ul>
          {list.map((item) => {
            return (
              <li key={item.id}>
                <p className="list_name"> Name: {item.name}</p>
                <p className="list_address"> Address: {item.address}</p>
                <p className="list_area"> Area: {item.area}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default SearchList;
