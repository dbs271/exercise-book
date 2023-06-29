import OneTodo from "./one-todo";

const TodoList = () => {
  const todos = [
    { id: 1, title: "day1", content: "content1", state: "true" },
    { id: 2, title: "day2", content: "content2", state: "false" },
    { id: 3, title: "day3", content: "content3", state: "false" },
  ];

  return (
    <>
      {todos.map((todo) => (
        <OneTodo todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
