import { useNavigate, useParams } from "react-router-dom"
import projects from "../utils/projects.json";
import NotFound from "./NotFound";


function ProjectDescription() {
  const { projectslug } = useParams();
  let navigate = useNavigate();
  const project = projects.find(item => item.slug == projectslug);
  if (!!!project)
    return <NotFound />
  // console.log("projectslug",projectslug);

  return (
    <section className="w-full sm:pt-5 sm:p-12">
      <button className="flex items-center gap-1 px-3 py-1.5 mt-3 sm:mt-0 mb-3 text-xs rounded-full sm:-translate-x-3 text-secondary-200 hover:bg-secondary-800/30" onClick={()=> navigate(-1)}>
        <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1 1 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1 1 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23a1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2"></path></svg>
        </div>
        <span>
          Back
        </span>
      </button>
      <div className="p-5 mb-8 bg-secondary-800/40">
        <h1 className="mb-5 text-xl font-medium sm:text-2xl text-secondary-200">{project.title}</h1>
        <div className="mb-5 prose-sm prose-ul:list-disc text-secondary-300 prose-strong:text-secondary-300">
          <b>Description</b>
          <div dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
        <div className="prose-sm prose-ul:list-disc text-secondary-300 prose-strong:text-secondary-300">
          <b>Key Features</b>
          <div dangerouslySetInnerHTML={{ __html: project.feature }} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {
          project.images.map((src) => <img src={src} className="object-contain w-full rounded aspect-[16/10] bg-secondary-800/60" key={src} alt={project.title} />)
        }
      </div>
    </section>
  )
}

export default ProjectDescription
