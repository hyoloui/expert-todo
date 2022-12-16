import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
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
        <ListContainer>
            <Wrapper>
                <TodoContainer>
                    <LinkStyle>
                        <div>ID :{todo.id}</div>
                        <button
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            이전으로
                        </button>
                    </LinkStyle>
                    <Header>{todo.title}</Header>
                    <li>{todo.content}</li>
                </TodoContainer>
            </Wrapper>
        </ListContainer>
    );
};

const ListContainer = styled.div`
    margin: auto 0;
    padding: 0 20px;
`;
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`;
const TodoContainer = styled.div`
    width: 250px;
    min-height: 150px;
    border: 4px solid lightblue;
    border-radius: 12px;
    padding: 10px 24px 50px 24px;
`;

const LinkStyle = styled.div`
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 2px solid lightblue;
    border-radius: 12px;
`;

const Header = styled.h3`
    background-color: lightyellow;
    padding: 5px;
`;



export default OnTodo;

