export const FETCH_SERIES_DETAILS = 'FETCH_SERIES_DETAILS';
export const SET_SERIES_LOADING = 'SET_SERIES_LOADING';
export const SAVE_SERIES_RESULTS = 'SAVE_SERIES_RESULTS';

export const fetchSeriesDetails = (seriesId) => ({
  type: FETCH_SERIES_DETAILS,
  seriesId,
});

export const setSeriesLoading = (newLoadingValue) => ({
  type: SET_SERIES_LOADING,
  newLoadingValue,
});

export const saveSeriesResults = (seriesResponse, seriesCastResponse) => ({
  type: SAVE_SERIES_RESULTS,
  seriesResponse,
  seriesCastResponse,
});