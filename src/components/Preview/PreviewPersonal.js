export const PreviewPersonal = (props) => {
    return (
        <div>
            <div className="ml-10 mt-4 flex">
                <img className="w-[167px] h-[183px] object-cover" src={props.photo} alt="CV Profile" />
                <div className="w-full">
                    <div className="w-[90%] border-[3px] m-auto mt-11 border-black"></div>
                    <h1 className="font-montserrat font-bold text-3xl ml-9 mt-3 uppercase">{props.firstName}</h1>
                    <h1 className="font-montserrat font-bold text-3xl ml-9 uppercase">{props.lastName}</h1>
                    <h2 className="font-cabin ml-9 mt-1 capitalize">{props.jobTitle}</h2>
                </div>
            </div>
            <div className="w-[90%] border-[3px] m-auto mt-5 border-black"></div>
        </div>
    )
}