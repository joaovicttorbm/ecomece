// Navbar.js
import React from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import Dropdown from "./Dropdown";
import Search from "./Search";
import Cart from "./Cart";
import DarkMode from "./DarkMode";

const MenuLinks = [
    { id: 1, name: "Home", link: "#" },
    { id: 2, name: "Loja", link: "/#loja" },
    { id: 3, name: "Sobre", link: "/#sobre" },
    { id: 4, name: "Blog", link: "/#blog" },
];

const DropdownLinks = [
    { id: 1, name: "Produtos em alta", link: "/#" },
    { id: 2, name: "Mais vendidos", link: "/#" },
    { id: 3, name: "Mais bem avaliados", link: "/#" },
];

const Navbar = () => (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="py-4">
            <div className="container flex justify-between items-center">
                <Logo />
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-4">
                        {MenuLinks.map(link => (
                            <MenuItem key={link.id} link={link.link} name={link.name} />
                        ))}
                        <Dropdown links={DropdownLinks} />
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <Search />
                    <Cart />
                    <DarkMode />
                </div>
            </div>
        </div>
    </div>
);

export default Navbar;
