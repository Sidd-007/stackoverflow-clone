/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import { SignedIn, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import Theme from "./Theme"
import MobileNav from "./MobileNav"
import GlobalSearch from "../Search/GlobalSearch"


const Navbar = () => {
    return (
        <nav className="flex-between border-b border-zinc-200 dark:border-zinc-800 background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
            <Link href='/' className="flex items-center gap-1">
                <Image
                    src="/assets/images/site-logo.svg"
                    width={28}
                    height={28}
                    alt="DevOverflow"
                />

                <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden ml-1">Overflow</p>
            </Link>

            <GlobalSearch />

            <div className="flex-between gap-5">
                <Theme />

                <SignedIn>
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                avatarBox: 'h-10 w-10'
                            },
                            variables: {
                                colorPrimary:'#ff7000'
                            }
                        }}
                    />
                </SignedIn>

                <MobileNav />
            </div>


        </nav>
    )
}
export default Navbar