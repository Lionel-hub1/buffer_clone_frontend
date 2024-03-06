import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="text-gray-600 body-font text-xl">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            fill="#000"
            className="w-8 h-8"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>ionicons-v5_logos</title>
            <path d="M39.93,149.25l197.4,95.32c5.14,2.45,12,3.73,18.79,3.73s13.65-1.28,18.78-3.73l197.4-95.32c10.38-5,10.38-13.18,0-18.2L274.9,35.73c-5.13-2.45-12-3.73-18.78-3.73s-13.65,1.28-18.79,3.73L39.93,131.05C29.55,136.07,29.55,144.23,39.93,149.25Z" />
            <path d="M472.3,246.9s-36.05-17.38-40.83-19.72-6.07-2.21-11.09.12-145.6,70.23-145.6,70.23A45.71,45.71,0,0,1,256,301.27c-6.77,0-13.65-1.29-18.78-3.74,0,0-136.85-66-143.27-69.18C87,225,85,225,78.67,228l-39,18.78c-10.38,5-10.38,13.19,0,18.2L237.1,360.3c5.13,2.45,12,3.73,18.78,3.73s13.65-1.28,18.79-3.73L472.07,265C482.68,260.08,482.68,251.92,472.3,246.9Z" />
            <path d="M472.3,362.75S436.25,345.37,431.47,343s-6.07-2.21-11.09.12S274.9,413.5,274.9,413.5a45.74,45.74,0,0,1-18.78,3.73c-6.77,0-13.65-1.28-18.79-3.73,0,0-136.85-66-143.26-69.18-7-3.39-9-3.39-15.29-.35l-39,18.78c-10.39,5-10.39,13.18,0,18.2l197.4,95.32c5.13,2.56,12,3.73,18.78,3.73s13.65-1.28,18.78-3.73L472.18,381C482.68,375.93,482.68,367.77,472.3,362.75Z" />
          </svg>
          <span className="ml-3 text-3xl font-extrabold">Buffer</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center">
          <Link className="mr-5 hover:text-gray-900 flex flex-col items-center">
            <span className="hover:text-blue-700 flex flex-row items-center">
              <span>Tools</span>
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect width="24" height="24" fill="white"></rect>{" "}
                  <path
                    d="M17 9.5L12 14.5L7 9.5"
                    // stroke="#000000"
                    stroke="#267DDB"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </span>
            <span className="h-1 w-6 bg-blue-700 mt-2"></span>
          </Link>
          <Link className="mr-5 hover:text-gray-900">Channels</Link>
          <Link className="mr-5 hover:text-gray-900">Pricing</Link>
          <Link className="mr-5 hover:text-gray-900">Blog</Link>
        </nav>
        <div className="inline-flex items-center">
          <button className="inline-flex items-center  px-3 focus:outline-none  text-lg mt-4 md:mt-0">
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g clipPath="url(#clip0_15_152)">
                  {" "}
                  <rect width="24" height="24"></rect>{" "}
                  <circle
                    cx="10.5"
                    cy="10.5"
                    r="6.5"
                    stroke="#000000"
                    strokeLinejoin="round"
                  ></circle>{" "}
                  <path
                    d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                    fill="#000000"
                  ></path>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_15_152">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </g>
            </svg>
            <span className="mx-4 text-blue-700">Login</span>
          </button>
          <button className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-800 text-white">
            Get started now
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
