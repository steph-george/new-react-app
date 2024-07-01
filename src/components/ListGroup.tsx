function ListGroup() {
  const items = ["Mumbai", "Chennai", "Kolkata", "Bangalore", "Delhi"];
  return (
    <>
      <h1>List</h1>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
}

export default ListGroup;
