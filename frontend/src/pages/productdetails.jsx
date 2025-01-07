import { useContext, useState } from "react";
import { BooksContext } from "../App";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import '../styles/global.css';
import { useParams } from "react-router-dom";
import LabTabs from "../components/tabswitch";
import Footer from "../components/footer";
import { Link } from "react-router-dom";


const ProductDetail = () => {
  const { id } = useParams();
  const { state } = useContext(BooksContext); 
  const productDetailItem = state.booklist.find((item) => item.id === parseInt(id));
  const { addToCart } = useContext(BooksContext);
  const [quantity, setQuantity] = useState(1);


  if (!productDetailItem) {
    return <div>Product not found!</div>;
  }


  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({ ...productDetailItem, count: quantity });
    console.log('Product added to cart:', productDetailItem, 'Quantity:', quantity);
  };
  

  return (
    <>
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
      <div className="container mx-auto px-4 flex justify-center align-middle">
        <img src={productDetailItem.image} alt="Product Image" />
      </div>
      
      <div className="mx-auto px-5 lg:px-5">
        <h2 className="pt-3 text-2xl font-bold lg:pt-0">{productDetailItem.title}</h2>
        <div className="mt-1 flex items-center">
          <Rater style={{ fontSize: "20px" }} total={5} interactive={false} rating={3.5} />
          <p className="ml-3 text-sm text-gray-400">({productDetailItem.reviews})</p>
        </div>
        <p className="mt-4 text-4xl font-bold text-violet-900">
          ${productDetailItem.price}
          <span className="text-xs text-gray-400 line-through">${productDetailItem.previousPrice}</span>
        </p>
        <p className="pt-5 text-sm leading-5 text-gray-500">{productDetailItem.description}</p>

        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Quantity</p>
          <div className="flex items-center space-x-2">
            <button className="flex h-8 w-8 items-center justify-center border" onClick={decrementQuantity}>
              −
            </button>
            <div className="flex h-8 w-8 items-center justify-center border-t border-b border-gray-300">
              {quantity}
            </div>
            <button className="flex h-8 w-8 items-center justify-center border" onClick={incrementQuantity}>
              +
            </button>
          </div>
        </div>

        <div className="mt-7 flex flex-row items-center gap-6">
          <button
            className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800"
            onClick={handleAddToCart}
          >
            <BiShoppingBag className="mx-2" />
            Add to Cart
          </button>
          <button className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
            <AiOutlineHeart className="mx-2" />
          <Link to={`/cart`}>
            Wishlist
          </Link>
          </button>
        </div>
      </div>
    </section>
      <LabTabs />
      <Footer />
    </>
  );
};

export default ProductDetail;
