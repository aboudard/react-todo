import todos from "./todo/data";

export function onRequestGet() {
  return Response.json(todos);
}

export function onRequestPost() {
  return Response.json({ message: "Success" });
}