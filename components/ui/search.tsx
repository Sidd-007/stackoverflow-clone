import React from "react";
import { InputProps } from "./input";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const Search = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm paragraph-regular no-focus placeholder background-light800_darkgradient text-dark400_light700 border-none shadow-none dark:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 w-full",
                    className,
                )}
            >
                <SearchIcon className="h-[16px] w-[16px]" />
                <input
                    {...props}
                    type="search"
                    ref={ref}
                    className="paragraph-regular no-focus placeholder background-light800_darkgradient text-dark400_light700 w-full border-none p-2 shadow-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:outline-none"
                />
            </div>
        );
    },
);

Search.displayName = "Search";

export { Search };