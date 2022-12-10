function Pagination({
  totalCountFilms,
  countPages,
  setFetchParams,
  fetchParams,
  showAll,
}) {
  let pageNum = 1;
  const pages = [];

  while (pageNum < countPages + 1) {
    pages.push(pageNum++);
  }

  const pageHandler = (e) => {
    if (+e.target.value !== 1) {
      setFetchParams({
        ...fetchParams,
        page: +e.target.value,
      });
    } else {
      setFetchParams((prevPrevFetchParams) => {
        const { page, ...newFetchParams } = prevPrevFetchParams;
        return newFetchParams;
      });
    }
  };
  return (
    <div
      className={
        showAll || totalCountFilms === 0
          ? 'hidden'
          : 'pagination flex justify-content-center'
      }
    >
      <div className={!pages.length ? 'hidden' : 'flex'}>
        <h2 className="lh-0 mr-10">Page</h2>
        <select defaultValue={fetchParams.page} onChange={pageHandler}>
          {pages.map((pageNum) => (
            <option key={pageNum} value={pageNum}>
              {pageNum}
            </option>
          ))}
        </select>
      </div>
      <div className={!pages.length ? 'hidden' : 'flex'}>
        <h2 className="lh-0 ml-50 mr-10">
          <span className="mr-10">Pages</span>
          <span className="white">{pages.length}</span>
        </h2>
      </div>
      <div className="flex">
        <h2 className="lh-0 ml-50 mr-10">
          <span className="mr-10">Total movies</span>
          <span className="white">{totalCountFilms}</span>
        </h2>
      </div>
    </div>
  );
}
export default Pagination;
