export const Education = (props) => {
    const section = "Education"
  return (
    <div className="mt-6 ml-6">
        <div className="flex justify-between items-center w-[70%]">
          <h1 className="font-cabin font-bold">Education</h1>
          <i
            onClick={() => props.onClick(section)}
            className="fa-solid fa-plus text-green-500 cursor-pointer text-2xl hover:text-green-600"
          ></i>
        </div>

        <div className="w-[90%] grid grid-cols-[100px,1fr] justify-center items-center">
          <label
            className="w-full mt-[10px] font-cabin font-bold"
            htmlFor="skill"
          >
            School name
          </label>

          <div className="w-full">
            <input
              id="schoolName"
              name="school name"
              className="w-[186px] h-[19px] mt-4  font-martel text-xs py-1 pl-2 border-[1.6px] border-black"
              type="text"
              placeholder="School name"
              value={props.schoolName}
              onChange={(event) => props.onChange(event, section)}
            />
          </div>
        </div>

        <div className="w-[90%] grid grid-cols-[100px,1fr] justify-center items-center">
          <label
            className="w-full mt-[10px] font-cabin font-bold"
            htmlFor="skill"
          >
            Date
          </label>

          <div className="w-full">
            <input
              id="schoolDate"
              name="date"
              className="w-[186px] h-[19px] mt-4  font-martel text-[10px] py-1 pl-2 border-[1.6px] border-black"
              type="text"
              placeholder="January 1, 2000 - September 2, 2002"
              value={props.date}
              onChange={(event) => props.onChange(event, section)}
            />
          </div>
        </div>

        <div className="w-[90%] grid grid-cols-[100px,1fr] justify-center items-center">
          <label
            className="w-full mt-[10px] font-cabin font-bold"
            htmlFor="skill"
          >
            Description
          </label>

          <div className="w-full">
            <input
              id="schoolDescription"
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
  );
};
