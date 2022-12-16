import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todos.js";

const OnTodo = () => {
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todos.todo);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getTodoByID(id));
    }, [dispatch, id]);

    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>ID :{todo.id}</div>
                        <button
                            borderColor="#ddd"
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            이전으로
                        </button>
                    </div>
                    <h3>{todo.title}</h3>
                    <span>{todo.body}</span>
                </div>
            </div>
        </div>
    );
};

export default OnTodo;