//확인 버튼을 누르면 click 이벤트가 event handler로 전달되고 isConfirmed 값이 true로 바뀌면서 버튼이 비활성된다.  
//ConfirmButton 컴포넌트는 확인여부를 저장하기 위해 state에 isConfirmed 라는 변수를 하나 가지고 있으며 초기값은 false이다. 
//버튼에 onClick 이벤트를 처리하기 위해서 이벤트 핸들러로 handleConfirm() 이라는 함수를 만들어 넣어줬다.
//bind를 사용하는 방식으로 event handler를 처리했다.  

//import React from "react";

//class ConfirmButton extends React.Component  {
//    constructor(props) {
//       super(props); 
//        
//        this.state = {
//            isConfirmed: false,
//        };

//            bind 코드 사용시
//            this.handleConfirm = this.handleConfirm.bind(this);
//            Class fields syntax 사용시 ~ arrow function 이용
//           handleConfirm = () => {
//                this.setState((prevState) => ({
//                    isConfirmed: !prevState.isConfirmed,
//                }));
//            }

//        }

//        handleConfirm() {
//            this.setState((prevState) => ({
//                isConfirmed: !prevState.isConfirmed,
//            }));
//        }

//        render() {
//            return (
//                <button
//                    onClick = {this.handleConfirm}
//                    disabled = {this.state.isConfirmed}
//                >
//                    {this.state.isConfirmed ? "확인됨" : "확인하기"}
//                </button>
//       );
//    }
//}

//export default ConfirmButton;

//함수 컴포넌트를 더 많이 사용한다. 아래의 코드를 잘 기억해두자. 
import React, { useState } from "react";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick = {handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );    
}

export default ConfirmButton;