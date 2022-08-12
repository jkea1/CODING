import React from 'react'
import { Link } from 'react-router-dom';


const Homepage = () => {
    return (
    <div>
        <h1>Homepage</h1>
        <Link to="/about">Go to about page</Link> {/* Aboutpage로 가는 link 만들기 ,a태그처럼 행동한다.  */}
    </div>
    );
}

export default Homepage;

