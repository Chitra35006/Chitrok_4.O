import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const UseTheme = () => {
    const theme = useContext(ThemeContext);
    return theme;
};

export default UseTheme;