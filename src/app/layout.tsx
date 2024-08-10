import React from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    description: 'Web site created with Next.js.',
    title: 'React App'
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className='w-full h-full'>
                <div id="root">
                    {children}
                </div>
            </body>
        </html>
    )
}