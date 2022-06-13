import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

// App components
import { SearchForm } from './components/SearchForm';
import { Nav } from './components/Nav';
import { PhotoList } from './components/PhotoList';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';




function App() {
  /**
   * uses useState() to set the state of pics to and empty array and isLoading to the value true
   */
  const [ pics, addpics ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  //adds pics to the pics array
  const addPictures = (pic) => {
    addpics([pic]);
  }

  const getData = async (query) => {
    //resets the isLoading to true
    setIsLoading(true)
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`;
    await axios.get(url)
    .then(res => { //takes the data returned from the api request to contruct a link to the imgs
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
          <Route path='/' element={<Home loading={isLoading}/>} />
          <Route path='/:search' element={<PhotoList pics={pics} onSearch={getData} loading={isLoading}/>} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
