import { Link } from "react-router-dom"
// import navigation from "../utils/navigations.json";
import folder from "../assets/folder.json";
import { useHistoryContext } from "../context/HistoryContextProvider";

function Home() {
  const { visitedRoutes } = useHistoryContext()
  const visitedList = visitedRoutes.filter(item => item.href != "/");
  const src = folder.items.find((item) => item.name == "src");

  const startsWith = [
    {
      "name": "profile.jsx",
      "type": "js",
      "href": "/profile"
    },
    {
      "name": "experience.jsx",
      "type": "js",
      "href": "/experience"
    },
    {
      "name": "contact.jsx",
      "type": "js",
      "href": "/contact"
    },
    {
      "name": "technologies.jsx",
      "type": "js",
      "href": "/technologies"
    },
  ]

  return (
    <div className="min-h-full">
      <div className="w-full #max-w-5xl p-8 sm:p-20 xl:p-28">
        <h1 className="mb-1 text-3xl font-semibold text-secondary-200">Yogesh Vasant Kadu</h1>
        <p className="mb-3 text-sm capitalize text-secondary-400">
          senior software developer
        </p>
        <div className="mb-8 text-sm antialiased text-secondary-400">
          <ul className="pl-5">
            <li className="pl-1 mb-1 list-['👋']">Hey there! Welcome to my little corner of the web <span className="#font-Noto">🕸</span>.</li>
            <li className="pl-1 mb-1 list-['🏑']">I’ve spent the last few years diving into frontend development, playing around with Angular, IONIC, and React.</li>
            <li className="pl-1 mb-1 list-['😍']">Lately, I’ve been geeking out over 3D animations in web development {" "} — {" "}It’s seriously cool stuff.</li>
          </ul>
          {/* <span className="font-Noto">👋</span>  <br />
          <span className="font-Noto"></span>  <br />
          <span className="font-Noto">😍</span> Lately, I’ve been geeking out over 3D animations in web development {" "} — ; {" "}It’s seriously cool stuff. <span className="font-Noto">🙀</span> */}
        </div>
        <div className="flex flex-col-reverse flex-wrap max-w-4xl gap-2 md:flex-row">
          <div className="flex-1">
            <div>
              <h4 className="flex mb-1 text-secondary-300">Start with</h4>
              <div className="text-sm">
                {
                  startsWith.map((item) => <div key={item.name}><Link className="lowercase text-primary-400 hover:underline underline-offset-2" to={item.href}>{item.name}</Link></div>)
                  // navigation.map((item) => <div><Link className="text-primary-300 hover:underline underline-offset-2" key={item.id} to={item.href}>{item.name}</Link></div>)
                }
              </div>
            </div>
            <div>
              <h4 className="mt-5 mb-2 text-secondary-300">Resents</h4>
              <div className="text-sm">
                {
                  visitedList.length == 0 && <div className="text-secondary-500">No recent activity! <span className="font-Noto">🙁</span></div>
                }
                {
                  visitedList.map((item) => <div key={item.href} className="text-secondary-400"><span className="mr-1 text-primary-400">{item.name.split('.')[0]}</span> <span className="italic lowercase">src/{item.name}</span></div>)
                }
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div>
              {/* <h4 className="mb-2 text-secondary-300">Technologies</h4> */}
              {/* <h4 className="mb-2 text-secondary-300">CTO</h4> */}
              <div className="flex gap-2 text-sm">
                <button className="h-8 px-5 rounded-full text-secondary-950 bg-primary-500 hover:bg-primary-600" title="get in touch form">
                  Get in touch
                </button>
                <button title="Resume 😂" arial-label="download resume" className="grid w-8 h-8 rounded-full aspect-square place-content-center bg-primary-500 hover:bg-primary-600 text-secondary-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 0 1 0 33.9M694 864h64a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v688a8 8 0 0 0 8 8"></path></svg>
                </button>
              </div>
            </div>
            <div>
              <h4 className="mt-5 mb-2 text-secondary-300">Vibe with me 🎧</h4>
              {/* <iframe
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/album/4UX3mreKGz0f1PrGb4Q9CJ?utm_source=generator&theme=0"
                width="100%"
                height={152}
                frameBorder={0}
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// inspiration https://www.rajsavaliya.com

export default Home