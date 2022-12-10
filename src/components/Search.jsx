function Search({
  fetchParams,
  setFetchParams,
  showAll,

  setFilms,
}) {
  const searchHandler = (e) => {
    if (showAll) {
      setFilms([]);
    }

    setFetchParams({
      ...fetchParams,
      page: 1,
      search: e.target.value,
    });
  };

  return (
    <div className="flex">
      <h2 className="mr-10 lh-0">Search</h2>
      <input
        placeholder="Search by phrase"
        className="search"
        type="text"
        value={fetchParams.search}
        onChange={searchHandler}
      />
    </div>
  );
}

export default Search;
