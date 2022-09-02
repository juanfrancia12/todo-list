export const SearchArray = (array, textSearch) => {
  const filterArray = array.filter(
    (task) =>
      task.name.toLowerCase().includes(textSearch.toLowerCase()) ||
      task.description.toLowerCase().includes(textSearch.toLowerCase())
  );

  return filterArray.length > 0 ? filterArray : false;
};
