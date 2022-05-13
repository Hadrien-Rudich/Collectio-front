export const SAVE_RESULTS_DATA = 'SAVE_RESULTS_DATA';

export const TOGGLE_SEARCH_RESULTS = 'TOGGLE_SEARCH_RESULTS';

export const saveResultsData = (results) => ({
    type: SAVE_RESULTS_DATA,
    results 
});

export const toggleSearchResults = () => ({
    type: TOGGLE_SEARCH_RESULTS,
  });