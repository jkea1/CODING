
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  /* const [count, setCount] = useState(0); //값을 동적으로 만들어 주고 싶을때 useState를 만들어준다. 하지만 리덕스를 사용하면 state는 App에서 안 만든다. useSelector를 이용해서 state를 Store에서 불어온다.   */
  let count = useSelector(state=>state.count); //useSelctor는 함수를 매개변수로 받는다. 함수는 state를 매개변수로 받는다. 
  let id = useSelector(state => state.id);
  let password = useSelector(state => state.password);
  
  const dispatch = useDispatch() //이렇게 하고 시작하는게 룰이야

  const increase = () => {
    dispatch({type:"INCREMENT", payload:{num: 5} }); /* useDispatch를 가지고 INCREMENT라는 이름의 action을 던져준 것이다.  */

  }
  const login = () => {
    dispatch({type: "LOGIN", payload: {id:"ea", password:"123"}}) //반드시 보내줘야 하는 값은( id, password)은 payload로 보내준다. 
  }

  return (
    <div>
      <h1>{id},{password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
      <button onClick={login}>Login</button>
      <Box />
    </div>
  );
}

export default App;
