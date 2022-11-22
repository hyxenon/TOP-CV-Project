export const PreviewSummary = (props) => {
  return (
    <div>
      <div className="ml-16 mt-6">
        <h1 className="font-cabin font-bold uppercase">Professional Summary</h1>
        <p className="font-martel text-xs mt-4  w-[95%]">{props.description}</p>
      </div>
      <div className="w-[90%] border-[3px] m-auto mt-11 border-black"></div>
    </div>
  );
};
