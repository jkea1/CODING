//useCounter를 사용하는 Accommodate라는 함수 컴포넌트
//사람을 수용하는 시설에서 사용한다고 가정
//useCounter을 이용해서 count를 관리한다. count가 최대 용량을 초과하면 경고문구가 표시되고 입장이 불가해진다.  
//useEffect 훅의 작동방식을 파악하기 위해 useEffect를 2개를 사용했다.
//하나는 의존성 배열이 없는 형태 : 컴포넌트가 mount된 직후에 호출되며, 이후 컴포넌트가 업데이트가 된 후에 호출된다.  
// & 의존성 배열이 있는 형태 : 컴포넌트가 mount된 직후에 호출되며, 이후 count 값이 바뀔때 마다 호출된다. 이때 용량이 가득 찼는지 아닌지의 상태를 isFull 이라는 state 에 저장한다. 


import React, { useState, useEffect } from "react";
import useCounter from "./useCounter" ;

const MAX_CAPACITY = 10;

function Accomodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style= {{ padding: 16  }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accomodate;


