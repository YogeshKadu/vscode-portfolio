export default function TechnologySection({ title, items }) {
    return (
<div className="my-8">
        <h2 className="flex mb-2 text-secondary-300">{title}</h2>
        <div className="flex flex-wrap gap-3">
          {items.map((item) => (
            <div className="flex items-center gap-1 rounded-md flex-0 bg-secondary-500/50 pe-6 ps-0.5" key={item.id}>
              <div className="grid w-10 h-10 rounded-lg place-content-center">
                <img
                  src={item.img}
                  alt="c-sharp icon"
                  className="object-cover w-6 h-6"
                />
              </div>
              <p className="text-sm font-semibold leading-none text-secondary-200">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
}
