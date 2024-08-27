function Contact() {
  return (
    <div className="flex h-full md:items-center md:justify-center">
      <div className="w-full max-w-3xl p-6 shadow md:rounded-lg bg-secondary-700">
        <div className="">
          {/* <h1 className="text-2xl font-bold text-secondary-200">Contact Form</h1> */}
          <h1 className="pb-8 text-4xl font-bold text-center text-secondary-200">Contact Me</h1>

        </div>
        <form className="grid grid-cols-6 gap-5 mt-8">
          <div className="relative text-white transition-all border rounded-md col-span-full md:col-span-3 border-secondary-500 focus-within:border-primary-800 focus-within:ring-primary-300 focus-within:ring">
            <input type="text" name="name" className="w-full px-3 py-1.5 bg-transparent appearance-none outline-none peer" placeholder="" />
            <label htmlFor="name" className="absolute px-1.5 transition-all bg-secondary-700 text-secondary-400 left-2 -top-4 peer-focus:-top-4 peer-placeholder-shown:top-1.5">Name</label>
          </div>
          <div className="relative text-white transition-all border rounded-md md:col-span-3 col-span-full border-secondary-500 focus-within:border-primary-800 focus-within:ring-primary-300 focus-within:ring">
            <input type="email" name="email" className="w-full px-3 py-1.5 bg-transparent appearance-none outline-none peer" placeholder="" />
            <label htmlFor="email" className="absolute px-1.5 transition-all bg-secondary-700 text-secondary-400 left-2 -top-4 peer-focus:-top-4 peer-placeholder-shown:top-1.5">Email</label>
          </div>
          <div className="relative text-white transition-all border rounded-md col-span-full border-secondary-500 focus-within:border-primary-800 focus-within:ring-primary-300 focus-within:ring">
            {/* <input type="email" name="email" className="w-full px-3 py-1.5 bg-transparent appearance-none outline-none peer" placeholder="" /> */}
            <textarea name="message" id="message" className="w-full h-full px-3 bg-transparent outline-none peer max-h-28" placeholder=""></textarea>
            <label htmlFor="message" className="absolute px-1.5 transition-all bg-secondary-700 text-secondary-400 left-2 -top-4 peer-focus:-top-4 peer-placeholder-shown:top-1.5">Email</label>
          </div>
          <div className="col-span-full">
            <button type="submit" className="w-full h-8 rounded bg-primary-500 sm:w-36">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact