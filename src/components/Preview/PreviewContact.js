export const PreviewContact = (props) => {
  return (
    <div className="ml-10 mt-6">
      <h1 className="font-cabin font-bold uppercase">Contact</h1>

      <div className="flex items-center mt-4 w-[82%]">
        <div className="w-7 h-7 bg-black flex justify-center items-center rounded-full">
          <i className="fa-solid fa-phone text-white"></i>
        </div>

        <h1 className="ml-3 font-martel text-xs">{props.contact}</h1>
      </div>

      <div className="flex items-center mt-4 w-[82%]">
        <div className="w-7 h-7 bg-black flex justify-center items-center rounded-full">
          <i class="fa-regular fa-envelope text-white"></i>
        </div>

        <h1 className="ml-3 font-martel text-xs">{props.email}</h1>
      </div>

      <div className="flex items-center mt-4 w-[82%]">
        <div className="w-7 h-7 bg-black flex justify-center items-center rounded-full">
          <i class="fa-solid fa-paperclip text-white"></i>
        </div>

        <h1 className="ml-3 font-martel text-xs">{props.website}</h1>
      </div>

      <div className="flex items-center mt-4 w-[82%]">
        <div className="w-7 h-7 bg-black flex justify-center items-center rounded-full">
          <i class="fa-solid fa-location-dot text-white"></i>
        </div>

        <h1 className="ml-3 font-martel text-xs">{props.location}</h1>
      </div>
    </div>
  );
};
