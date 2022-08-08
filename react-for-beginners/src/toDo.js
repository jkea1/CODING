// toDo와 같은 Stete를 직접 수정하지 못한다. setToDo와 같은 함수로 수정한다. 
//...food 할경우 food라는 배열의 element를 불러와준다. 
import {useState} from "react"; 

function ToDo() {
  const [toDo, setToDo] = useState(""); //toDo가 value 값이고 setToDo를 통해서 value 인 toDo가 변한다. 초기값은 "" 로 아무것도 없는 상태이다. 
  const [toDos, setToDos] = useState([]); //toDos 목록 array를 만들기
  const onChange = (event) => setToDo(event.target.value); //event는 변화가 있을때 일어난다. target는 input이다. event.target.value = event 값을 arg로 받아서 현재 입력된 input 값이 무엇인지 확인할 수 있다. 
  //내용변경 이벤트가 일어나면 input의 value가 바뀐다. 
  const onSubmit = (event) => { //onSubmit은 기본적으로 호출될때 페이지를 새로고침하는 효과가 있다. 
    event.preventDefault(); //onSubmit을 해도 페이지를 새로고침 안시키기 위해서 이다. 
    if (toDo ==="") {
      return; //onSubmit 함수를 작동하지 않도록 한다. 
    }
    setToDo(""); //toDo === "" 이 아니면 입력하고 엔터시에 값을 비워 준다. 
    setToDos((currentArray) => [toDo, ...currentArray]) //간단하게 처음에는 empty array 였는데 input시에 toDo를 받아와 currentArray에 추가해 준다. 
  };
  console.log(toDos);
  return ( //form은 submit이라는 이벤트를 갖고 있다. 
    <div>
      <h1> My ToDos ({toDos.length})</h1>
      <form onSubmit = {onSubmit}> 
        <input 
          onChange={onChange} //onChange 이벤트 =>내용 변경을 감지하는 역할, {onChange}을 일으킨다. 
          value= {toDo}
          type="text"
          placeholder="Write your to do...."
      />
      <button>Add To Do</button>
      </form>
      <hr />
          <ul>
            {toDos.map((item, index) => ( //toDos 라는 array를 가져와서 array의 item들을 변형해서 item이 li가 되게 한다. 
              <li key={index}>{item}</li>
            ) )}
          </ul>
    </div>
  );
}

export default ToDo;
