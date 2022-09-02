import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isSelectedOptionsHeader, setIsSelectedOptionsHeader] = useState(false);
  const [isVisibleOptionsHeader, setIsVisibleOptionsHeader] = useState(false);
  const handleSelectedOptionsHeader = () => {
    setIsSelectedOptionsHeader(!isSelectedOptionsHeader);
    setIsVisibleOptionsHeader(!isVisibleOptionsHeader);
  };
  return (
    <header className="sticky top-0 flex justify-between items-center px-32 min-h-[5rem] bg-gray-300 ease-in-out filter drop-shadow-md">
      <h1 className="text-2xl font-bold text-primary-500">LISTA DE TAREAS</h1>
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
        <div className="flex items-center gap-4">
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
        <div className="absolute top-[5rem] right-32 h-16 w-60 bg-gray-500 rounded">
          jeje
        </div>
      )}
    </header>
  );
};

export default Header;
