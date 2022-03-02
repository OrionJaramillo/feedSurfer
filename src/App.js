//for full stack use data base for photos and uere information and implement react router to click on photo that will take you to the photo and then back.
import  { useEffect, useState } from 'react'
import './App.css';
import Photo from './Photo'
import Filter from './Filter'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [photos, setPhotos] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeButton, setActiveButton] = useState('all')


  useEffect(()=>{
    fetchPhotos();
  },[])


  const fetchPhotos = async() => {
    try{
    const url = "https://api.unsplash.com/search/photos?page=1&per_page=30&query=hawaii&client_id=rj4upcyxkfHqq8j1ztP4O1iH2llBRBgbLDk4sZSy2Jc";
    const response = await fetch(url);
    const data = await response.json();
    setPhotos(data.results)
    setFiltered(data.results)
    } catch (e){
      console.log("error fetching photo data")
    }
  }

  return (
    <div className="App">
        <Filter 
          photos={photos} 
          filtered={filtered} 
          setFiltered={setFiltered} 
          activeButton={activeButton} 
          setActiveButton={setActiveButton}
        />
        <motion.div 
          layout
          className="photos"
        >
          <AnimatePresence>
            {filtered.map((photo) =>{
              return <Photo key={photo.id} photo={photo}/>;
            })}
          </AnimatePresence>
        </motion.div>
    </div>
  );
}

export default App;
