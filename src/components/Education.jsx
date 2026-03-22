import "../styles/Education.css";

import FormRow from "./FormRow.jsx";
function Education({ handleChange, data }) {
  return (
    <fieldset>
      <legend>[Education Experiences]</legend>

      <FormRow
        data={data}
        handleChange={handleChange}
        controlID="schoolName"
        labelText="School Name"
        controlType="text"
      />

      <FormRow
        data={data}
        handleChange={handleChange}
        controlID="titleOfStudy"
        labelText="Title Of Study"
        controlType="text"
      />

      <FormRow
        data={data}
        handleChange={handleChange}
        controlID="dateOfStudy"
        labelText="Date Of Study"
        controlType="date"
      />
    </fieldset>
  );
}

export default Education;
