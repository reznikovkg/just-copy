import {FaStar} from "react-icons/fa";
import {useState} from "react";

export type Props = {
    starsCount?: number,
    onChange: (rating: number) => void
}

export const RatingStarsComponent = ({starsCount = 5, onChange}: Props) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleOnChange = (rating: number) => {
        setRating(rating)
        onChange(rating)
    }

    return (
        <div className={"flex flex-row"}>
            {[...Array(starsCount)].map((star, index) => {
                const currRating = index + 1;
                return (
                    <label key={index}>
                        <input
                            className="hidden"
                            type="radio"
                            name="rating"
                            value={currRating}
                            onClick={() => handleOnChange(currRating)}
                        />
                        <FaStar
                            className={"cursor-pointer"}
                            size={50}
                            color={currRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(currRating)}
                            onMouseLeave={() => setHover(0)}
                        />
                    </label>
                )
            })}
        </div>
    )
}