import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const RatingItems = ({ name, rate, review, Icons }) => {
  return (
    <>
      <li className="flex-col p-10">
        <div className="flex-col p-5 m-5 justify-center">
          <div className="flex items-center gap-5 pb-5 text-xl font-semibold">
            <p>{name}</p>
            <p>{Icons}</p>
          </div>
          {/* <p>{rate}</p> ratingData */}
          <div className="flex justify-between">
            <Stack spacing={1} className="pr-5">
              <Rating
                name="half-rating-read"
                defaultValue={rate}
                precision={0.5}
                readOnly
              />
            </Stack>
            <p className="text-xl">{review}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default RatingItems;
