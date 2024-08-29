function Contact() {
  return (
    <div className="flex min-h-full lg:items-center lg:justify-center lg:[&_>_div]:rounded-lg">
      <div className="w-full max-w-2xl p-6 shadow bg-secondary-700">
        <div className="mb-8">
          {/* <h1 className="text-2xl font-bold text-secondary-200">Contact Form</h1> */}
          <h1 className="mb-5 text-4xl font-bold text-center text-secondary-200">Get In Touch</h1>
          <p className="antialiased text-center text-white text-pretty">Have great ideas to discuss, need my help, or interested in collaboration? <span className="font-Noto">🤩</span> <br />Feel free to reach out — I'd love to connect! <span className="font-Noto">🤗</span></p>
        </div>
        <form className="grid grid-cols-6 gap-5">
          <div className="relative text-white transition-all border rounded col-span-full md:col-span-3 border-secondary-500 focus-within:border-primary-800 focus-within:ring-primary-300 focus-within:ring-1">
            <input type="text" name="name" className="w-full px-3 py-1.5 bg-transparent appearance-none outline-none peer" placeholder="" />
            <label htmlFor="name" className="absolute px-1.5 pointer-events-none transition-all bg-secondary-700 text-secondary-400 left-2 -top-4 peer-focus:-top-4 peer-placeholder-shown:top-1.5">Name</label>
          </div>
          <div className="relative text-white transition-all border rounded md:col-span-3 col-span-full border-secondary-500 focus-within:border-primary-800 focus-within:ring-primary-300 focus-within:ring-1">
            <input type="email" name="email" className="w-full px-3 py-1.5 bg-transparent appearance-none outline-none peer" placeholder="" />
            <label htmlFor="email" className="absolute px-1.5 pointer-events-none transition-all bg-secondary-700 text-secondary-400 left-2 -top-4 peer-focus:-top-4 peer-placeholder-shown:top-1.5">Email</label>
          </div>
          <div className="relative text-white transition-all border rounded col-span-full border-secondary-500 focus-within:border-primary-800 focus-within:ring-primary-300 focus-within:ring-1">
            <textarea name="message" id="message" rows={5} className="w-full #h-full px-3 bg-transparent outline-none resize-y peer max-h-48 min-h-8" placeholder=""></textarea>
            <label htmlFor="message" className="absolute px-1.5 pointer-events-none transition-all bg-secondary-700 text-secondary-400 left-2 -top-4 peer-focus:-top-4 peer-placeholder-shown:top-1.5">Message</label>
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