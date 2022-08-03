//ThemeContext로 부터 받아와 화면에 렌더링해주는 역할
//테마변경 버튼을 누른 경우 ThemeContext로 부터 받은 toggleTheme 함수를 호출하여 themeContext 값을 변경하는 역할을 한다.
//themeContext를 가져오기 위해 useContext 훅을 사용하였다. 

import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    )
}

export default MainContent;