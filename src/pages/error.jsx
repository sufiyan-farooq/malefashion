import { NavLink, useRouteError } from "react-router-dom";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page">
     <div className="my-8 mx-auto max-w-screen-lg px-4 md:px-8 mt-16">
  <div className="grid gap-8 sm:grid-cols-2">
    <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">
        404 - Page Not Found
      </h1>
      <p className="text-gray-txt mb-5">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
<NavLink to={'/home'}>
<span
        href="https://spacema-dev.com/elevate-free-tailwind-business-template/"
        className="bg-blue-600 hover:bg-secondary hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full inline-block"
      >
        Go to Homepage
      </span>
</NavLink>
    </div>
  
    <div className="relative mt-9  overflow-hidden   md:h-auto" >
      <img
        src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png"
        alt="Image"
        className="w-full h-80"
      />
    </div>
  </div>
</div>

      </div>
    );
  }