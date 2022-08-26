import React, { useEffect } from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();    
    useEffect(()=> {
        dispatch(movieAction.getMovies());
    }, []);
    return (
        <div>Home</div>
    );
}

export default Home;