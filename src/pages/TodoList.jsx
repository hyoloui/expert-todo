import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    // Delete API / 삭제 버튼
    const clickedDelelte = (id) => {
        dispatch(deleteTodo(id));
    };

    // Update API / 취소 & 완료 버튼
    const clickedCencelSuccess = (id) => {
        dispatch(toggleStatusTodo(id));
    };

    return (
        <div>
            <h1>🎈Active</h1>
            <div>
                {todos.map((todo) => {
                    if (!todo.isDone) {
                        return (
                            <TodoSection key={todo.id}>
                                <Link to={todo.id}>
                                    <span>상세보기</span>
                                </Link>
                                <div>
                                    <h2>{todo.title}</h2>
                                    <span>{todo.content}</span>
                                </div>
                                <TodoFooter>
                                    <button
                                        onClick={() => clickedDelelte(todo.id)}
                                    >
                                        삭제
                                    </button>
                                    <button
                                        onClick={() =>
                                            clickedCencelSuccess(todo.id)
                                        }
                                    >
                                        {todo.isDone ? "취소" : "완료"}
                                    </button>
                                </TodoFooter>
                            </TodoSection>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <br/>
            <hr/>
            <h1>🎉Done</h1>
            <div>
                {todos.map((todo) => {
                    if (todo.isDone) {
                        return (
                            <TodoSection key={todo.id}>
                                <Link to={todo.id}>
                                    <span>상세보기</span>
                                </Link>
                                <div>
                                    <h2>{todo.title}</h2>
                                    <span>{todo.content}</span>
                                </div>
                                <TodoFooter>
                                    <button
                                        onClick={() => clickedDelelte(todo.id)}
                                    >
                                        삭제
                                    </button>
                                    <button
                                        onClick={() =>
                                            clickedCencelSuccess(todo.id)
                                        }
                                    >
                                        {todo.isDone ? "취소" : "완료"}
                                    </button>
                                </TodoFooter>
                            </TodoSection>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
};
// Styled components
const TodoSection = styled.section`
    margin: 10px;
    padding: 20px;
    border: 3px solid lightblue;
    border-radius: 12px;
`;

const TodoFooter = styled.footer`
    display: flex;
    justify-content: flex-end;
`;

export default TodoList;
