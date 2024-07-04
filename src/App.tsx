import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Mumbai", "Chennai", "Kolkata", "Bangalore", "Delhi"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
