function FormRow({ data, handleChange, controlID, controlType, labelText }) {
  const isTextarea = controlType === "textarea";

  function handleControlChange(e) {
    data[controlID] = e.target.value;
    handleChange({ ...data });
  }

  return (
    <div className="form-row">
      <label htmlFor={controlID}>{labelText}: </label>

      {isTextarea && (
        <textarea
          required
          onChange={handleControlChange}
          defaultValue={data[controlID]}
          id={controlID}
        />
      )}

      {!isTextarea && (
        <input
          required
          onChange={handleControlChange}
          value={data[controlID]}
          type={controlType}
          id={controlID}
        />
      )}
    </div>
  );
}

export default FormRow;
