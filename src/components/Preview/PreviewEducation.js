export const PreviewEducation = (props) => {
  return (
    <div className="mt-6">
      <h1 className="font-martel font-bold text-xs capitalize">
        {props.schoolName}
      </h1>
      <h2 className="font-martel text-xs capitalize">{props.date}</h2>
      <li className="mt-1 text-xs ">{props.description}</li>
    </div>
  );
};
