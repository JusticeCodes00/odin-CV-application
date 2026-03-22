import "../styles/GeneralInfo.css";
import FormRow from "./FormRow.jsx";

function GeneralInfo({ handleChange, data }) {
  return (
    <fieldset>
      <legend>[General Information]</legend>

      <FormRow
        data={data}
        handleChange={handleChange}
        controlID="name"
        labelText="Name"
        controlType="text"
      />

      <FormRow
        data={data}
        handleChange={handleChange}
        controlID="email"
        labelText="Email"
        controlType="email"
      />

      <FormRow
        data={data}
        handleChange={handleChange}
        controlID="phone"
        labelText="Phone"
        controlType="tel"
      />
    </fieldset>
  );
}

export default GeneralInfo;
