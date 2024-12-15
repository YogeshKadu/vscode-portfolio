import React, { useEffect } from "react";
import Topmenu from "./components/Topmenu";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import MarkdownEditor from "./pages/Markdown/MarkdownEditor";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useHistoryContext } from "./context/HistoryContextProvider";
import { useThemeProvider } from "./context/ThemeContextProvider";
import ListFiles from "./components/ListFiles";
import { Toaster } from "react-hot-toast";

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { hash, pathname, search } = location;
  const { activeTabs, RemoveRoute } = useHistoryContext();

  const HandleClick = (e, href) => {
    e.stopPropagation();
    RemoveRoute(href);
  };
  const HandleNavigation = (route) => {
    navigate(route);
  };

  const hideTopPanel = activeTabs.length == 0; // || !activeTabs.find(item=>item.href == pathname);

  const { theme } = useThemeProvider();


  return (
    <div
      className={`relative flex flex-col w-full h-dvh min-h-lvh bg-secondary-800 font-Quicksand ${theme.value}`}
    >
      <Topmenu />
      <div className="flex flex-col flex-1 border-t divide-y divide-secondary-900 border-secondary-900">
        <div className="flex-1 h-full max-h-[calc(100vh_-_3.25rem)]">
          {/* below is the content you can edit */}
          <div className="flex h-full max-w-[100vw] max-h-full overflow-y-auto">
            <Sidebar />
            <div className="relative flex flex-col flex-1 font-sans #divide-y divide-secondary-900 md:max-w-[calc(100vw_-_280px)] overflow-x-hidden">
              <div
                className={`top-0 flex w-full h-8 overflow-x-auto border-b border-secondary-900 bg-secondary-800 divide-secondary-900 scrollbar-hide ${hideTopPanel && "hidden"
                  }`}
              >
                {/* <div className="flex items-center w-56 px-2 text-gray-300 border-r bg-secondary-700/50 border-secondary-900">
                    <div className='w-5 h-5'></div>
                    <p className="flex-1 text-xs truncate sm:text-sm first-letter:uppercase">
                        {pathname.split('/')[1] || 'home'}.jsx
                    </p>
                    <button className="grid w-5 h-5 rounded hover:bg-secondary-700 place-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M6.793 6.793a1 1 0 0 1 1.414 0L12 10.586l3.793-3.793a1 1 0 1 1 1.414 1.414L13.414 12l3.793 3.793a1 1 0 0 1-1.414 1.414L12 13.414l-3.793 3.793a1 1 0 0 1-1.414-1.414L10.586 12L6.793 8.207a1 1 0 0 1 0-1.414" clipRule="evenodd"></path></svg>
                    </button>
                </div> */}
                {activeTabs.map((item) => (
                  <div
                    onClick={() => HandleNavigation(item.href)}
                    key={item.href}
                    className={`flex flex-shrink-0 cursor-pointer select-none !flex-0 items-center w-56 px-2 text-secondary-300 border-r border-secondary-900 ${pathname == item.href && "bg-secondary-700/50"
                      }`}
                  >
                    <div className="w-5 h-5"></div>
                    <p className="flex-1 text-xs truncate sm:text-sm first-letter:uppercase">
                      {item.name}
                    </p>
                    <button
                      onClick={(e) => HandleClick(e, item.href)}
                      className="grid w-5 h-5 rounded hover:bg-secondary-700 place-content-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.25em"
                        height="1.25em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M6.793 6.793a1 1 0 0 1 1.414 0L12 10.586l3.793-3.793a1 1 0 1 1 1.414 1.414L13.414 12l3.793 3.793a1 1 0 0 1-1.414 1.414L12 13.414l-3.793 3.793a1 1 0 0 1-1.414-1.414L10.586 12L6.793 8.207a1 1 0 0 1 0-1.414"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              <div className="overflow-auto grow shrink-0 basis-0 scrollbar scrollbar-thumb-secondary-600 bg-secondary-700/50">
                <Outlet />
              </div>
            </div>
            {/* <MarkdownEditor /> */}
          </div>
        </div>
        <Footer />
      </div>
      <ListFiles />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default Layout;
