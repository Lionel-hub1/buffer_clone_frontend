import { Link } from "react-router-dom";

function DropDownItem(index, dropdownItem) {
  return (
    <Link
      key={index}
      to={`${dropdownItem.path}/`}
      //   className="block px-4 py-2 text-gray-900 hover:bg-gray-100 m-2 rounded-md transition ease-in-out duration-300 hover:ease-in-out hover:-translate-y-1 hover:scale-150"
      className="block p-2 text-gray-900 hover:bg-gray-100 m-2 rounded-md transition ease-in-out duration-300"
    >
      <div className={`flex ${dropdownItem.desc ? "items-start" : "items-end justify-center" }`}>
        <img
          className={dropdownItem.desc ? "w-8 h-8" : "w-7 h-7"}
          src={dropdownItem.icon}
          alt=""
        />
        <div className="mt-3">
          <p className="text-base font-black">{dropdownItem.name}</p>
          <p className="text-base text-gray-600">
            {dropdownItem.desc ? dropdownItem.desc : null}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default DropDownItem;
