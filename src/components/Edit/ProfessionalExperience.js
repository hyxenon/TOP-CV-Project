export const ProfessionalExperience = (props) => {
  const section = "Professional Experience";

  return (
    <div>
      <div className="mt-6 ml-6">
        <div className="flex justify-between items-center w-[70%]">
          <h1 className="font-cabin font-bold">Professional Experience</h1>
          <i
            onClick={() => props.onClick(section)}
            className="fa-solid fa-plus text-green-500 cursor-pointer text-2xl hover:text-green-600"
          ></i>
        </div>

        <div className="w-full grid grid-cols-[100px,1fr] justify-center items-center">
          <label
            className="w-full mt-[10px] font-cabin font-bold"
            htmlFor="date"
          >
            Date
          </label>

          <div className="w-full">
            <input
              id="date"
              name="date"
              className="w-[186px] h-[19px] mt-4  font-martel text-xs py-1 pl-2 border-[1.6px] border-black"
              type="text"
              placeholder="Date"
              value={props.date}
              onChange={(event) => props.onChange(event, section)}
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-[100px,1fr] justify-center items-center">
          <label
            className="w-full mt-[10px] font-cabin font-bold"
            htmlFor="jobTitleExp"
          >
            Job Title
          </label>

          <div className="w-full">
            <input
              id="jobTitleExp"
              name="job title"
              className="w-[186px] h-[19px] mt-4  font-martel text-xs py-1 pl-2 border-[1.6px] border-black"
              type="text"
              placeholder="Job title"
              value={props.jobTitle}
              onChange={(event) => props.onChange(event, section)}
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-[100px,1fr] justify-center items-center">
          <label
            className="w-full mt-[10px] font-cabin font-bold"
            htmlFor="descriptionExp"
          >
            Description
          </label>

          <div className="w-full">
            <input
              id="descriptionExp"
              name="description"
              className="w-[186px] h-[19px] mt-4  font-martel text-xs py-1 pl-2 border-[1.6px] border-black"
              type="text"
              placeholder="Description"
              value={props.description}
              onChange={(event) => props.onChange(event, section)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
