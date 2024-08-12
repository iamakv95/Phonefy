import React from "react";

const RatingsCard = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  const starPath = "M12 2L14.09 8.26L20.18 9.27L15.64 13.14L16.67 19.2L12 16.34L7.33 19.2L8.36 13.14L3.82 9.27L9.91 8.26L12 2Z";

  return (
    <div className="flex">
      {Array(fullStars).fill().map((_, index) => (
        <svg key={`full-${index}`} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
          <path d={starPath} />
        </svg>
      ))}
      {halfStars === 1 && (
        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
          <defs>
            <clipPath id="halfStar">
              <rect x="0" y="0" width="12" height="24" />
            </clipPath>
          </defs>
          <path d={starPath} clipPath="url(#halfStar)" />
          <path d={starPath} fill="none" stroke="currentColor" />
        </svg>
      )}
      {Array(emptyStars).fill().map((_, index) => (
        <svg key={`empty-${index}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 24 24">
          <path d={starPath} fill="none" stroke="currentColor" />
        </svg>
      ))}
    </div>
  );
};

export default RatingsCard;



