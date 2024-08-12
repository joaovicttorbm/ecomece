import React from "react";
import LigthButton from "../../assets/website/light-mode-button.png"
import DarkButton from "../../assets/website/dark-mode-button.png"

const DarkMode = () => {
    const [ theme, setTheme ] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "ligth");
    
    const element = document.documentElement;
// theme localStorage
    React.useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            element.classList.add("dark");
            element.classList.add("dark");
        } else {
            element.classList.remove("ligth");
            element.classList.remove("dark");
        }
    });
    const toggleTheme = () => {
        // Alterna entre os temas "dark" e "light"
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };
    return (
        <div className="relative">
            <img src={LigthButton} alt="LigthButton" 
            onClick={toggleTheme}
            className={` w-12 cursor-pointer absolute right-0 z-10 ${
                theme === "dark" ? "opacity-0" : "opacity-100"}
                transation-all duration-300`} />
            <img src={DarkButton} alt="DarkButton" 
            onClick={toggleTheme}
            className={` w-12 cursor-pointer `} />
        </div>
    )
}
export default DarkMode