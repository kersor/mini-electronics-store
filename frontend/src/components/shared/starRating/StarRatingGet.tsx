import { AiFillStar } from "react-icons/ai"

interface Props {
    className?: string
    count: number
}

export const StarRatingGet = ({
    className,
    count 
}: Props) => {

    if (count > 5) count = 5
    else if (count < 0) count = 0

    return (
        <div className="flex items-center">
            {[...Array(count)].map((_, idx: number) => <AiFillStar key={idx} color="#0aab07" />)}
            {[...Array(5 - count)].map((_, idx: number) => <AiFillStar key={idx} color="#e1e1e1" />)}
        </div>
    )
}