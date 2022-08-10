import { useEffect,useState } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './component/WeatherButton';


//1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다. 
//  ~ useEffect 사용하기 
//2. 현재 도씨, 섭씨 화씨 날씨 상태 
//3. 버튼 5개 (1개는 현재 위치, 4개는 다른 도시)
//4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다. 
//5. 현재 위치 기반 날씨 버튼을 클릭하면 다시 현재 위치 기반날씨로 돌아 온다. 
//6. 데이터를 들고오는 동안 로딩 크피너가 돈다. 
function App() {
  const [weather, setWeather]=useState(null);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=> {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon) 
    });
  };

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=52605fac026991fbf3501b07f9ad1dbd&units=metric`; //다이나믹 value에는 $ 넣어준다. 
    let response = await fetch(url); //url를 호출해서 가져올때까지 기다려주세요. & await쓰려면 async 함수여야 한다. 
    let data = await response.json(); //response를 통해서 json을 추출하는 것을 기달려 달라. api는 대부분 json이다.
    setWeather(data);
  };

  useEffect(() => {
    getCurrentLocation()
  },[ ]) //array 안에 아무것도 넣지 않으면 render를 하고 나서 실행을 시킨다. componentdidmount()처럼 행동한다. 
  
  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather} /> {/* WeatherBox에 props 정보 보내주기 */}
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
