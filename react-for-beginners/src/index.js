import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDo from './toDo';
import "./styles.css";
import CT from './coinTracker';
import MovieApp from './movieApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieApp />
  </React.StrictMode>
);

