//react router : 상황에 맞춰서 페이지를 보여준다. 
//페이지들끼리 이동하는 방법 2가지 1. Route를 이용해서 <Link>태그를 이용해서 이동한다. 2. useNavigate 훅을 이용해서 button의 onClick을 통해 이동하는 방식. 
//restful routes : 요즘 많이 쓰는 url 디자인 패턴, 
import './App.css';
import Aboutpage from './page/Aboutpage';
import Homepage from './page/Homepage';
import { Routes, Route } from "react-router-dom";
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';

function App() {
  return (
    <div>
      <Routes> {/* Routes: 컴포넌트를 상황에 맞춰 바꿔주는 역할*/}
        <Route path='/' element={<Homepage/>}/> {/* Route: 각각의 page를 정의해주는 역할을 한다. 속성값이 2개가 들어간다. path경로(각페이지의 주소) 와 element(그 주소일때)보여줄페이지  */}
        <Route path='/about' element={<Aboutpage/>}/> 
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/products/:id' element={<ProductDetailPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
