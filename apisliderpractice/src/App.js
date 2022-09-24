import React from 'react';
import { useEffect, useState } from 'react';
/* import {Container, Row, Col, Carousel} from 'react-bootstrap'; */
/* import { Carousel, Card, Stack } from "react-bootstrap"; */
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const App = () => {
    /* const moviesample = [
        {name: 1, img: 11},
        {name: 2, img: 22},
        {name: 3, img: 33},
        {name: 4, img: 44},
        {name: 5, img: 55},
        {name: 7, img: 77},
        {name: 8, img: 88} 

    ] */
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    
    const [MbtiMovieList, setMbtiMovieList] = useState('');
    
    useEffect(() => {
        const getHomeMovies = async() => {
            await axios({
                url: "http://localhost:8081/movie/list",
                method: "GET",
                params: {
                "type": "normal",
                "count": "50",
                "mbti" : "ENTJ",
                }
            }).then(res => {
                setMbtiMovieList(res.data);
                console.log(MbtiMovieList);
                
            })

        };
        getHomeMovies()
    }, []); 
    
    return (
        <div className="App">
            <div style={{ position: "relative" }}>
            <Carousel responsive={responsive}>
                {MbtiMovieList ? MbtiMovieList.map((movie, i) => (
                        <div className={ i === 0 ? 'active' : ''} key={movie.id}>
                            <div><img src={movie.poster_url} alt='홈슬라이더이미지'/></div>
                            <div>{movie.name}</div>
                        </div>
                    )) : 'Loading'}
            </Carousel>
            </div>
        </div> 

    )
}

export default App;
