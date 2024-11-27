import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Layers Landing Page",
    description: "Modern Design Tool Landing Page",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} font-sans antialiased bg-zinc-900 text-white pb-[1200px]`}
            >
                {/*TODO: REMOVE PB-[1200px] BEFORE DEPLOYING TO PROD*/}
                {children}
            </body>
        </html>
    );
}
