import { Outlet, NavLink, ScrollRestoration } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout flex h-screen">
      <ScrollRestoration />
      <header className="bg-gray-800 text-white p-4 w-1/5">
        <nav className="space-y-2">
          <h1 className="text-2xl font-bold">Model Bazar System</h1>
          <h2 className="text-lg" style={{marginTop : "10px"}}>Dashboard</h2>
          <NavLink
            to="/"
            className="block text-blue-300 hover:text-white transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className="block text-blue-300 hover:text-white transition duration-300 mt-2"
          >
            Login
          </NavLink>
          <hr className="border-t border-gray-600 my-4" />
          <h2 className="text-lg">Basic Setup</h2>
          <NavLink
            to="basic-setup"
            className="block text-blue-300 hover:text-white transition duration-300"
          >
            Setup
          </NavLink>
          <hr className="border-t border-gray-600 my-4" />
          <h2 className="text-lg">Transactions</h2>
          <NavLink
            to="transactions"
            className="block text-blue-300 hover:text-white transition duration-300"
          >
            Transactions
          </NavLink>
          <hr className="border-t border-gray-600 my-4" />
          <h2 className="text-lg">Vouchers</h2>
          <NavLink
            to="vouchers"
            className="block text-blue-300 hover:text-white transition duration-300"
          >
            Vouchers
          </NavLink>
          <hr className="border-t border-gray-600 my-4" />
          <h2 className="text-lg">Reports</h2>
          <NavLink
            to="reports"
            className="block text-blue-300 hover:text-white transition duration-300"
          >
            Report
          </NavLink>

            <hr className="border-t border-gray-600 my-4" />
            <h2 className="text-lg">File Uploader</h2>
            <NavLink
                to="file-uploader"
                className="block text-blue-300 hover:text-white transition duration-300"
            >
                File Uploader
            </NavLink>
        </nav>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
