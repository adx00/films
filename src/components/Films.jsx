import { useState, useEffect } from 'react';
import Film from './Film';
import Pagination from './Pagination';
import Search from './Search';
import Sort from './Sort';
import Limit from './Limit';
import DisplayFileds from './DisplayFileds';
import ucFirst from '../utils/ucFirst';

function Films() {
  const [isLoading, setIsLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [totalCountFilms, setTotalCountFilms] = useState(0);
  const [activeFields, setActiveFields] = useState([
    'title',
    'budget',
    'overview',
    'genres',
  ]);
  const [fetchParams, setFetchParams] = useState({
    page_size: 10,
    search: '',
  });
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://185.185.69.80:8082/list', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fetchParams),
    })
      .then((response) => response.json())
      .then((json) => {
        if (showAll) {
          setFilms([...films, ...json.data]);
        } else {
          setFilms(json.data);
        }
        if (!fetchParams.search) {
          setTotalCountFilms(json.data_size - 33);
        } else {
          setTotalCountFilms(json.data_size - 10);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, [fetchParams, showAll]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [isLoading]);

  let bottomScrollInit = false;
  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        400 &&
      showAll &&
      !isLoading &&
      !bottomScrollInit
    ) {
      bottomScrollInit = !bottomScrollInit;

      setIsLoading(true);
      let pageForLoading = fetchParams.page ? fetchParams.page + 1 : 1;
      setFetchParams({
        ...fetchParams,
        page: pageForLoading,
        page_size: 20,
        search: fetchParams.search,
      });
    }
  };

  let countPages = Math.ceil(totalCountFilms / fetchParams.page_size);

  return (
    <div className="wrapper">
      <div className="attributes">
        <div className="flex space-between mw-1200 margin-0-auto">
          <Limit
            fetchParams={fetchParams}
            setFetchParams={setFetchParams}
            showAll={showAll}
            setShowAll={setShowAll}
            setFilms={setFilms}
          />
          <Sort
            fetchParams={fetchParams}
            setFetchParams={setFetchParams}
            showAll={showAll}
            setFilms={setFilms}
          />
          <Search
            fetchParams={fetchParams}
            setFetchParams={setFetchParams}
            showAll={showAll}
            setShowAll={setShowAll}
            setFilms={setFilms}
          />
        </div>
        <DisplayFileds
          activeFields={activeFields}
          setActiveFields={setActiveFields}
        />
      </div>
      <Pagination
        countPages={countPages}
        setFetchParams={setFetchParams}
        fetchParams={fetchParams}
        totalCountFilms={totalCountFilms}
        showAll={showAll}
        setShowAll={setShowAll}
      />
      <table>
        <thead>
          <tr>
            {activeFields.map((activeField) => (
              <td key={activeField}>{ucFirst(activeField)}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {films.map((film) => (
            <Film key={film.id} film={film} activeFields={activeFields} />
          ))}
        </tbody>
      </table>
      {isLoading && <div className="preloader"></div>}
    </div>
  );
}

export default Films;
