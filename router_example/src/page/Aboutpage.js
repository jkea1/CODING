import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Aboutpage = () => {
    const navigate = useNavigate(); /* useNavigate는 함수를 return 해준다. 함수의 파라미터 안에 내가 가고 싶은 주소를 넣어주면 된다.*/
    const goToHomepage = () => {
        navigate('/');
    }

    return (
    <div>
        <h1>About page!</h1>
        <button onClick={goToHomepage}>Go to Homepage</button>
    </div>
    )
}

export default Aboutpage;
