import dataTasks from "@api/tasks.json";

export function getAllTasks() {
  return dataTasks;
}

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const tasks = getAllTasks();
    res.status(200).json(tasks);
  }
}
