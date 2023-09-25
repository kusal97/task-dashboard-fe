export async function getTasks() {
  return await fetch(`http://localhost:9090/api/task`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response;
  });
}

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
