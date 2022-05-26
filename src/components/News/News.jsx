import React from "react";
import "./News.css";
import "bootstrap/dist/css/bootstrap.min.css";

function News({ title, description, url, urlToImage, content }) {
  // Display the title and description of the news
  return (
    <div className="a p-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-5">
      <div className="max-w-sm rounded overflow-hidden shadow-lg test">
        <img className="w-full" src={urlToImage} alt="Imagine Loding..."></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <a
          href={url}
          className="btn btn-primary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          {" "}
          Read More
        </a>
      </div>
    </div>
  );
}

export default News;
