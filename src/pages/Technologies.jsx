import TechnologySection from "../components/TechnologySection";


function Technologies() {
  const languages = [
    {
      id: 1,
      name: "html",
      img: "./technologies/html.png",
    },
    {
      id: 2,
      name: "css",
      img: "./technologies/css-3.png",
    },
    {
      id: 3,
      name: "javascript",
      img: "./technologies/javascript.png",
    },
    {
      id: 4,
      name: "typescript",
      img: "./technologies/typescript.png",
    },
    {
      id: 5,
      name: "python",
      img: "./technologies/python.png",
    },
    {
      id: 6,
      name: "c sharp",
      img: "./technologies/c-sharp.png",
    },
    {
      id: 7,
      name: "PHP",
      img: "./technologies/php.png",
    },
    {
      id: 8,
      name: "java",
      img: "./technologies/java.png",
    },
  ];
  const frameworks = [
    {
      id: 1,
      name: "React",
      img: "./technologies/react.png"
    },
    {
      id: 2,
      name: "Angular",
      img: "./technologies/angular.png"
    },
    {
      id: 3,
      name: "IONIC",
      img: "./technologies/ionic.png"
    },
    {
      id: 4,
      name: "Capacitor",
      img: "./technologies/capacitor.png"
    },
    {
      id: 5,
      name: "Next JS",
      img: "./technologies/nextjs.png"
    },
    {
      id: 6,
      name: "Node",
      img: "./technologies/nodejs.png"
    },
    {
      id: 7,
      name: "Express JS",
      img: "https://user-images.githubusercontent.com/46530103/149555472-2e2ed369-9011-496e-9fe5-69facdf534e8.png"
    },
    {
      id: 8,
      name: "Jquery",
      img: "./technologies/jquery.png"
    },
  ]

  const cssframework = [
    {
      id: 1,
      name: "Material UI",
      img: "./technologies/mui.png"
    },
    {
      id: 2,
      name: "SASS",
      img: "./technologies/sass.png"
    },
    {
      id: 3,
      name: "Tailwind css",
      img: "./technologies/tailwindcss.png"
    },
    {
      id: 4,
      name: "Bootstrap",
      img: "./technologies/bootstrap.png"
    },
  ]
  const devops = [
    {
      id: 1,
      name: "AWS",
      img: "./technologies/aws.png"
    },
    {
      id: 2,
      name: "Git",
      img: "./technologies/git.png"
    },
    {
      id: 3,
      name: "Github",
      img: "./technologies/github.png"
    },
    {
      id: 4,
      name: "Docker",
      img: "./technologies/docker.png"
    },
    {
      id: 5,
      name: "MySQL",
      img: "./technologies/mysql.png",
      img: "https://www.mysql.com/common/logos/logo-mysql-170x115.png"
    },
    {
      id: 6,
      name: "postgresql",
      img: "./technologies/postgresql.png",
    },
    {
      id: 7,
      name: "supabase",
      img: "./technologies/supabase.png",
    },
    {
      id: 8,
      name: "netlify",
      img: "./technologies/netlify.png",
    },
    {
      id: 9,
      name: "firebase",
      img: "./technologies/firebase.png",
    },
  ]

  const gamedev = [
    {
      id: 1,
      name: "Unity",
      img: "./technologies/unity.png"
    },
    {
      id: 2,
      name: "blender",
      img: "./technologies/blender.png"
    },
  ]
  const other = [
    {
      id: 1,
      name: "vscode",
      img: "./technologies/vscode.png"
    },
    {
      id: 2,
      name: "postman",
      img: "./technologies/postman.png"
    },
    
  ]
  const icons = [
    // "./technologies/postgresql.png",    //
    // "./technologies/python.png",        //
    // "./technologies/sass.png",          //
    // "./technologies/supabase.png",      //
    // "./technologies/tailwindcss.png",   //
    // "./technologies/typescript.png",    //
    // "./technologies/unity.png",         //
    "./technologies/vscode.png",
    // "./technologies/mui.png",           //
    // "./technologies/angular.png",       //
    // "./technologies/aws.png",           //
    // "./technologies/netlify.png",       //
    // "./technologies/blender.png",       //
    // "./technologies/bootstrap.png",     //
    // "./technologies/c-sharp.png",       //
    // "./technologies/css-3.png",         //
    // "./technologies/docker.png", 
    // "./technologies/firebase.png",      //
    // "./technologies/git.png",           //
    // "./technologies/github.png",        //
    // "./technologies/html.png",          //
    // "./technologies/ionic.png",         //
    // "./technologies/java.png",          //
    // "./technologies/javascript.png",    //
    // "./technologies/jquery.png",        //
    // "./technologies/react.png",         //
    // "./technologies/mysql.png",         //
    // "./technologies/nextjs.png",        //
    // "./technologies/nodejs.png",        //
    // "./technologies/php.png",           //
  ];
  return (
    <div className="w-full p-8 sm:p-12">
      <h1 className="mb-1 text-3xl font-semibold text-secondary-200">
        Technologies
      </h1>



      <TechnologySection title={"Language"} items={languages} />
      <TechnologySection title={"Framework / Library"} items={frameworks} />
      <TechnologySection title={"CSS framework"} items={cssframework} />
      <TechnologySection title={"DevOps tools"} items={devops} />
      <TechnologySection title={"Game development"} items={gamedev} />
      <TechnologySection title={"Tools"} items={other} />


      {/* <div className="my-8">
        <h2 className="flex mb-2 text-secondary-300">Languages</h2>
        <div className="flex flex-wrap gap-4">
          {languages.map((item) => (
            <div className="flex items-center gap-1 rounded-md flex-0 bg-secondary-500/50 pe-8 ps-1" key={item.id}>
              <div className="grid w-12 h-12 rounded-lg place-content-center">
                <img
                  src={item.img}
                  alt="c-sharp icon"
                  className="object-cover w-8 h-8"
                />
              </div>
              <p className="font-semibold text-secondary-200">{item.name}</p>
            </div>
          ))}
        </div>
      </div> */}
      {/* <div className="my-8">
        <h2 className="flex mb-2 text-secondary-300">Framework / Library</h2>
        <div className="flex flex-wrap gap-4">
          {
            frameworks.map((item) =>
              <div className="flex items-center gap-1 rounded-md flex-0 bg-secondary-500/50 pe-8 ps-1" key={item.id}>
                <div className="grid w-12 h-12 rounded-lg place-content-center">
                  <img
                    src={item.img}
                    alt="c-sharp icon"
                    className="object-cover w-8 h-8"
                  />
                </div>
                <p className="font-semibold text-secondary-200">{item.name}</p>
              </div>
            )}
        </div>
      </div> */}
      {/* <div className="my-8">
        <h2 className="flex mb-2 text-secondary-300">CSS framework</h2>
        <div className="flex flex-wrap gap-4">
          {
            cssframework.map((item) =>
              <div className="flex items-center gap-1 rounded-md flex-0 bg-secondary-500/50 pe-8 ps-1" key={item.id}>
                <div className="grid w-12 h-12 rounded-lg place-content-center">
                  <img
                    src={item.img}
                    alt="c-sharp icon"
                    className="object-cover w-8 h-8"
                  />
                </div>
                <p className="font-semibold text-secondary-200">{item.name}</p>
              </div>
            )}
        </div>
      </div> */}
      {/* <div className="my-8">
        <h2 className="flex mb-2 text-secondary-300">DevOps tools</h2>
        <div className="flex flex-wrap gap-4">
          {
            devops.map((item) =>
              <div className="flex items-center gap-1 rounded-md flex-0 bg-secondary-500/50 pe-8 ps-1" key={item.id}>
                <div className="grid w-12 h-12 rounded-lg place-content-center">
                  <img
                    src={item.img}
                    alt="c-sharp icon"
                    className="object-contain w-8 h-8"
                  />
                </div>
                <p className="font-semibold text-secondary-200">{item.name}</p>
              </div>
            )}
        </div>
      </div> */}
      {/* <div className="my-8">
        <h2 className="flex mb-2 text-secondary-300">Game dev.</h2>
        <div className="flex flex-wrap gap-4">
          {
            gamedev.map((item) =>
              <div className="flex items-center gap-1 rounded-md flex-0 bg-secondary-500/50 pe-8 ps-1" key={item.id}>
                <div className="grid w-12 h-12 rounded-lg place-content-center">
                  <img
                    src={item.img}
                    alt="c-sharp icon"
                    className="object-contain w-8 h-8"
                  />
                </div>
                <p className="font-semibold text-secondary-200">{item.name}</p>
              </div>
            )}
        </div>
      </div> */}
    </div>
  );
}

export default Technologies;
