import projects from "../utils/projects.json";

const ProjectCard = ({ img, title, shortdesc }) => <div className="flex flex-col gap-1 p-3 rounded shadow-lg bg-secondary-800 group hover:ring-1 ring-primary-300">
  <div className="w-full overflow-hidden bg-gray-600 border-none rounded-sm aspect-video">
    {
      img && <img src={img} alt={title} className="object-cover w-full h-full" />
    }
  </div>
  <h2 className="mt-2 text-md line-clamp-2 group-hover:text-primary-400 text-secondary-300">{title || "Project title"}</h2>
  <p className="text-sm font-light leading-5 line-clamp-4 text-secondary-400 text-balance" title={shortdesc}>
    {
      shortdesc ||
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo rem sint et quae ea debitis quos dignissimos esse aut, vero corrupti officia delectus labore nisi! Unde possimus accusantium corrupti deleniti? Culpa adipisci recusandae similique atque officia mollitia quia eos suscipit ab nemo ea magni dolor optio alias, dignissimos nam."
    }
  </p>
</div>

function Projects() {
  return (
    <div className="w-full p-8 sm:p-12">
      <h1 className="mb-1 text-3xl font-semibold text-secondary-200">
        Projects
      </h1>
      <div className="grid gap-5 my-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
        {
          projects.map((item) => <ProjectCard {...item} />)
        }
      </div>
    </div>
  )
}

export default Projects
