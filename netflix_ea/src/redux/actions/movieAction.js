//미들웨어 
//함수가 함수를 return 한다. 
import api from "../api";

const API_KEY =process.env.REACT_APP_API_KEY;
function getMovies(){
    return async (dispatch) => {
        const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`); //가져올때는 api.get 하는게 룰이다. 
        const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

        let [popularMovies, topRatedMovies, upcomingMovies ] = await Promise.all([popularMovieApi,topRatedApi,upComingApi]); //promise 값 다 받을때 까지 기다려 주는 역할을 한다. 그러면 위에 코드에 await 빼도 된다. 
        
        dispatch({
            type: "GET_MOVIE_SUCCESS",
            payload: { 
                popularMovies:popularMovies.data, 
                topRatedMovies:topRatedMovies.data, 
                upcomingMovies:upcomingMovies.data 
            },
        })
        //await은 데이터가 올때까지 다음 코드로 넘어가는 것을 막아 준다. 
        //api를 한꺼번에 불러오기 위해서는 promise.all() 을 사용한다. 
        //api 호출할 때 마다 결과값을 promise로 받는다. axios에서도 결과값은 promise 로 받는다. 

        /* let url 1 = `movie/popular?api_key=<<api_key>>&language=en-US&page=1`;
        let response = await fetch(url)
        let data = await response.json()

        let url 2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`;
        let response = await fetch(url)
        let data = await response.json()

        let url 3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`
        let response = await fetch(url)
        let data = await response.json() */
    }
}

export const movieAction = {
    getMovies,
}