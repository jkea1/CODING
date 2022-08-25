let initialState= { //state는 초기화를 해줘야 한다.
    count: 0,
    id: "",
    password: "",
} 

function reducer(state=initialState,action) { /* 두개의 매개변수를 가진다.  */
    console.log("action은 뭘까?", action); //action은 매개변수로 dispatch로 던진 액션을 받아올수 있다.
    //if 문을 사용해도 되고, switch문을 사용해도 된다. 
    /* if(action.type === "INCREMENT") {
        return {...state, count: state.count+1} 
        //...state 뜻: state(=initialState)가 여러개 있을시에 나머지는 그대로 유지하고 count만 바꾸기 위함이다. 
        //...state는 기본적으로 치고 간다고 생각하면 된다. 그래서 ...state하고 변경하고 싶은내용을 넣으면 된다.
    } */
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count  + action.payload.num};
        case "LOGIN":
            return {...state, id: action.payload.id, password: action.payload.password};

            default:
            return { ...state};
    }
//위에 return은 if 문에 대한 return 이고, 아래는 reducer에 대한 기본 return 이다. 
//if case가 아니더라도 state 값을 받을 수 있기 위해서이다. 
    return { ...state};
}

export default reducer ;