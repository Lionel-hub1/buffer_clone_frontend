import { Link } from "react-router-dom";
import img3 from "../assets/images/article-one.png";
import glass from "../assets/icons/glasses-icon.svg";

function Blog() {
  return (
    <>
      <div className="grid grid-cols-2">
        <img className="p-10" src={img3} alt="" />
        <div className="py-10 pr-10">
          <div className="flex items-center space-x-1">
            <Link
              to="publications/"
              className="text-gray-600 text-lg font-semibold"
            >
              Publications
            </Link>
            <svg
              className="w-5 h-5 text-gray-800"
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
                d="m9 5 7 7-7 7"
              />
            </svg>
            <Link className="font-semibold" to="open/">
              Open
            </Link>
          </div>
          <h1 className="font-black text-5xl">
            Trust, Transparency, and Curiosity:Batsirai Chada on Buffer&apos;s
            Unique Culture
          </h1>
          <p className="text-lg">
            {" "}
            Batsirai Chada is a Growth Product Manager at Buffer, where
            he&apos;s worked for about nine months. We spoke to him when he
            first joined to find out about his journey to Buffer, how he works,
            and what he does outside of work.
          </p>
          <div className="flex items-center text-gray-600 text-sm  space-x-10 my-2">
            <span>Apr 27,2023</span>
            <span>
              <img className="inline-flex" src={glass} alt="" />
              <span>5m read </span>
            </span>
            <span>
              {" "}
              <li>Open</li>
            </span>
          </div>
          <div className="flex">
            <img
              className="w-16 h-16 object-cover rounded-full border-4 border-blue-700 p-1"
              src={img3}
              alt=""
            />
            <div className="ml-4">
              <h3 className="font-bold text-xl">Tamilore Oladipo</h3>
              <p className="text-lg text-gray-700">Content Writter @ Buffer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
