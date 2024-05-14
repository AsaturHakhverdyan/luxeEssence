import { Link } from "react-router-dom";
import { PAGES } from "../../../utils/constants/constants";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem]">Sorry the page Not Found</h1>
      <Link to={PAGES.HOME} className="bg-gray-300 px-4 py-2 mt-4">Go Home</Link>
    </div>
  )
};

export default NotFoundPage;
