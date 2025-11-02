import React, { useId } from 'react';

const Select = React.forwardRef(function Select(
  { options, label, className = '', ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="inline-block mb-1 pl-1 text-gray-700 font-medium"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        {...props}
        className={`px-3 py-2 rounded-lg bg-white text-gray-900 outline-none focus:bg-gray-50 focus:ring-2 focus:ring-blue-400 border border-gray-300 w-full transition-all duration-200 ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
