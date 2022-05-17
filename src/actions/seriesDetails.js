export const SET_SERIES_LOADING = 'SET_SERIES_LOADING';
export const SAVE_SERIES_RESULTS = 'SAVE_SERIES_RESULTS';

export const setSeriesLoading = (newLoadingValue) => ({
  type: SET_SERIES_LOADING,
  newLoadingValue,
});

export const saveSeriesResults = (seriesResponse, seriesCastResponse) => ({
  type: SAVE_SERIES_RESULTS,
  seriesResponse,
  seriesCastResponse,
});