import DropDownItem from "./DropDownItem";
import { Link } from "react-router-dom";

export default function NavLink(index, item) {
  return (
    <div key={index} className="relative group inline-block">
      <Link
        to={item.dropdownItems ? null : item.path}
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
        <div className="absolute min-w-96 bg-white group hidden rounded-md drop-shadow-2xl shadow-inner text-gray-900 group-hover:block">
          {item.dropdownItems.map((dropdownItem, index) =>
            DropDownItem(index, dropdownItem)
          )}
        </div>
      )}
    </div>
  );
}



