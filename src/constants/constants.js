export const routePaths = {
  CREATE: "/create",
  DEFAULT: "/",
};

export const tickets = [
  {
    task_id: "1",
    title: "Search for the keywords to learn more about each warning 1",
    priority: "High",
    status: "captured",
  },
  {
    task_id: "2",
    title: "Unexpected template string expression ",
    priority: "Low",
    status: "in-progress",
  },
  {
    task_id: "3",
    title: "Search for the keywords to learn more about each warning 2",
    priority: "Medium",
    status: "done",
  },

  {
    task_id: "1",
    title: "Search for the keywords to learn more about each warning 1",
    priority: "High",
    status: "captured",
  },
  {
    task_id: "2",
    title: "Unexpected template string expression ",
    priority: "Low",
    status: "done",
  },
  {
    task_id: "3",
    title: "Search for the keywords to learn more about each warning 2",
    priority: "Medium",
    status: "captured",
  },
];

const menuItems = [
  { key: routePaths.CREATE, label: "CREATE TASK" },
  { key: routePaths.DEFAULT, label: "MANAGE TASKS" },
];

export default menuItems;
