//1. 전체상품페이지, 로그인페이지, 상품상세페이지 ~ 페이지가 여러개일경우 react에서 react-router을 사용한다. 설치해야 한다. 
//1-1 네비게이션 바 : 페이지가 바껴도 상단에 그대로 있다. 
//2. 전체 상품페이지: 전체상품 볼 수 있다. 
//3. 로그인 버튼을 누르면 로그인 페이지가 보인다. 
//4. 상품디테일을 눌렀으나, 로그인인 안돼 있을 경우에는 로그인 페이지가 먼저 나온다. 
//5. 로그인이 돼 있을 경우에는 상품 디테일 페이지를 볼 수 있다. 
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다. 
//7. 로그아웃이 되면 상품 디테일 페이지를 볼수 없다. 다시 로그인페이지가 보인다. 
//8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다. 
//9. 삼품을 검색할 수 있다. 
import './App.css';
import { Routes, Route} from "react-router-dom";
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component.js/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
