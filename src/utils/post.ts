export async function Post(data) {
  console.log(data);
  if (data.title === "" || data.content === "" || (data.title === "" && data.content === "")) return;

  const response = await fetch("http://localhost:8000/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  console.log(response);
}
