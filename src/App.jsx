import React from 'react';
import './App.css'
import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Quiz from "./pages/Quiz.jsx";
import Learn from "./pages/Learn.jsx";
import LayoutApp from "./Layout.jsx";


const App = () => {

    return (
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

                <Route element={<LayoutApp />}>
                    <Route index element={<Home />} />
                    <Route path="learn" element={<Learn />} />
                    <Route path="quiz" element={<Quiz />} />
                </Route>
            </Routes>

    );
};
export default App;
