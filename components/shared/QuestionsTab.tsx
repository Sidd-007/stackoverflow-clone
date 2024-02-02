import { getUserQuestions } from '@/lib/actions/user.action';
import { SearchParamsProps } from '@/types'
import React from 'react'
import QuestionCard from '../cards/QuestionCard';
import Pagination from './Pagination';

interface Props extends SearchParamsProps {
    userId: string;
    clerkId?: string | null;
}

const QuestionsTab = async ({ searchParams, userId, clerkId }: Props) => {

    const result = await getUserQuestions({
        userId, page: searchParams.page ? +searchParams.page : 1
    })
    return (
        <>
            {result.questions.length > 0 && result.questions.map((question) => {
                // console.log(question.author[0]._doc)
                return (
                    <QuestionCard
                        key={question._id}
                        _id={question._id}
                        title={question.title}
                        clerkId={clerkId}
                        tags={question.tags}
                        author={question.author[0]._doc}
                        upvotes={question.upvotes}
                        views={question.views}
                        answers={question.answers}
                        createdAt={question.createdAt}
                    />
                )
            })}

            <div className='mt-10'>
                <Pagination
                    pageNumber={searchParams?.page ? +searchParams.page : 1}
                    isNext={result.isNext}
                />
            </div>
        </>
    )
}

export default QuestionsTab