"use client"


import { HomePageFilters } from "@/constants/filter"
import { Button } from "../ui/button"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { formUrlQuery } from "@/lib/utils"


const HomeFilters = () => {

    const searchParams = useSearchParams()
    const router = useRouter()

    const [active, setActive] = useState('')

    const handleTypeClick = (item: string) => {

        if (active === item) {
            setActive('')
            const newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'filter',
                value: null
            })
            router.push(newUrl, { scroll: false })
        } else {
            setActive(item)
            const newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'filter',
                value: item.toLowerCase()
            })
            router.push(newUrl, { scroll: false })
        }
    }

    return (
        <div className="mt-10 hidden flex-wrap gap-3 md:flex">
            {HomePageFilters.map((item) => (
                <Button
                    key={item.value}
                    onClick={() => { }}
                    className={`body-medium rounded-lg border px-6 py-3 capitalize shadow-none dark:border-[#1F2937] ${active === item.value ? 'bg-[#e3d7f7] text-light-500 hover:bg-[#d1bcf2] dark:bg-[#210d43] dark:text-[#8751de]' : 'bg-light-800 text-zinc-600  hover:bg-[#e3d7f7] hover:text-light-500 dark:bg-[#210d438b] dark:text-white hover:dark:bg-[#210d43]'}`}
                    onClickCapture={() => handleTypeClick(item.value)}
                >
                    {item.name}
                </Button>
            ))}
        </div>
    )
}
export default HomeFilters