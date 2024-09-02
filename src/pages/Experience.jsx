function Experience() {
  return (
    <section className="p-8 pr-3 md:pr-5 md:p-12">
      <ul className="relative border-secondary-500 border-s">
        <li className="p-2 mb-10 rounded-md ps-3 ms-6 hover:bg-secondary-700">
          <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-8 ring-secondary-700 bg-secondary-800">
            <img src="icons/Capgemini.webp" alt="" className="w-5 h-5" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-secondary-100">Capgemini India. <span className="text-primary-400 bg-secondary-700 text-sm font-medium me-2 px-2.5 py-0.5 pb-1 rounded ms-3">Present</span></h3>
          <time className="block mb-2 text-sm font-normal leading-none capitalize text-secondary-400">senior software developer</time>
          <div className="mt-4 text-base font-normal text-secondary-300">
            
          </div>
        </li>
        <li className="p-2 mb-10 rounded-md ps-3 ms-6 hover:bg-secondary-700">
          <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-8 ring-secondary-700 bg-secondary-800">
            <img src="icons/ekatta.jpg" alt="" className="w-5 h-5 rounded-full" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-secondary-100">Ekatta Innovators. <span className="text-secondary-400 bg-secondary-700 text-sm font-normal me-2 px-2.5 py-0.5 pb-1 rounded ms-3">Sept 2020 - Feb 2021</span></h3>
          <time className="block mb-2 text-sm font-normal leading-none capitalize text-secondary-400">software developer</time>
          <p className="mt-4 text-base font-normal text-secondary-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nulla velit itaque minus architecto id a, distinctio placeat tempora nesciunt, illum inventore, quasi dolore debitis aliquid sequi accusantium. Dicta, ut. Sapiente deserunt sed temporibus maiores reprehenderit! Neque eveniet laborum maiores!</p>
        </li>
      </ul>
    </section>
  )
}

export default Experience