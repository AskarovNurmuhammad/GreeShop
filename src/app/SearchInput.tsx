import { div } from "framer-motion/client";
import React from "react";

const SearchInput = () => {
  return (
    <div>
      <input
        type="text"
        className="p-2 rounded-md bg-gray-200 sm:hidden"
        placeholder="Find your plants"
      />
    </div>
  );
};

export default SearchInput;
