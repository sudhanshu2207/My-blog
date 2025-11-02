import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", error, ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block mb-1.5 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        ref={ref}
        type={type}
        className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 
          placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
          transition duration-200 ${className}`}
        {...props}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
});

export default Input;
