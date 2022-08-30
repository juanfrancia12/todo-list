import { subtractDates } from "@common/helpers/DateFormat";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TASKS = [
  {
    id: 1,
    name: "Realizar exposición de Inglés",
    description:
      "Officia ea pariatur sed animi exercitationem corporis cupiditate ipsam ut. A voluptatem sed alias. Commodi est quis laboriosam quia. Quia aliquid et. Aut fuga totam doloremque reprehenderit culpa voluptas et rem consectetur. Deleniti qui voluptatem perferendis a cum illo velit.",
    date: "04-03-2022",
    time: "12:11 PM",
    state: "Completado",
  },
  {
    id: 2,
    name: "Resolver ejercicios de Matemática",
    description:
      "Ut corporis itaque omnis pariatur ut repudiandae. Dolor nobis ratione perspiciatis. Temporibus iusto non impedit quidem. Voluptates expedita eos magnam fugiat neque.",
    date: "10-04-2022",
    time: "11:11 AM",
    state: "Completado",
  },
  {
    id: 3,
    name: "Realizar la práctica de SQL",
    description:
      "Consequuntur alias eum qui sequi. Et suscipit qui dolorum eum odio tenetur est tempore cupiditate. Sit alias eligendi ab et aperiam non ut autem provident. Et sequi est illum. Non cum non ab enim. Cumque quae rerum voluptates reiciendis deleniti adipisci et ea et.",
    date: "15-05-2022",
    time: "07:04 AM",
    state: "Completado",
  },
  {
    id: 4,
    name: "Escribir la exposición",
    description:
      "Et iusto sed sed minus laborum assumenda veniam laudantium consequatur. Et quam sequi quisquam ut rem sint voluptas esse quod. Illum quisquam nam neque nostrum.",
    date: "25-08-2022",
    time: "11:30 PM",
    state: "En progreso",
  },
  {
    id: 5,
    name: "Realizar el diseño web del restaurante",
    description:
      "Quo quo molestiae molestiae asperiores atque voluptatem eaque facilis. Sunt iste est numquam eius ut libero quia nemo. Aspernatur sapiente aliquid deleniti. Eum atque reiciendis iste ipsum inventore et a. Neque laudantium consequuntur officia quis odit. Quod et culpa nihil sit ut.",
    date: "15-09-2022",
    time: "04:00 PM",
    state: "En progreso",
  },
];

const SearchArray = (array, textSearch) => {
  const filterArray = array.filter(
    (task) =>
      task.name.toLowerCase().includes(textSearch.toLowerCase()) ||
      task.description.toLowerCase().includes(textSearch.toLowerCase())
  );

  return filterArray.length > 0 ? filterArray : false;
};

export default function Home() {
  const [isSelectedOptionsHeader, setIsSelectedOptionsHeader] = useState(false);
  const [isVisibleOptionsHeader, setIsVisibleOptionsHeader] = useState(false);
  const [textSearchTask, setTextSearchTask] = useState("");

  const handleSelectedOptionsHeader = () => {
    setIsSelectedOptionsHeader(!isSelectedOptionsHeader);
    setIsVisibleOptionsHeader(!isVisibleOptionsHeader);
  };

  const deleteTask = (id) => {
    return alert(`${id} - eliminado`);
  };

  return (
    <>
      <header className="sticky top-0 flex justify-between items-center px-32 min-h-[5rem] bg-gray-300 relative ease-in-out filter drop-shadow-md">
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
      <main className="px-32 grid grid-cols-4 gap-6 min-h-[calc(100vh-5rem)]">
        <aside className="border-r-2 border-gray-300 py-10">sidebar</aside>
        <section className="overflow-auto col-span-3 py-10 flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-primary-500">
              TODAS LAS TAREAS
            </span>
            <div className="flex items-center gap-6">
              <div className="flex justify-center w-80">
                <input
                  type="search"
                  className="block w-full px-3 py-1.5 text-gray-700 border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-primary-500 focus:outline-none"
                  id="exampleSearch"
                  placeholder="Buscar por nombre o descripción..."
                  value={textSearchTask}
                  onChange={(e) => setTextSearchTask(e.target.value)}
                />
              </div>
              <button className="py-2 px-4 bg-primary-500 text-gray-100 rounded">
                Agregar nueva tarea
              </button>
            </div>
          </div>
          <section className="w-full grid grid-cols-3 gap-6">
            {SearchArray(TASKS, textSearchTask) ? (
              SearchArray(TASKS, textSearchTask).map((task) => {
                const { id, name, description, date, time, state } = task;
                return (
                  <article
                    key={id}
                    className="h-max border border-gray-200 bg-gray-100 rounded p-8 flex flex-col gap-4"
                  >
                    <span className="font-bold line-clamp-1">{name}</span>
                    <p className="line-clamp-3">{description}</p>
                    <Link href={`task/${name.toLowerCase()}`}>
                      <button className="w-max text-blue-800 underline">
                        Ver más...
                      </button>
                    </Link>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-800">{`${date} - ${time}`}</span>
                      <span
                        className={`text-xs text-gray-800 ${
                          state === "Completado"
                            ? "text-green-800 bg-green-100 p-2 rounded"
                            : "text-red-800 bg-red-100 p-2 font-bold rounded"
                        }`}
                      >
                        {state}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <Link href={`task/edit/${name.toLowerCase()}`}>
                        <button className="py-2 text-primary-500 flex justify-center items-center  rounded gap-2 bg-gray-300 hover:bg-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-5"
                            viewBox="0 0 16 16"
                          >
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                          </svg>
                          <span>Editar</span>
                        </button>
                      </Link>

                      <button
                        className="py-2 text-red-800 flex justify-center items-center  rounded gap-2 bg-red-200"
                        onClick={() => deleteTask(id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-5"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                        <span>Eliminar</span>
                      </button>
                    </div>
                  </article>
                );
              })
            ) : (
              <p className="col-span-4">
                No hay tareas que coincidan con tu búsqueda...
              </p>
            )}
          </section>
        </section>
      </main>
    </>
  );
}
