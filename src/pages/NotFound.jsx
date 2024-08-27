function NotFound() {
  return (
    <div className="flex items-center justify-center h-full">
        <div className="max-w-sm">
            <img src="/images/404.png" alt="lost page image" className="h-56" />
            <p className="mt-8">Lost your path</p>
            <button className="mx-auto">Home</button>
        </div>
    </div>
  )
}

export default NotFound