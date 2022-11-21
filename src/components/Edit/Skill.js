export const Skill = (props) => {
  const section = "Skill";

  return (
    <div>
      <div className="mt-6 ml-6">
        <div className="flex justify-between items-center w-[70%]">
          <h1 className="font-cabin font-bold">Skills</h1>
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
            Add Skill
          </label>

          <div className="w-full">
            <input
              id="skill"
              name="skills"
              className="w-[186px] h-[19px] mt-4  font-martel text-xs py-1 pl-2 border-[1.6px] border-black"
              type="text"
              placeholder="Add Skil"
              value={props.skill}
              onChange={(event) => props.onChange(event, section)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
