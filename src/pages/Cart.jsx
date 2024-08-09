import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/features/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart) || [];
  const dispatch = useDispatch();
console.log("cart item", cartItems)
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleUpdateQuantity = (item, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity }));
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl">Your cart is empty.</p>
          <Link to="/" className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-grow">
            <ul className="space-y-6">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                      <div className="mt-2 flex items-center space-x-2">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleUpdateQuantity(item, parseInt(e.target.value))}
                          className="w-16 p-1 border rounded"
                        />
                        <button
                          onClick={() => handleRemoveFromCart(item)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/3">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">Total:</span>
                <span className="text-lg font-bold">${calculateTotal()}</span>
              </div>
              <Link
                to="/checkout"
                className="block w-full px-6 py-3 bg-green-600 text-white text-center rounded hover:bg-green-700"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
