import "../styles/Experience.css";
import Bracket from "./Bracket.jsx";
import FormRow from "./FormRow.jsx";

function Experience({ handleChange, data }) {
  return (
    <fieldset>
      <legend>
        <Bracket />Practical Experiences<Bracket position="left" />
      </legend>

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
        labelText="Responsibilities"
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
