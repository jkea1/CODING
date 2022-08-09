import './App.css';
import Box from './component/Box';

//name, num이라는 속성값을 주었다. 
function App() {
    return ( 
    <div>
      <Box name="리사" num={1}/> 
      <Box name="제니" num={2}/>
      <Box name="지수" num={3}/>
    </div>
    );
};

export default App;
