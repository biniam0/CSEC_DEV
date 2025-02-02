// import { Fragment } from "react/jsx-runtime";
// import { MouseEvent } from "react";
import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // Hook helps to tap into built in function in react
  const [selectedIndex, setselectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, idx) => (
          <li
            className={
              selectedIndex === idx
                ? "list-group-item active"
                : "list-group-item"
            }
            key={idx}
            onClick={() => {
              setselectedIndex(idx);
              onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
