import { Link } from "react-router-dom";
import { useServerLink } from "../context/server.context";

const NotFound = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const { serverLink } = useServerLink();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        to={`${serverLink}/`}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
