import { useEffect, useState } from 'react';

import './App.css';
import { PersonalDetails } from './components/Edit/PersonalDetails';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PreviewPersonal } from './components/Preview/PreviewPersonal';

function App() {

  const [formData, setFormData] = useState([
    {
      section: "Personal Details",
      "photo": "https://www.manateetech.edu/wp-content/uploads/2021/08/default-no-profile-pic-male.jpg",
      "first name": "First Name",
      "last name": "Last Name",
      "job title": "Job Title",
    },
    {
      section: "Professional Experience",
      description: "",
    },

    {
      section: "Professional Summary",
      date: "",
      jobTitle: "",
      description: "",
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
    }
    
])

const personalDetails = formData[0]

useEffect(()=>{
  
  setFormData(oldData => (
    oldData.map(data=>{
      if(data.section === "Personal Details"){
        const photo = "photo"
        const firstName = "first name"
        const lastName = "last name"
        const jobTitle = "job title"

        if(data.photo === ""){
          return {...data, [photo]: "https://www.manateetech.edu/wp-content/uploads/2021/08/default-no-profile-pic-male.jpg"}
        }

        if(data['first name'] === ""){
          return {...data, [firstName]: "first name"}
        }

        if(data["last name"] === ""){
          return {...data, [lastName]: "last name"}
        }

        if(data["job title"] === ""){
          return {...data, [jobTitle]: "job title"}
        }

        return data
      }else{
        return data
      }
    })
  ))
  
 

},[personalDetails])

function handleChange(event,section){
      const name = event.target.name
      setFormData(oldData => {
          return oldData.map(data => {
           return data.section === section ? {...data, [name]: event.target.value} : data
          })
      })


}


  return (
    <div className="App flex flex-col justify-center items-center">
     
      <Header/>
      <main className='w-full mt-9 px-16 grid grid-cols-2 gap-x-5 '>
        <PersonalDetails onChange={handleChange} />
        <PreviewPersonal photo={formData[0].photo} firstName={formData[0]['first name']} lastName={formData[0]['last name']} jobTitle={formData[0]['job title']} />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
