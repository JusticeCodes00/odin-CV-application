function FormRow({ data, handleChange, controlID, controlType, labelText }) {
  const isTextarea = controlType === "textarea";

  function handleControlChange(e) {
    handleChange({ ...data, [controlID]: e.target.value });
  }

  return (
    <div className="form-row">
      <label htmlFor={controlID}>
        {labelText}
        <span className="asterisk">*</span>
      </label>

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
