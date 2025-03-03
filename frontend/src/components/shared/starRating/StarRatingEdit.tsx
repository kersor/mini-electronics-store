import { useState } from "react"
import { AiFillStar } from "react-icons/ai"
import { Rating } from "react-simple-star-rating"

interface Props {
    className?: string
}

export const StarRatingEdit = ({
    className
}: Props) => {
    const [rating, setRating] = useState(0)

    const handleRating = (rate: number) => setRating(rate)

    return (
        <Rating
            
            fillIcon={<AiFillStar size={20} color="#0aab07" />}
            emptyIcon={<AiFillStar size={20} color="#e1e1e1" />}

            SVGstyle={{display: "inline"}}

            onClick={handleRating}
            transition
            allowFraction

        />
    )
}