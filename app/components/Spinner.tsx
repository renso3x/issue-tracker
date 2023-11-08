import React from "react";

const Spinner = () => {
  return (
    <div
      className="animate-spin inline-block w-6 h-6 border-2 border-current border-t-transparent rounded-full text-white"
      role="status"
      aria-label="loading"
    >
    </div>
  );
};

export default Spinner;
