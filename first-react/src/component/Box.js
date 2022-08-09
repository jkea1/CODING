//rafce 단축키 사용

import React from 'react'

const Box = (props) => {
    console.log("props:",props); //열어보면 내가 보낸 값name이 객체props안에 매개변수로서 들어가 있다. 
    return (
        <div className='box'>
            Box{props.num}
            <p>{props.name}</p>
        </div>
    )
}

export default Box;
