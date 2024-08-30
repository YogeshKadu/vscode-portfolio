import { Listbox } from "@headlessui/react";
import { useEffect, useState } from "react";
// import tailwindConfig from "../../tailwind.config";
import colors from "tailwindcss/colors";
import { useThemeProvider } from "../context/ThemeContextProvider";
// import defaultConfig from "tailwindcss/defaultConfig";
// import tailwind from "tailwindcss";
// const tailwindConfig = require('../../tailwind.config')

const fonts = [
  {
    id: "1",
    name: "font-sans",
    value: "font-sans",
  },
  {
    id: "2",
    name: "font-serif",
    value: "font-serif",
  },
  {
    id: "3",
    name: "font-mono",
    value: "font-mono",
  },
];

function Settings() {
  const { availableThemes, theme, setTheme } = useThemeProvider();
  const [selectedFont, setFont] = useState(fonts[0]);
  useEffect(() => {
    // console.log(tailwind);
    // defaultConfig.theme.colors.slate = colors.neutral
  }, []);
  return (
    <section className="p-5 sm:p-8">
      <h2 className="px-5 mb-2 text-2xl font-semibold text-secondary-200">
        Text Editor
      </h2>
      <div className="flex flex-col gap-1.5 px-5 py-2 hover:bg-secondary-700/40 rounded-md">
        <h5 className="text-sm font-medium text-secondary-400">Font Size</h5>
        <input
          type="number"
          className="h-7 px-1.5 text-sm bg-transparent w-48 max-w-full border rounded-sm outline-none appearance-none border-secondary-500 text-white"
          value="12"
          readOnly
        />
        <p className="relative text-xs text-secondary-500 -top-1">
          This will only affect on editor view.
        </p>
      </div>
      <div className="flex flex-col gap-1.5 px-5 py-2 hover:bg-secondary-700/40 rounded-md">
        <h5 className="text-sm font-medium text-secondary-400">Font Family</h5>
        <Listbox
          as="div"
          value={selectedFont}
          onChange={setFont}
          className="relative w-64 max-w-full"
        >
          <Listbox.Button className="flex items-center h-7 px-1.5 text-sm bg-transparent border w-full rounded-sm outline-none appearance-none border-secondary-500 text-secondary-400">
            <span className="flex-1 text-left">{theme.name}</span>
            <div className="grid w-6 h-6 place-content-center pt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </Listbox.Button>
          <Listbox.Options
            className={
              "absolute z-20 bg-secondary-700 text-secondary-400 w-full border border-secondary-600"
            }
          >
            {fonts.map((person) => (
              <Listbox.Option
                className={
                  "h-7 px-2 text-sm flex items-center cursor-pointer hover:bg-secondary-800/30 hover:border border-secondary-600"
                }
                key={person.id}
                value={person}
                disabled={person.unavailable}
              >
                {person.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        <p className="relative text-xs text-secondary-500 -top-1">
          This will change the font size of entire application.
        </p>
      </div>
      <div className="flex flex-col gap-1.5 px-5 py-2 hover:bg-secondary-700/40 rounded-md">
        <h5 className="text-sm font-medium text-secondary-400">Theme</h5>
        <div className="flex flex-wrap gap-5">
          {
            availableThemes.map((item) => 
              <button className={`w-6 h-6 border ${item.backgroundColor} border-secondary-600`} onClick={()=> setTheme(item)}></button>
            )
          }
        </div>
        <p className="relative text-xs text-secondary-500 -top-1">
          This will change the font size of entire application.
        </p>
      </div>
    </section>
  );
}

export default Settings;
