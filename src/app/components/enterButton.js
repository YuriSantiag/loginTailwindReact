
export default function EnterButton({ handleLogin }) {
  return (
    <div className="mt-12">
      <button
        type="button"
        onClick={handleLogin}
        className="shadow-md inline-block px-6 py-2 rounded-xl bg-orange-500 text-white hover:bg-orange-700"
      >
        Entrar
      </button>
    </div>
  );
}
