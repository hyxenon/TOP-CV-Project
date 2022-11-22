export const PersonalDetails = (props) => {
  const section = "Personal Details";

  return (
    <div className="">
      <div className="ml-6 mt-11 w-full grid grid-cols-[100px,1fr] justify-center items-center">
        <label className="w-full  font-cabin font-bold" htmlFor="photo">
          Photo Url
        </label>

        <div className="w-full">
          <input
            id="photo"
            name="photo"
            className="w-[186px] h-[19px] font-martel text-xs py-1 pl-2 border-[1.6px] border-black"
            type="text"
            placeholder="Paste url here"
            onChange={(event) => props.onChange(event, section)}
          />
        </div>

        <label
          className="w-full mt-[10px] font-cabin font-bold"
          htmlFor="firstName"
        >
          First Name
        </label>

        <div className="w-full">
          <input
            id="firstName"
            name="first name"
            className="w-[186px] h-[19px] mt-4  font-martel text-xs py-1 pl-2 border-[1.6px] border-black"
            type="text"
            placeholder="First name"
            onChange={(event) => props.onChange(event, section)}
          />
        </div>

        <label
          className="w-full mt-[10px] font-cabin font-bold"
          htmlFor="lastName"
        >
          Last Name
        </label>

        <div className="w-full">
          <input
            id="lastName"
            name="last name"
            className="w-[186px] h-[19px] mt-4  font-martel text-xs py-1 pl-2 border-[1.6px] border-black"
            type="text"
            placeholder="Last name"
            onChange={(event) => props.onChange(event, section)}
          />
        </div>

        <label
          className="w-full mt-[10px] font-cabin font-bold"
          htmlFor="jobTitle"
        >
          Job Title
        </label>

        <div className="w-full">
          <input
            id="jobTitle"
            name="job title"
            className="w-[186px] h-[19px] mt-4  font-martel text-xs py-1 pl-2 border-[1.6px] border-black"
            type="text"
            placeholder="Job title"
            onChange={(event) => props.onChange(event, section)}
          />
        </div>
      </div>

      <div className="w-[95%] border-[3px] m-auto mt-12 border-black"></div>
    </div>
  );
};
