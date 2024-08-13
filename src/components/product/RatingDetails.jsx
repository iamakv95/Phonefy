import React from "react";

const RatingDetails = ({ ratings }) => {
  console.log("ratings", ratings);
  const totalCount = ratings?.statistics?.rating?.count;
  const rating1 = ratings?.statistics?.rating?.distribution?.rating1 || 0;
  const rating2 = ratings?.statistics?.rating?.distribution?.rating2 || 0;
  const rating3 = ratings?.statistics?.rating?.distribution?.rating3 || 0;
  const rating4 = ratings?.statistics?.rating?.distribution?.rating4 || 0;
  const rating5 = ratings?.statistics?.rating?.distribution?.rating5 || 0;

  const progress1 = totalCount > 0 ? (rating1 / totalCount) * 100 : 0;
  const progress2 = totalCount > 0 ? (rating2 / totalCount) * 100 : 0;
  const progress3 = totalCount > 0 ? (rating3 / totalCount) * 100 : 0;
  const progress4 = totalCount > 0 ? (rating4 / totalCount) * 100 : 0;
  const progress5 = totalCount > 0 ? (rating5 / totalCount) * 100 : 0;

  return (
    <div className=" space-y-2">
      <div className="flex items-center">
        <span className="mr-2 text-12px">5 Stars</span>
        <div className="w-[200px] bg-gray bg-opacity-15 rounded-full">
          <div
            className="bg-green-600 h-2 shadow-custom-black rounded-full transition-all duration-300"
            style={{ width: `${progress5}%` }}
          ></div>
        </div>
        <span className="ml-2 text-12px">{rating5}</span>
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-12px">4 Stars</span>
        <div className="w-[200px] bg-gray bg-opacity-15 rounded-full">
          <div
            className="bg-green-600 h-2 shadow-custom-black rounded-full transition-all duration-300"
            style={{ width: `${progress4}%` }}
          ></div>
        </div>
        <span className="ml-2 text-12px">{rating4}</span>
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-12px">3 Stars</span>
        <div className="w-[200px] bg-gray bg-opacity-15 rounded-full">
          <div
            className="bg-green-600 h-2 shadow-custom-black rounded-full transition-all duration-300"
            style={{ width: `${progress3}%` }}
          ></div>
        </div>
        <span className="ml-2 text-12px">{rating3}</span>
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-12px">2 Stars</span>
        <div className="w-[200px] bg-gray bg-opacity-15 rounded-full">
          <div
            className="bg-green-600 h-2 shadow-custom-black rounded-full transition-all duration-300"
            style={{ width: `${progress2}%` }}
          ></div>
        </div>
        <span className="ml-2 text-12px">{rating2}</span>
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-12px">1 Stars</span>
        <div className="w-[200px] bg-gray bg-opacity-15 rounded-full">
          <div
            className="bg-green-600 h-2 shadow-custom-black rounded-full transition-all duration-300"
            style={{ width: `${progress1}%` }}
          ></div>
        </div>
        <span className="ml-2 text-12px">{rating1}</span>
      </div>
    </div>
  );
};

export default RatingDetails;
