import todos from "./data";

export function onRequestGet(context) {
    const id = context.params.id;

    if (!id) {
        return new Response("Not Found", { status: 404 });
    }

    const todo = todos.find((todo) => todo.id === Number(id));

    if (!todo) {
        return new Response("Not Found", { status: 404 });
    }

    return Response.json(todo);

}