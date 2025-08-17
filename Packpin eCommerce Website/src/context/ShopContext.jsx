import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delevery_fee = 0;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    console.log("Loaded cart from localStorage:", storedCart); // Debugging log
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [loggedInUser, setLoggedInUser] = useState(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    }
  }, [loggedInUser]);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCartItems(updatedCart);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogin = (userData) => {
    setLoggedInUser(userData);
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/login");
  };

  // Save cart to localStorage after updating cart items
  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  // Update cart items and save to localStorage
  const updateCartItems = (newCartItems) => {
    setCartItems(newCartItems);
    saveCartToLocalStorage(newCartItems);
  };

  const addToCart = async (itemId, productName, packOf, price, image) => {
    if (!packOf) {
      toast.error("Select Product Size");
      return;
    }

    const existingItemIndex = cartItems.findIndex(
      (item) => item.itemId === itemId && item.packOf === packOf
    );

    let updatedCart;
    if (existingItemIndex !== -1) {
      updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      const newItem = {
        itemId,
        packOf,
        productName,
        price,
        quantity: 1,
        image,
      };
      updatedCart = [...cartItems, newItem];
    }

    updateCartItems(updatedCart); // Save the updated cart
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const updateQuantity = (itemId, price, pack, quantity, productName, image) => {
    if (quantity < 0) {
      toast.error("Quantity cannot be less than 1");
      return;
    }
  
    const existingItemIndex = cartItems.findIndex(
      (item) => item.itemId === itemId && item.packOf === pack
    );
  
    let updatedCart;
    if (existingItemIndex !== -1) {
      updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity = quantity;
    } else {
      const newItem = {
        itemId,
        packOf: pack,  // Update this to correctly reference the variable 'pack'
        productName,
        price,
        quantity: 1,
        image,
      };
      updatedCart = [...cartItems, newItem];
    }
  
    updateCartItems(updatedCart);
  };
  

  const getCartAmount = () => {
    return cartItems.reduce(
      (totalAmount, item) => totalAmount + item.price * item.quantity,
      0
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems"); // Clear cart from localStorage
  };
  

  const value = {
    // products,
    currency,
    delevery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    loggedInUser,
    setLoggedInUser,
    handleLogin,
    handleLogout,
    clearCart,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
