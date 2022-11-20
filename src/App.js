import { useEffect, useState } from "react";

import "./App.css";
import { PersonalDetails } from "./components/Edit/PersonalDetails";
import { ProfessionalExperience } from "./components/Edit/ProfessionalExperience";
import { ProfessionalSummary } from "./components/Edit/ProfessionalSummary";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PreviewExperience } from "./components/Preview/PreviewExperience";
import { PreviewPersonal } from "./components/Preview/PreviewPersonal";
import { PreviewSummary } from "./components/Preview/PreviewSummary";

function App() {
  const [formData, setFormData] = useState([
    {
      section: "Personal Details",
      photo:
        "https://www.manateetech.edu/wp-content/uploads/2021/08/default-no-profile-pic-male.jpg",
      "first name": "First Name",
      "last name": "Last Name",
      "job title": "Job Title",
    },
    {
      section: "Professional Summary",
      description: "",
    },
    {
      section: "Professional Experience",
      date: [],
      "job title": [],
      description: [],
    },
    {
      section: "Skill",
      skills: [],
    },
    {
      section: "Education",
      schoolName: "",
      date: "",
      description: "",
    },
    {
      section: "Contact Number",
      email: "",
      website: "",
      location: "",
    },
  ]);

  const [experienceData, setExperienceData] = useState({
    section: "Professional Experience",
    date: "",
    "job title": "",
    description: "",
  });

  const [experienceElements, setExperienceElements] = useState([]);

  const personalDetails = formData[0];

  useEffect(() => {
    setFormData((oldData) =>
      oldData.map((data) => {
        if (data.section === "Personal Details") {
          const photo = "photo";
          const firstName = "first name";
          const lastName = "last name";
          const jobTitle = "job title";

          if (data.photo === "") {
            return {
              ...data,
              [photo]:
                "https://www.manateetech.edu/wp-content/uploads/2021/08/default-no-profile-pic-male.jpg",
            };
          }

          if (data["first name"] === "") {
            return { ...data, [firstName]: "first name" };
          }

          if (data["last name"] === "") {
            return { ...data, [lastName]: "last name" };
          }

          if (data["job title"] === "") {
            return { ...data, [jobTitle]: "job title" };
          }

          return data;
        } else {
          return data;
        }
      })
    );
  }, [personalDetails]);

  function handleChange(event, section) {
    const name = event.target.name;
    setFormData((oldData) => {
      return oldData.map((data) => {
        return data.section === section
          ? { ...data, [name]: event.target.value }
          : data;
      });
    });
  }

  function handleExperienceChange(event) {
    const name = event.target.name;
    setExperienceData((oldData) => ({
      ...oldData,
      [name]: event.target.value,
    }));
  }

  function addExperience(section) {
    const date = "date";
    const jobTitle = "job title";
    const description = "description";

    setExperienceElements((oldData) =>
      oldData.concat(
        <PreviewExperience
          date={experienceData.date}
          jobTitle={experienceData["job title"]}
          description={experienceData.description}
        />
      )
    );

    setFormData((oldData) =>
      oldData.map((data) => {
        if (data.section === section) {
          return {
            ...data,
            [date]: [...data[date], experienceData[date]],
            [jobTitle]: [...data[jobTitle], experienceData[jobTitle]],
            [description]: [...data[description], experienceData[description]],
          };
        } else {
          return data;
        }
      })
    );

    setExperienceData((oldData) => ({
      ...oldData,
      date: "",
      "job title": "",
      description: "",
    }));
  }

  return (
    <div className="App flex flex-col justify-center items-center">
      <Header />
      <main className="w-full mt-9 px-16 grid grid-cols-2 gap-x-5 ">
        <div className="h-[846px] w-full bg-white border-2 border-black rounded-md ">
          <PersonalDetails onChange={handleChange} />
          <ProfessionalSummary onChange={handleChange} />
          <ProfessionalExperience
            onChange={handleExperienceChange}
            onClick={addExperience}
            date={experienceData["date"]}
            jobTitle={experienceData["job title"]}
            description={experienceData.description}
          />
        </div>

        <div className="min-h-[846px] w-full bg-color1 border-2 border-black rounded-md">
          <PreviewPersonal
            photo={formData[0].photo}
            firstName={formData[0]["first name"]}
            lastName={formData[0]["last name"]}
            jobTitle={formData[0]["job title"]}
          />
          <PreviewSummary description={formData[1]["description"]} />

          <div className="ml-16 mt-6">
            <h1 className="font-cabin font-bold uppercase">
              Professional Experience
            </h1>
            {experienceElements}
          </div>
        </div>
        
        <button
          onClick={() => {
            console.log(formData);
          }}
        >
          Submit
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
