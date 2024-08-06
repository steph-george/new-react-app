import { useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
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
