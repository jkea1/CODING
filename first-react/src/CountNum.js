import React from 'react';
import { useState } from 'react';
import "./App.css";

//state가 바뀌면 UI가 다시 렌더링됨(다시 그려줌)
//변수는 바로 바뀌지만(동기적) state는 state를 바꿔주는 set함수들은 모아놨다가 부모함수가 끝나면 차근차근 실행되기 때문에 다음부터 변한다.(비동기적) 
//버튼을 클릭하면 counter2 의 값은 계속 바뀌는데 counter의 값은 계속1이다.
//이유
//1.유저가 버튼을 클릭
//2. counter+1 해서 1이됨
//3. setState 함수 호출
//4. console.log 실행됨
// 변수값은 1로 보이고 state 값은 아직 안변했기 때문에 그전값이 보인다. 
//함수끝
// countNum이 re render
//let counter =0을 거치면서 counter 값은 다시 0으로 초기화가 된다. 
//업데이트된 state값이 보이다. 다시 render를 한다. 
//결과: 변수는 re render 될때마다 초기화가 된다. state값은 비 동기적으로 처리된다. 
//대부분 state를 쓰지만 잠깐 기억해야 되는 값만 변수로 쓴다. 
const CountNum = () => {
  let counter = 0 
  const [counter2, setCounter2] = useState(0)
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log("counter는",counter, "counter2 state는", counter2);
  };
  return (
    <div>
        <div>{counter}</div>
        <div>state:{counter2}</div>
        <button onClick={increase}>클릭!</button>
    </div>
  )
}

export default CountNum;