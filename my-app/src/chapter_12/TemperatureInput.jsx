//TemperatureInput 함수 컴포넌트는 state로 temperature과 scale을 받아서 표시해 주고, 온도값이 변경 되었을때는 props의 onTemperatureChange 함수를 호출하여 
//상위 컴포넌트로 변경된 값을 전달하게 된다. 

const scaleNames = {
    c: "섭씨",
    f: "화씨",
}

function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위: {scaleNames[props.scale]});
            </legend>
            <input value={props.temperature} onChange={handleChange}/>
        </fieldset>
    );
}

export default TemperatureInput;