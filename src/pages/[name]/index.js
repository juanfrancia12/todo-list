import { getTaskByName } from "@pages/api/tasks/[name]";

const index = ({ task, name }) => {
  return <div> {`${name}: ${JSON.stringify(task)}`} </div>;
};

export default index;

export const getServerSideProps = async (context) => {
  const name = await context.query.name.replace("_", " ");
  const task = await getTaskByName(name);
  return { props: { task, name } };
};
