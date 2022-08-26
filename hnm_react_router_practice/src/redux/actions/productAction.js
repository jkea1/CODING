//미들웨어 함수를 만들어 준다.
//미들웨서 함수는 함수를 return 한다. 이 함수는 2개의 매개변수(파라미터)가 있다.  
//dispatch(컴포넌트에서 주는것)와 getState(현재의 state 정보를 받아 볼 수 있다.) 이다. 
//Action creator 역할을 한다. 
//원래 ProductAll.js 에서 getProduct 비동기 함수가 하던 역할을 여기에 미들웨어를 이용해서 만들어 보자.

function getProducts(searchQuery){
    return async(dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/jkea1/hnm/products?q=${searchQuery}`;
        let response = await fetch(url); /* url을 fetch 한다. */ 
        let data = await response.json(); /* respose에서 json을 뽑아오기 */
        dispatch({type: "GET_PRODUCT_SUCCESS",payload: {data}  }) //{} 중괄호 안에 action을 만들어 준다. & 전달해 줘야 하는 값으로는 payload로 data를 보내준다. 
    }
};

export const productAction={getProducts}; //객체에 함수를 담아서 반환한다. 여러개의 함수가 이페이지에 있을것이기 때문에 객체에 담아서 보낸다. 