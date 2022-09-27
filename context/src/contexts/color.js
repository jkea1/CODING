import { createContext, useState } from 'react';

const ColorContext = createContext({ //파라미터로 Context의 기본값을 넣어준다.
    state: { color: 'black', subcolor: 'red'},
    actions: {
        setColor: () => {},
        setSubcolor: () => {}
    }
    });

    const ColorProvider = ({children}) => {
        const [color, setColor] = useState('black');
        const [subcolor, setSubcolor] = useState('red');

        const value = {
            state: {color, subcolor},
            actions: { setColor, setSubcolor}
        };

        return (
            <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
        );
    };

//const ColorConsumer = ColorContext.Consumer와 같은 의미
const {Consumer: ColorConsumer} = ColorContext;

export { ColorConsumer, ColorProvider};
export default ColorContext;