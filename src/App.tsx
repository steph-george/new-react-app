import ListGroup from "./components/ListGroup/ListGroup";
import "./App.css";

function App() {
  const items = ["Mumbai", "Chennai", "Kolkata", "Bangalore", "Delhi"];
  const handleSelectItems = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItems}
      />
    </div>
  );
}

export default App;
