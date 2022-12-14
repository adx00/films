function –°ompositeField({ field }) {
  return (
    <>
      {field.name ? (
        <div>{field.name}</div>
      ) : (
        field.map((item) => (
          <div key={item.id + ' ' + item.name}>{item.name}</div>
        ))
      )}
    </>
  );
}

export default –°ompositeField;
