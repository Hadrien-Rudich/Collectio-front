export const SAVE_RESULTS_DATA = 'SAVE_RESULTS_DATA';
export const SAVE_RESULTS_DATA_MOVIE = 'SAVE_RESULTS_DATA_MOVIE';
export const SAVE_RESULTS_DATA_TV = 'SAVE_RESULTS_DATA_TV';
export const SAVE_RESULTS_DATA_VIDEOGAMES = 'SAVE_RESULTS_DATA_VIDEOGAMES';
export const BEST_RATED = 'BEST_RATED';
export const TOGGLE_SEARCH_RESULTS = 'TOGGLE_SEARCH_RESULTS';

export const saveResultsData = (results) => ({
    type: SAVE_RESULTS_DATA,
    results,
});

export const saveResultsDataMovie = (resultsMovie) => ({
    type: SAVE_RESULTS_DATA_MOVIE,
    resultsMovie,
});

export const saveResultsDataVideoGames = (resultsVideoGames) => ({
    type: SAVE_RESULTS_DATA_VIDEOGAMES,
    resultsVideoGames,
})

export const saveResultsDataTV = (resultsTV) => ({
    type: SAVE_RESULTS_DATA_TV,
    resultsTV, 
});

export const bestRated = (bestRated) => ({
    type: BEST_RATED,
    bestRated,
})

export const toggleSearchResults = () => ({
    type: TOGGLE_SEARCH_RESULTS,
  });