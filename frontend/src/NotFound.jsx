import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-900 text-white">
      <h2 className="text-4xl font-bold mb-4">Page not found!</h2>
      <p className="text-gray-300 mb-8 text-center">
        URL you are trying to access does not exist.
      </p>

      <p className="text-gray-300">
        Go to the <NavLink to="/" className="text-blue-300 underline">Homepage</NavLink>.
      </p>
    </div>
  );
}
