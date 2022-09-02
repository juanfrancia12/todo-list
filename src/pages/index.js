import Tasks from "@modules/Tasks";
import { getAllTasks } from "@pages/api/tasks/getAllTasks";

export default function Home({ dataTasks }) {
  return <Tasks dataTasks={dataTasks} />;
}

export const getStaticProps = async () => {
  const dataTasks = await getAllTasks();
  return { props: { dataTasks } };
};
