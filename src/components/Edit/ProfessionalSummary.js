export const ProfessionalSummary = (props) => {
  const section = "Professional Summary";
  return (
    <div>
      <div className="mt-6 ml-6 ">
        <h1 className="font-cabin font-bold">Professional Summary</h1>
        <input
          onChange={(event) => props.onChange(event, section)}
          className=" w-[90%]  h-11 mt-1 py-4 px-4 text-xs border-[1.5px] border-black"
          type="text"
          placeholder="Description"
          name="description"
        />
      </div>

      <div className="w-[95%] border-[3px] m-auto mt-11 border-black"></div>
    </div>
  );
};
