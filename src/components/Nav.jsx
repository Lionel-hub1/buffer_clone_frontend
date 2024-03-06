import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [showBarItems, setShowBarItems] = useState(false);
  const navItems = [
    {
      name: "Tools",
      dropdownItems: [
        { name: "Publish" },
        { name: "Analyze" },
        { name: "Engage" },
        { name: "Reply" },
        { name: "Amplify" },
      ],
    },
    {
      name: "Channels",
      dropdownItems: [
        { name: "Facebook" },
        { name: "Instagram" },
        { name: "Twitter" },
      ],
    },
    { name: "Pricing" },
    { name: "Blog" },
  ];
  useEffect(() => {
    const handleResize = () => {
      setShowBarItems(false);
    };

    window.addEventListener("resize", handleResize);
    console.log("added event listener");

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="text-gray-600 body-font text-xl">
      <div className="container mx-auto flex flex-row justify-between p-5 md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900"
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

        <Link
          onClick={() => {
            setShowBarItems(!showBarItems);
          }}
          className="lg:hidden ml-auto flex items-center text-gray-900"
        >
          {showBarItems ? (
            <svg
              className="w-8 h-8 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 18 6m0 12L6 6"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          )}
        </Link>
        {showBarItems && (
          <div className="lg:hidden  absolute top-0 left-0 w-[10rem] h-full bg-gray-100 bg-opacity-95 z-50">
            <div className="flex flex-col items-center justify-center">
              {navItems.map((item, index) => (
                <div key={index} className="relative group inline-block">
                  <Link
                    to={item.dropdownItems ? null : item.name.toLowerCase()}
                    className="mr-5 hover:text-gray-900 flex flex-col items-center"
                  >
                    <span className="text-gray-950 hover:text-blue-700 flex flex-row items-center">
                      <span>{item.name}</span>
                      {item.dropdownItems && (
                        <svg
                          className="w-6 h-6  ml-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 9-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="h-[1px] w-3 group-hover:bg-blue-700 mt-2 group-hover:ease-in-out group-hover:-translate-y-1 group-hover:scale-150 duration-300"></span>
                  </Link>
                  {item.dropdownItems && (
                    <div className="absolute bg-white w-[10rem] -right-[10rem] top-0 group hidden rounded-md drop-shadow-2xl shadow-inner text-gray-900 group-hover:block">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          to={`${dropdownItem.name.toLowerCase()}/`}
                          className="block px-4 py-2 text-gray-900"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <nav className="md:ml-auto hidden md:mr-auto lg:flex md:flex-wrap items-center text-xl justify-center">
          {navItems.map((item, index) => (
            <div key={index} className="relative group inline-block">
              <Link
                to={item.dropdownItems ? null : item.name.toLowerCase()}
                className="mr-5 hover:text-gray-900 flex flex-col items-center"
              >
                <span className="text-gray-950 hover:text-blue-700 flex flex-row items-center">
                  <span>{item.name}</span>
                  {item.dropdownItems && (
                    <svg
                      className="w-6 h-6  ml-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
                <span className="h-[1px] w-3 group-hover:bg-blue-700 transition mt-2 group-hover:ease-in-out group-hover:-translate-y-1 group-hover:scale-150 duration-300"></span>
              </Link>
              {item.dropdownItems && (
                <div className="absolute bg-white group hidden rounded-md drop-shadow-2xl shadow-inner text-gray-900 group-hover:block">
                  {item.dropdownItems.map((dropdownItem, index) => (
                    <Link
                      key={index}
                      to={`${dropdownItem.name.toLowerCase()}/`}
                      className="block px-4 py-2 text-gray-900"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden lg:inline-flex items-center">
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
