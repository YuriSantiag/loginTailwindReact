
export default function InputLogin({ loginErrorMessage, handleLoginChange }) {
  return (
    <div className="mt-7">
      <input
        type="text"
        placeholder="Login"
        className="shadow-md rounded-md border py-2 px-3 w-76"
        onChange={(e) => handleLoginChange(e.target.value)}
      />
      {loginErrorMessage && (
        <p className="text-red-500 text-sm mt-2">{loginErrorMessage}</p>
      )}
    </div>
  );
}
