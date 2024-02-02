import Link from "next/link";
import { Badge } from "../ui/badge";


interface Props {
    _id: string;
    name: string;
    totalQuestions?: number;
    showCount?: boolean
}


const RenderTag = ({ _id, name, totalQuestions, showCount }: Props) => {
    return (
        <Link
            href={`/tags/${_id}`}
            className="flex justify-between gap-2"
        >
            <Badge className="subtle-medium rounded-md  border-none bg-primary-400 px-4 py-2 text-lg uppercase text-white">
                <span>
                    {name}
                </span>
            </Badge>

            {showCount && (
                <p className="small-medium text-dark500_light700">{totalQuestions}</p>
            )}
        </Link>
    )
}
export default RenderTag