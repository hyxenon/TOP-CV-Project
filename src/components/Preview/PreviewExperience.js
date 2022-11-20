export const PreviewExperience = (props) => {
    return(
        <div className="mt-8">
             <div className="">
                <h2 className="mt-3 font-martel text-xs font-semibold capitalize">{props.date}</h2>
                <h2 className="mt-3 font-martel text-xs font-semibold capitalize">{props.jobTitle}</h2>
                <li className="mt-4 ml-2 font-martel text-xs ">{props.description}</li>
            </div>
        </div>
    )
}