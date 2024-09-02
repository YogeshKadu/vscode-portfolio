function Experience() {
  return (
    <section className="p-8 pr-3 md:pr-5 md:p-12">
      <ul className="relative border-secondary-500 border-s">
        <li className="p-2 mb-10 rounded-md ps-3 ms-6 hover:bg-secondary-700">
          <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-8 ring-secondary-700 bg-secondary-800">
            <img src="icons/Capgemini.webp" alt="" className="w-5 h-5" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-secondary-100">Capgemini India. <span className="text-secondary-400 bg-secondary-700 text-sm font-normal me-2 px-2.5 py-0.5 pb-1 rounded ms-3">Sept 2021 - <span className="text-sm font-medium text-primary-400">Present</span></span> <span className="hidden text-primary-400 bg-secondary-700 text-sm font-medium me-2 px-2.5 py-0.5 pb-1 rounded ms-3">present</span></h3>
          <time className="block mb-2 text-sm font-normal leading-none capitalize text-secondary-400">senior software developer</time>
          <div className="mt-4 text-sm font-normal text-secondary-300">
            <ul className="list-disc list-inside [&_li]:mb-2">
              <li>Developed a fully responsive dashboard using React.js, ensuring a seamless user experience across all devices.</li>
              <li>Established a software development pipeline to ensure that DEV and PROD environments operate in isolation while maintaining efficiency.</li>
              <li>Established secure communication channels with Amazon S3 for file uploads and retrievals, enhancing data security and accessibility.</li>
              <li>Containerized a full-stack application using Docker, streamlining deployment and ensuring consistent environments across different stages.</li>
              <li>Developed a custom text editor tailored to specific client requirements, delivering a user-friendly and efficient solution.</li>
              <li>Collaborated closely with UX engineers to integrate complex features, ensuring that the design and functionality aligned with user expectations.</li>
            </ul>
          </div>
        </li>
        <li className="p-2 mb-10 rounded-md ps-3 ms-6 hover:bg-secondary-700">
          <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-8 ring-secondary-700 bg-secondary-800">
            <img src="icons/ekatta.jpg" alt="" className="w-5 h-5 rounded-full" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-secondary-100">Ekatta Innovators. <span className="text-secondary-400 bg-secondary-700 text-sm font-normal me-2 px-2.5 py-0.5 pb-1 rounded ms-3">Sept 2020 - Feb 2021</span></h3>
          <time className="block mb-2 text-sm font-normal leading-none capitalize text-secondary-400">software developer</time>
          <div className="mt-4 text-sm font-normal text-secondary-300">
            <ul className="list-disc list-inside [&_li]:mb-2">
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut impedit deserunt labore sint quasi quae ipsa amet distinctio fugiat eum.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quos a fugiat.</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Experience