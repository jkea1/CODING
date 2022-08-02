//useCounter 라는 react hook 만들기 
//초기 카운트값을 파라미터로 받아서 count 라는 이름의 state를 생성하여 값을 제공하고, 카운트 증가 및 감소를 편리하게 할수 있도록 
//함수를 제공하는 훅이다. 
//그래서 이 훅을 사용하면 어떤 함수 컴포넌트 에서 든지 카운트 기능을 쉽게 사용가능 하다.  
import React, { useState } from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1 );
    const decreaseCount = () => setCount(() => Math.max(count - 1, 0)); // count 값이 0 아래로 안 내려가게 했다.

    return [count, increaseCount, decreaseCount];
}

export default useCounter;