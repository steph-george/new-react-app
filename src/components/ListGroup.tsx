function ListGroup() {
  const items = ["Mumbai", "Chennai", "Kolkata", "Bangalore", "Delhi"];
  return (
    <>
      <h1>List</h1>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </>
  );
}

export default ListGroup;
