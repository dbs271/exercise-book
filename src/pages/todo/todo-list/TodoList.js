import styled from "styled-components";
import { flexCenter } from "../../../styles/common";
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
      {todoList.length !== 0 ? (
        todoList.map((todo) => (
          <OneTodo
            todo={todo}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))
      ) : (
        <S.TextBox>힐 일을 추가해주세요</S.TextBox>
      )}
    </>
  );
};

export default TodoList;

const TextBox = styled.div`
  ${flexCenter}
`;

const S = {
  TextBox,
};
