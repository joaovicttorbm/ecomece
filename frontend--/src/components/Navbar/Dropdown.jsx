
import React from "react";
import { FaCaretDown } from "react-icons/fa";

const Dropdown = ({ links }) => (
    <li className="relative cursor-pointer group">
        <a href="#" className="flex items-center gap-2 font-semibold text-gray-500 dark:hover:text-white py-2">
            Links Rápidos
            <span><FaCaretDown className="group-hover:rotate-180 duration-300" /></span>
        </a>
        <div className="absolute z-50 hidden group-hover:block w-48 rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
            <ul className="space-y-2">
                {links.map(link => (
                    <li key={link.id}>
                        <a
                            href={link.link}
                            className="text-gray-500 dark:hover:text-white duration-200 block p-2 hover:bg-primary/20 rounded-md font-semibold"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </li>
);

export default Dropdown;
