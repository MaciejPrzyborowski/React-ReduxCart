import Cart from "./components/Cart/Cart.js";
import Layout from "./components/Layout/Layout.js";
import Products from "./components/Shop/Products.js";

function App() {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
