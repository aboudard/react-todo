import todos from "./todo/data";

export function onRequestGet() {
  return Response.json(todos);
}