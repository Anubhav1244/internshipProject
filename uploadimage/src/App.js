import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
function App() {
    return (
        <div>
            <Navbar />
            <Routes>
            <Route
                    path="/"
                    element={
                        <OpenRoute>
                            <Home />
                        </OpenRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <OpenRoute>
                            <Login />
                        </OpenRoute>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <OpenRoute>
                            <Signup />
                        </OpenRoute>
                    }
                />
                <Route
                path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
