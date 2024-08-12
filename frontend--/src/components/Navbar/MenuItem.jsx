import React from "react";

const MenuItem = ({ link, name }) => (
    <li>
        <a href={link} className="font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
            {name}
        </a>
    </li>
);

export default MenuItem;
