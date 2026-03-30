import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  reviews?: number;
}

const StarRating = ({ rating, reviews }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= Math.round(rating)
                ? "fill-star text-star"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
      {reviews !== undefined && (
        <span className="text-sm text-muted-foreground">({reviews})</span>
      )}
    </div>
  );
};

export default StarRating;
