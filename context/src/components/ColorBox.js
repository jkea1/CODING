/* import { ColorConsumer } from '../contexts/color'; */
import React from 'react'
import { useContext } from 'react';
import ColorContext from '../contexts/color';


// Consumer는 context의 변화를 구독한다. 
// Provider는 Context의 value를 변경할 수 있다. 
// Provider를 사용할때는 value 값을 명시해 줘야 한다. 


//useContext 훅 사용하기 
const ColorBox = () => {
    const {state} = useContext(ColorContext);
    return (
        <> 
            <div
                    style={{
                        width: '100px', 
                        height: '100px',
                        background: state.color //403p 처럼 하면 value.color로 해도 된다. 
                    }}
                    />
                    <div
                    style={{
                        width: '50px', 
                        height: '50px',
                        background: state.subcolor
                    }}    
                    />
        </>
    );
};

export default ColorBox;

/* const ColorBox = () => {
    return (
        <ColorConsumer> 
            {value => (
                <>
                    <div
                    style={{
                        width: '100px', 
                        height: '100px',
                        background: value.state.color //403p 처럼 하면 value.color로 해도 된다. 
                    }}
                    />
                    <div
                    style={{
                        width: '50px', 
                        height: '50px',
                        background: value.state.subcolor
                    }}    
                    />
                </>
                )}
        </ColorConsumer>
    );
}; */