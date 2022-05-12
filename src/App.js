import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

// App components
import { SearchForm } from './components/SearchForm';
import { Nav } from './components/Nav';
import { PhotoList } from './components/PhotoList';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';



function App() {

  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=4&page=1&format=json&nojsoncallback=1`;

  const [ pics, addpics ] = useState([]);

  const addPictures = (pic) => {
    addpics([pic]);
    //console.log(pic);
  }
  //let array = [];
  useEffect(() =>{
    axios.get(url)
    .then(res => {
      // console.log(res.data.photos.photo)
      addPictures(res.data.photos.photo.map(pic =>{
        return `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`
      }))
      //addPictures(array);
    })
    .catch(err => console.log(err))
    
  }, [])


  return (
    <Router>
      <div className='container'>
        <SearchForm />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cats' element={<PhotoList pics={pics} />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
