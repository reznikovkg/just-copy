import {RatingStarsComponent} from "@/shared/ui/ratingStarsComponent/RatingStarsComponent";

export const RatingStarsWidget = () => {
    return (
        <div>
            <RatingStarsComponent onChange={(rating) => console.log(rating)}/>
        </div>
    )
}