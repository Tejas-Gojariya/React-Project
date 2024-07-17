import React from "react";
import { ratings } from "./ratingsData";
import { calculateAverageRating } from "./utils";
import RatingItems from "./RatingItems";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const RatingComponent = () => {
  const averageRating = calculateAverageRating(ratings);
  // const ratingPercentage = calculateRatingPercentage(averageRating); // Percentage

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <h1 className="font-semibold pb-5">Social Media Rating</h1>
        <h4 className="font-semibold text-2xl p-10F">
          Average Social Media Ratings : <strong>{averageRating}</strong>
        </h4>
        <Stack spacing={1}>
          <Rating
            name="half-rating"
            defaultValue={averageRating}
            precision={0.5}
            readOnly
          />
        </Stack>
      </div>
      <div className="text-xl p-10">Review and Rating List</div>
      <ul className="flex justify-center items-center p-5">
        {ratings.map((rating, index) => (
          <RatingItems
            key={index}
            Icons={rating.Icons}
            name={rating.name}
            rate={rating.rate}
            review={rating.review}
          />
        ))}
      </ul>
    </div>
  );
};

export default RatingComponent;
