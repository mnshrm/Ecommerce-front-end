import Navbar from "./components/Navbar";
import Category from "./components/Category";

function App() {
  return (
    <div id="grid">
      <Navbar />
      <Category name="Smartphone" src="./images/smartphone.jpg" />
      <Category name="Tablet" src="./images/tablet.jpg" />
      <Category name="Laptop" src="./images/laptop.jpg" />
      <Category name="Accessories" src="./images/headphones.jpg" />
      <div className="offer item"></div>
      <div className="offer item"></div>
      <div className="footer item"></div>
    </div>
  );
}

export default App;
