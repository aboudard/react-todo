export const TodoService = {
  getTodosData() {
    return [
      {
        category: "divers",
        id: 0,
        description: "pop pop opopopo popo po",
        title: "Bonjour les chats",
        active: true,
      },
      {
        category: "angular",
        id: 1,
        description: "rere rerere rere rerer ererer",
        title: "Angular best practices",
        active: true,
      },
      {
        category: "divers",
        id: 2,
        description: "ytyt ytyty tytyty tytyty tyttyt yty",
        title: "Java avec les pingouins",
        active: false,
      },
      {
        category: "divers",
        title: "Spring Boot for my crocodile",
        description: "special edition teeth-proof for big mouth",
        active: true,
        id: 3,
      },
      {
        category: "angular",
        title: "Beer is not my first name",
        description: "autre truc angular",
        active: false,
        id: 4,
      },
    ];
  },
  getTodos() {
    return Promise.resolve(this.getTodosData());
}
};
