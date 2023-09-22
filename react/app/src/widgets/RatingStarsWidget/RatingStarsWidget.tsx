import {RatingStarsComponent} from "@/shared/ui/ratingStarsComponent/RatingStarsComponent";

export const RatingStarsWidget = () => {
    return (
        <div>
            <RatingStarsComponent starsCount={6} onChange={(rating) => console.log(rating)}/>
        </div>
    )
}