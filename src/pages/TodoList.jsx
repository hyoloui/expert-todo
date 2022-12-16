import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";


const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos );

    const clickedDelelte = (id) => {
        dispatch(deleteTodo(id))
    }

    const clickedCencelSuccess = (id) => {
        dispatch(toggleStatusTodo(id))
    }

    return (
        <div>
            <h1>To</h1>
            <div>
                {todos.map((todo) => {
                    if (!todo.isDone) {
                        return (
                            <section key={todo.id}>
                                <Link to={todo.id}>
                                    <span>상세보기</span>
                                </Link>
                                <div>
                                    <h2>{todo.title}</h2>
                                    <span>{todo.content}</span>
                                </div>
                                <footer>
                                    <button onClick={() => clickedDelelte(todo.id)}>삭제</button>
                                    <button onClick={() => clickedCencelSuccess(todo.id)}>
                                        {todo.isDone ? "취소" : "완료"}
                                    </button>
                                </footer>
                            </section>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <h1>Do</h1>
            <div>
                {todos.map((todo) => {
                    if (todo.isDone) {
                        return (
                            <section key={todo.id}>
                                <Link to={`/$todo.id`} key={todo.id}>
                                    <span>상세보기</span>
                                </Link>
                                <div>
                                    <h2>{todo.title}</h2>
                                    <span>{todo.content}</span>
                                </div>
                                <footer>
                                    <button onClick={() => clickedDelelte(todo.id)}>삭제</button>
                                    <button onClick={() => clickedCencelSuccess(todo.id)}>
                                        {todo.isDone ? "취소" : "완료"}
                                    </button>
                                </footer>
                            </section>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            
        </div>
    );
};

export default TodoList;
