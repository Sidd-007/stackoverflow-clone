import QuestionCard from '@/components/cards/QuestionCard'
import NoResult from '@/components/shared/NoResult'
import Pagination from '@/components/shared/Pagination'
import LocalSearchBar from '@/components/shared/Search/LocalSearchBar'
import { IQuestion } from '@/database/question.model'
import { getQuestionByTagId } from '@/lib/actions/tag.actions'
import { URLProps } from '@/types'
import { auth } from '@clerk/nextjs'
import React from 'react'

const Page = async ({ params, searchParams }: URLProps) => {
    const { userId: clerkId } = auth();

    const result = await getQuestionByTagId({
        tagId: params.id,
        searchQuery: searchParams.q,
        page: searchParams?.page ? +searchParams.page : 1
    })
    return (
        <>
            <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="h1-bold text-dark100_light900">{result.tagTitle}</h1>
            </div>
            <div className="mt-11 w-full">
                <LocalSearchBar
                    route={`/tags/${params.id}`}
                    iconsPoisition="left"
                    imgSrc="/assets/icons/search.svg"
                    placeholder="Search tag questions"
                    otherClasses="flex-1"
                />
            </div>

            <div className="mt-10 flex w-full flex-col gap-6">
                {result.questions.length > 0 ? result.questions.map((question: IQuestion) => {
                    // console.log(question.author[0]._doc)
                    return (
                        <QuestionCard
                            key={question._id}
                            _id={question._id}
                            clerkId={clerkId}
                            title={question.title}
                            tags={question.tags}
                            author={question.author}
                            upvotes={question.upvotes}
                            views={question.views}
                            answers={question.answers}
                            createdAt={question.createdAt}
                        />
                    )
                })
                    : (
                        <NoResult
                            title="There&apos;s no tag question to show"
                            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. your query could be the next big thing others learn from. Get involved! 💡"
                            link="/ask-question"
                            linkTitle="Ask a Question"
                        />
                    )}
            </div>
            <div className="mt-10">
                <Pagination
                    pageNumber={searchParams?.page ? +searchParams.page : 1}
                    isNext={result.isNext}
                />
            </div>
        </>
    )
}

export default Page