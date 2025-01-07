import './App.css';
import Home from './pages/home';
import ProductList from './pages/productlist';
import ProductDetail from './pages/productdetails';
import ReviewStars from './components/reviewstars';
import NotFound from './pages/notfound';
import Cart from './pages/cart';

function App() {
  const productDetails = {
    rating: 4.5,
    rating_count: 120,
    sku_id: "SKU12345",
    product_info: "This is a high-quality dirt racing helmet made with carbon fiber for extra durability and comfort.",
    selling_price: "$299.99",
    marked_price: "$399.99",
    related_products: [
      { id: 1, name: "Helmet A", price: "$99.99", image: "path_to_image1" },
      { id: 2, name: "Helmet B", price: "$129.99", image: "path_to_image2" },
    ],
  };

  return (
    <div>
      <Cart />
    </div>
  );
}

export default App;