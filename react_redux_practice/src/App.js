import React, { useState } from 'react';
import './App.css';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
//Provider
//state를 어떤 컴포넌트에 제공할 것인가 를 결정해 준다. 제공하고 싶은 컴포넌트를 provider로 감싸준다. 
//Provider의 prop으로 store를 반드시 정의해 줘야 한다. 


function reducer(currentState , action) { 
  if(currentState === undefined) {
    return {
      number: 1, //기본 state 값 return 해준다. 
      };
  }
  const newState = {...currentState}; //불변성을 유지하게 해준다. 
  if(action.type === 'PLUS') {
    newState.number++; //newState의 number를 1 증가시킨다. => 그 값이 return 되면서 새로운 newState가 생성된다. 
  }
  return newState;
}

const store = createStore(reducer); 
//store
//상수로 선언해 줘야 한다. 
//reducer
//store안의 state를 어떻게 바꿀것인가를 결정한다. 
//파라미터 2개 받는다. : currentState , action(어떻게 바꿀것인가에 대한 내용)
export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}> {/* 안의 컴포넌트들은 store를 사용할 수 있게 됨 */}
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}
function Left1() {
  return (
    <div>
      <h1>Left1 :</h1>
      <Left2></Left2>
    </div>
  );
}
function Left2() {
  console.log('2');
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  );
}
function Left3() {
  console.log('3');
  const number = useSelector((state) => state.number); 
  //number값을 유선으로 연결하고 싶은거다. 
  //useSelector는 함수를 인자로 받는다. 
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}
function Right1() {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2() {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={() => {
        dispatch({ type: 'PLUS'}) //plus라는 액션을 전달한다. => 리듀서가 호출된다. 
      }}></input>
    </div>
  );
}

