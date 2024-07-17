export const calculateAverageRating = (ratings) => {
    const total = ratings.reduce(
        (acc, rating) => acc + parseFloat(rating.rate),
        0
    );
    return (total / ratings.length).toFixed(1);
};

// Calculate percentage rating
// const calculateRatingPercentage = (averageRating, maxRating = 5) => {
//   return ((averageRating / maxRating) * 100).toFixed(1);
// };