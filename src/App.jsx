import { useState } from "react";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import GeneralInfo from "./components/GeneralInfo.jsx";
import initialUserData from "./data/initialUserData.js";
import PreviewPrevSection from "./components/PreviewSection.jsx";
import PreviewData from "./model/PreviewData.js";
import "./styles/App.css";

function App() {
  const [userData, setUserData] = useState(initialUserData);
  const [status, setStatus] = useState("filling");



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
    new PreviewData("Position Title", userData["positionTitle"]),
    new PreviewData("Responsibilities", userData["responsibilities"]),
    new PreviewData("From", userData["from"]),
    new PreviewData("Until", userData["until"]),
  ];

  const previewArea = (
    <>
      <PreviewPrevSection theme="General Information" data={generalData} />

      <PreviewPrevSection theme="Education Experience" data={educationData} />

      <PreviewPrevSection theme="Practical Experience" data={experienceData} />

      <button onClick={handleEdit} className="btn">
        Edit
      </button>
    </>
  );

  const formArea = (
    <form onSubmit={handleSubmit}>
      <p className="required-note">
        Fields marked <span className="asterisk">*</span> are required
      </p>
      
      <GeneralInfo handleChange={handleControlChange} data={userData} />
      <Education handleChange={handleControlChange} data={userData} />
      <Experience handleChange={handleControlChange} data={userData} />

      <button type="submit" className="btn">
        Generate
      </button>
    </form>
  );

  return (
    <>
      <header>
        <h1>CV Generator</h1>
      </header>
      <main>
        {status === "submitted" && previewArea}
        {status === "filling" && formArea}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
