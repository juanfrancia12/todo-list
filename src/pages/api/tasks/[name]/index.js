import dataTasks from "@api/tasks.json";

export function getTaskByName(name, res, req) {
  console.log({ res });
  console.log({ req });
  const task = dataTasks.filter(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  return task;
}

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    console.log({ res });
    console.log({ req });
    const task = getTaskByName(req.query.name, req, res);
    res.status(200).json(task);
  }
}
