import СompositeField from './СompositeField';

function Film({ film, activeFields }) {
  return (
    <tr>
      {activeFields.map((activeField) => (
        <td key={activeField}>
          {typeof film[activeField] === 'object' &&
          film[activeField] !== null ? (
            <СompositeField field={film[activeField]} />
          ) : (
            film[activeField]
          )}
        </td>
      ))}
    </tr>
  );
}

export default Film;
