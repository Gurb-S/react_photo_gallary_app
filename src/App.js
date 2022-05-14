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


  const [ pics, addpics ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  const addPictures = (pic) => {
    addpics([pic]);
    //console.log(pic);
  }

  const getData = async (query = 'cars') => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`;
    const data = await axios.get(url)
    .then(res => {
      // console.log(res.data.photos.photo)
      addPictures(res.data.photos.photo.map(pic =>{
        return `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`
      }))
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  }

  useEffect(() =>{
    getData();
  }, [])


  return (
    <Router>
      <div className='container'>
        <SearchForm onSearch={getData}/>
        <Nav whenClicked={getData}/>
        {/* <PhotoList /> */}
        <Routes>
          <Route path='/' element={<Home onLoad={getData} loading={isLoading}/>} />
          <Route path='/:search' element={<PhotoList pics={pics ? pics : null} />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
