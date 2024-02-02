import QuestionCard from '@/components/cards/QuestionCard'
import Filter from '@/components/shared/Filter'
import NoResult from '@/components/shared/NoResult'
import Pagination from '@/components/shared/Pagination'
import LocalSearchBar from '@/components/shared/Search/LocalSearchBar'
import { QuestionFilters } from '@/constants/filter'
import { getSavedQuestion } from '@/lib/actions/user.action'
import { SearchParamsProps } from '@/types'
import { auth } from '@clerk/nextjs'
import React from 'react'

const collection = async ({ searchParams }: SearchParamsProps) => {

    const { userId } = auth()

    if (!userId) return null
    const result = await getSavedQuestion({
        searchQuery: searchParams.q,
        clerkId: userId,
        filter: searchParams.filter,
        page: searchParams?.page ? +searchParams.page : 1
    })
    return (
        <>
            <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>
            </div>
            <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
                <LocalSearchBar
                    route="/"
                    iconsPoisition="left"
                    imgSrc="/assets/icons/search.svg"
                    placeholder="Search for questions"
                    otherClasses="flex-1"
                />

                <Filter
                    filters={QuestionFilters}
                    otherClasses="min-h-[56px] sm:min-w-[170px]"
                />
            </div>

            <div className="mt-10 flex w-full flex-col gap-6">
                {result.questions.length > 0 ? result.questions.map((question: any) => {
                    // console.log(question.author[0]._doc)
                    return (
                        <QuestionCard
                            key={question._id}
                            _id={question._id}
                            title={question.title}
                            tags={question.tags}
                            author={question.author[0]._doc}
                            upvotes={question.upvotes}
                            views={question.views}
                            answers={question.answers}
                            createdAt={question.createdAt}
                        />
                    )
                })
                    : (
                        <NoResult
                            title="There&apos;s no question saved to show"
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

export default collection