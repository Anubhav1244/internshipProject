import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../services/slices/authSlice";
import { toast } from "react-hot-toast";

const Navbar = () => {
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logOutHandler = () => {
        localStorage.removeItem("token");
        dispatch(setToken(null));
        toast.success("Logged out successfully");
        navigate('/login');
    };

    return (
        <div className="h-14 w-full border-b border-richblack-700 bg-richblack-900 flex justify-around items-center">
            {/* Login/SignUp Button */}
            {!token ? (
                <div className="flex flex-row gap-4">
                    <Link
                        to={"/login"}
                        className="px-3 py-2 rounded-lg text-richblack-100 border border-richblack-700 bg-richblack-800"
                    >
                        Log in
                    </Link>
                    <Link
                        to={"/signup"}
                        className="px-3 py-2 rounded-lg text-richblack-100 border border-richblack-700 bg-richblack-800"
                    >
                        Sign up
                    </Link>
                </div>
            ) : (
                <div className="flex flex-row gap-4">
                    <button
                        onClick={logOutHandler}
                        className="px-3 py-2 rounded-lg text-richblack-100 border border-richblack-700 bg-richblack-800"
                    >
                        Log out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
