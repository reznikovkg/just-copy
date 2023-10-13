import {RatingStars} from "@/shared/ui/RatingStars/RatingStars";

export const RatingStarsWidget = () => {
    return (
        <div>
            <RatingStars starsCount={6} onChange={(rating) => console.log(rating)}/>
        </div>
    )
}