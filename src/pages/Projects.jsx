import { Link } from "react-router-dom";
import projects from "../utils/projects.json";

const ProjectCard = ({ img, title, shortdesc, slug }) => <div className="flex flex-col gap-1 p-3 rounded #shadow-lg bg-secondary-800/40 border border-secondary-900">
  <div className="w-full overflow-hidden bg-gray-600 border-none rounded-sm aspect-video">
    {
      img && <img src={img} alt={title} className="object-cover w-full h-full" />
    }
  </div>
  <h2 className="mt-2 text-md line-clamp-2 text-secondary-200">{title || "Project title"}</h2>
  <p className="text-sm font-normal leading-5 line-clamp-4 text-secondary-400 text-balance" title={shortdesc}>
    {
      shortdesc ||
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo rem sint et quae ea debitis quos dignissimos esse aut, vero corrupti officia delectus labore nisi! Unde possimus accusantium corrupti deleniti? Culpa adipisci recusandae similique atque officia mollitia quia eos suscipit ab nemo ea magni dolor optio alias, dignissimos nam."
    }
  </p>
  <Link to={`/projects/${slug}`} className="mt-1 text-xs text-primary-300 visited:text-primary-600 group">
    Read More
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden group-hover:inline-block ml-1 size-2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
  </Link>
</div>

function Projects() {
  return (
    <div className="w-full p-8 sm:p-12">
      <h1 className="mb-1 text-3xl font-semibold text-secondary-200">
        Projects
      </h1>
      <div className="grid gap-4 my-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
        {
          projects.map((item) => <ProjectCard key={item.slug} {...item} />)
        }
      </div>
    </div>
  )
}

export default Projects
