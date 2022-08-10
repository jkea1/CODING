//클래스 컴포넌트
//rcc
//state를 부르때 this.state로 해야 한다.
//constructor생성자: 컴포넌트가 실행되자 마자 호출이 되는 함수로 class를 생성할때 쓴다., lifecycle 함수중 하나이다.
//this.setState() : 클래스 컴포넌트에서 자동으로 제공해주는 함수이다.
//가로()안에는 object를 받는다. object{} 안에는 변경하고 싶은 값을 써주면 된다.
 
    import React, { Component } from "react";
    import BoxClass from './component/BoxClass';

    export default class AppClass extends Component {
    constructor(props) {
        super(props); //여기까지가 기본 세팅 코드이다.
        this.state = {
        //이 컴포넌트 안에서는 state가 3개이다.
        counter2: 0,
        num: 1,
        value: 0,
        };
    }

    increase = () => {
        this.setState({
        counter2: this.state.counter2 + 1,
        value: this.state.value + 1,
        });
    };
    render() {
        return (
        <div>
            <div>state:{this.state.counter2}</div>
            <button onClick={this.increase}>클릭!</button>
            <BoxClass num={this.state.value}/> {/* num은 BoxClass의 props이다. */} 
        </div>
        );
    }
    }
