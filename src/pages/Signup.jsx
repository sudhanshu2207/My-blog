import React from "react";
import { Signup as SignupComponent } from "../components";

function Signup() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="w-full max-w-2xl">
        <SignupComponent />
      </div>
    </section>
  );
}

export default Signup;
