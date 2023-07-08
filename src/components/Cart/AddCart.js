"use client";
import { addItem } from "@/store/slices/cartSlice";
import { useDispatch } from "react-redux";

function AddCart({ item }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log(item);
    dispatch(addItem(item));
  };

  return (
    <div>
      <button
        className="mb-0 mt-10 flex h-14 px-3 w-full items-stretch overflow-hidden rounded-md text-gray-500"
        onClick={handleAddToCart}
      >
        <div className="flex w-full items-center mb-2 bg-emerald-500 text-white text-center justify-center">
          Add to Cart
        </div>
      </button>
    </div>
  );
}

export default AddCart;
