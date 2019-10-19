import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import {MovieProvider} from './MovieContext';
import Addmovie from './Addmovie';



function App() {
  return (
    <MovieProvider>
        <div className="App">
            <Nav />
            <Addmovie />
            <MovieList />
        </div>
    </MovieProvider>
  );
}

export default App;
