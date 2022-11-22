export const Contact = (props) => {
  const section = "Contact";

  return (
    <div className="mt-6 ml-6">
      <h1 className="font-cabin font-bold">Contact</h1>

      <div className="w-[90%] grid grid-cols-[100px,1fr] justify-center items-center">
        <label
          className="w-full mt-[10px] font-cabin font-bold"
          htmlFor="contactNumber"
        >
          Contact Number
        </label>

        <div className="w-full">
          <input
            id="contactNumber"
            name="contact number"
            className="w-[186px] h-[19px] mt-4  font-martel text-xs py-1 pl-2 border-[1.6px] border-black"
            type="text"
            placeholder="Contact number"
            value={props.contactNumber}
            onChange={(event) => props.onChange(event, section)}
          />
        </div>
      </div>

      <div className="w-[90%] grid grid-cols-[100px,1fr] justify-center items-center">
        <label
          className="w-full mt-[10px] font-cabin font-bold"
          htmlFor="email address"
        >
          Email Address
        </label>

        <div className="w-full">
          <input
            id="emailAddress"
            name="email address"
            className="w-[186px] h-[19px] mt-4  font-martel text-xs py-1 pl-2 border-[1.6px] border-black"
            type="email"
            placeholder="dummy@gmail.com"
            value={props.emailAddress}
            onChange={(event) => props.onChange(event, section)}
          />
        </div>
      </div>

      <div className="w-[90%] grid grid-cols-[100px,1fr] justify-center items-center">
        <label
          className="w-full mt-[10px] font-cabin font-bold"
          htmlFor="website"
        >
          Website
        </label>

        <div className="w-full">
          <input
            id="website"
            name="website"
            className="w-[186px] h-[19px] mt-4  font-martel text-xs py-1 pl-2 border-[1.6px] border-black"
            type="text"
            placeholder="hyxenon.github.io"
            value={props.website}
            onChange={(event) => props.onChange(event, section)}
          />
        </div>
      </div>

      <div className="w-[90%] grid grid-cols-[100px,1fr] justify-center items-center">
        <label
          className="w-full mt-[10px] font-cabin font-bold"
          htmlFor="location"
        >
          Location
        </label>

        <div className="w-full">
          <input
            id="location"
            name="location"
            className="w-[186px] h-[19px] mt-4  font-martel text-xs py-1 pl-2 border-[1.6px] border-black"
            type="text"
            placeholder="Location"
            value={props.location}
            onChange={(event) => props.onChange(event, section)}
          />
        </div>
      </div>
    </div>
  );
};
