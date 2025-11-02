import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="
        ml-2
        px-5 py-2
        rounded-full
        text-white
        bg-red-600
        hover:bg-red-700
        active:scale-95
        transition-all duration-200
        shadow-sm hover:shadow-md
      "
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
