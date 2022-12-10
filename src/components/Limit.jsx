import limits from '../data/limits';

function Limit({ fetchParams, setFetchParams, setShowAll, setFilms }) {
  const limitHandler = (e) => {
    if (e.target.value === 'show all') {
      setShowAll(true);
      setFilms([]);
      setFetchParams({
        ...fetchParams,
        page: 1,
        page_size: 20,
      });
    } else {
      setShowAll(false);
      setFetchParams({
        ...fetchParams,
        page: 1,
        page_size: +e.target.value,
      });
    }
  };

  return (
    <div className="flex">
      <h2 className="mr-10 lh-0">Per page</h2>
      <select defaultValue={fetchParams.page_size} onChange={limitHandler}>
        {limits.map((limit) => (
          <option key={limit} value={limit}>
            {limit}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Limit;
