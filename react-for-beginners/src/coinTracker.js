//페이지나 앱을 들어왔을 때 로딩 메세지가 보이고, 코인들이 나열되면 로딩 메세제를 숨기고 코인들을 멋진 리스트로 보여준다. 
//fetch 함수는 API를 사용하여 백엔드 서버와 비동기 요청을 하는 방식 중 하나이다. 
import { useEffect, useState } from "react";

function CT() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json()).then((json) => {
                setCoins(json);//coins의 state를 바꿨다. 
                setLoading(false);//loaing의 state를 변환했다. 
    }); //fetch해서 json 데이터로 받아온다.
    }, []);

    return (
        <div>
            <h1>The Coins! ({coins.length})</h1>
            {loading ? <strong>Loading...</strong> : null };
            <ul>
                {coins.map((coin) => (//각각의 coin의 정보는 url에 있다. 
                    <li >
                        {coin.name} ({coin.symbol}): ${coin.quotes.$KEY.price} USD
                    </li>
                ))}
            </ul>
        </div>
    );  
}

export default CT;