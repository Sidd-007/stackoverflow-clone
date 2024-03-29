import { getUserAnswers } from '@/lib/actions/user.action';
import { SearchParamsProps } from '@/types';
import React from 'react'
import AnswerCard from '../cards/AnswerCard';
import Pagination from './Pagination';

interface Props extends SearchParamsProps {
    userId: string;
    clerkId?: string | null;
}

const AnswersTab = async ({ searchParams, userId, clerkId }: Props) => {
    const result = await getUserAnswers({
        userId, page: searchParams.page ? +searchParams.page : 1
    })

    // console.log(result.answers)



    return (
        <>
            {result.answers.map((item) => {
                // console.log(item.question)
                return (

                    <AnswerCard
                        key={item._id}
                        _id={item._id}
                        question={item.question}
                        author={item.author}
                        clerkId={clerkId}
                        upvotes={item.upvotes.length}
                        createdAt={item.date}
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

export default AnswersTab