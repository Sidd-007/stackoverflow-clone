import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/context/ThemeProvider'

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-inter'
})
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-spaceGrotesk'
})

export const metadata: Metadata = {
    title: 'DevOverflow',
    description: 'Discover a coding haven at DevOverflow, where developers unite to ask, answer, and explore a vast array of programming challenges. From troubleshooting bugs to sharing expert insights, our vibrant community ensures that no coding query goes unanswered. With a robust tagging system, personalized feeds, and a reputation-based system, DevOverflow provides a dynamic platform for developers of all levels to engage, learn, and grow. Join us in this collaborative space, where coding excellence meets community-driven support. Happy coding!',
    icons: {
        icon: '/assets/images/site-logo.svg '
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
                <ClerkProvider
                    appearance={{
                        elements: {
                            formButtonPrimary: 'primary-gradient',
                            footerActionLink: 'primary-text-gradient hover:text-primary-500'
                        }
                    }}
                >
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </ClerkProvider>
            </body>
        </html>
    )
}
