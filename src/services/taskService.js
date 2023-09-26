export async function createTask(taskData) {
  return await fetch(`http://localhost:9090/api/task`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: taskData,
  });
}

export async function updateTasks(taskData, id) {
  return await fetch(`http://localhost:9090/api/task/` + id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: taskData,
  }).then((response) => {
    return response;
  });
}
