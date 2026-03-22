import "../styles/Experience.css";
import FormRow from "./FormRow.jsx";

function Experience({ handleChange, data }) {
  return (
    <fieldset>
      <legend>[Practical Experiences]</legend>

      <FormRow
        data={data}
        handleChange={handleChange}
        controlID="companyName"
        labelText="Company Name"
        controlType="text"
      />

      <FormRow
        data={data}
        handleChange={handleChange}
        controlID="positionTitle"
        labelText="Position Title"
        controlType="text"
      />

      <FormRow
        data={data}
        handleChange={handleChange}
        controlID="responsibilities"
        labelText="responsibilities"
        controlType="textarea"
      />

      <FormRow
        data={data}
        handleChange={handleChange}
        controlID="from"
        labelText="From"
        controlType="date"
      />

      <FormRow
        data={data}
        handleChange={handleChange}
        controlID="until"
        labelText="Until"
        controlType="date"
      />
    </fieldset>
  );
}

export default Experience;
