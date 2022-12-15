import fields from '../data/fields';
import ucFirst from '../utils/ucFirst';

function DisplayFileds({ activeFields, setActiveFields }) {
  return (
    <div className="display-fields">
      <h2>Display fields</h2>
      <ul>
        {fields.map((field) => (
          <li key={field}>
            <label htmlFor={field}>
              <input
                id={field}
                checked={activeFields.includes(field) ? true : false}
                type="checkbox"
                onChange={(e) => {
                  e.target.checked && setActiveFields([...activeFields, field]);
                  !e.target.checked &&
                    setActiveFields([
                      ...activeFields.slice(0, activeFields.indexOf(field)),
                      ...activeFields.slice(activeFields.indexOf(field) + 1),
                    ]);
                }}
              />
              {ucFirst(field)}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayFileds;
