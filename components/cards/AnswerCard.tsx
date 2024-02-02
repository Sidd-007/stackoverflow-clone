

import Link from "next/link";
import Metric from "../shared/Metric";
import { formatAndDivideNumber, getTimestamp } from "@/lib/utils";
import { SignedIn } from "@clerk/nextjs";
import EditDeleteAction from "../shared/EditDeleteAction";

interface QuestionProps {
    _id: string;
    question: {
        _id: string;
        title: string;
    },
    author: {
        _id: string;
        name: string;
        picture: string;
        clerkId: string;
    },
    upvotes: number;
    createdAt: Date;
    clerkId?: string | null;
}

const AnswerCard = ({
    _id,
    question,
    clerkId,
    author,
    upvotes,
    createdAt
}: QuestionProps) => {

    // console.log(createdAt)
    const showActionButton = clerkId && clerkId === author.clerkId
    return (
        <Link href={`/question/${question?._id}/#${_id}`} className="card-wrapper rounded-[10px] px-11 py-9">
            <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
                <div>
                    <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
                        {getTimestamp(createdAt)}
                    </span>

                    <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
                        {question.title}
                    </h3>
                </div>
                <SignedIn>
                    {showActionButton && (
                        <EditDeleteAction
                            type="Question"
                            itemId={JSON.stringify(_id)}
                        />
                    )}
                </SignedIn>
            </div>


            <div className="flex-between mt-6 w-full flex-wrap gap-3">
                <Metric
                    imgUrl={author.picture}
                    alt="user"
                    value={author.name}
                    title={` - asked ${getTimestamp(createdAt)}`}
                    href={`/profile/${author._id}`}
                    isAuthor
                    textStyles="body-medium text-dark400_light700"
                // isAuthor
                />
                <Metric
                    imgUrl="/assets/icons/like.svg"
                    alt="Upvotes"
                    value={formatAndDivideNumber(upvotes)}
                    title="Votes"
                    textStyles="small-medium text-dark400_light800"
                />
            </div>

        </Link>
    )
}
export default AnswerCard