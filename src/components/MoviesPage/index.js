import './style.scss'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveResultsData } from '../../actions/searchResults';

function MoviesPage() {
   const dispatch = useDispatch();

   const resultsData = useSelector((state) => state.searchResults.results);

    async function inTheater() {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=53d8914dec27b153e9ddc38fedcfb93e&language=en-US&France')
            console.log(response.data);
            dispatch(saveResultsData(response.data))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        return() => {
            inTheater()
        }
    }, [])

    return (
        <section>
            <header className='header'>
                <h1 className='header_title'>Movies</h1>
                <h2 className='header_subtitle'>You haven't collected any movies yet</h2>
            </header>
            <main className='ma'>
                <div className='row'>
                    {resultsData.results.map((item) => (
                    <div className='row_inner'>
                        <div className="tile">
                            <div classname="tile__media">
                                <img className='tile__img' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                            </div>
                            <div className="tile__details">
                                <div className="tile__title">
                                {item.title}
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className='main_soon'>

                </div>
                <div className='main_top'>

                </div>
            </main>
        </section>
    )
}

export default MoviesPage