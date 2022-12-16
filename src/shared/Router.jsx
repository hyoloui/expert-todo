// Router 세팅
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// 내가 만든 컴포넌트
import Layout from "./Layout";
import Home from "../pages/Home";
import OnTodo from "../pages/OnTodo";

// Router 함수
const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<OnTodo />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
