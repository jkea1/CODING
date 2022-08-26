//미들웨어 함수는 함수를 return 해준다. 
function login (id, password) {
    return (dispatch, getState) => {
        console.log("login success action ");
        dispatch({type: "LOGIN_SUCCESS", payload: { id: password}});
    };
}

export const authenticateAction = {login};