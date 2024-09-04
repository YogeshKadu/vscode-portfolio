import projects from "../utils/projects.json";

const ProjectCard = ({ img, title, shortdesc }) => <div className="flex flex-col gap-1 p-3 rounded-md bg-secondary-700 group">
  <div className="w-full overflow-hidden bg-gray-600 rounded-md aspect-video">
    {
      img && <img src={img} alt={title} className="object-cover w-full h-full" />
    }
  </div>
  <h2 className="mt-2 font-semibold text-md line-clamp-2 group-hover:text-primary-400 text-secondary-300">{title || "Project title"}</h2>
  <p className="text-sm leading-5 line-clamp-4 text-secondary-300 text-balance" title={shortdesc}>
    {
      shortdesc ||
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo rem sint et quae ea debitis quos dignissimos esse aut, vero corrupti officia delectus labore nisi! Unde possimus accusantium corrupti deleniti? Culpa adipisci recusandae similique atque officia mollitia quia eos suscipit ab nemo ea magni dolor optio alias, dignissimos nam."
    }
  </p>
</div>

function Projects() {
  // const projects = [
  //   {
  //     img: "https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/a3ff2982-83f5-4914-a4b3-5c8b3ea9ee6a.webp",
  //     title: "Toaster in-game notification",
  //     shortdesc: "IT's a notification package for unity game engine, built in C#, designed to enhance user engagement through customizable and animated notifications. This package supports various animation types and extensive customization options to fit different application needs."
  //   },
  //   {
  //     img: "https://cdn.dribbble.com/users/2905985/screenshots/14034852/media/884cfd47056c3ae4797310722e4f44e0.png",
  //     title: "FlowchartAI",
  //     shortdesc: "The OpenAl-based Flowchart Generator is a web application designed to create various types of diagrams, including activity, schema, and class diagrams. Built with React JS. Tailwind CSs, and Django. this tool leverages OpenAl's capabilities to interpret user instructions and generate corresponding flowcharts. The application provides an intuitive interface for users to specify their requirements, and it dynamically generates and renders graphs based on their complexity and type."
  //   },
  //   {
  //     img: "https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/a3ff2982-83f5-4914-a4b3-5c8b3ea9ee6a.webp",
  //     title: "Toaster in-game notification",
  //     shortdesc: "IT's a notification package for unity game engine, built in C#, designed to enhance user engagement through customizable and animated notifications. This package supports various animation types and extensive customization options to fit different application needs."
  //   },
  // ]
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
