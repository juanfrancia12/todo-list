import { SearchArray } from "@common/helpers/SearchArray";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const deleteTask = (id) => {
  return alert(`${id} - eliminado`);
};

const Tasks = ({ dataTasks }) => {
  const [textSearchTask, setTextSearchTask] = useState("");

  return (
    <>
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
        {SearchArray(dataTasks, textSearchTask) ? (
          SearchArray(dataTasks, textSearchTask).map((task) => {
            const { id, name, description, date, time, state } = task;
            return (
              <article
                key={id}
                className="h-max border border-gray-200 bg-gray-100 rounded p-8 flex flex-col gap-4"
              >
                <span className="font-bold line-clamp-1">{name}</span>
                <p className="line-clamp-3">{description}</p>
                <Link href={`/${name.toLowerCase().replace(" ", "_")}`}>
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
                        : "text-yellow-800 bg-yellow-100 p-2 font-bold rounded"
                    }`}
                  >
                    {state}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <Link href={`/${name.toLowerCase().replace(" ", "_")}`}>
                    <button className="py-2 text-primary-500 flex justify-center items-center  rounded gap-2 bg-gray-200 hover:bg-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-5"
                        viewBox="0 0 16 16"
                      >
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                      </svg>
                      {/* 01/09/2022 21:59:10 */}
                      <span>Editar</span>
                    </button>
                  </Link>

                  <button
                    className="py-2 text-red-800 flex justify-center items-center  rounded gap-2 bg-red-100 hover:bg-red-200"
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
    </>
  );
};

export default Tasks;
