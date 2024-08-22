import React from "react";

export default function SendButton({ handleSend }) {
  return (
    <div className="ml-48">
      <button
        type="button"
        onClick={handleSend}
        className="shadow-md inline-block px-4 py-2 rounded-xl bg-orange-500 text-white hover:bg-orange-700"
      >
        Send
      </button>
    </div>
  );
}
