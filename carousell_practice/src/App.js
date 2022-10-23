import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const App = () => {
  const [movieList, setMovieList] = useState('');
  const list = [
      {name: '기본이미지1', poster_url : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"},
      {name: '기본이미지2',poster_url : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"},
      {name: '기본이미지2',poster_url : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"},
      {name: '기본이미지2',poster_url : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"},
      {name: '기본이미지2',poster_url : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"},
      {name: '기본이미지2',poster_url : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"},
      {name: '기본이미지2',poster_url : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"},
  ];
  const responsive = {
      superLargeDesktop: {
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

  useEffect(() => {
      const getLoginSliderMovies = async() => {
          await axios({
              url: "http://localhost:8081/movie/list",
              method: "GET",
              params: {
              "type": "random",
              "count" : "5",
              }
          }).then(response => {
              setMovieList(response.data);
          })
      };
      getLoginSliderMovies();
      
  }, []);


  console.log("check",movieList);

  return (
      <div className="login_slider">
          <div>
              <div className="login_slider">
                {movieList ? (<Carousel responsive={responsive}>
                    {movieList.map(movie => {
                        return (
                            <div key={movie.id}>
                                <div><img src={movie.poster_url} alt="자동슬라이더"/></div>
                            </div>
                        )
                    })}    
                  </Carousel>) : 'Loading'}             
              </div>   
          </div>         
      </div>
  )
}

export default App;
