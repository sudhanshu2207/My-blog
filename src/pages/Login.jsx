import React from "react";
import { Login as LoginComponent } from "../components";

function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Welcome Back 👋
        </h1>
        <LoginComponent />
      </div>
    </section>
  );
}

export default Login;
