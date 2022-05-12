export const TOGGLE_SEARCH_BAR = 'TOGGLE_SEARCH_BAR';

export const SEARCH_TITLE_VALUE = 'SEARCH_TITLE_VALUE';

export const toggleSearchBar = () => ({
  type: TOGGLE_SEARCH_BAR,
});

export const searchTitleValue = (titleValue) => ({
  type: SEARCH_TITLE_VALUE,
  titleValue,
});
