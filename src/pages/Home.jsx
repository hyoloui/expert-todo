import React from "react";
import { useSelector } from "react-redux";

import Input from "./Input";
import TodoList from "./TodoList";

const Home = () => {
    const TodoStore = useSelector((state)=>state)
    console.log(TodoStore)
    return (
        <div>
            <Input/>
            <TodoList/>
        </div>
        );
};

export default Home;
