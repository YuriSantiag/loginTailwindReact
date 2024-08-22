import React from "react";

export default function InputEmail({ emailErrorMessage, handleEmailChange }) {
  return (
    <div className="mt-8 mb-2">
      <input
        type="text"
        placeholder="Email"
        className="shadow-md rounded-md border py-2 px-3 w-72"
        onChange={(e) => handleEmailChange(e.target.value)}
      />
      {emailErrorMessage && (
        <p className="text-red-500 text-sm mt-2">{emailErrorMessage}</p>
      )}
    </div>
  );
}
