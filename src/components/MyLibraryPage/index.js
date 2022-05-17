import './style.scss'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveResultsData } from '../../actions/searchResults';

const MyLibraryPage = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const token = localStorage.getItem('jwt');
  const tokenTest = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlhdCI6MTY1Mjc3NzE2MSwiZXhwIjoxNzM5MTc3MTYxfQ.qBFTFlkJvKz8f106Axdtsot-Xx43gaf3lAP3Hch5dm4`

  const fetchLibrary = async () => {
    console.log('test');
    try {
      const response = await axios.get('http://localhost:4200/api/movie', { 
        headers: {
          "authorization": tokenTest
        }
       });
      console.log(response.data);
      if (response.status === 200) {
        setIsLoaded(true)
      };
    } catch (error) {
      console.log(error)
    }
    console.log('test2');

  }


    fetchLibrary();

    useEffect (() => {

  }, [isLoaded])


  return (
    <section>
      <div>
        <p>This is a test</p>
      </div>

    </section>
  )






};

export default MyLibraryPage;