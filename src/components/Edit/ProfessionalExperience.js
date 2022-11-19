export const ProfessionalExperience = (props) => {

    const section = "Professional Experience"

  return (
    <div>
      <div className="mt-6 ml-6 ">
        <h1 className="font-cabin font-bold">Professional Experience</h1>

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
              onChange={(event) => props.onChange(event, section)}
            />
          </div>
        </div>
      </div>
      <div className="w-[95%] border-[3px] m-auto mt-11 border-black"></div>
    </div>
  );
};
