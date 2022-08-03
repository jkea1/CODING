//MainContent 컴포넌트를 자식으로 가지고 있는데 이를 themeContext.provider로 감싸서 themeContext의 값을 
//하위 컴포넌트들이 사용할 수 있도록 해준다. 

import { useState, useCallback } from "react";
import ThemeContext from './ThemeContext';
import MainContent from './MainContent';

function DarkOrLight(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if (theme == "light") {
            setTheme("dark");
        } else if (theme == "dark") {
            setTheme("light");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            <MainContent />
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;