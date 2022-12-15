function Filter({ filterParams, setFilterParams }) {
  return (
    <div className="flex">
      <h2 className="mr-10 lh-0">Filter</h2>
      <input
        className="filter"
        placeholder="By field overview only!"
        type="text"
        value={filterParams.overview}
        onChange={(e) => setFilterParams({ overview: e.target.value })}
      />
    </div>
  );
}

export default Filter;
