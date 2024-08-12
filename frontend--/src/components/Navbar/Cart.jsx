import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => (
    <button className="relative p-3">
        <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
        <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
            4
        </div>
    </button>
);

export default Cart;
