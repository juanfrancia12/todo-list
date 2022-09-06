import { useState } from "react";
import Image from "next/image";

const HEADER_ITEMS_OPTIONS = [
  {
    id: 1,
    name: "Mi perfil",
    url: "",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-5"
        viewBox="0 0 16 16"
      >
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Configuración",
    url: "",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-5"
        viewBox="0 0 16 16"
      >
        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Cerrar sesión",
    url: "",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-5"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
        />
        <path
          fillRule="evenodd"
          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
        />
      </svg>
    ),
  },
];

const Header = () => {
  const [isSelectedOptionsHeader, setIsSelectedOptionsHeader] = useState(false);
  const [isVisibleOptionsHeader, setIsVisibleOptionsHeader] = useState(false);

  const handleSelectedOptionsHeader = () => {
    setIsSelectedOptionsHeader(!isSelectedOptionsHeader);
    setIsVisibleOptionsHeader(!isVisibleOptionsHeader);
  };

  return (
    <header className="sticky top-0 flex justify-between items-center px-4 sm:px-12 md:px-32 min-h-[5rem] bg-gray-100 ease-in-out filter drop-shadow-md">
      <h1 className="text-xl font-bold text-primary-500 md:text-2xl">
        LISTA DE TAREAS
      </h1>
      <div
        className="flex items-center gap-6 cursor-pointer"
        onClick={() => handleSelectedOptionsHeader()}
      >
        <div className="w-12 h-12 relative rounded-full overflow-hidden">
          <Image
            src={"/assets/images/profile-person.jpg"}
            alt="title"
            layout="fill"
            placeholder="blur"
            blurDataURL={"/assets/images/profile-person.jpg"}
          />
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span>Juan Francia</span>
          {isSelectedOptionsHeader ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-up-fill"
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          )}
        </div>
      </div>
      {isVisibleOptionsHeader && (
        <ul
          className="absolute top-[5rem] right-4 sm:right-20 md:right-32 border border-gray-400 rounded bg-gray-100"
          onClick={() => handleSelectedOptionsHeader()}
        >
          {HEADER_ITEMS_OPTIONS.map((item) => {
            const { id, name, url, icon } = item;
            return (
              <li
                key={id}
                // className="py-3 px-6 cursor-pointer hover:bg-primary-600 hover:text-gray-300"
                className="py-3 px-5 cursor-pointer flex gap-3 hover:text-primary-500 hover:bg-primary-800"
              >
                {icon}
                {name}
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
};

export default Header;
