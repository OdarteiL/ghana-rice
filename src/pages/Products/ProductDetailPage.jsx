import { Link, useParams } from "react-router-dom";
import products from "../../components/data/ProductData";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const ProductDetailPage = () => {
  const dispatch = useDispatch();

  const { productId } = useParams();
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  const { imageSrc, name, imageAlt, price } = product;

  return (
    <>
      <div className="bg-green-100 light:bg-green-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-green-300 light:bg-green-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={imageSrc}
                  alt={name}
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button
                    className="w-full bg-green-900 light:bg-green-600 text-white py-2 px-4 rounded-full font-bold hover:bg-green-800 light:hover:bg-green-700"
                    onClick={() => dispatch(addToCart({ name, imageSrc }))}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-green-200 light:bg-green-700 text-gray-800 light:text-white py-2 px-4 rounded-full font-bold hover:bg-green-300 light:hover:bg-green-600">
                    <Link to={"/cart"}>Go to Cart</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 light:text-white mb-2">
                {name}
              </h2>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 light:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-600 light:text-gray-300">
                    &#8373; {price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 light:text-gray-300">
                    Availability:
                  </span>
                  <span className="text-gray-600 light:text-gray-300">
                    In Stock
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 light:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 light:text-gray-300 text-sm mt-2">
                  {imageAlt}
                </p>
                <div className="mt-9 bg-green-200 light:bg-green-700 text-gray-800 light:text-white py-2 px-4 rounded-full font-bold hover:bg-green-300 light:hover:bg-green-600">
                  <Link to={"/products"}> back to products </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts />
    </>
  );
};

export default ProductDetailPage;
