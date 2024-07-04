import { useState } from "react";

function ListGroup() {
  const items = ["Mumbai", "Chennai", "Kolkata", "Bangalore", "Delhi"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            onClick={() => {
              setSelectedIndex(index);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
          >
            {item}
          </li>
        ))}
        {items.length > 0
          ? "There are total " + items.length + " items in the list"
          : "There are 0 items in the list"}
      </ul>
    </>
  );
}

export default ListGroup;
