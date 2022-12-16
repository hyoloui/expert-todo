import React, { useState } from "react";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { addTodo } from "../redux/modules/todos";

// Create API
const Input = () => {
    const id = nextId();

    const dispatch = useDispatch();

    const [todo, setTodo] = useState({
        id: 0,
        title: "",
        content: "",
        isDone: false,
    });

    // title, content input 변경 값
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    };

    // 저장하기 버튼 클릭시 onSubmit
    const saveTodo = (event) => {
        event.preventDefault();
        const titleTrimer = todo.title.trim(); // title 앞뒤 공백 제거
        const contentTrimer = todo.content.trim(); // content 앞뒤 공백을 제거

        // todo 입력값이 없으면 초기화 후 리턴
        if (!titleTrimer || !contentTrimer) {
            setTodo(todo.title = "");
            setTodo(todo.content = "");
        return;
        }
        dispatch(addTodo({...todo, id }));
        // todo 값 초기화
        setTodo({
            id : 0,
            title : "",
            content : "",
            isDone: false,
        });
    };


    return (
        <aside>
            <form onSubmit={saveTodo}>
                <label>제목 : </label>
                <input type="text" name="title" onChange={onChangeHandler} value={todo.title}/>
                <label>내용 : </label>
                <input type="text" name="content" onChange={onChangeHandler} value={todo.content}/>
                <button> 저장하기 </button>
            </form>
        </aside>
    );
};

export default Input;
