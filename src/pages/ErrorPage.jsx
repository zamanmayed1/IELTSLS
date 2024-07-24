import { Helmet } from "react-helmet-async";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden p-4">
      <Helmet>
        <title>Something Went Wrong - IELTS LS</title>
      </Helmet>
      <div className="max-w-xl mx-auto p-6 text-center bg-white  border border-gray-300 rounded-lg">
       <img className="w-1/4 block mx-auto " src="/public/errorimg.png" alt="" />
        <h1 className="text-3xl my-1">Oops!</h1>
        <p className="text-lg my-1">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
