//button을 통해 다른 페이지로 넘어가기 이해서는 useNavigate 훅을 사용하면 된다. 

import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Homepage = () => {
    const navigate = useNavigate()
    const goProductPage = () => {
        navigate('/products?q=pants')
    }
    return (
    <div>
        <h1>Homepage</h1>
        <Link to="/about">Go to about page</Link> {/* Aboutpage로 가는 link 만들기 ,a태그처럼 행동한다.  */}
        <button onClick={goProductPage}>go to product page</button>
    </div>
    );
}

export default Homepage;

