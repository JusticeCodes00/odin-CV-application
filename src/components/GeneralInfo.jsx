import "../styles/GeneralInfo.css";
import FormRow from "./FormRow.jsx";
import Bracket from "./Bracket.jsx";

function GeneralInfo({ handleChange, data }) {
  return (
    <fieldset>
      <legend>
        <Bracket />General Information<Bracket position="left" />
      </legend>

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
