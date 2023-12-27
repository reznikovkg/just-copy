import {FaStar} from "react-icons/fa";
import {useState} from "react";
import "./RatingStars.scss"

export type Props = {
    starsCount?: number,
    onChange?: (rating: number) => void
}

export const RatingStars = ({starsCount = 5, onChange = () => {}}: Props) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleOnChange = (rating: number) => {
        setRating(rating)
        onChange(rating)
    }

    return (
        <div className={"rating-stars"}>
            {[...Array(starsCount)].map((star, index) => {
                const currRating = index + 1;
                return (
                    <label key={index}>
                        <input
                            className="rating-stars__input"
                            type="radio"
                            name="rating"
                            value={currRating}
                            onClick={() => handleOnChange(currRating)}
                        />
                        <FaStar
                            className={"rating-stars__icon"}
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