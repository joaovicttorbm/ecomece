import React from "react";
import { IoMdSearch } from "react-icons/io";

const Search = () => (
    <div className="relative group hidden sm:block">
        <input
            type="text"
            placeholder="Procurar"
            className="search-bar"
        />
        <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
    </div>
);

export default Search;
