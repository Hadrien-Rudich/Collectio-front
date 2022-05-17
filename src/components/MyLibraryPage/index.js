import './style.scss'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const MyLibraryPage = (props) => {
  const libraryType = props.library;
  const [isLoaded, setIsLoaded] = useState(false);
  const [libraryList, setLibraryList] = useState([]);
  //const token = localStorage.getItem('token');
  const tokenTest = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlhdCI6MTY1Mjc3NzE2MSwiZXhwIjoxNzM5MTc3MTYxfQ.qBFTFlkJvKz8f106Axdtsot-Xx43gaf3lAP3Hch5dm4`

  const fetchLibrary = async () => {
    setLibraryList([]);
    try {
      const response = await axios.get(`http://localhost:4200/api/${libraryType}`, { 
        headers: {
          "authorization": tokenTest
        }
       });
      if (response.status === 200) {
        setIsLoaded(true)
        setLibraryList(response.data)
      };
    } catch (error) {
      console.log(error)
    }
  };

  useEffect (() => {
    //return () => {
      fetchLibrary()
    //}
  }, [libraryType])


  if (isLoaded) {
    return (
      <section>
        <h2>My Library</h2>
        <div className="myLibraryPage_Container">
          {libraryList.map(el => (
            <div className='myLibraryPage_Element' key={el.apimediaid}>

              <p>{el.title}</p>
              <p>{el.listname}</p>
              <img className='myLibraryPage_Element_img' src={el.coverurl} alt="blabla"></img>
            </div>
          ))}
        </div>
      </section>
    )
  }
};

export default MyLibraryPage;