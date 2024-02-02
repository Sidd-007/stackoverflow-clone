import Image from "next/image"
import Link from "next/link"
import RenderTag from "./RenderTag"
import { getHotQuestions } from "@/lib/actions/question.action"
import { getTopPouplarTags } from "@/lib/actions/tag.actions"

const RightSidebar = async () => {

    // const hotQuestions = [
    //     { _id: "1", title: 'Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?' },
    //     { _id: "2", title: 'Is it only me or the font is bolder than necessary?' },
    //     { _id: "3", title: 'Can I get the course for free?' },
    //     { _id: "4", title: 'Redux Toolkit Not Updating State as Expected' },
    //     { _id: "5", title: 'Async/Await Function Not Handling Errors Properly' },
    // ]
    
    const hotQuestions =await getHotQuestions()

    const popularTags = await getTopPouplarTags()
    
    // console.log(hotQuestions)

    return (
        <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l border-zinc-200 p-6 pt-36 shadow-light-300 dark:border-zinc-800 dark:shadow-none max-xl:hidden ">
            <div>
                <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
                <div className="mt-7 flex w-full flex-col gap-[30px]">
                    {hotQuestions.map((question) => (
                        <Link
                            href={`/question/${question._id}`}
                            key={question._id}
                            className="flex cursor-pointer items-center justify-between gap-7"
                        >
                            <p className="body-medium text-dark500_light700">{question.title}</p>
                            <Image
                                src="/assets/icons/chevron-right.svg"
                                alt="chevron right"
                                width={20}
                                height={20}
                                className="invert-colors"
                            />
                        </Link>
                    ))}
                </div>
            </div>

            <div className="mt-16">
                <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
                <div className="mt-7 flex flex-col gap-4">
                    {popularTags.map((tag) => (
                        <RenderTag
                            key={tag._id}
                            _id={tag._id}
                            name={tag.name}
                            totalQuestions={tag.numberOfQuestions}
                            showCount
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default RightSidebar