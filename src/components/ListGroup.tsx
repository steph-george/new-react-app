function ListGroup() {
  const items = ["Mumbai", "Chennai", "Kolkata", "Bangalore", "Delhi"];
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("Clicked on " + item)}
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
