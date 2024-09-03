function Technologies() {
  const icons = [
    "./technologies/postgresql.png",
    "./technologies/python.png",
    "./technologies/sass.png",
    "./technologies/supabase.png",
    "./technologies/tailwindcss.png",
    "./technologies/typescript.png",
    "./technologies/unity.png",
    "./technologies/vscode.png",
    "./technologies/mui.png",
    "./technologies/angular.png",
    "./technologies/aws.png",
    "./technologies/blender.png",
    "./technologies/bootstrap.png",
    "./technologies/c-sharp.png",
    "./technologies/css-3.png",
    "./technologies/docker.png",
    "./technologies/firebase.png",
    "./technologies/git.png",
    "./technologies/github.png",
    "./technologies/html.png",
    "./technologies/ionic.png",
    "./technologies/java.png",
    "./technologies/javascript.png",
    "./technologies/jquery.png",
    "./technologies/react.png",
    "./technologies/mysql.png",
    "./technologies/nextjs.png",
    "./technologies/nodejs.png",
    "./technologies/php.png"
  ];
  return (
    <div className="w-full p-8 sm:p-12">
      <h1 className="mb-1 text-3xl font-semibold text-secondary-200">Technologies</h1>
      <div className="my-8">
        <h2 className="flex mb-2 text-lg text-secondary-300">Languages</h2>
        <div className="flex flex-wrap gap-5">
          <div className="flex items-center gap-1 rounded-md flex-0 bg-secondary-500/50 pe-8 ps-1">
            <div className="grid w-12 h-12 rounded-lg place-content-center">
              <img src="./technologies/c-sharp.png" alt="c-sharp icon" className="object-cover w-8 h-8" />
            </div>
            <p className="font-semibold text-secondary-200">C Sharp</p>
          </div>
          <div className="flex items-center gap-1 rounded-md flex-0 bg-secondary-500/50 pe-8 ps-1">
            <div className="grid w-12 h-12 rounded-lg place-content-center">
              <img src="./technologies/python.png" alt="python icon" className="object-cover w-8 h-8" />
            </div>
            <p className="font-semibold text-secondary-200">Python</p>
          </div>
          <div className="flex items-center gap-1 rounded-md flex-0 bg-secondary-500/50 pe-8 ps-1">
            <div className="grid w-12 h-12 rounded-lg place-content-center">
              <img src="./technologies/php.png" alt="php icon" className="object-cover w-8 h-8" />
            </div>
            <p className="font-semibold text-secondary-200">PHP</p>
          </div>
          <div className="flex items-center gap-1 rounded-md flex-0 bg-secondary-500/50 pe-8 ps-1">
            <div className="grid w-12 h-12 rounded-lg place-content-center">
              <img src="./technologies/java.png" alt="java icon" className="object-cover w-8 h-8" />
            </div>
            <p className="font-semibold text-secondary-200">Java</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 my-8">
        {
          icons.map((item) => <div className="flex items-center gap-1 #p-2 rounded-md flex-0 bg-secondary-500/50 pe-8">
            <div className="grid w-12 h-12 rounded-lg place-content-center">
              <img src={item} alt="" className="object-contain w-8 h-8" />
            </div>
            <p className="text-secondary-100">{item.split("/").at(-1).split(".")[0]}</p>
          </div>
          )
        }
      </div>
      <div className="flex flex-wrap gap-5 my-5">
        {
          icons.map((item) => <div className="flex items-center gap-1 #p-2 rounded-md flex-0 bg-secondary-500/50 pe-8">
            <div className="grid w-12 h-12 rounded-lg place-content-center">
              <img src={item} alt="" className="object-contain w-8 h-8" />
            </div>
            <p className="text-secondary-100">{item.split("/").at(-1).split(".")[0]}</p>
          </div>
          )
        }
      </div>

      {/* <div class="bg-white shadow-md rounded overflow-hidden">
        <div class="card-header p-4 text-gray-700">
          <h3 class="card-title font-bold">Card Title</h3>
        </div>
        <div class="card-body p-4">
          Centralize your team information with our management tools. Access detailed instructions, expert advice, and technical documentation to maintain an up-to-date team directory.
        </div>
        <div class="card-footer p-4 border-t border-gray-200">
          <a class="btn btn-link text-gray-600 hover:text-gray-900" href="#">Go to Help Center</a>
        </div>
      </div> */}
    </div>
  )
}

export default Technologies