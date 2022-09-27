import { createStore } from 'redux'; //그냥 createStore 하면 선그어지네 

//react를 사용하지 않기 때문에 DOM을 직접 수정해줘야 한다. 
//다음과 같이 js 상단에 수정할 DOM 노르를 가리키는 값을 미리 선언해 준다. 
const divToggle = document.querySelector('.toggle'); //html의 id 값이 toggle인 것을 불러와서 정의 하였다. 
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#id');
const btnDecrease = document.querySelector('#decrease');

//액션 이름 정의하기 
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//액션 객체를 만드는 액션 생성 함수 작성하기
//type 안에 들어갈 값은 액션의 이름이다. 
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({type: INCREASE, difference});
const decrease = () => ({type: DECREASE});

//초깃값 설정
const initialState = {
    toggle: false,
    counter: 0
};

//리듀서함수 정의 
function reducer(state=initialState, action) {
    //action.type 값에 따라 다른 작업을 처리함
    switch (action.type) {
        case TOGGLE_SWITCH:
            //type 안에 들어갈 값은 액션의 이름이다. 
            //toggle 만 true면 false로 false면 true로 바꿔준다. 
            return {
                ...state, 
                toggle: !state.toggle 
            };
        case INCREASE: 
            //difference로 나타냈지 그냥 +1 하면 안되나
            return {
                ...state,
                counter: state.counter + action.difference 
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;    
    }
}

const store = createStore(reducer);

//상태가 업데이트될 때마다 호출한다. 
//현재 상태를 불러온다. 이런게 어렵다. 
const render = () => {
    const state = store.getState(); 
    //토글 처리
    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    counter.innerText = state.counter;
};

//위에는 render 할 내용을 정의만 해준 상태 
//subscribe
//store의 상태가 바뀔때마다 위에서 만든 render 함수가 호출되도록 해준다. 

render();
store.subscribe(render);

//액션을 발생시킨다. = dispatch
//파라미터에는 액션 객체를 넣어준다. 
divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
}; //toggle에 클릭 이벤트가 일어나면 toggleSwitch 액션을 발생 시킨다. 

btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
    store.dispatch(decrease());
};





