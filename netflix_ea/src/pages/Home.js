//action을 호출하려면 dispatch가 필요하다. 
import React, { useEffect } from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';


const Home = () => {
    const dispatch = useDispatch(); //action을 던지는 함수(훅)
    const {popularMovies, topRatedMovies, upcomingMovies}= useSelector(
        (state) => state.movie
        );

    //useEffect는 렌더후에 호출된다. 
    //우리는 useEffect로 불러온 정보를 받고 렌더를 시켜야 한다. 
    //조건부 렌더링이 필요하다. { && }
    useEffect(()=> { //movieAction 의 getmovies 함수를 부른다. 
        dispatch(movieAction.getMovies());
    },[]);
    return (
        <div>
            {popularMovies.results && <Banner movie={popularMovies.results[0]} />} 
        </div>
    );
}

export default Home;