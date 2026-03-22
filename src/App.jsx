import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import GeneralInfo from "./components/GeneralInfo.jsx";
import { useState } from "react";
import initialUserData from "./data/initialUserData.js";
import PreviewPrevSection from "./components/PreviewSection.jsx";

function App() {
  const [userData, setUserData] = useState(initialUserData);
  const [status, setStatus] = useState("filling");

  class PreviewData {
    constructor(label, value) {
      this.id = crypto.randomUUID();
      this.label = label;
      this.value = value;
    }
  }

  function handleControlChange(data) {
    setUserData(data);
  }

  function handleEdit() {
    setStatus("filling");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitted");
  }

  const generalData = [
    new PreviewData("Name", userData["name"]),
    new PreviewData("Email", userData["email"]),
    new PreviewData("Phone Number", userData["phone"]),
  ];

  const educationData = [
    new PreviewData("School Name", userData["schoolName"]),
    new PreviewData("Title Of Study", userData["titleOfStudy"]),
    new PreviewData("Date Of Study", userData["dateOfStudy"]),
  ];

  const experienceData = [
    new PreviewData("Company Name", userData["companyName"]),
    new PreviewData("Position Title", userData["PositionTitle"]),
    new PreviewData("Responsibilities", userData["responsibilities"]),
    new PreviewData("From", userData["from"]),
    new PreviewData("Until", userData["until"]),
  ];

  return (
    <>
      <header>
        <h1>CV Generator</h1>
      </header>
      <main>
        {status === "submitted" && (
          <>
            <PreviewPrevSection
              theme="General Information"
              data={generalData}
            />

            <PreviewPrevSection
              theme="Education Experience"
              data={educationData}
            />

            <PreviewPrevSection
              theme="Practical Experience"
              data={experienceData}
            />

            <button onClick={handleEdit} className="btn">
              Edit
            </button>
          </>
        )}

        {status === "filling" && (
          <form onSubmit={handleSubmit}>
            <GeneralInfo handleChange={handleControlChange} data={userData} />
            <Education handleChange={handleControlChange} data={userData} />
            <Experience handleChange={handleControlChange} data={userData} />

            <button type="submit" className="btn">
              Generate
            </button>
          </form>
        )}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
