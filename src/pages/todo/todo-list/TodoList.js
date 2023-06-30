import OneTodo from "./one-todo";

const TodoList = ({ todoList, setTodoList }) => {
  const handleUpdateTodo = (id, content) => {
    const _todoList = [...todoList];
    const todo = _todoList.find((todo) => todo.id === id);
    todo.content = content;
    setTodoList(_todoList);
  };

  const handleDeleteTodo = (id) => {
    const _todoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(_todoList);
  };
  return (
    <>
      {todoList.map((todo) => (
        <OneTodo
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
