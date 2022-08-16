function Filter({ value, onChange }) {
  return (
    <label>
      Find contact by Name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

export default Filter;
