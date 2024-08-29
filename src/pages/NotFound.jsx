import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="flex items-center justify-center h-full">
        <div className="max-w-sm text-center">
            <img src="/images/404.png" alt="lost page image" className="h-56" />
            <p className="mt-8 mb-3 text-secondary-200">Lost your path</p>
            <Link to="/" className="inline-block px-5 rounded bg-primary-300 text-secondary-800">Home</Link>
        </div>
    </div>
  )
}

export default NotFound