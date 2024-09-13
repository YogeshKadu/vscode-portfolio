import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-sm">
        <img src="/images/404.png" alt="lost page image" className="object-contain w-full h-48 drop-shadow-xl" />
        <div className="flex flex-col items-center gap-5 p-5 px-3 rounded-md shadow-lg sm:py-5 sm:px-8 bg-secondary-700">
          <h3 className="text-xl font-semibold text-secondary-200">Lost your way?</h3>
          <p className="text-xs text-center text-secondary-200 text-balance">It looks like you’ve found a page that’s either not ready or doesn’t exist. Let's head back to home page. <span className="font-Noto">😀</span></p>
          {/* </div> */}
          <Link to="/" className="flex items-center h-6 px-5 text-sm rounded-sm bg-primary-300 text-secondary-800">Home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound