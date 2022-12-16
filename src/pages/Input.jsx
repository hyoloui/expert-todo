import React, { useState } from "react";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

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
            <TodoForm onSubmit={saveTodo}>
                <TodoInputBox>
                    <TodoLabel>제목 : </TodoLabel>
                    <TodoInput type="text" name="title" onChange={onChangeHandler} value={todo.title}/>
                </TodoInputBox>

                <TodoInputBox>
                    <TodoLabel>내용 : </TodoLabel>
                    <TodoInput type="text" name="content" onChange={onChangeHandler} value={todo.content}/>
                </TodoInputBox>

                <button> 저장하기 </button>
            </TodoForm>
        </aside>
    );
};

const TodoForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px;
    border: 3px solid #ccc;
    border-radius: 12px;
`;

const TodoInputBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 10px 0;
`;

const TodoLabel = styled.label`
    margin: 0 5px;
`;
const TodoInput = styled.input`
    width: 50%;
`;
export default Input;
