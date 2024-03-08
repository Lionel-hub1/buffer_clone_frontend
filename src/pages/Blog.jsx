import { Link } from "react-router-dom";
import img3 from "../assets/images/article-one.png";
import glass from "../assets/icons/glasses-icon.svg";
import { useState } from "react";

function Blog() {
  const [activeTab, setActiveTab] = useState("Latest Updates");

  const articlesList = [
    {
      id: 1,
      image: img3,
      title: "Article Title",
      date_posted: "Apr 25, 2023",
      post_type: "News",
      comments: 5,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, repudiandae possimus! Quam deserunt perspiciatis sed modi recusandae porro, inventore ducimus maiores natus? Obcaecati amet, fuga ex minus cupiditate facilis aperiam.",
    },
    {
      id: 2,
      image: img3,
      title: "Article Title",
      date_posted: "Apr 25, 2023",
      post_type: "News",
      comments: 0,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, repudiandae possimus! Quam deserunt perspiciatis sed modi recusandae porro, inventore ducimus maiores natus? Obcaecati amet, fuga ex minus cupiditate facilis aperiam.",
    },
    {
      id: 3,
      image: img3,
      title: "Article Title",
      date_posted: "Apr 25, 2023",
      post_type: "Podcasts",
      comments: 3,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, repudiandae possimus! Quam deserunt perspiciatis sed modi recusandae porro, inventore ducimus maiores natus? Obcaecati amet, fuga ex minus cupiditate facilis aperiam.",
    },
    {
      id: 4,
      image: img3,
      title: "Article Title",
      date_posted: "Apr 25, 2023",
      post_type: "News",
      comments: 2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, repudiandae possimus! Quam deserunt perspiciatis sed modi recusandae porro, inventore ducimus maiores natus? Obcaecati amet, fuga ex minus cupiditate facilis aperiam.",
    },
    {
      id: 5,
      image: img3,
      title: "Article Title",
      date_posted: "Apr 25, 2023",
      post_type: "News",
      comments: 1,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, repudiandae possimus! Quam deserunt perspiciatis sed modi recusandae porro, inventore ducimus maiores natus? Obcaecati amet, fuga ex minus cupiditate facilis aperiam.",
    },
    {
      id: 6,
      image: img3,
      title: "Article Title",
      date_posted: "Apr 25, 2023",
      post_type: "News",
      comments: 4,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, repudiandae possimus! Quam deserunt perspiciatis sed modi recusandae porro, inventore ducimus maiores natus? Obcaecati amet, fuga ex minus cupiditate facilis aperiam.",
    },
    {
      id: 7,
      image: img3,
      title: "Article Title",
      date_posted: "Apr 25, 2023",
      post_type: "Podcasts",
      comments: 6,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, repudiandae possimus! Quam deserunt perspiciatis sed modi recusandae porro, inventore ducimus maiores natus? Obcaecati amet, fuga ex minus cupiditate facilis aperiam.",
    },
    {
      id: 8,
      image: img3,
      title: "Article Title",
      date_posted: "Apr 25, 2023",
      post_type: "Small Business",
      comments: 7,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, repudiandae possimus! Quam deserunt perspiciatis sed modi recusandae porro, inventore ducimus maiores natus? Obcaecati amet, fuga ex minus cupiditate facilis aperiam.",
    },
    {
      id: 9,
      image: img3,
      title: "Article Title",
      date_posted: "Apr 25, 2023",
      post_type: "Small Business",
      comments: 8,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, repudiandae possimus! Quam deserunt perspiciatis sed modi recusandae porro, inventore ducimus maiores natus? Obcaecati amet, fuga ex minus cupiditate facilis aperiam.",
    },
    {
      id: 10,
      image: img3,
      title: "Article Title",
      date_posted: "Apr 25, 2023",
      post_type: "Small Business",
      comments: 9,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, repudiandae possimus! Quam deserunt perspiciatis sed modi recusandae porro, inventore ducimus maiores natus? Obcaecati amet, fuga ex minus cupiditate facilis aperiam.",
    },
  ];

  const tabs = [
    {
      name: "Latest Updates",
    },
    {
      name: "Small Business",
    },
    {
      name: "Social Media Marketing",
    },
    {
      name: "News",
    },
    {
      name: "Podcasts",
    },
    {
      name: "Open Blog",
    },
    {
      name: "Case Studies",
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredArticles = articlesList.filter(
    (article) =>
      activeTab === "Latest Updates" || article.post_type === activeTab
  );

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
            <span>Apr 27, 2023</span>
            <span>
              <img className="inline-flex" src={glass} alt="" />
              <span>5 min read </span>
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
      <div className="flex justify-start mx-10 space-x-5 border-b-[2px] border-b-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(tab.name)}
            className={`py-2 ${
              activeTab === tab.name
                ? "text-blue-700 border-b-[2px] -mb-[2px] border-blue-700"
                : "text-gray-600"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-10 p-10">
        {filteredArticles.length !== 0 ? (
          filteredArticles.map((article, index) => (
            <div
              key={index}
              className="group flex flex-col border border-1 p-4 rounded-lg overflow-hidden"
            >
              <img
                className="h-48 w-full object-cover duration-500 group-hover:ease-in-out group-hover:-translate-y-1 group-hover:scale-105"
                src={article.image}
                alt=""
              />
              <div className="flex justify-between">
                <Link className="text-blue-700 text-lg mt-2 group-hover:underline">
                  {article.post_type}
                </Link>
                <p className="text-gray-600 text-sm mt-2">
                  {article.date_posted}
                </p>
              </div>
              <Link className="font-bold text-2xl my-3 group-hover:underline">
                {article.title}
              </Link>
              <p className="text-gray-600 text-lg mt-2 line-clamp-3">
                {article.content}
              </p>
              <Link className="flex mt-3 items-center group-hover:underline">
                <img
                  className="w-10 h-10 object-cover rounded-full border-4 border-blue-700 p-1"
                  src={img3}
                  alt=""
                />
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Tamilore Oladipo</h3>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="text-2xl h-[10rem] text-gray-600 col-span-3 text-center">
            No articles found
          </div>
        )}
      </div>
    </>
  );
}

export default Blog;
