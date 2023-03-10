import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/NavBar";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar />
      {/* <ProductCard title={"Producto uno"} price={200} />
      <ProductCard title={"Producto dos"} price={500} /> */}

      <Footer />
    </div>
  );
}

export default App;
