import Navbar from "./components/Navbar";
import Category from "./components/Category";
import FinalFooter from "./components/FinalFoo";
import PreFooter from "./components/PreFoo";
import Offer from "./components/Offer";

function App() {
  return (
    <div id="grid">
      <Navbar />
      <Category
        name="Smartphone"
        src="https://ucarecdn.com/d46ebda2-52f6-4702-a496-69488fcd7fe2/"
      />
      <Category
        name="Tablet"
        src="https://ucarecdn.com/cbe8dd00-12d2-4ac3-b49c-1975661088dd/tablet.jpg"
      />
      <Category
        name="Laptop"
        src="https://ucarecdn.com/a83bbb3f-2ed3-4814-a2b5-250441177b21/laptop.jpg"
      />
      <Category
        name="Accessories"
        src="https://ucarecdn.com/330475bb-f164-4b43-9cd0-c760d66dbb63/headphones.jpg"
      />
      <Offer heading="Latest smartphone at 30% off" />
      <Offer heading="Latest Laptops at lowest prices" />
      <PreFooter />
      <FinalFooter />
    </div>
  );
}

export default App;
