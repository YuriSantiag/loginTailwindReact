
export default function InputUser({ userErrorMessage, handleUserChange }) {
  return (
    <div className="mt-5">
      <input
        type="text"
        placeholder="User"
        className="shadow-md rounded-md border py-2 px-3 w-72"
        onChange={(e) => handleUserChange(e.target.value)}
      />
      {userErrorMessage && (
        <p className="text-red-500 text-sm mt-2">{userErrorMessage}</p>
      )}
    </div>
  );
}
