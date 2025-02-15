import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-center">Not Found</h1>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default NotFound;
