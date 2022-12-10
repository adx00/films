import options from '../data/options';
import ucFirst from '../utils/ucFirst';

function Sort({ fetchParams, setFetchParams, showAll, setFilms }) {
  const sortHandler = (e) => {
    if (showAll) {
      setFilms([]);
      setFetchParams({
        ...fetchParams,
        page: 1,
        page_size: 20,
        sort_field: options[e.target.value].title,
        sort_order: options[e.target.value].direction,
      });
    } else {
      setFetchParams({
        ...fetchParams,
        sort_field: options[e.target.value].title,
        sort_order: options[e.target.value].direction,
      });
    }
  };

  return (
    <div className="flex">
      <h2 className="mr-10 lh-0">Sort by</h2>
      <select defaultValue="" onChange={sortHandler}>
        <option disabled value="">
          Choose sort method
        </option>
        {options.map((option, index) => (
          <option key={option.title + ' ' + option.direction} value={index}>
            {ucFirst(option.title)} {ucFirst(option.direction)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Sort;
