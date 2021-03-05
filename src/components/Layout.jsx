import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Link
        className="fixed top-0 right-0 my-4 mx-8 text-blue-400 text-lg font-bold"
        to="/"
      >
        Home
      </Link>
      <div className="grid justify-center">
        <div className="mt-20 border-r-8 border-4 py-4 px-2 border-gray-500">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
