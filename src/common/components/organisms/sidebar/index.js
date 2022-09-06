import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const ITEMS_SIDEBAR = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-5"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
        />
        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
        <path
          fillRule="evenodd"
          d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
        />
      </svg>
    ),
    label: "Todas las tareas",
    value: "",
    href: "/",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-5"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
        />
        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
        <path
          fillRule="evenodd"
          d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
        />
      </svg>
    ),
    label: "En progreso",
    value: "in-progress",
    href: "/in-progress",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-5"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
        />
        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
        <path
          fillRule="evenodd"
          d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
        />
      </svg>
    ),
    label: "Completado",
    value: "completed",
    href: "/completed",
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-5"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
        />
        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
        <path
          fillRule="evenodd"
          d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
        />
      </svg>
    ),
    label: "Hoy dia",
    value: "today",
    href: "/today",
  },
  {
    id: 5,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-5"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
        />
        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
        <path
          fillRule="evenodd"
          d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
        />
      </svg>
    ),
    label: "Mañana",
    value: "tomorrow",
    href: "/tomorrow",
  },
  {
    id: 6,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-5"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
        />
        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
        <path
          fillRule="evenodd"
          d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
        />
      </svg>
    ),
    label: "Este mes",
    value: "month",
    href: "/month",
  },
];

const Sidebar = () => {
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false);
  const { pathname } = useRouter();

  const handleSelectedOptionsSidebar = () => {
    setIsVisibleSidebar(!isVisibleSidebar);
  };

  return (
    <>
      <button
        className="fixed bottom-4 right-4 bg-primary-500 text-gray-100 rounded-full p-2 md:hidden"
        onClick={() => handleSelectedOptionsSidebar()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </button>
      <aside className="md:py-10 h-max md:sticky md:top-[5rem] lg:col-span-1">
        <span className="hidden md:block md:text-lg text-primary-500">
          GESTIÓN DE TAREAS
        </span>

        <ul
          className={`bg-gray-100 border border-gray-400 rounded-md flex flex-col gap-4 text-primary-700 fixed bottom-16 right-4 mt-4 md:static md:bg-transparent md:border-0 md:block ${
            isVisibleSidebar ? "block" : "hidden"
          }`}
          onClick={() => handleSelectedOptionsSidebar()}
        >
          {ITEMS_SIDEBAR.map((item) => {
            const { id, icon, label, href, value } = item;
            return (
              <Link key={id} href={href}>
                <li
                  className={`w-60 px-6 py-4 rounded-md flex gap-2 items-center cursor-pointer ${
                    pathname.slice(1) === value
                      ? "font-bold text-primary-500 bg-primary-800"
                      : ""
                  }`}
                >
                  {icon}
                  <span> {label} </span>
                </li>
              </Link>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;

/*
 <button
        className="fixed bottom-4 right-4 bg-primary-800 rounded-full p-2 md:hidden"
        onClick={() => setIsVisibleSidebar(!isVisibleSidebar)}
      >
        ✔️
      </button>
      <aside className="md:col-span-2 xl:col-span-1 md:h-[calc(100vh-5rem)] md:sticky md:top-[5rem] md:border-r-2 border-gray-300 pt-10 flex flex-col gap-6">
        <span className="text-lg text-primary-500">GESTIÓN DE TAREAS</span>

        <ul
          className={`bg-gray-100 border border-gray-400 rounded-md flex flex-col gap-4 text-primary-700 fixed bottom-16 right-4 mt-4 md:static md:bg-transparent md:border-0 md:block ${
            isVisibleSidebar ? "block" : "hidden"
          }`}
        >
          {ITEMS_SIDEBAR.map((item) => {
            const { id, icon, label, href, value } = item;
            return (
              <Link key={id} href={href}>
                <li
                  className={`w-60 px-6 py-4 rounded-md flex gap-2 items-center cursor-pointer ${
                    pathname.slice(1) === value
                      ? "font-bold text-primary-500 bg-primary-800"
                      : ""
                  }`}
                >
                  {icon}
                  <span> {label} </span>
                </li>
              </Link>
            );
          })}
        </ul>
      </aside>
*/
